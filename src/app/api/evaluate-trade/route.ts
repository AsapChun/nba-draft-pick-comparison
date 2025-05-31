import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { TradeEvaluationRequest, AITradeEvaluation, OwnedDraftPick, AITradeEvaluationSchema, TradeAsset } from '@/lib/types';
import { getTeamOwnedPicks, analyzeTeamDraftCapital } from '@/lib/draft-picks';
import { NBA_TEAMS } from '@/lib/nba-teams';
import { zodTextFormat } from 'openai/helpers/zod.mjs';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function formatPicksForAI(assets: any[], teamId: string): string {
  return assets.map(asset => {
    const pick: OwnedDraftPick = asset.pick;
    
    // Build a comprehensive description using OwnedDraftPick's rich data
    let description = `${pick.year} ${pick.round === 1 ? 'First' : 'Second'} Round Pick`;
    
    // Add original team info if different
    if (pick.originalOwner !== teamId) {
      description += ` (originally ${pick.originalOwner}`;
      if (pick.acquiredFrom && pick.acquiredFrom !== pick.originalOwner) {
        description += ` via ${pick.acquiredFrom}`;
      }
      description += ')';
    }
    
    // Add protection information
    if (pick.protections && pick.protections.length > 0) {
      const protectionText = pick.protections.map(p => {
        if (p.type === 'top') {
          return `Top ${p.value}`;
        } else if (p.type === 'range') {
          return Array.isArray(p.value) ? `${p.value.join('-')}` : `${p.value}`;
        } else {
          return 'Lottery';
        }
      }).join(', ');
      description += ` (${protectionText} protected)`;
    }
    
    // Add type information for special picks
    if (pick.type === 'swap') {
      description += ' [SWAP]';
      if (pick.swapConditions) {
        description += ` - ${pick.swapConditions.description}`;
      }
    } else if (pick.type === 'conditional') {
      description += ' [CONDITIONAL]';
      if (pick.conditionalRules) {
        description += ` - ${pick.conditionalRules.condition}`;
      }
    }
    
    // Add the main description if it provides additional context
    if (pick.description && !description.includes(pick.description)) {
      description += ` - ${pick.description}`;
    }
    
    return description;
  }).join(', ');
}

function getTeamContext(teamId: string): string {
  const team = NBA_TEAMS.find(t => t.id === teamId);
  const analysis = analyzeTeamDraftCapital(teamId);
  const allPicks = getTeamOwnedPicks(teamId);
  
  return `${team?.city} ${team?.name} currently has:
- Total draft capital: ${analysis.totalFirstRoundPicks} first round picks, ${analysis.totalSecondRoundPicks} second round picks
- Own original picks: ${analysis.ownOriginalPicks}
- Acquired picks: ${analysis.acquiredPicks}
- Swap rights: ${analysis.swapPicks}
- Conditional picks: ${analysis.conditionalPicks}
- Recent picks by year: ${Object.entries(analysis.yearlyBreakdown).map(([year, data]) => `${year}: ${data.first}F/${data.second}S`).join(', ')}`;
}

function analyzePickRanges(teamAAssets: TradeAsset[], teamBAssets: TradeAsset[]): {
  allPicks: { year: number, round: number, description: string }[],
  pickRangesByYear: { [year: number]: { firstRoundRanges: string[], secondRoundRanges: string[] } }
} {
  const allPicks = [
    ...teamAAssets.map(asset => ({
      year: asset.pick.year,
      round: asset.pick.round,
      description: asset.pick.description
    })),
    ...teamBAssets.map(asset => ({
      year: asset.pick.year,
      round: asset.pick.round, 
      description: asset.pick.description
    }))
  ];

  const pickRangesByYear: { [year: number]: { firstRoundRanges: string[], secondRoundRanges: string[] } } = {};
  
  allPicks.forEach(pick => {
    if (!pickRangesByYear[pick.year]) {
      pickRangesByYear[pick.year] = { firstRoundRanges: [], secondRoundRanges: [] };
    }
    
    // Extract pick numbers from description (like "SAC #45", "LAL #55", etc.)
    const pickNumberMatch = pick.description.match(/#(\d+)/);
    const pickNumber = pickNumberMatch ? parseInt(pickNumberMatch[1]) : null;
    
    if (pick.round === 1) {
      if (pickNumber) {
        pickRangesByYear[pick.year].firstRoundRanges.push(`Pick #${pickNumber}`);
      } else {
        pickRangesByYear[pick.year].firstRoundRanges.push('First round pick (exact position unknown)');
      }
    } else {
      if (pickNumber) {
        pickRangesByYear[pick.year].secondRoundRanges.push(`Pick #${pickNumber}`);
      } else {
        pickRangesByYear[pick.year].secondRoundRanges.push('Second round pick (exact position unknown)');
      }
    }
  });

  return { allPicks, pickRangesByYear };
}

export async function POST(request: NextRequest) {
  try {
    const body: TradeEvaluationRequest = await request.json();
    const { teamAAssets, teamBAssets, teamAId, teamBId, currentYear = 2025 } = body;

    const teamAName = NBA_TEAMS.find(t => t.id === teamAId)?.city + ' ' + NBA_TEAMS.find(t => t.id === teamAId)?.name;
    const teamBName = NBA_TEAMS.find(t => t.id === teamBId)?.city + ' ' + NBA_TEAMS.find(t => t.id === teamBId)?.name;
    
    const teamAContext = getTeamContext(teamAId);
    const teamBContext = getTeamContext(teamBId);
    
    const teamAPicksText = formatPicksForAI(teamAAssets, teamAId);
    const teamBPicksText = formatPicksForAI(teamBAssets, teamBId);

    // Analyze pick ranges to provide better prospect analysis
    const { pickRangesByYear } = analyzePickRanges(teamAAssets, teamBAssets);
    
    // Get unique draft years from the trade
    const allYears = [
      ...teamAAssets.map(asset => asset.pick.year),
      ...teamBAssets.map(asset => asset.pick.year)
    ];
    const uniqueYears = [...new Set(allYears)].sort();

    // Create prospect analysis instructions based on actual pick ranges
    const prospectInstructions = uniqueYears.map(year => {
      const ranges = pickRangesByYear[year];
      const firstRoundPicks = ranges.firstRoundRanges.join(', ');
      const secondRoundPicks = ranges.secondRoundRanges.join(', ');
      
      let instruction = `For ${year}:`;
      if (firstRoundPicks) {
        instruction += ` Focus on prospects available around ${firstRoundPicks} (first round).`;
      }
      if (secondRoundPicks) {
        instruction += ` Focus on prospects available around ${secondRoundPicks} (second round).`;
      }
      
      return instruction;
    }).join(' ');

    const prompt = `
You are an expert NBA draft analyst evaluating a trade between ${teamAName} and ${teamBName}.

TRADE STRUCTURE:
${teamAName} TRADES AWAY: ${teamAPicksText}
${teamAName} RECEIVES: ${teamBPicksText}

${teamBName} TRADES AWAY: ${teamBPicksText}  
${teamBName} RECEIVES: ${teamAPicksText}

TEAM CONTEXTS:
${teamAName}: ${teamAContext}
${teamBName}: ${teamBContext}

DRAFT YEARS INVOLVED: ${uniqueYears.join(', ')}

IMPORTANT: Remember when evaluating value:
- ${teamAName} is GETTING: ${teamBPicksText}
- ${teamBName} is GETTING: ${teamAPicksText}

Please research and provide information about the available prospects for each draft year involved in this trade. Then provide a comprehensive trade evaluation covering:

1. PROSPECTS ANALYSIS: For each draft year in the trade, research and provide prospects relevant to the SPECIFIC PICK RANGES being traded:
   ${prospectInstructions}
   - DO NOT include top lottery prospects if only second round picks are being traded
   - DO NOT include late second round prospects if only first round picks are being traded
   - Focus on prospects projected to be available around the actual pick numbers/ranges involved
   - Key strengths and concerns for each relevant prospect
   - How the available talent impacts the value of the specific picks being traded
   - Overall summary of the draft class strength in the relevant ranges

2. OVERALL VERDICT: Which team is favored and why?
   - Use "${teamAName}" if ${teamAName} gets better value from what they RECEIVE
   - Use "${teamBName}" if ${teamBName} gets better value from what they RECEIVE
   - Use "balanced" if the trade is fair

3. IMBALANCE SCORE: Rate the trade imbalance from 0-100 (0 = perfectly balanced, 100 = extremely one-sided)

4. DETAILED ANALYSIS:
   - ${teamAName} perspective: What they RECEIVE vs what they GIVE UP, fit with their draft capital strategy
   - ${teamBName} perspective: What they RECEIVE vs what they GIVE UP, fit with their draft capital strategy  
   - Value comparison: Compare what each team gets considering pick positions, years, protections, and available prospects
   - Risk assessment: What could go wrong for each team based on what they're receiving
   - Team situation impact: How what each team receives affects their current draft capital

5. IMPROVEMENTS FOR BALANCE:
   - Specific suggestions to make the trade more balanced
   - Alternative trade structures that could work better

6. CONFIDENCE LEVEL: How confident are you in this evaluation (0-100)?

7. SUMMARY: 2-3 sentence executive summary including prospect impact and which team gets better value

When analyzing value, focus on what each team RECEIVES, not what they give up:
- ${teamAName} receives: ${teamBPicksText}
- ${teamBName} receives: ${teamAPicksText}

Consider factors like:
- Pick value based on expected draft position and available prospects of what each team RECEIVES
- Temporal value (near vs far future picks) of what each team RECEIVES
- Protection impacts and conditional aspects of what each team RECEIVES
- Quality of available prospects in each draft class for the picks being received
- Each team's current draft capital needs and how what they receive helps
- Risk vs reward for each side considering what they're getting
- Market value of the different pick types being received

Respond in valid JSON format matching this structure:
{
  "favoredTeam": "${teamAName}" | "${teamBName}" | "balanced",
  "imbalanceScore": number,
  "overallVerdict": "string",
  "detailedAnalysis": {
    "teamAAnalysis": "string describing what ${teamAName} receives and gives up",
    "teamBAnalysis": "string describing what ${teamBName} receives and gives up", 
    "valueComparison": "string comparing the value of what each team receives",
    "riskAssessment": "string about risks based on what each team receives",
    "teamSituationImpact": "string about how what each team receives affects their situation"
  },
  "improvements": {
    "forBalance": ["string"],
    "alternativeStructures": ["string"]
  },
  "prospectsAnalysis": [
    {
      "draftYear": number,
      "availableProspects": [
        {
          "name": "string",
          "position": "string",
          "school": "string",
          "projectedRange": "string",
          "strengths": ["string"],
          "concerns": ["string"],
          "summary": "string"
        }
      ],
      "summary": "string",
      "impactOnTrade": "string"
    }
  ],
  "confidenceLevel": number,
  "summary": "string"
}`;

    const completion = await openai.responses.create({
      model: "gpt-4.1-2025-04-14",
      input: [
        {
          role: "system",
          content: "You are an expert NBA draft analyst with deep knowledge of draft pick values, team building strategies, and prospect evaluation. You have access to current prospect information and draft rankings. Always respond with valid JSON."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      tools: [{
        type: "web_search_preview",
        search_context_size: "medium",
      }],
      tool_choice: "required",
      text: {
        format: zodTextFormat(AITradeEvaluationSchema, "AITradeEvaluation"),
      }
    });

    const responseText = completion.output_text;
    
    if (!responseText) {
      throw new Error('No response from OpenAI');
    }

    // If it's a string, parse it first
    if (typeof responseText === 'string') {
      const evaluation: AITradeEvaluation = JSON.parse(responseText);
      
      // Add debugging logs to help identify the issue
      console.log('Team A:', teamAName);
      console.log('Team B:', teamBName);
      console.log('AI Response favoredTeam:', evaluation.favoredTeam);
      console.log('Overall Verdict:', evaluation.overallVerdict);
      
      return NextResponse.json(evaluation);
    } else {
      return NextResponse.json(responseText);
    }

  } catch (error) {
    console.error('Trade evaluation error:', error);
    return NextResponse.json(
      { error: 'Failed to evaluate trade' },
      { status: 500 }
    );
  }
} 