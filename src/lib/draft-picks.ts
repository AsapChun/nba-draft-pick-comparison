import { OwnedDraftPick, TeamDraftAssets } from './types';

// Atlanta Hawks draft picks
const atlantaHawksOwnedPicks: OwnedDraftPick[] = [
    // 2025 - What they own
    {
        id: 'ATL_2025_R1_SAC',
        year: 2025,
        round: 1,
        type: 'acquired',
        originalOwner: 'SAC',
        description: 'SAC #13'
    },
    {
        id: 'ATL_2025_R1_LAL',
        year: 2025,
        round: 1,
        type: 'acquired',
        originalOwner: 'LAL',
        acquiredFrom: 'NOP',
        description: 'LAL #22 (via NOP)'
    },
    
    // 2026 - Complex swap they're involved in
    {
        id: 'ATL_2026_R1_SWAP',
        year: 2026,
        round: 1,
        type: 'swap',
        originalOwner: 'ATL',
        swapConditions: {
            description: 'Complex multi-team swap involving ATL, SAN, CLE, UTH, MIN',
            involvedTeams: ['ATL', 'SAN', 'CLE', 'UTH', 'MIN'],
            outcome: 'conditional'
        },
        description: 'More favorable of (i) less favorable of ATL and SAN and (ii) less favorable of (a) CLE and (b) more favorable of UTH 1-8 and MIN [or (ii) CLE if UTH not conveyable] then other to CLE; more favorable of ATL and SAN to SAN'
    },
    
    // 2027 - Conditional pick and acquired pick
    {
        id: 'ATL_2027_R1_MILNOP',
        year: 2027,
        round: 1,
        type: 'conditional',
        originalOwner: 'MIL',
        acquiredFrom: 'NOP',
        conditionalRules: {
            condition: 'Less favorable of MIL and NOP',
            requirement: 'if either or both 5-30'
        },
        description: 'Less favorable of MIL and NOP if either or both 5-30 (via NOP)'
    },
    {
        id: 'ATL_2027_R2_CLE',
        year: 2027,
        round: 2,
        type: 'acquired',
        originalOwner: 'CLE',
        description: 'CLE'
    },
    
    // 2028 - Complex swap
    {
        id: 'ATL_2028_R1_SWAP',
        year: 2028,
        round: 1,
        type: 'swap',
        originalOwner: 'ATL',
        swapConditions: {
            description: 'Swap involving ATL, UTH, and CLE',
            involvedTeams: ['ATL', 'UTH', 'CLE'],
            outcome: 'more_favorable'
        },
        description: 'More favorable of (i) ATL and (ii) less favorable of UTH and CLE then other to CLE (via UTH swap for CLE; via ATL swap for CLE or UTH)'
    },
    
    // 2029 - Own pick and acquired pick
    {
        id: 'ATL_2029_R1_OWN',
        year: 2029,
        round: 1,
        type: 'own',
        originalOwner: 'ATL',
        description: 'Own'
    },
    {
        id: 'ATL_2029_R2_CLE',
        year: 2029,
        round: 2,
        type: 'acquired',
        originalOwner: 'CLE',
        description: 'CLE'
    },
    
    // 2030 - Own picks
    {
        id: 'ATL_2030_R1_OWN',
        year: 2030,
        round: 1,
        type: 'own',
        originalOwner: 'ATL',
        description: 'Own'
    },
    {
        id: 'ATL_2030_R2_OWN',
        year: 2030,
        round: 2,
        type: 'own',
        originalOwner: 'ATL',
        description: 'Own'
    },
    
    // 2031 - Own picks and acquired pick
    {
        id: 'ATL_2031_R1_OWN',
        year: 2031,
        round: 1,
        type: 'own',
        originalOwner: 'ATL',
        description: 'Own'
    },
    {
        id: 'ATL_2031_R2_OWN',
        year: 2031,
        round: 2,
        type: 'own',
        originalOwner: 'ATL',
        description: 'Own'
    },
    {
        id: 'ATL_2031_R2_CLE',
        year: 2031,
        round: 2,
        type: 'acquired',
        originalOwner: 'CLE',
        description: 'CLE'
    }
];

// Boston Celtics draft picks - only picks they actually own
const bostonCelticsOwnedPicks: OwnedDraftPick[] = [
    // 2025
    {
        id: 'BOS_2025_R1_OWN',
        year: 2025,
        round: 1,
        type: 'own',
        originalOwner: 'BOS',
        description: 'BOS (Own) #28'
    },
    {
        id: 'BOS_2025_R2_WAS',
        year: 2025,
        round: 2,
        type: 'acquired',
        originalOwner: 'WAS',
        acquiredFrom: 'DET',
        description: 'WAS #32 (via DET swap of GOS for WAS (via BRK))'
    },
    
    // 2026
    {
        id: 'BOS_2026_R1_OWN',
        year: 2026,
        round: 1,
        type: 'own',
        originalOwner: 'BOS',
        description: 'Own'
    },
    {
        id: 'BOS_2026_R2_COMPLEX1',
        year: 2026,
        round: 2,
        type: 'conditional',
        originalOwner: 'BOS',
        conditionalRules: {
            condition: 'Less favorable of (i) BOS and (ii) more favorable of IND and MIA',
            requirement: 'then other to MEM or to HOU [MEM can swap this pick for LAC; LAC then conveyed to HOU]'
        },
        description: 'Less favorable of (i) BOS and (ii) more favorable of IND and MIA then other to MEM or to HOU [MEM can swap this pick for LAC; LAC then conveyed to HOU] (via MIA to IND; via MIL to MEM; via MEM swap of IND or MIA for BOS)'
    },
    {
        id: 'BOS_2026_R2_COMPLEX2',
        year: 2026,
        round: 2,
        type: 'acquired',
        originalOwner: 'MIN',
        description: 'Most favorable of MIN, NYK, NOP and POR (via MIN to NYK; via NOP to POR to NOP; via POR to DET; via DET to BOS)'
    },
    
    // 2027
    {
        id: 'BOS_2027_R1_OWN',
        year: 2027,
        round: 1,
        type: 'own',
        originalOwner: 'BOS',
        description: 'Own'
    },
    
    // 2028
    {
        id: 'BOS_2028_R1_OWN',
        year: 2028,
        round: 1,
        type: 'own',
        originalOwner: 'BOS',
        description: '1 Own'
    },
    {
        id: 'BOS_2028_R1_SAN_SWAP',
        year: 2028,
        round: 1,
        type: 'swap',
        originalOwner: 'BOS',
        swapConditions: {
            description: 'BOS or SAN pick (2-30)',
            involvedTeams: ['BOS', 'SAN'],
            outcome: 'conditional'
        },
        description: '2-30 Own or SAN (via SAN swap for BOS)'
    },
    {
        id: 'BOS_2028_R2_SAN_COND',
        year: 2028,
        round: 2,
        type: 'conditional',
        originalOwner: 'SAN',
        conditionalRules: {
            condition: 'SAN pick (31-45)',
            requirement: 'if BOS 1 in 2028'
        },
        description: '31-45 to SAN if BOS 1 in 2028'
    },
    {
        id: 'BOS_2028_R2_NYK',
        year: 2028,
        round: 2,
        type: 'acquired',
        originalOwner: 'NYK',
        acquiredFrom: 'ORL',
        description: '46-60 to NYK (via ORL to PHX)'
    },
    
    // 2029
    {
        id: 'BOS_2029_R1_COMPLEX',
        year: 2029,
        round: 1,
        type: 'swap',
        originalOwner: 'BOS',
        swapConditions: {
            description: 'Most and least favorable of BOS, POR and MIL',
            involvedTeams: ['BOS', 'POR', 'MIL'],
            outcome: 'conditional'
        },
        description: 'Most and least favorable of BOS, POR and MIL to POR; second most favorable to WAS (via BOS to POR; via MIL to POR; via POR to WAS)'
    },
    
    // 2030
    {
        id: 'BOS_2030_R1_OWN',
        year: 2030,
        round: 1,
        type: 'own',
        originalOwner: 'BOS',
        description: 'Own'
    },
    
    // 2031
    {
        id: 'BOS_2031_R1_OWN',
        year: 2031,
        round: 1,
        type: 'own',
        originalOwner: 'BOS',
        description: 'Own'
    },
    {
        id: 'BOS_2031_R2_OWN',
        year: 2031,
        round: 2,
        type: 'own',
        originalOwner: 'BOS',
        description: 'Own'
    },
    {
        id: 'BOS_2031_R2_HOU',
        year: 2031,
        round: 2,
        type: 'acquired',
        originalOwner: 'HOU',
        description: 'HOU 56-60'
    }
];

// Brooklyn Nets draft picks - only picks they actually own
const brooklynNetsOwnedPicks: OwnedDraftPick[] = [
    // 2025
    {
        id: 'BRK_2025_R1_OWN',
        year: 2025,
        round: 1,
        type: 'own',
        originalOwner: 'BRK',
        description: 'BRK (Own) #8'
    },
    {
        id: 'BRK_2025_R1_MIL',
        year: 2025,
        round: 1,
        type: 'acquired',
        originalOwner: 'MIL',
        description: 'MIL #19 (via NOP to POR to DET to NYK)'
    },
    {
        id: 'BRK_2025_R1_NYK',
        year: 2025,
        round: 1,
        type: 'acquired',
        originalOwner: 'NYK',
        description: 'NYK #26'
    },
    {
        id: 'BRK_2025_R1_HOU',
        year: 2025,
        round: 1,
        type: 'acquired',
        originalOwner: 'HOU',
        description: 'HOU #27 (via PHX to BRK; via HOU swap for PHX)'
    },
    {
        id: 'BRK_2025_R2_OWN',
        year: 2025,
        round: 2,
        type: 'own',
        originalOwner: 'BRK',
        description: 'BRK (Own) #36 (via ATL to NYK)'
    },
    
    // 2026
    {
        id: 'BRK_2026_R1_HOU',
        year: 2026,
        round: 1,
        type: 'acquired',
        originalOwner: 'BRK',
        acquiredFrom: 'HOU',
        description: 'Own (via HOU)'
    },
    {
        id: 'BRK_2026_R2_OWN',
        year: 2026,
        round: 2,
        type: 'own',
        originalOwner: 'BRK',
        description: 'Own'
    },
    {
        id: 'BRK_2026_R2_ATL',
        year: 2026,
        round: 2,
        type: 'acquired',
        originalOwner: 'ATL',
        acquiredFrom: 'GOS',
        description: 'ATL (via GOS)'
    },
    
    // 2027
    {
        id: 'BRK_2027_R1_SWAP',
        year: 2027,
        round: 1,
        type: 'swap',
        originalOwner: 'BRK',
        swapConditions: {
            description: 'BRK or HOU pick',
            involvedTeams: ['BRK', 'HOU'],
            outcome: 'conditional'
        },
        description: 'Own or HOU (via HOU swap for BRK)'
    },
    {
        id: 'BRK_2027_R1_NYK',
        year: 2027,
        round: 1,
        type: 'acquired',
        originalOwner: 'NYK',
        description: 'NYK'
    },
    {
        id: 'BRK_2027_R1_PHL',
        year: 2027,
        round: 1,
        type: 'conditional',
        originalOwner: 'PHL',
        conditionalRules: {
            condition: 'PHL 9-30',
            requirement: 'if PHL conveys 1st round pick to OKC in 2025'
        },
        description: 'PHL 9-30 if PHL conveys 1st round pick to OKC in 2025'
    },
    {
        id: 'BRK_2027_R2_COMPLEX1',
        year: 2027,
        round: 2,
        type: 'conditional',
        originalOwner: 'BRK',
        conditionalRules: {
            condition: 'More favorable of BRK and DAL',
            requirement: 'then other to DET'
        },
        description: 'More favorable of BRK and DAL to WAS then other to DET (via DAL to BRK to DET; via DET to WAS)'
    },
    {
        id: 'BRK_2027_R2_LAL',
        year: 2027,
        round: 2,
        type: 'conditional',
        originalOwner: 'LAL',
        conditionalRules: {
            condition: 'LAL pick',
            requirement: 'if LAL conveys 1st round pick to UTH in 2027'
        },
        description: 'LAL if LAL conveys 1st round pick to UTH in 2027'
    },
    
    // 2028
    {
        id: 'BRK_2028_R1_COMPLEX',
        year: 2028,
        round: 1,
        type: 'conditional',
        originalOwner: 'BRK',
        conditionalRules: {
            condition: 'Complex multi-team conditional',
            requirement: 'If (i) PHL 9-30, if PHL does not convey 1st round pick to BRK in 2027 and if PHL has conveyed 1st round pick to OKC by 2026, is third most favorable and (ii) NYK is most or second most favorable of BRK, PHL 9-30 if conveyable, PHX and NYK, then most and third most favorable to BRK; or most / two most favorable to BRK in all other scenarios'
        },
        description: 'If (i) PHL 9-30, if PHL does not convey 1st round pick to BRK in 2027 and if PHL has conveyed 1st round pick to OKC by 2026, is third most favorable and (ii) NYK is most or second most favorable of BRK, PHL 9-30 if conveyable, PHX and NYK, then most and third most favorable to BRK; or most / two most favorable to BRK in all other scenarios'
    },
    {
        id: 'BRK_2028_R2_OWN',
        year: 2028,
        round: 2,
        type: 'own',
        originalOwner: 'BRK',
        description: 'Own'
    },
    {
        id: 'BRK_2028_R2_ATL',
        year: 2028,
        round: 2,
        type: 'acquired',
        originalOwner: 'ATL',
        acquiredFrom: 'GOS',
        description: 'ATL (via GOS)'
    },
    {
        id: 'BRK_2028_R2_MEM',
        year: 2028,
        round: 2,
        type: 'acquired',
        originalOwner: 'MEM',
        acquiredFrom: 'PHX',
        description: 'MEM (via PHX)'
    },
    {
        id: 'BRK_2028_R2_PHL',
        year: 2028,
        round: 2,
        type: 'conditional',
        originalOwner: 'PHL',
        conditionalRules: {
            condition: 'PHL pick',
            requirement: 'if PHL has not conveyed 1st round pick to BRK by 2028'
        },
        description: 'PHL if PHL has not conveyed 1st round pick to BRK by 2028'
    },
    
    // 2029
    {
        id: 'BRK_2029_R1_OWN',
        year: 2029,
        round: 1,
        type: 'own',
        originalOwner: 'BRK',
        description: 'Own'
    },
    {
        id: 'BRK_2029_R1_LEAST_FAV',
        year: 2029,
        round: 1,
        type: 'acquired',
        originalOwner: 'DAL',
        description: 'Least favorable of DAL, PHX and HOU (via DAL and PHX to BRK; via DAL or PHX to HOU; via HOU swap for DAL or PHX)'
    },
    {
        id: 'BRK_2029_R1_NYK',
        year: 2029,
        round: 1,
        type: 'acquired',
        originalOwner: 'NYK',
        description: 'NYK'
    },
    {
        id: 'BRK_2029_R2_OWN',
        year: 2029,
        round: 2,
        type: 'own',
        originalOwner: 'BRK',
        description: 'Own'
    },
    {
        id: 'BRK_2029_R2_DAL',
        year: 2029,
        round: 2,
        type: 'acquired',
        originalOwner: 'DAL',
        description: 'DAL'
    },
    {
        id: 'BRK_2029_R2_GOS',
        year: 2029,
        round: 2,
        type: 'acquired',
        originalOwner: 'GOS',
        description: 'GOS'
    },
    {
        id: 'BRK_2029_R2_MEM',
        year: 2029,
        round: 2,
        type: 'acquired',
        originalOwner: 'MEM',
        acquiredFrom: 'PHX',
        description: 'MEM (via PHX)'
    },
    
    // 2030
    {
        id: 'BRK_2030_R1_OWN',
        year: 2030,
        round: 1,
        type: 'own',
        originalOwner: 'BRK',
        description: 'Own'
    },
    {
        id: 'BRK_2030_R2_OWN',
        year: 2030,
        round: 2,
        type: 'own',
        originalOwner: 'BRK',
        description: 'Own'
    },
    {
        id: 'BRK_2030_R2_DAL',
        year: 2030,
        round: 2,
        type: 'acquired',
        originalOwner: 'DAL',
        description: 'DAL (via BOS to MEM)'
    },
    {
        id: 'BRK_2030_R2_LAL',
        year: 2030,
        round: 2,
        type: 'acquired',
        originalOwner: 'LAL',
        description: 'LAL'
    },
    
    // 2031
    {
        id: 'BRK_2031_R1_OWN',
        year: 2031,
        round: 1,
        type: 'own',
        originalOwner: 'BRK',
        description: 'Own'
    },
    {
        id: 'BRK_2031_R1_NYK',
        year: 2031,
        round: 1,
        type: 'acquired',
        originalOwner: 'NYK',
        description: 'NYK'
    },
    {
        id: 'BRK_2031_R2_OWN',
        year: 2031,
        round: 2,
        type: 'own',
        originalOwner: 'BRK',
        description: 'Own'
    },
    {
        id: 'BRK_2031_R2_LAL',
        year: 2031,
        round: 2,
        type: 'acquired',
        originalOwner: 'LAL',
        description: 'LAL'
    }
];

// Charlotte Hornets draft picks - only picks they actually own
const charlotteHornetsOwnedPicks: OwnedDraftPick[] = [
    // 2025
    {
        id: 'CHA_2025_R1_OWN',
        year: 2025,
        round: 1,
        type: 'own',
        originalOwner: 'CHA',
        description: 'CHA (Own) #4'
    },
    {
        id: 'CHA_2025_R2_OWN',
        year: 2025,
        round: 2,
        type: 'own',
        originalOwner: 'CHA',
        description: 'CHA (Own) #33 (via GOS)'
    },
    {
        id: 'CHA_2025_R2_NOP',
        year: 2025,
        round: 2,
        type: 'acquired',
        originalOwner: 'NOP',
        description: 'NOP #34 (via MEM to PHX to SAN)'
    },
    
    // 2026
    {
        id: 'CHA_2026_R1_OWN',
        year: 2026,
        round: 1,
        type: 'own',
        originalOwner: 'CHA',
        description: 'Own'
    },
    {
        id: 'CHA_2026_R1_LEAST_FAV',
        year: 2026,
        round: 1,
        type: 'swap',
        originalOwner: 'PHX',
        swapConditions: {
            description: 'Least favorable of PHX, WAS 1-8, ORL and MEM',
            involvedTeams: ['PHX', 'WAS', 'ORL', 'MEM'],
            outcome: 'less_favorable'
        },
        description: 'Least favorable of PHX, WAS 1-8, ORL and MEM (via WAS swap for PHX; via ORL swap for PHX or WAS; via MEM swap for PHX, WAS or ORL; via PHX to CHA)'
    },
    {
        id: 'CHA_2026_R2_DEN_GOS',
        year: 2026,
        round: 2,
        type: 'acquired',
        originalOwner: 'DEN',
        description: 'More favorable of DEN and GOS (via DEN to PHX; via GOS to ATL to OKC to NYK)'
    },
    
    // 2027
    {
        id: 'CHA_2027_R1_OWN',
        year: 2027,
        round: 1,
        type: 'own',
        originalOwner: 'CHA',
        description: 'Own'
    },
    {
        id: 'CHA_2027_R1_DAL',
        year: 2027,
        round: 1,
        type: 'acquired',
        originalOwner: 'DAL',
        protections: [{
            type: 'range',
            value: [3, 30]
        }],
        description: 'DAL 3-30'
    },
    {
        id: 'CHA_2027_R1_MIA',
        year: 2027,
        round: 1,
        type: 'acquired',
        originalOwner: 'MIA',
        protections: [{
            type: 'range',
            value: [15, 30]
        }],
        description: 'MIA 15-30'
    },
    {
        id: 'CHA_2027_R2_POR_NOP',
        year: 2027,
        round: 2,
        type: 'acquired',
        originalOwner: 'POR',
        description: 'More favorable of POR and NOP (via POR)'
    },
    
    // 2028
    {
        id: 'CHA_2028_R1_OWN',
        year: 2028,
        round: 1,
        type: 'own',
        originalOwner: 'CHA',
        description: 'Own'
    },
    {
        id: 'CHA_2028_R1_MIA_COND',
        year: 2028,
        round: 1,
        type: 'conditional',
        originalOwner: 'MIA',
        conditionalRules: {
            condition: 'MIA pick',
            requirement: 'if not already settled'
        },
        description: 'MIA if not already settled'
    },
    {
        id: 'CHA_2028_R2_CHA_LAC',
        year: 2028,
        round: 2,
        type: 'swap',
        originalOwner: 'CHA',
        swapConditions: {
            description: 'More favorable of CHA and LAC then other to DET',
            involvedTeams: ['CHA', 'LAC', 'DET'],
            outcome: 'more_favorable'
        },
        description: 'More favorable of CHA and LAC then other to DET (via CHA to DAL)'
    },
    {
        id: 'CHA_2028_R2_MIA_COND',
        year: 2028,
        round: 2,
        type: 'conditional',
        originalOwner: 'MIA',
        conditionalRules: {
            condition: 'MIA pick',
            requirement: 'if DAL does not convey 1st round pick to CHA in 2027'
        },
        description: 'MIA if DAL does not convey 1st round pick to CHA in 2027 (via SAN to DAL)'
    },
    
    // 2029
    {
        id: 'CHA_2029_R1_OWN',
        year: 2029,
        round: 1,
        type: 'own',
        originalOwner: 'CHA',
        description: 'Own'
    },
    {
        id: 'CHA_2029_R2_OWN',
        year: 2029,
        round: 2,
        type: 'own',
        originalOwner: 'CHA',
        description: 'Own'
    },
    {
        id: 'CHA_2029_R2_DEN_COND',
        year: 2029,
        round: 2,
        type: 'conditional',
        originalOwner: 'DEN',
        conditionalRules: {
            condition: 'DEN pick',
            requirement: 'if DEN has conveyed a first potential 1st round pick to OKC by 2029'
        },
        description: 'DEN if DEN has conveyed a first potential 1st round pick to OKC by 2029'
    },
    {
        id: 'CHA_2029_R2_PHX',
        year: 2029,
        round: 2,
        type: 'acquired',
        originalOwner: 'PHX',
        acquiredFrom: 'OKC',
        description: 'PHX (via OKC)'
    },
    
    // 2030
    {
        id: 'CHA_2030_R1_OWN',
        year: 2030,
        round: 1,
        type: 'own',
        originalOwner: 'CHA',
        description: 'Own'
    },
    {
        id: 'CHA_2030_R2_OWN',
        year: 2030,
        round: 2,
        type: 'own',
        originalOwner: 'CHA',
        description: 'Own'
    },
    
    // 2031
    {
        id: 'CHA_2031_R1_OWN',
        year: 2031,
        round: 1,
        type: 'own',
        originalOwner: 'CHA',
        description: 'Own'
    },
    {
        id: 'CHA_2031_R2_OWN',
        year: 2031,
        round: 2,
        type: 'own',
        originalOwner: 'CHA',
        description: 'Own'
    },
    {
        id: 'CHA_2031_R2_DEN',
        year: 2031,
        round: 2,
        type: 'acquired',
        originalOwner: 'DEN',
        acquiredFrom: 'PHX',
        description: 'DEN (via PHX)'
    },
    {
        id: 'CHA_2031_R2_NYK',
        year: 2031,
        round: 2,
        type: 'acquired',
        originalOwner: 'NYK',
        description: 'NYK'
    },
    {
        id: 'CHA_2031_R2_PHX',
        year: 2031,
        round: 2,
        type: 'acquired',
        originalOwner: 'PHX',
        description: 'PHX'
    }
];

// Chicago Bulls draft picks - only picks they actually own
const chicagoBullsOwnedPicks: OwnedDraftPick[] = [
    // 2025
    {
        id: 'CHI_2025_R1_OWN',
        year: 2025,
        round: 1,
        type: 'own',
        originalOwner: 'CHI',
        acquiredFrom: 'SAN',
        description: 'CHI (Own) #12 (via SAN)'
    },
    {
        id: 'CHI_2025_R2_SAC',
        year: 2025,
        round: 2,
        type: 'acquired',
        originalOwner: 'SAC',
        description: 'SAC #45'
    },
    
    // 2026
    {
        id: 'CHI_2026_R1_OWN',
        year: 2026,
        round: 1,
        type: 'own',
        originalOwner: 'CHI',
        description: 'Own'
    },
    {
        id: 'CHI_2026_R1_POR',
        year: 2026,
        round: 1,
        type: 'acquired',
        originalOwner: 'POR',
        protections: [{
            type: 'range',
            value: [15, 30]
        }],
        description: 'POR 15-30'
    },
    
    // 2027
    {
        id: 'CHI_2027_R1_OWN',
        year: 2027,
        round: 1,
        type: 'own',
        originalOwner: 'CHI',
        description: 'Own'
    },
    {
        id: 'CHI_2027_R1_POR_COND',
        year: 2027,
        round: 1,
        type: 'conditional',
        originalOwner: 'POR',
        protections: [{
            type: 'range',
            value: [15, 30]
        }],
        conditionalRules: {
            condition: 'POR 15-30',
            requirement: 'if not already settled'
        },
        description: 'POR 15-30 if not already settled'
    },
    
    // 2028
    {
        id: 'CHI_2028_R1_OWN',
        year: 2028,
        round: 1,
        type: 'own',
        originalOwner: 'CHI',
        description: 'Own'
    },
    {
        id: 'CHI_2028_R1_POR_COND',
        year: 2028,
        round: 1,
        type: 'conditional',
        originalOwner: 'POR',
        protections: [{
            type: 'range',
            value: [15, 30]
        }],
        conditionalRules: {
            condition: 'POR 15-30',
            requirement: 'if not already settled'
        },
        description: 'POR 15-30 if not already settled'
    },
    {
        id: 'CHI_2028_R2_OWN',
        year: 2028,
        round: 2,
        type: 'own',
        originalOwner: 'CHI',
        description: 'Own'
    },
    {
        id: 'CHI_2028_R2_POR_COND',
        year: 2028,
        round: 2,
        type: 'conditional',
        originalOwner: 'POR',
        conditionalRules: {
            condition: 'POR pick',
            requirement: 'if POR has not conveyed 1st round pick to CHI by 2028'
        },
        description: 'POR if POR has not conveyed 1st round pick to CHI by 2028'
    },
    
    // 2029
    {
        id: 'CHI_2029_R1_OWN',
        year: 2029,
        round: 1,
        type: 'own',
        originalOwner: 'CHI',
        description: 'Own'
    },
    {
        id: 'CHI_2029_R2_OWN',
        year: 2029,
        round: 2,
        type: 'own',
        originalOwner: 'CHI',
        description: 'Own'
    },
    
    // 2030
    {
        id: 'CHI_2030_R1_OWN',
        year: 2030,
        round: 1,
        type: 'own',
        originalOwner: 'CHI',
        description: 'Own'
    },
    {
        id: 'CHI_2030_R2_OWN',
        year: 2030,
        round: 2,
        type: 'own',
        originalOwner: 'CHI',
        description: 'Own'
    },
    
    // 2031
    {
        id: 'CHI_2031_R1_OWN',
        year: 2031,
        round: 1,
        type: 'own',
        originalOwner: 'CHI',
        description: 'Own'
    },
    {
        id: 'CHI_2031_R2_OWN',
        year: 2031,
        round: 2,
        type: 'own',
        originalOwner: 'CHI',
        description: 'Own'
    }
];

// Cleveland Cavaliers draft picks - only picks they actually own
const clevelandCavaliersOwnedPicks: OwnedDraftPick[] = [
    // 2025
    {
        id: 'CLE_2025_R2_OWN',
        year: 2025,
        round: 2,
        type: 'own',
        originalOwner: 'CLE',
        description: 'CLE (Own) #58'
    },
    {
        id: 'CLE_2025_R2_MIL',
        year: 2025,
        round: 2,
        type: 'acquired',
        originalOwner: 'MIL',
        description: 'MIL #49'
    },
    
    // 2026
    {
        id: 'CLE_2026_R1_COMPLEX',
        year: 2026,
        round: 1,
        type: 'swap',
        originalOwner: 'CLE',
        swapConditions: {
            description: 'Complex swap involving CLE, UTH, MIN, ATL, SAN',
            involvedTeams: ['CLE', 'UTH', 'MIN', 'ATL', 'SAN'],
            outcome: 'conditional'
        },
        description: 'Less favorable of (i) less favorable of (a) CLE and (b) more favorable of UTH 1-8 and MIN [or (i) CLE if UTH not conveyable] and (ii) less favorable of ATL and SAN then other to ATL; most / more favorable of CLE, MIN and UTH 1-8 to UTH (via UTH swap for MIN; via UTH swap of UTH or MIN for CLE; via SAN swap for ATL; via ATL swap of ATL or SAN for CLE, UTH or MIN)'
    },
    {
        id: 'CLE_2026_R2_OWN',
        year: 2026,
        round: 2,
        type: 'own',
        originalOwner: 'CLE',
        description: 'Own'
    },
    
    // 2027
    {
        id: 'CLE_2027_R1_SWAP',
        year: 2027,
        round: 1,
        type: 'swap',
        originalOwner: 'CLE',
        swapConditions: {
            description: 'Two most favorable of CLE, MIN and UTH to UTH then other to PHX',
            involvedTeams: ['CLE', 'MIN', 'UTH', 'PHX'],
            outcome: 'conditional'
        },
        description: 'Two most favorable of CLE, MIN and UTH to UTH then other to PHX (via CLE and MIN to UTH)'
    },
    {
        id: 'CLE_2027_R2_DEN',
        year: 2027,
        round: 2,
        type: 'acquired',
        originalOwner: 'DEN',
        description: 'DEN'
    },
    
    // 2028
    {
        id: 'CLE_2028_R1_SWAP',
        year: 2028,
        round: 1,
        type: 'swap',
        originalOwner: 'CLE',
        swapConditions: {
            description: 'Less favorable of CLE/UTH and ATL swap',
            involvedTeams: ['CLE', 'UTH', 'ATL'],
            outcome: 'conditional'
        },
        description: 'Less favorable of (i) less favorable of CLE and UTH and (ii) ATL then other to ATL (via UTH swap for CLE; via ATL swap for CLE or UTH)'
    },
    {
        id: 'CLE_2028_R2_OWN',
        year: 2028,
        round: 2,
        type: 'own',
        originalOwner: 'CLE',
        description: 'Own'
    },
    
    // 2029
    {
        id: 'CLE_2029_R1_SWAP',
        year: 2029,
        round: 1,
        type: 'swap',
        originalOwner: 'CLE',
        swapConditions: {
            description: 'Most/two most favorable of CLE, MIN 6-30 and UTH to UTH then other to PHX',
            involvedTeams: ['CLE', 'MIN', 'UTH', 'PHX'],
            outcome: 'conditional'
        },
        description: 'Most / two most favorable of CLE, MIN 6-30 and UTH to UTH then other to PHX (via CLE and MIN to UTH)'
    },
    
    // 2030
    {
        id: 'CLE_2030_R1_OWN',
        year: 2030,
        round: 1,
        type: 'own',
        originalOwner: 'CLE',
        description: 'Own'
    },
    
    // 2031
    {
        id: 'CLE_2031_R1_OWN',
        year: 2031,
        round: 1,
        type: 'own',
        originalOwner: 'CLE',
        description: 'Own'
    }
];

// Dallas Mavericks draft picks - only picks they actually own
const dallasMavericksOwnedPicks: OwnedDraftPick[] = [
    // 2025
    {
        id: 'DAL_2025_R1_OWN',
        year: 2025,
        round: 1,
        type: 'own',
        originalOwner: 'DAL',
        description: 'DAL (Own) #1'
    },
    
    // 2026
    {
        id: 'DAL_2026_R1_OWN',
        year: 2026,
        round: 1,
        type: 'own',
        originalOwner: 'DAL',
        description: 'Own'
    },
    
    // 2027
    {
        id: 'DAL_2027_R1_PROTECTED',
        year: 2027,
        round: 1,
        type: 'own',
        originalOwner: 'DAL',
        protections: [{
            type: 'range',
            value: [1, 2]
        }],
        description: '1-2 Own; 3-30 to CHA'
    },
    
    // 2028
    {
        id: 'DAL_2028_R1_SWAP',
        year: 2028,
        round: 1,
        type: 'swap',
        originalOwner: 'DAL',
        swapConditions: {
            description: 'DAL or OKC pick',
            involvedTeams: ['DAL', 'OKC'],
            outcome: 'conditional'
        },
        description: 'Own or OKC (via OKC swap for DAL)'
    },
    
    // 2029
    {
        id: 'DAL_2029_R1_SWAP',
        year: 2029,
        round: 1,
        type: 'swap',
        originalOwner: 'DAL',
        swapConditions: {
            description: 'Two most favorable of DAL, HOU and PHX to HOU then other to BRK',
            involvedTeams: ['DAL', 'HOU', 'PHX', 'BRK'],
            outcome: 'conditional'
        },
        description: 'Two most favorable of DAL, HOU and PHX to HOU then other to BRK (via DAL and PHX to BRK; via DAL or PHX to HOU; via HOU swap for DAL or PHX)'
    },
    {
        id: 'DAL_2029_R1_LAL',
        year: 2029,
        round: 1,
        type: 'acquired',
        originalOwner: 'LAL',
        description: 'LAL'
    },
    
    // 2030
    {
        id: 'DAL_2030_R1_SWAP',
        year: 2030,
        round: 1,
        type: 'swap',
        originalOwner: 'DAL',
        swapConditions: {
            description: 'Complex three-team swap with SAN and MIN',
            involvedTeams: ['DAL', 'SAN', 'MIN'],
            outcome: 'conditional'
        },
        description: 'Own or SAN (via SAN swap for DAL); most / more favorable of DAL, SAN and MIN 2-30 to SAN; less favorable of (i) MIN 2-30 and (ii) more favorable of DAL and SAN [or MIN if MIN not conveyable] to MIN (via SAN swap for DAL; via SAN swap of SAN or DAL for MIN)'
    },
    {
        id: 'DAL_2030_R2_PHL',
        year: 2030,
        round: 2,
        type: 'acquired',
        originalOwner: 'PHL',
        description: 'PHL'
    },
    
    // 2031
    {
        id: 'DAL_2031_R1_OWN',
        year: 2031,
        round: 1,
        type: 'own',
        originalOwner: 'DAL',
        description: 'Own'
    }
];

// Denver Nuggets draft picks - only picks they actually own
const denverNuggetsOwnedPicks: OwnedDraftPick[] = [
    // 2026
    {
        id: 'DEN_2026_R1_OWN',
        year: 2026,
        round: 1,
        type: 'own',
        originalOwner: 'DEN',
        description: 'Own'
    },
    
    // 2027
    {
        id: 'DEN_2027_R1_PROTECTED',
        year: 2027,
        round: 1,
        type: 'own',
        originalOwner: 'DEN',
        protections: [{
            type: 'range',
            value: [1, 5]
        }],
        description: '1-5 Own; 6-30 to OKC or to LAC [OKC can swap OKC or DEN for LAC]'
    },
    
    // 2028
    {
        id: 'DEN_2028_R1_PROTECTED',
        year: 2028,
        round: 1,
        type: 'own',
        originalOwner: 'DEN',
        protections: [{
            type: 'range',
            value: [1, 5]
        }],
        description: '1-5 Own; 6-30 to OKC if not already settled'
    },
    {
        id: 'DEN_2028_R2_PROTECTED',
        year: 2028,
        round: 2,
        type: 'own',
        originalOwner: 'DEN',
        protections: [{
            type: 'range',
            value: [31, 33]
        }],
        description: '31-33 Own; 34-60 to WAS (via SAN to SAC)'
    },
    
    // 2029
    {
        id: 'DEN_2029_R1_PROTECTED',
        year: 2029,
        round: 1,
        type: 'own',
        originalOwner: 'DEN',
        protections: [{
            type: 'range',
            value: [1, 5]
        }],
        description: '1-5 Own; 6-30 to OKC if not already settled; or 1-5 Own; 6-30 to OKC if DEN has conveyed a first potential 1st round pick to OKC by 2027'
    },
    
    // 2030
    {
        id: 'DEN_2030_R1_PROTECTED',
        year: 2030,
        round: 1,
        type: 'own',
        originalOwner: 'DEN',
        protections: [{
            type: 'range',
            value: [1, 5]
        }],
        description: '1-5 Own; 6-30 to OKC if DEN has conveyed a first potential 1st round pick to OKC by 2028'
    },
    
    // 2031
    {
        id: 'DEN_2031_R1_OWN',
        year: 2031,
        round: 1,
        type: 'own',
        originalOwner: 'DEN',
        description: 'Own'
    }
];

// Detroit Pistons draft picks - only picks they actually own
const detroitPistonsOwnedPicks: OwnedDraftPick[] = [
    // 2025
    {
        id: 'DET_2025_R2_TOR',
        year: 2025,
        round: 2,
        type: 'acquired',
        originalOwner: 'TOR',
        description: 'TOR #37 (via SAN to DAL)'
    },
    
    // 2026
    {
        id: 'DET_2026_R1_OWN',
        year: 2026,
        round: 1,
        type: 'own',
        originalOwner: 'DET',
        description: 'Own'
    },
    {
        id: 'DET_2026_R2_SWAP',
        year: 2026,
        round: 2,
        type: 'swap',
        originalOwner: 'DET',
        swapConditions: {
            description: 'Two most favorable of DET, MIL and ORL to ORL then other to NYK',
            involvedTeams: ['DET', 'MIL', 'ORL', 'NYK'],
            outcome: 'conditional'
        },
        description: 'Two most favorable of DET, MIL and ORL to ORL then other to NYK (via DET to LAC to ORL; via ORL to PHX to BRK to NYK)'
    },
    
    // 2027
    {
        id: 'DET_2027_R1_OWN',
        year: 2027,
        round: 1,
        type: 'own',
        originalOwner: 'DET',
        description: 'Own'
    },
    {
        id: 'DET_2027_R2_OWN',
        year: 2027,
        round: 2,
        type: 'own',
        originalOwner: 'DET',
        description: 'Own'
    },
    {
        id: 'DET_2027_R2_BRK_DAL',
        year: 2027,
        round: 2,
        type: 'acquired',
        originalOwner: 'BRK',
        description: 'Less favorable of BRK and DAL (via DAL to BRK to DET)'
    },
    {
        id: 'DET_2027_R2_MIL',
        year: 2027,
        round: 2,
        type: 'acquired',
        originalOwner: 'MIL',
        acquiredFrom: 'PHL',
        description: 'MIL (via PHL)'
    },
    
    // 2028
    {
        id: 'DET_2028_R1_OWN',
        year: 2028,
        round: 1,
        type: 'own',
        originalOwner: 'DET',
        description: 'Own'
    },
    {
        id: 'DET_2028_R2_PROTECTED',
        year: 2028,
        round: 2,
        type: 'own',
        originalOwner: 'DET',
        protections: [{
            type: 'range',
            value: [31, 55]
        }],
        notes: 'Least favorable to UTH',
        description: '31-55 Own*; 56-60 to PHL; Less favorable of CHA and LAC* (via CHA to DAL); MIA* if DAL conveys 1st round pick to CHA in 2027 (via SAN to DAL); NYK* *Least favorable to UTH'
    },
    {
        id: 'DET_2028_R2_CHA_LAC',
        year: 2028,
        round: 2,
        type: 'swap',
        originalOwner: 'CHA',
        swapConditions: {
            description: 'Less favorable of CHA and LAC',
            involvedTeams: ['CHA', 'LAC', 'UTH'],
            outcome: 'less_favorable'
        },
        notes: 'Least favorable to UTH',
        description: 'Less favorable of CHA and LAC* (via CHA to DAL); *Least favorable to UTH'
    },
    {
        id: 'DET_2028_R2_MIA_COND',
        year: 2028,
        round: 2,
        type: 'conditional',
        originalOwner: 'MIA',
        conditionalRules: {
            condition: 'MIA pick',
            requirement: 'if DAL conveys 1st round pick to CHA in 2027'
        },
        notes: 'Least favorable to UTH',
        description: 'MIA* if DAL conveys 1st round pick to CHA in 2027 (via SAN to DAL); *Least favorable to UTH'
    },
    {
        id: 'DET_2028_R2_NYK',
        year: 2028,
        round: 2,
        type: 'acquired',
        originalOwner: 'NYK',
        notes: 'Least favorable to UTH',
        description: 'NYK* *Least favorable to UTH'
    },
    
    // 2029
    {
        id: 'DET_2029_R1_OWN',
        year: 2029,
        round: 1,
        type: 'own',
        originalOwner: 'DET',
        description: 'Own'
    },
    {
        id: 'DET_2029_R2_OWN',
        year: 2029,
        round: 2,
        type: 'own',
        originalOwner: 'DET',
        description: 'Own'
    },
    {
        id: 'DET_2029_R2_MIL',
        year: 2029,
        round: 2,
        type: 'acquired',
        originalOwner: 'MIL',
        acquiredFrom: 'BRK',
        description: 'MIL (via BRK)'
    },
    {
        id: 'DET_2029_R2_NYK',
        year: 2029,
        round: 2,
        type: 'acquired',
        originalOwner: 'NYK',
        description: 'NYK'
    },
    
    // 2030
    {
        id: 'DET_2030_R1_OWN',
        year: 2030,
        round: 1,
        type: 'own',
        originalOwner: 'DET',
        description: 'Own'
    },
    {
        id: 'DET_2030_R2_OWN',
        year: 2030,
        round: 2,
        type: 'own',
        originalOwner: 'DET',
        description: 'Own'
    },
    {
        id: 'DET_2030_R2_MIN',
        year: 2030,
        round: 2,
        type: 'acquired',
        originalOwner: 'MIN',
        description: 'MIN'
    },
    
    // 2031
    {
        id: 'DET_2031_R1_OWN',
        year: 2031,
        round: 1,
        type: 'own',
        originalOwner: 'DET',
        description: 'Own'
    },
    {
        id: 'DET_2031_R2_OWN',
        year: 2031,
        round: 2,
        type: 'own',
        originalOwner: 'DET',
        description: 'Own'
    },
    {
        id: 'DET_2031_R2_DAL',
        year: 2031,
        round: 2,
        type: 'acquired',
        originalOwner: 'DAL',
        acquiredFrom: 'PHL',
        description: 'DAL (via PHL)'
    },
    {
        id: 'DET_2031_R2_GOS_MIN',
        year: 2031,
        round: 2,
        type: 'swap',
        originalOwner: 'GOS',
        swapConditions: {
            description: 'Less favorable of GOS and MIN',
            involvedTeams: ['GOS', 'MIN'],
            outcome: 'less_favorable'
        },
        description: 'Less favorable of GOS and MIN (via MIN swap for GOS)'
    }
];

// Golden State Warriors draft picks - only picks they actually own
const goldenStateWarriorsOwnedPicks: OwnedDraftPick[] = [
    // 2025
    {
        id: 'GSW_2025_R2_MIA',
        year: 2025,
        round: 2,
        type: 'acquired',
        originalOwner: 'MIA',
        description: 'MIA #41 (via IND to BRK)'
    },
    
    // 2026
    {
        id: 'GSW_2026_R1_OWN',
        year: 2026,
        round: 1,
        type: 'own',
        originalOwner: 'GSW',
        description: 'Own'
    },
    {
        id: 'GSW_2026_R2_DEN_SWAP',
        year: 2026,
        round: 2,
        type: 'swap',
        originalOwner: 'GSW',
        swapConditions: {
            description: 'More favorable of GOS and DEN to CHA then other to PHX',
            involvedTeams: ['GSW', 'DEN', 'CHA', 'PHX'],
            outcome: 'conditional'
        },
        description: 'More favorable of GOS and DEN to CHA then other to PHX (via GOS to ATL to OKC to NYK to CHA; via DEN to PHX to CHA)'
    },
    
    // 2027
    {
        id: 'GSW_2027_R1_OWN',
        year: 2027,
        round: 1,
        type: 'own',
        originalOwner: 'GSW',
        description: 'Own'
    },
    {
        id: 'GSW_2027_R2_PHX_SWAP',
        year: 2027,
        round: 2,
        type: 'swap',
        originalOwner: 'GSW',
        swapConditions: {
            description: 'More favorable of GOS and PHX to PHL then other to WAS',
            involvedTeams: ['GSW', 'PHX', 'PHL', 'WAS'],
            outcome: 'conditional'
        },
        description: 'More favorable of GOS and PHX to PHL then other to WAS (via WAS)'
    },
    
    // 2028
    {
        id: 'GSW_2028_R1_OWN',
        year: 2028,
        round: 1,
        type: 'own',
        originalOwner: 'GSW',
        description: 'Own'
    },
    
    // 2029
    {
        id: 'GSW_2029_R1_OWN',
        year: 2029,
        round: 1,
        type: 'own',
        originalOwner: 'GSW',
        description: 'Own'
    },
    
    // 2030
    {
        id: 'GSW_2030_R1_PROTECTED',
        year: 2030,
        round: 1,
        type: 'own',
        originalOwner: 'GSW',
        protections: [{
            type: 'range',
            value: [1, 20]
        }],
        description: '1-20 Own; 21-30 to WAS'
    },
    {
        id: 'GSW_2030_R2_CONDITIONAL',
        year: 2030,
        round: 2,
        type: 'conditional',
        originalOwner: 'GSW',
        conditionalRules: {
            condition: 'GSW second round pick',
            requirement: 'if GOS does not convey 1st round pick to WAS in 2030'
        },
        description: 'To WAS if GOS does not convey 1st round pick to WAS in 2030'
    },
    
    // 2031
    {
        id: 'GSW_2031_R1_OWN',
        year: 2031,
        round: 1,
        type: 'own',
        originalOwner: 'GSW',
        description: 'Own'
    },
    {
        id: 'GSW_2031_R2_MIN_SWAP',
        year: 2031,
        round: 2,
        type: 'swap',
        originalOwner: 'GSW',
        swapConditions: {
            description: 'More favorable of GOS and MIN to MIN then other to DET',
            involvedTeams: ['GSW', 'MIN', 'DET'],
            outcome: 'conditional'
        },
        description: 'More favorable of GOS and MIN to MIN then other to DET (via MIN swap for GOS)'
    }
];

// Houston Rockets draft picks - only picks they actually own
const houstonRocketsOwnedPicks: OwnedDraftPick[] = [
    // 2025
    {
        id: 'HOU_2025_R1_PHX',
        year: 2025,
        round: 1,
        type: 'acquired',
        originalOwner: 'PHX',
        description: 'PHX #10 (via PHX to BRK; via HOU swap for PHX)'
    },
    {
        id: 'HOU_2025_R2_OKC',
        year: 2025,
        round: 2,
        type: 'acquired',
        originalOwner: 'OKC',
        acquiredFrom: 'ATL',
        description: 'OKC #59 (via ATL)'
    },
    
    // 2026
    {
        id: 'HOU_2026_R1_PROTECTED',
        year: 2026,
        round: 1,
        type: 'own',
        originalOwner: 'HOU',
        protections: [{
            type: 'range',
            value: [1, 4]
        }],
        description: '1-4 Own; two most / more favorable of HOU 5-30, LAC and OKC to OKC then other to WAS (via OKC to PHL)'
    },
    {
        id: 'HOU_2026_R2_CONDITIONAL',
        year: 2026,
        round: 2,
        type: 'conditional',
        originalOwner: 'HOU',
        conditionalRules: {
            condition: 'HOU second round pick',
            requirement: 'if HOU 1-4 in 2026'
        },
        description: 'To OKC if HOU 1-4 in 2026'
    },
    {
        id: 'HOU_2026_R2_OKC_DAL_PHL',
        year: 2026,
        round: 2,
        type: 'acquired',
        originalOwner: 'OKC',
        description: 'Second most favorable of OKC, DAL and PHL (via OKC)'
    },
    {
        id: 'HOU_2026_R2_COMPLEX',
        year: 2026,
        round: 2,
        type: 'swap',
        originalOwner: 'LAC',
        swapConditions: {
            description: 'Less favorable of LAC and most favorable of BOS, IND and MIA',
            involvedTeams: ['LAC', 'BOS', 'IND', 'MIA'],
            outcome: 'less_favorable'
        },
        description: 'Less favorable of (i) LAC and (ii) most favorable of BOS, IND and MIA (via MIA to IND; via MIL to MEM; via MEM swap of IND or MIA for BOS; via MEM swap of BOS, IND or MIA for LAC)'
    },
    
    // 2027
    {
        id: 'HOU_2027_R1_BRK_SWAP',
        year: 2027,
        round: 1,
        type: 'swap',
        originalOwner: 'HOU',
        swapConditions: {
            description: 'HOU or BRK pick',
            involvedTeams: ['HOU', 'BRK'],
            outcome: 'conditional'
        },
        description: 'Own or swap for BRK'
    },
    {
        id: 'HOU_2027_R1_PHX',
        year: 2027,
        round: 1,
        type: 'acquired',
        originalOwner: 'PHX',
        acquiredFrom: 'BRK',
        description: 'PHX (via BRK)'
    },
    {
        id: 'HOU_2027_R2_COMPLEX1',
        year: 2027,
        round: 2,
        type: 'swap',
        originalOwner: 'HOU',
        swapConditions: {
            description: 'Most favorable of HOU, OKC, IND and MIA to OKC; second and third most favorable to NYK',
            involvedTeams: ['HOU', 'OKC', 'IND', 'MIA', 'NYK'],
            outcome: 'conditional'
        },
        description: 'Most favorable of HOU, OKC, IND and MIA to OKC; second and third most favorable to NYK; more favorable of (i) SAN and (ii) least favorable of HOU, OKC, IND and MIA to SAN then other to MIA (via HOU to DET to OKC to NYK; via MIA to OKC to UTH to SAN to MIA)'
    },
    {
        id: 'HOU_2027_R2_MEM',
        year: 2027,
        round: 2,
        type: 'acquired',
        originalOwner: 'MEM',
        acquiredFrom: 'LAC',
        description: 'MEM (via LAC)'
    },
    {
        id: 'HOU_2027_R2_POR_NOP',
        year: 2027,
        round: 2,
        type: 'conditional',
        originalOwner: 'POR',
        conditionalRules: {
            condition: 'Less favorable of POR and NOP',
            requirement: 'if either or both 56-60'
        },
        description: 'Less favorable of POR and NOP if either or both 56-60 (via POR to BOS)'
    },
    
    // 2028
    {
        id: 'HOU_2028_R1_OWN',
        year: 2028,
        round: 1,
        type: 'own',
        originalOwner: 'HOU',
        description: 'Own'
    },
    {
        id: 'HOU_2028_R2_ATL',
        year: 2028,
        round: 2,
        type: 'acquired',
        originalOwner: 'HOU',
        acquiredFrom: 'ATL',
        description: 'Own (via ATL)'
    },
    
    // 2029
    {
        id: 'HOU_2029_R1_SWAP',
        year: 2029,
        round: 1,
        type: 'swap',
        originalOwner: 'HOU',
        swapConditions: {
            description: 'Two most favorable of HOU, DAL and PHX then other to BRK',
            involvedTeams: ['HOU', 'DAL', 'PHX', 'BRK'],
            outcome: 'conditional'
        },
        description: 'Two most favorable of HOU, DAL and PHX then other to BRK (via DAL and PHX to BRK; via DAL or PHX to HOU; via HOU swap for DAL or PHX)'
    },
    
    // 2030
    {
        id: 'HOU_2030_R1_OWN',
        year: 2030,
        round: 1,
        type: 'own',
        originalOwner: 'HOU',
        description: 'Own'
    },
    {
        id: 'HOU_2030_R2_BOS',
        year: 2030,
        round: 2,
        type: 'acquired',
        originalOwner: 'BOS',
        description: 'BOS'
    },
    
    // 2031
    {
        id: 'HOU_2031_R1_OWN',
        year: 2031,
        round: 1,
        type: 'own',
        originalOwner: 'HOU',
        description: 'Own'
    },
    {
        id: 'HOU_2031_R2_PROTECTED',
        year: 2031,
        round: 2,
        type: 'own',
        originalOwner: 'HOU',
        protections: [{
            type: 'range',
            value: [31, 55]
        }],
        description: '31-55 Own; 56-60 to BOS'
    }
];

// Indiana Pacers draft picks - only picks they actually own
const indianaPacersOwnedPicks: OwnedDraftPick[] = [
    // 2025
    {
        id: 'IND_2025_R1_OWN',
        year: 2025,
        round: 1,
        type: 'own',
        originalOwner: 'IND',
        description: 'IND (Own) #23'
    },
    {
        id: 'IND_2025_R2_OWN',
        year: 2025,
        round: 2,
        type: 'own',
        originalOwner: 'IND',
        description: 'IND (Own) #54'
    },
    
    // 2026
    {
        id: 'IND_2026_R1_PROTECTED',
        year: 2026,
        round: 1,
        type: 'own',
        originalOwner: 'IND',
        protections: [{
            type: 'range',
            value: [1, 4]
        }],
        description: '1-4 Own; 5-30 to NOP (via TOR)'
    },
    {
        id: 'IND_2026_R2_COMPLEX1',
        year: 2026,
        round: 2,
        type: 'swap',
        originalOwner: 'IND',
        swapConditions: {
            description: 'Least favorable of IND, MIA and SAN to MIN',
            involvedTeams: ['IND', 'MIA', 'SAN', 'MIN'],
            outcome: 'conditional'
        },
        description: 'Least favorable of IND, MIA and SAN to MIN; more favorable of (i) SAN and (ii) less favorable of IND and MIA to SAN; less favorable of (i) BOS and (ii) more favorable of IND and MIA to BOS then other to MEM or to HOU [MEM can swap this pick for LAC; LAC then conveyed to HOU] (via MIA to IND; via SAN swap for IND or MIA; via MIL to MEM; via MEM swap of IND or MIA for BOS)'
    },
    {
        id: 'IND_2026_R2_TOR',
        year: 2026,
        round: 2,
        type: 'acquired',
        originalOwner: 'TOR',
        protections: [{
            type: 'range',
            value: [56, 60]
        }],
        description: 'TOR 56-60'
    },
    
    // 2027
    {
        id: 'IND_2027_R1_PROTECTED',
        year: 2027,
        round: 1,
        type: 'own',
        originalOwner: 'IND',
        protections: [{
            type: 'range',
            value: [1, 4]
        }],
        description: '1-4 Own; 5-30 to NOP if not already settled (via TOR)'
    },
    {
        id: 'IND_2027_R2_COMPLEX1',
        year: 2027,
        round: 2,
        type: 'swap',
        originalOwner: 'IND',
        swapConditions: {
            description: 'Most favorable of IND, OKC, HOU and MIA to OKC; second and third most favorable to NYK',
            involvedTeams: ['IND', 'OKC', 'HOU', 'MIA', 'NYK'],
            outcome: 'conditional'
        },
        description: 'Most favorable of IND, OKC, HOU and MIA to OKC; second and third most favorable to NYK; more favorable of (i) SAN and (ii) least favorable of IND, OKC, HOU and MIA to SAN then other to MIA (via HOU to DET to OKC to NYK; via MIA to OKC to UTH to SAN to MIA)'
    },
    {
        id: 'IND_2027_R2_UTH',
        year: 2027,
        round: 2,
        type: 'conditional',
        originalOwner: 'UTH',
        conditionalRules: {
            condition: 'UTH pick',
            requirement: 'if IND has conveyed 1st round pick to NOP by 2027'
        },
        description: 'UTH if IND has conveyed 1st round pick to NOP by 2027 (via CLE)'
    },
    
    // 2028
    {
        id: 'IND_2028_R1_OWN',
        year: 2028,
        round: 1,
        type: 'own',
        originalOwner: 'IND',
        description: 'Own'
    },
    {
        id: 'IND_2028_R2_PHX_SWAP',
        year: 2028,
        round: 2,
        type: 'swap',
        originalOwner: 'IND',
        swapConditions: {
            description: 'More favorable of IND and PHX then other to NYK',
            involvedTeams: ['IND', 'PHX', 'NYK'],
            outcome: 'conditional'
        },
        description: 'More favorable of IND and PHX then other to NYK (via IND)'
    },
    {
        id: 'IND_2028_R2_DAL',
        year: 2028,
        round: 2,
        type: 'conditional',
        originalOwner: 'DAL',
        conditionalRules: {
            condition: 'DAL pick',
            requirement: 'if IND has conveyed 1st round pick to NOP by 2027'
        },
        description: 'DAL if IND has conveyed 1st round pick to NOP by 2027 (via SAC)'
    },
    
    // 2029
    {
        id: 'IND_2029_R1_OWN',
        year: 2029,
        round: 1,
        type: 'own',
        originalOwner: 'IND',
        description: 'Own'
    },
    {
        id: 'IND_2029_R2_WAS_SWAP',
        year: 2029,
        round: 2,
        type: 'swap',
        originalOwner: 'IND',
        swapConditions: {
            description: 'More favorable of IND and WAS then other to POR',
            involvedTeams: ['IND', 'WAS', 'POR'],
            outcome: 'conditional'
        },
        description: 'More favorable of IND and WAS then other to POR (via IND to NYK)'
    },
    {
        id: 'IND_2029_R2_POR',
        year: 2029,
        round: 2,
        type: 'acquired',
        originalOwner: 'POR',
        acquiredFrom: 'PHL',
        description: 'POR (via PHL)'
    },
    
    // 2030
    {
        id: 'IND_2030_R1_OWN',
        year: 2030,
        round: 1,
        type: 'own',
        originalOwner: 'IND',
        description: 'Own'
    },
    {
        id: 'IND_2030_R2_OWN',
        year: 2030,
        round: 2,
        type: 'own',
        originalOwner: 'IND',
        description: 'Own'
    },
    {
        id: 'IND_2030_R2_SAC',
        year: 2030,
        round: 2,
        type: 'acquired',
        originalOwner: 'SAC',
        description: 'SAC'
    },
    
    // 2031
    {
        id: 'IND_2031_R1_OWN',
        year: 2031,
        round: 1,
        type: 'own',
        originalOwner: 'IND',
        description: 'Own'
    },
    {
        id: 'IND_2031_R2_MIA_SWAP',
        year: 2031,
        round: 2,
        type: 'swap',
        originalOwner: 'IND',
        swapConditions: {
            description: 'Less favorable of IND and MIA then other to UTH',
            involvedTeams: ['IND', 'MIA', 'UTH'],
            outcome: 'conditional'
        },
        description: 'Less favorable of IND and MIA then other to UTH (via MIA swap for IND)'
    }
];

// Los Angeles Clippers draft picks - only picks they actually own
const losAngelesClippersOwnedPicks: OwnedDraftPick[] = [
    // 2025
    {
        id: 'LAC_2025_R1_OKC',
        year: 2025,
        round: 1,
        type: 'acquired',
        originalOwner: 'OKC',
        description: 'OKC #30 (via OKC swap for LAC)'
    },
    {
        id: 'LAC_2025_R2_MIN',
        year: 2025,
        round: 2,
        type: 'acquired',
        originalOwner: 'MIN',
        description: 'MIN #51 (via HOU to ATL)'
    },
    
    // 2026
    {
        id: 'LAC_2026_R1_SWAP',
        year: 2026,
        round: 1,
        type: 'swap',
        originalOwner: 'LAC',
        swapConditions: {
            description: 'Two most/more favorable of LAC, HOU 5-30 and OKC to OKC then other to WAS',
            involvedTeams: ['LAC', 'HOU', 'OKC', 'WAS'],
            outcome: 'conditional'
        },
        description: 'Two most / more favorable of LAC, HOU 5-30 and OKC to OKC then other to WAS (via OKC to PHL)'
    },
    {
        id: 'LAC_2026_R2_COMPLEX',
        year: 2026,
        round: 2,
        type: 'swap',
        originalOwner: 'LAC',
        swapConditions: {
            description: 'Less favorable of LAC and most favorable of BOS, IND and MIA to HOU; most favorable to MEM',
            involvedTeams: ['LAC', 'BOS', 'IND', 'MIA', 'HOU', 'MEM'],
            outcome: 'conditional'
        },
        description: 'Less favorable of (i) LAC and (ii) most favorable of BOS, IND and MIA to HOU; most favorable of (i) and (ii) to MEM (via MIA to IND; via MIL to MEM; via MEM swap of IND or MIA for BOS; via MEM swap of BOS, IND or MIA for LAC)'
    },
    {
        id: 'LAC_2026_R2_MEM',
        year: 2026,
        round: 2,
        type: 'acquired',
        originalOwner: 'MEM',
        protections: [{
            type: 'range',
            value: [31, 42]
        }],
        description: 'MEM 31-42 (via UTH to ATL)'
    },
    
    // 2027
    {
        id: 'LAC_2027_R1_SWAP',
        year: 2027,
        round: 1,
        type: 'swap',
        originalOwner: 'LAC',
        swapConditions: {
            description: 'Least/less favorable of LAC, DEN 6-30 and OKC',
            involvedTeams: ['LAC', 'DEN', 'OKC'],
            outcome: 'less_favorable'
        },
        description: 'Least / less favorable of LAC, DEN 6-30 and OKC (via OKC swap of OKC or DEN for LAC)'
    },
    {
        id: 'LAC_2027_R2_OWN',
        year: 2027,
        round: 2,
        type: 'own',
        originalOwner: 'LAC',
        acquiredFrom: 'ATL',
        description: 'Own (via ATL)'
    },
    
    // 2028
    {
        id: 'LAC_2028_R2_CHA_SWAP',
        year: 2028,
        round: 2,
        type: 'swap',
        originalOwner: 'LAC',
        swapConditions: {
            description: 'More favorable of LAC and CHA to CHA then other to DET',
            involvedTeams: ['LAC', 'CHA', 'DET'],
            outcome: 'conditional'
        },
        description: 'More favorable of LAC and CHA to CHA then other to DET (via CHA to DAL)'
    },
    
    // 2029
    {
        id: 'LAC_2029_R1_PROTECTED',
        year: 2029,
        round: 1,
        type: 'own',
        originalOwner: 'LAC',
        protections: [{
            type: 'range',
            value: [1, 3]
        }],
        description: '1-3 Own; 4-30 Own or PHL (via PHL swap for LAC)'
    },
    {
        id: 'LAC_2029_R1_PHL_SWAP',
        year: 2029,
        round: 1,
        type: 'swap',
        originalOwner: 'LAC',
        swapConditions: {
            description: 'LAC 4-30 or PHL pick',
            involvedTeams: ['LAC', 'PHL'],
            outcome: 'conditional'
        },
        description: '4-30 Own or PHL (via PHL swap for LAC)'
    },
    
    // 2030
    {
        id: 'LAC_2030_R1_OWN',
        year: 2030,
        round: 1,
        type: 'own',
        originalOwner: 'LAC',
        description: 'Own'
    },
    
    // 2031
    {
        id: 'LAC_2031_R1_OWN',
        year: 2031,
        round: 1,
        type: 'own',
        originalOwner: 'LAC',
        description: 'Own'
    },
    {
        id: 'LAC_2031_R2_OWN',
        year: 2031,
        round: 2,
        type: 'own',
        originalOwner: 'LAC',
        description: 'Own'
    }
];

// Los Angeles Lakers draft picks - only picks they actually own
const losAngelesLakersOwnedPicks: OwnedDraftPick[] = [
    // 2025
    {
        id: 'LAL_2025_R2_OWN',
        year: 2025,
        round: 2,
        type: 'own',
        originalOwner: 'LAL',
        description: 'LAL (Own) #55'
    },
    
    // 2026
    {
        id: 'LAL_2026_R1_OWN',
        year: 2026,
        round: 1,
        type: 'own',
        originalOwner: 'LAL',
        description: 'Own'
    },
    
    // 2027
    {
        id: 'LAL_2027_R1_PROTECTED',
        year: 2027,
        round: 1,
        type: 'own',
        originalOwner: 'LAL',
        protections: [{
            type: 'range',
            value: [1, 4]
        }],
        description: '1-4 Own; 5-30 to UTH'
    },
    {
        id: 'LAL_2027_R2_CONDITIONAL',
        year: 2027,
        round: 2,
        type: 'conditional',
        originalOwner: 'LAL',
        conditionalRules: {
            condition: 'LAL second round pick',
            requirement: 'to BRK if LAL conveys 1st round pick to UTH in 2027, or to UTH if LAL does not convey 1st round pick to UTH in 2027'
        },
        description: 'To BRK if LAL conveys 1st round pick to UTH in 2027, or to UTH if LAL does not convey 1st round pick to UTH in 2027'
    },
    
    // 2028
    {
        id: 'LAL_2028_R1_OWN',
        year: 2028,
        round: 1,
        type: 'own',
        originalOwner: 'LAL',
        description: 'Own'
    },
    {
        id: 'LAL_2028_R2_WAS_SWAP',
        year: 2028,
        round: 2,
        type: 'swap',
        originalOwner: 'LAL',
        swapConditions: {
            description: 'More favorable of LAL and WAS to ORL then other to WAS',
            involvedTeams: ['LAL', 'WAS', 'ORL'],
            outcome: 'conditional'
        },
        description: 'More favorable of LAL and WAS to ORL then other to WAS (via WAS to LAL to ORL; via LAL to WAS)'
    },
    
    // 2030
    {
        id: 'LAL_2030_R1_OWN',
        year: 2030,
        round: 1,
        type: 'own',
        originalOwner: 'LAL',
        description: 'Own'
    },
    
    // 2031
    {
        id: 'LAL_2031_R1_OWN',
        year: 2031,
        round: 1,
        type: 'own',
        originalOwner: 'LAL',
        description: 'Own'
    }
];

// Memphis Grizzlies draft picks - only picks they actually own
const memphisGrizzliesOwnedPicks: OwnedDraftPick[] = [
    // 2025
    {
        id: 'MEM_2025_R2_GSW',
        year: 2025,
        round: 2,
        type: 'acquired',
        originalOwner: 'GSW',
        description: 'GOS #48 (via DET swap of GOS for WAS (via BRK))'
    },
    {
        id: 'MEM_2025_R2_HOU',
        year: 2025,
        round: 2,
        type: 'acquired',
        originalOwner: 'HOU',
        description: 'HOU #56'
    },
    
    // 2026
    {
        id: 'MEM_2026_R1_SWAP',
        year: 2026,
        round: 1,
        type: 'swap',
        originalOwner: 'MEM',
        swapConditions: {
            description: 'More favorable of MEM and least/less favorable of PHX, WAS 1-8 and ORL; least favorable goes to CHA',
            involvedTeams: ['MEM', 'PHX', 'WAS', 'ORL', 'CHA'],
            outcome: 'conditional'
        },
        description: 'More favorable of (i) MEM and (ii) least / less favorable of PHX, WAS 1-8 and ORL; least favorable of MEM, PHX, WAS 1-8 and ORL to CHA (via WAS swap for PHX; via ORL swap for PHX or WAS; via MEM swap for PHX, WAS or ORL; via PHX to CHA)'
    },
    {
        id: 'MEM_2026_R2_POR',
        year: 2026,
        round: 2,
        type: 'acquired',
        originalOwner: 'MEM',
        protections: [{
            type: 'range',
            value: [43, 60]
        }],
        description: '43-60 to POR (via UTH to GOS)'
    },
    {
        id: 'MEM_2026_R2_COMPLEX',
        year: 2026,
        round: 2,
        type: 'swap',
        originalOwner: 'BOS',
        swapConditions: {
            description: 'Most favorable of BOS, IND, LAC and MIA',
            involvedTeams: ['BOS', 'IND', 'LAC', 'MIA'],
            outcome: 'more_favorable'
        },
        description: 'Most favorable of BOS, IND, LAC and MIA (via MIA to IND; via MIL to MEM; via MEM swap of IND or MIA for BOS; via MEM swap of BOS, IND or MIA for LAC)'
    },
    
    // 2027
    {
        id: 'MEM_2027_R1_OWN',
        year: 2027,
        round: 1,
        type: 'own',
        originalOwner: 'MEM',
        description: 'Own'
    },
    
    // 2028
    {
        id: 'MEM_2028_R1_OWN',
        year: 2028,
        round: 1,
        type: 'own',
        originalOwner: 'MEM',
        description: 'Own'
    },
    {
        id: 'MEM_2028_R2_SAC',
        year: 2028,
        round: 2,
        type: 'acquired',
        originalOwner: 'SAC',
        description: 'SAC (via CHI to SAC)'
    },
    
    // 2029
    {
        id: 'MEM_2029_R1_OWN',
        year: 2029,
        round: 1,
        type: 'own',
        originalOwner: 'MEM',
        description: 'Own'
    },
    
    // 2030
    {
        id: 'MEM_2030_R1_SWAP',
        year: 2030,
        round: 1,
        type: 'swap',
        originalOwner: 'MEM',
        swapConditions: {
            description: 'More favorable of MEM and less favorable of PHX and WAS then other to PHX',
            involvedTeams: ['MEM', 'PHX', 'WAS'],
            outcome: 'conditional'
        },
        description: 'More favorable of (i) MEM and (ii) less favorable of PHX and WAS then other to PHX (via WAS swap for PHX; via MEM swap for PHX or WAS)'
    },
    {
        id: 'MEM_2030_R2_PROTECTED',
        year: 2030,
        round: 2,
        type: 'own',
        originalOwner: 'MEM',
        protections: [{
            type: 'range',
            value: [31, 50]
        }],
        description: '31-50 Own; 51-60 to MIN'
    },
    
    // 2031
    {
        id: 'MEM_2031_R1_OWN',
        year: 2031,
        round: 1,
        type: 'own',
        originalOwner: 'MEM',
        description: 'Own'
    },
    {
        id: 'MEM_2031_R2_OWN',
        year: 2031,
        round: 2,
        type: 'own',
        originalOwner: 'MEM',
        description: 'Own'
    }
];

// Miami Heat draft picks - only picks they actually own
const miamiHeatOwnedPicks: OwnedDraftPick[] = [
    // 2025
    {
        id: 'MIA_2025_R1_GSW',
        year: 2025,
        round: 1,
        type: 'acquired',
        originalOwner: 'GSW',
        description: 'GOS #20'
    },
    
    // 2026
    {
        id: 'MIA_2026_R1_OWN',
        year: 2026,
        round: 1,
        type: 'own',
        originalOwner: 'MIA',
        description: 'Own'
    },
    {
        id: 'MIA_2026_R2_COMPLEX1',
        year: 2026,
        round: 2,
        type: 'swap',
        originalOwner: 'MIA',
        swapConditions: {
            description: 'More favorable of SAN and less favorable of MIA and IND to SAN then other to MIN',
            involvedTeams: ['SAN', 'MIA', 'IND', 'MIN'],
            outcome: 'conditional'
        },
        description: 'More favorable of (i) SAN and (ii) less favorable of MIA and IND to SAN then other to MIN; less favorable of (i) BOS and (ii) more favorable of MIA and IND to BOS then other to MEM or to HOU [MEM can swap this pick for LAC; LAC then conveyed to HOU] (via MIA to IND; via SAN swap for IND or MIA; via MIL to MEM; via MEM swap of IND or MIA for BOS)'
    },
    
    // 2027
    {
        id: 'MIA_2027_R1_PROTECTED',
        year: 2027,
        round: 1,
        type: 'own',
        originalOwner: 'MIA',
        protections: [{
            type: 'range',
            value: [1, 14]
        }],
        description: '1-14 Own; 15-30 to CHA'
    },
    {
        id: 'MIA_2027_R2_COMPLEX',
        year: 2027,
        round: 2,
        type: 'swap',
        originalOwner: 'MIA',
        swapConditions: {
            description: 'Less favorable of SAN and least favorable of MIA, OKC, HOU and IND then other to SAN; most favorable to OKC; second and third most favorable to NYK',
            involvedTeams: ['SAN', 'MIA', 'OKC', 'HOU', 'IND', 'NYK'],
            outcome: 'conditional'
        },
        description: 'Less favorable of (i) SAN and (ii) least favorable of MIA, OKC, HOU and IND then other to SAN; most favorable of MIA, OKC, HOU and IND to OKC; second and third most favorable to NYK (via MIA to OKC to UTH to SAN to MIA; via HOU to DET to OKC to NYK)'
    },
    
    // 2029
    {
        id: 'MIA_2029_R1_OWN',
        year: 2029,
        round: 1,
        type: 'own',
        originalOwner: 'MIA',
        description: 'Own'
    },
    
    // 2030
    {
        id: 'MIA_2030_R1_OWN',
        year: 2030,
        round: 1,
        type: 'own',
        originalOwner: 'MIA',
        description: 'Own'
    },
    
    // 2031
    {
        id: 'MIA_2031_R1_OWN',
        year: 2031,
        round: 1,
        type: 'own',
        originalOwner: 'MIA',
        description: 'Own'
    },
    {
        id: 'MIA_2031_R2_IND_SWAP',
        year: 2031,
        round: 2,
        type: 'swap',
        originalOwner: 'MIA',
        swapConditions: {
            description: 'More favorable of MIA and IND to UTH then other to IND',
            involvedTeams: ['MIA', 'IND', 'UTH'],
            outcome: 'conditional'
        },
        description: 'More favorable of MIA and IND to UTH then other to IND (via MIA swap for IND)'
    }
];

// Milwaukee Bucks draft picks - only picks they actually own
const milwaukeeBucksOwnedPicks: OwnedDraftPick[] = [
    // 2025
    {
        id: 'MIL_2025_R2_DET',
        year: 2025,
        round: 2,
        type: 'acquired',
        originalOwner: 'DET',
        description: 'DET #47 (via DET to LAC to POR to DET to WAS to MIL)'
    },
    
    // 2026
    {
        id: 'MIL_2026_R1_NOP_SWAP',
        year: 2026,
        round: 1,
        type: 'swap',
        originalOwner: 'MIL',
        swapConditions: {
            description: 'MIL or NOP pick',
            involvedTeams: ['MIL', 'NOP'],
            outcome: 'conditional'
        },
        description: 'Own or NOP (via NOP swap for MIL)'
    },
    {
        id: 'MIL_2026_R2_SWAP',
        year: 2026,
        round: 2,
        type: 'swap',
        originalOwner: 'MIL',
        swapConditions: {
            description: 'Two most favorable of MIL, DET and ORL to ORL then other to NYK',
            involvedTeams: ['MIL', 'DET', 'ORL', 'NYK'],
            outcome: 'conditional'
        },
        description: 'Two most favorable of MIL, DET and ORL to ORL then other to NYK (via DET to LAC to ORL; via ORL to PHX to BRK to NYK)'
    },
    {
        id: 'MIL_2026_R2_UTH',
        year: 2026,
        round: 2,
        type: 'acquired',
        originalOwner: 'UTH',
        protections: [{
            type: 'range',
            value: [56, 60]
        }],
        description: 'UTH 56-60 (via MIN to SAN)'
    },
    
    // 2027
    {
        id: 'MIL_2027_R1_NOP_SWAP',
        year: 2027,
        round: 1,
        type: 'swap',
        originalOwner: 'MIL',
        swapConditions: {
            description: 'More favorable of MIL and NOP to NOP then other to ATL if 5-30 or MIL and NOP to NOP if both 1-4',
            involvedTeams: ['MIL', 'NOP', 'ATL'],
            outcome: 'conditional'
        },
        description: 'More favorable of MIL and NOP to NOP then other to ATL if 5-30 or MIL and NOP to NOP if both 1-4 (via NOP)'
    },
    
    // 2028
    {
        id: 'MIL_2028_R1_COMPLEX',
        year: 2028,
        round: 1,
        type: 'swap',
        originalOwner: 'MIL',
        swapConditions: {
            description: 'Extremely complex swap involving MIL, POR, WAS, BRK, PHL, PHX with multiple conditional scenarios',
            involvedTeams: ['MIL', 'POR', 'WAS', 'BRK', 'PHL', 'PHX'],
            outcome: 'conditional'
        },
        description: 'Less favorable of (i) less favorable of MIL and POR 1-14 if POR has not conveyed 1st round pick to CHI by 2027 [or (i) MIL if POR not conveyable], and (ii) more favorable of (a) WAS and (b) least / less favorable of BRK, PHL 9-30 if PHL does not convey 1st round pick to BRK in 2027 and if PHL has conveyed 1st round pick to OKC by 2026, and PHX then other to WAS; or Less favorable of (i) less favorable of MIL and POR if POR has conveyed 1st round pick to CHI by 2027, and (ii) more favorable of (a) WAS and (b) least / less favorable of BRK, PHL 9-30 if PHL does not convey 1st round pick to BRK in 2027 and if PHL has conveyed 1st round pick to OKC by 2026, and PHX then other to WAS (via POR swap for MIL; via BRK swap of BRK or PHL for PHX; via WAS swap for PHX, BRK or PHL; via WAS swap of WAS, BRK, PHL or PHX for MIL or POR)'
    },
    
    // 2029
    {
        id: 'MIL_2029_R1_SWAP',
        year: 2029,
        round: 1,
        type: 'swap',
        originalOwner: 'MIL',
        swapConditions: {
            description: 'Most and least favorable of MIL, BOS and POR to POR; second most favorable to WAS',
            involvedTeams: ['MIL', 'BOS', 'POR', 'WAS'],
            outcome: 'conditional'
        },
        description: 'Most and least favorable of MIL, BOS and POR to POR; second most favorable to WAS (via BOS to POR; via MIL to POR; via POR to WAS)'
    },
    
    // 2030
    {
        id: 'MIL_2030_R1_POR_SWAP',
        year: 2030,
        round: 1,
        type: 'swap',
        originalOwner: 'MIL',
        swapConditions: {
            description: 'MIL or POR pick',
            involvedTeams: ['MIL', 'POR'],
            outcome: 'conditional'
        },
        description: 'Own or POR (via POR swap for MIL)'
    },
    
    // 2031
    {
        id: 'MIL_2031_R1_OWN',
        year: 2031,
        round: 1,
        type: 'own',
        originalOwner: 'MIL',
        description: 'Own'
    },
    {
        id: 'MIL_2031_R2_OWN',
        year: 2031,
        round: 2,
        type: 'own',
        originalOwner: 'MIL',
        description: 'Own'
    }
];

// Minnesota Timberwolves draft picks - only picks they actually own
const minnesotaTimberwolvesOwnedPicks: OwnedDraftPick[] = [
    // 2025
    {
        id: 'MIN_2025_R1_DET',
        year: 2025,
        round: 1,
        type: 'acquired',
        originalOwner: 'DET',
        description: 'DET #17 (via HOU to OKC to NYK)'
    },
    {
        id: 'MIN_2025_R2_UTH',
        year: 2025,
        round: 2,
        type: 'acquired',
        originalOwner: 'UTH',
        description: 'UTH #31'
    },
    
    // 2026
    {
        id: 'MIN_2026_R1_UTH_SWAP',
        year: 2026,
        round: 1,
        type: 'swap',
        originalOwner: 'MIN',
        swapConditions: {
            description: 'Less favorable of MIN and UTH 1-8 [or MIN if UTH not conveyable]; most/more favorable of MIN, UTH 1-8 and CLE to UTH; less favorable of CLE and more favorable of MIN and UTH 1-8 to CLE',
            involvedTeams: ['MIN', 'UTH', 'CLE'],
            outcome: 'conditional'
        },
        description: 'Less favorable of MIN and UTH 1-8 [or MIN if UTH not conveyable]; most / more favorable of MIN, UTH 1-8 and CLE to UTH; less favorable of (i) CLE and (ii) more favorable of MIN and UTH 1-8 [or CLE if UTH not conveyable] to CLE [CLE may convey to ATL] (via UTH swap for MIN; via UTH swap of UTH or MIN for CLE)'
    },
    {
        id: 'MIN_2026_R2_COMPLEX1',
        year: 2026,
        round: 2,
        type: 'swap',
        originalOwner: 'MIN',
        swapConditions: {
            description: 'Less favorable of MIN and NYK to NYK; most favorable of MIN, NYK, NOP and POR to BOS; less favorable of more favorable MIN/NYK and more favorable NOP/POR to WAS',
            involvedTeams: ['MIN', 'NYK', 'NOP', 'POR', 'BOS', 'WAS'],
            outcome: 'conditional'
        },
        description: 'Less favorable of MIN and NYK to NYK; most favorable of MIN, NYK, NOP and POR to BOS; less favorable of (i) more favorable of MIN and NYK and (ii) more favorable of NOP and POR to WAS (via MIN to NYK; via NOP to POR to NOP; via POR to DET; via DET to BOS; via DET to WAS)'
    },
    {
        id: 'MIN_2026_R2_IND_MIA_SAN',
        year: 2026,
        round: 2,
        type: 'acquired',
        originalOwner: 'IND',
        swapConditions: {
            description: 'Least favorable of IND, MIA and SAN',
            involvedTeams: ['IND', 'MIA', 'SAN'],
            outcome: 'less_favorable'
        },
        description: 'Least favorable of IND, MIA and SAN (via MIA to IND; via SAN swap for IND or MIA)'
    },
    
    // 2027
    {
        id: 'MIN_2027_R1_UTH_SWAP',
        year: 2027,
        round: 1,
        type: 'swap',
        originalOwner: 'MIN',
        swapConditions: {
            description: 'Two most favorable of MIN, CLE and UTH to UTH then other to PHX',
            involvedTeams: ['MIN', 'CLE', 'UTH', 'PHX'],
            outcome: 'conditional'
        },
        description: 'Two most favorable of MIN, CLE and UTH to UTH then other to PHX (via CLE and MIN to UTH)'
    },
    
    // 2028
    {
        id: 'MIN_2028_R1_OWN',
        year: 2028,
        round: 1,
        type: 'own',
        originalOwner: 'MIN',
        description: 'Own'
    },
    
    // 2029
    {
        id: 'MIN_2029_R1_PROTECTED',
        year: 2029,
        round: 1,
        type: 'own',
        originalOwner: 'MIN',
        protections: [{
            type: 'range',
            value: [1, 5]
        }],
        description: '1-5 Own; most / two most favorable of MIN 6-30, CLE and UTH to UTH then other to PHX (via CLE and MIN to UTH)'
    },
    {
        id: 'MIN_2029_R1_UTH_SWAP',
        year: 2029,
        round: 1,
        type: 'swap',
        originalOwner: 'MIN',
        swapConditions: {
            description: 'Most/two most favorable of MIN 6-30, CLE and UTH to UTH then other to PHX',
            involvedTeams: ['MIN', 'CLE', 'UTH', 'PHX'],
            outcome: 'conditional'
        },
        description: 'most / two most favorable of MIN 6-30, CLE and UTH to UTH then other to PHX (via CLE and MIN to UTH)'
    },
    {
        id: 'MIN_2029_R2_CONDITIONAL',
        year: 2029,
        round: 2,
        type: 'conditional',
        originalOwner: 'MIN',
        conditionalRules: {
            condition: 'MIN second round pick',
            requirement: 'if MIN does not convey 1st round pick to UTH in 2029'
        },
        description: 'To UTH if MIN does not convey 1st round pick to UTH in 2029'
    },
    
    // 2030
    {
        id: 'MIN_2030_R1_PROTECTED',
        year: 2030,
        round: 1,
        type: 'own',
        originalOwner: 'MIN',
        protections: [{
            type: 'top',
            value: 1
        }],
        description: '1 Own; less favorable of (i) MIN 2-30 and (ii) more favorable of SAN and DAL; most / more favorable of MIN 2-30, SAN and DAL to SAN (via SAN swap for DAL; via SAN swap of SAN or DAL for MIN)'
    },
    {
        id: 'MIN_2030_R1_SAN_DAL_SWAP',
        year: 2030,
        round: 1,
        type: 'swap',
        originalOwner: 'MIN',
        swapConditions: {
            description: 'Complex three-team swap with SAN and DAL involving MIN 2-30',
            involvedTeams: ['MIN', 'SAN', 'DAL'],
            outcome: 'conditional'
        },
        description: 'less favorable of (i) MIN 2-30 and (ii) more favorable of SAN and DAL; most / more favorable of MIN 2-30, SAN and DAL to SAN (via SAN swap for DAL; via SAN swap of SAN or DAL for MIN)'
    },
    {
        id: 'MIN_2030_R2_MEM',
        year: 2030,
        round: 2,
        type: 'acquired',
        originalOwner: 'MEM',
        protections: [{
            type: 'range',
            value: [51, 60]
        }],
        description: 'MEM 51-60'
    },
    
    // 2031
    {
        id: 'MIN_2031_R2_GSW_SWAP',
        year: 2031,
        round: 2,
        type: 'swap',
        originalOwner: 'MIN',
        swapConditions: {
            description: 'More favorable of MIN and GOS then other to DET',
            involvedTeams: ['MIN', 'GSW', 'DET'],
            outcome: 'conditional'
        },
        description: 'More favorable of MIN and GOS then other to DET (via MIN swap for GOS)'
    }
];

// New Orleans Pelicans draft picks - only picks they actually own
const newOrleansPelicansOwnedPicks: OwnedDraftPick[] = [
    // 2025
    {
        id: 'NOP_2025_R1_OWN',
        year: 2025,
        round: 1,
        type: 'own',
        originalOwner: 'NOP',
        description: 'NOP (Own) #7'
    },
    
    // 2026
    {
        id: 'NOP_2026_R1_MIL_SWAP',
        year: 2026,
        round: 1,
        type: 'swap',
        originalOwner: 'NOP',
        swapConditions: {
            description: 'NOP or MIL pick',
            involvedTeams: ['NOP', 'MIL'],
            outcome: 'conditional'
        },
        description: 'Own or swap for MIL'
    },
    {
        id: 'NOP_2026_R1_IND',
        year: 2026,
        round: 1,
        type: 'acquired',
        originalOwner: 'IND',
        protections: [{
            type: 'range',
            value: [5, 30]
        }],
        description: 'IND 5-30 (via TOR)'
    },
    {
        id: 'NOP_2026_R2_COMPLEX1',
        year: 2026,
        round: 2,
        type: 'swap',
        originalOwner: 'NOP',
        swapConditions: {
            description: 'Most favorable of NOP, POR, MIN and NYK to BOS; less favorable of NOP and POR to SAN; less favorable of more favorable NOP/POR and more favorable MIN/NYK to WAS',
            involvedTeams: ['NOP', 'POR', 'MIN', 'NYK', 'BOS', 'SAN', 'WAS'],
            outcome: 'conditional'
        },
        description: 'Most favorable of NOP, POR, MIN and NYK to BOS; less favorable of NOP and POR to SAN; less favorable of (i) more favorable of NOP and POR and (ii) more favorable of MIN and NYK to WAS (via NOP to POR to NOP; via POR to DET; via MIN to NYK; via NOP to SAN; via DET to BOS; via DET to WAS)'
    },
    
    // 2027
    {
        id: 'NOP_2027_R1_MIL_SWAP',
        year: 2027,
        round: 1,
        type: 'swap',
        originalOwner: 'NOP',
        swapConditions: {
            description: 'More favorable of NOP and MIL then other to ATL if 5-30 or NOP and MIL if both 1-4',
            involvedTeams: ['NOP', 'MIL', 'ATL'],
            outcome: 'conditional'
        },
        description: 'More favorable of NOP and MIL then other to ATL if 5-30 or NOP and MIL if both 1-4 (via NOP)'
    },
    {
        id: 'NOP_2027_R1_IND_COND',
        year: 2027,
        round: 1,
        type: 'conditional',
        originalOwner: 'IND',
        protections: [{
            type: 'range',
            value: [5, 30]
        }],
        conditionalRules: {
            condition: 'IND 5-30',
            requirement: 'if not already settled'
        },
        description: 'IND 5-30 if not already settled (via TOR)'
    },
    {
        id: 'NOP_2027_R2_POR_SWAP',
        year: 2027,
        round: 2,
        type: 'swap',
        originalOwner: 'NOP',
        swapConditions: {
            description: 'More favorable of NOP and POR to CHA then other to POR [POR may convey to HOU]',
            involvedTeams: ['NOP', 'POR', 'CHA', 'HOU'],
            outcome: 'conditional'
        },
        description: 'More favorable of NOP and POR to CHA then other to POR [POR may convey to HOU] (via NOP)'
    },
    {
        id: 'NOP_2027_R2_CHI',
        year: 2027,
        round: 2,
        type: 'acquired',
        originalOwner: 'CHI',
        protections: [{
            type: 'range',
            value: [51, 60]
        }],
        description: 'CHI 51-60 (via WAS)'
    },
    {
        id: 'NOP_2027_R2_UTH_COND',
        year: 2027,
        round: 2,
        type: 'conditional',
        originalOwner: 'UTH',
        conditionalRules: {
            condition: 'UTH pick',
            requirement: 'if IND has not conveyed 1st round pick to NOP by 2027'
        },
        description: 'UTH if IND has not conveyed 1st round pick to NOP by 2027 (via CLE to IND to TOR)'
    },
    
    // 2028
    {
        id: 'NOP_2028_R1_OWN',
        year: 2028,
        round: 1,
        type: 'own',
        originalOwner: 'NOP',
        description: 'Own'
    },
    {
        id: 'NOP_2028_R2_DAL_COND',
        year: 2028,
        round: 2,
        type: 'conditional',
        originalOwner: 'DAL',
        conditionalRules: {
            condition: 'DAL pick',
            requirement: 'if IND has not conveyed 1st round pick to NOP by 2027'
        },
        description: 'DAL if IND has not conveyed 1st round pick to NOP by 2027 (via SAC to IND to TOR)'
    },
    
    // 2029
    {
        id: 'NOP_2029_R1_OWN',
        year: 2029,
        round: 1,
        type: 'own',
        originalOwner: 'NOP',
        description: 'Own'
    },
    
    // 2030
    {
        id: 'NOP_2030_R1_OWN',
        year: 2030,
        round: 1,
        type: 'own',
        originalOwner: 'NOP',
        description: 'Own'
    },
    {
        id: 'NOP_2030_R2_ORL_SWAP',
        year: 2030,
        round: 2,
        type: 'swap',
        originalOwner: 'NOP',
        swapConditions: {
            description: 'NOP or ORL pick',
            involvedTeams: ['NOP', 'ORL'],
            outcome: 'conditional'
        },
        description: 'Own or ORL (via ORL swap for NOP)'
    },
    
    // 2031
    {
        id: 'NOP_2031_R1_OWN',
        year: 2031,
        round: 1,
        type: 'own',
        originalOwner: 'NOP',
        description: 'Own'
    },
    {
        id: 'NOP_2031_R2_ORL_SWAP',
        year: 2031,
        round: 2,
        type: 'swap',
        originalOwner: 'NOP',
        swapConditions: {
            description: 'More favorable of NOP and ORL to ORL then other to OKC',
            involvedTeams: ['NOP', 'ORL', 'OKC'],
            outcome: 'conditional'
        },
        description: 'More favorable of NOP and ORL to ORL then other to OKC (via ORL swap for NOP)'
    },
    {
        id: 'NOP_2031_R2_TOR',
        year: 2031,
        round: 2,
        type: 'acquired',
        originalOwner: 'TOR',
        description: 'TOR'
    }
];

// New York Knicks draft picks - only picks they actually own
const newYorkKnicksOwnedPicks: OwnedDraftPick[] = [
    // 2025
    {
        id: 'NYK_2025_R2_MEM',
        year: 2025,
        round: 2,
        type: 'acquired',
        originalOwner: 'MEM',
        description: 'MEM #50 (via BOS to OKC)'
    },
    
    // 2026
    {
        id: 'NYK_2026_R1_OWN',
        year: 2026,
        round: 1,
        type: 'own',
        originalOwner: 'NYK',
        description: 'Own'
    },
    {
        id: 'NYK_2026_R1_WAS',
        year: 2026,
        round: 1,
        type: 'acquired',
        originalOwner: 'WAS',
        protections: [{
            type: 'range',
            value: [9, 30]
        }],
        description: 'WAS 9-30 (via HOU to OKC)'
    },
    {
        id: 'NYK_2026_R2_COMPLEX1',
        year: 2026,
        round: 2,
        type: 'swap',
        originalOwner: 'NYK',
        swapConditions: {
            description: 'Less favorable of NYK and MIN; most favorable of NYK, MIN, NOP and POR to BOS; less favorable of more favorable NYK/MIN and more favorable NOP/POR to WAS',
            involvedTeams: ['NYK', 'MIN', 'NOP', 'POR', 'BOS', 'WAS'],
            outcome: 'conditional'
        },
        description: 'Less favorable of NYK and MIN; most favorable of NYK, MIN, NOP and POR to BOS; less favorable of (i) more favorable of NYK and MIN and (ii) more favorable of NOP and POR to WAS (via MIN to NYK; via NOP to POR to NOP; via POR to DET; via DET to BOS; via DET to WAS)'
    },
    {
        id: 'NYK_2026_R2_DET_MIL_ORL',
        year: 2026,
        round: 2,
        type: 'acquired',
        originalOwner: 'DET',
        swapConditions: {
            description: 'Least favorable of DET, MIL and ORL',
            involvedTeams: ['DET', 'MIL', 'ORL'],
            outcome: 'less_favorable'
        },
        description: 'Least favorable of DET, MIL and ORL (via DET to LAC to ORL; via ORL to PHX to BRK to NYK)'
    },
    {
        id: 'NYK_2026_R2_WAS_COND',
        year: 2026,
        round: 2,
        type: 'conditional',
        originalOwner: 'WAS',
        conditionalRules: {
            condition: 'WAS second round pick',
            requirement: 'if WAS does not convey 1st round pick to NYK in 2026'
        },
        description: 'WAS if WAS does not convey 1st round pick to NYK in 2026 (via HOU to OKC)'
    },
    
    // 2027
    {
        id: 'NYK_2027_R2_OWN',
        year: 2027,
        round: 2,
        type: 'own',
        originalOwner: 'NYK',
        description: 'Own'
    },
    {
        id: 'NYK_2027_R2_WAS_COND',
        year: 2027,
        round: 2,
        type: 'conditional',
        originalOwner: 'WAS',
        conditionalRules: {
            condition: 'WAS pick',
            requirement: 'if WAS does not convey 1st round pick to NYK in 2026'
        },
        description: 'WAS if WAS does not convey 1st round pick to NYK in 2026 (via HOU to OKC)'
    },
    {
        id: 'NYK_2027_R2_OKC_HOU_IND_MIA',
        year: 2027,
        round: 2,
        type: 'acquired',
        originalOwner: 'OKC',
        swapConditions: {
            description: 'Second and third most favorable of OKC, HOU, IND and MIA',
            involvedTeams: ['OKC', 'HOU', 'IND', 'MIA'],
            outcome: 'conditional'
        },
        description: 'Second and third most favorable of OKC, HOU, IND and MIA (via HOU to DET to OKC to NYK)'
    },
    
    // 2028
    {
        id: 'NYK_2028_R1_COMPLEX',
        year: 2028,
        round: 1,
        type: 'swap',
        originalOwner: 'NYK',
        swapConditions: {
            description: 'Extremely complex scenario with BRK, PHX, PHL involving multiple conditional outcomes',
            involvedTeams: ['NYK', 'BRK', 'PHX', 'PHL'],
            outcome: 'conditional'
        },
        description: 'Least favorable of NYK, BRK and PHX if NYK and / or if PHL 9-30, if PHL does not convey 1st round pick to BRK in 2027 and if PHL has conveyed 1st round pick to OKC by 2026, is less favorable than BRK and PHX; or second most favorable of NYK, BRK and PHX in all other scenarios; if (i) PHL 9-30, if conveyable, is third most favorable and (ii) NYK is most or second most favorable of NYK, BRK, PHL 9-30 if conveyable, and PHX, then most and third most favorable to BRK; or most / two most favorable to BRK in all other scenarios (via BRK swap of BRK or PHL for PHX; via BRK swap of BRK or PHX for NYK; via WAS swap for PHX, BRK or PHL)'
    },
    {
        id: 'NYK_2028_R2_BOS',
        year: 2028,
        round: 2,
        type: 'acquired',
        originalOwner: 'BOS',
        protections: [{
            type: 'range',
            value: [46, 60]
        }],
        description: 'BOS 46-60 (via ORL to PHX)'
    },
    {
        id: 'NYK_2028_R2_IND_PHX',
        year: 2028,
        round: 2,
        type: 'acquired',
        originalOwner: 'IND',
        swapConditions: {
            description: 'Less favorable of IND and PHX',
            involvedTeams: ['IND', 'PHX'],
            outcome: 'less_favorable'
        },
        description: 'Less favorable of IND and PHX (via IND)'
    },
    
    // 2030
    {
        id: 'NYK_2030_R1_OWN',
        year: 2030,
        round: 1,
        type: 'own',
        originalOwner: 'NYK',
        description: 'Own'
    }
];

// Oklahoma City Thunder draft picks - only picks they actually own
const oklahomaCityThunderOwnedPicks: OwnedDraftPick[] = [
    // 2025
    {
        id: 'OKC_2025_R1_MIA',
        year: 2025,
        round: 1,
        type: 'acquired',
        originalOwner: 'MIA',
        description: 'MIA #15 (via LAC)'
    },
    {
        id: 'OKC_2025_R1_LAC',
        year: 2025,
        round: 1,
        type: 'acquired',
        originalOwner: 'LAC',
        description: 'LAC #24 (via OKC swap for LAC)'
    },
    {
        id: 'OKC_2025_R2_ATL',
        year: 2025,
        round: 2,
        type: 'acquired',
        originalOwner: 'ATL',
        description: 'ATL #44'
    },
    
    // 2026
    {
        id: 'OKC_2026_R1_SWAP',
        year: 2026,
        round: 1,
        type: 'swap',
        originalOwner: 'OKC',
        swapConditions: {
            description: 'Two most/more favorable of OKC, HOU 5-30 and LAC then other to WAS',
            involvedTeams: ['OKC', 'HOU', 'LAC', 'WAS'],
            outcome: 'conditional'
        },
        description: 'Two most / more favorable of OKC, HOU 5-30 and LAC then other to WAS (via OKC to PHL)'
    },
    {
        id: 'OKC_2026_R1_PHL',
        year: 2026,
        round: 1,
        type: 'acquired',
        originalOwner: 'PHL',
        protections: [{
            type: 'range',
            value: [5, 30]
        }],
        description: 'PHL 5-30'
    },
    {
        id: 'OKC_2026_R1_UTH',
        year: 2026,
        round: 1,
        type: 'acquired',
        originalOwner: 'UTH',
        protections: [{
            type: 'range',
            value: [9, 30]
        }],
        description: 'UTH 9-30'
    },
    {
        id: 'OKC_2026_R2_DAL_PHL',
        year: 2026,
        round: 2,
        type: 'acquired',
        originalOwner: 'OKC',
        swapConditions: {
            description: 'Most favorable of OKC, DAL and PHL; second most favorable to HOU and least favorable to SAN',
            involvedTeams: ['OKC', 'DAL', 'PHL', 'HOU', 'SAN'],
            outcome: 'conditional'
        },
        description: 'Most favorable of OKC, DAL and PHL; second most favorable to HOU and least favorable to SAN (via OKC to HOU; via OKC to MIA)'
    },
    {
        id: 'OKC_2026_R2_HOU_COND',
        year: 2026,
        round: 2,
        type: 'conditional',
        originalOwner: 'HOU',
        conditionalRules: {
            condition: 'HOU pick',
            requirement: 'if HOU 1-4 in 2026'
        },
        description: 'HOU if HOU 1-4 in 2026'
    },
    
    // 2027
    {
        id: 'OKC_2027_R1_DEN_LAC_SWAP',
        year: 2027,
        round: 1,
        type: 'swap',
        originalOwner: 'OKC',
        swapConditions: {
            description: 'Two most/more favorable of OKC, DEN 6-30 and LAC',
            involvedTeams: ['OKC', 'DEN', 'LAC'],
            outcome: 'conditional'
        },
        description: 'Two most / more favorable of OKC, DEN 6-30 and LAC (via OKC swap of OKC or DEN for LAC)'
    },
    {
        id: 'OKC_2027_R1_PHL_COND',
        year: 2027,
        round: 1,
        type: 'conditional',
        originalOwner: 'PHL',
        protections: [{
            type: 'range',
            value: [5, 30]
        }],
        conditionalRules: {
            condition: 'PHL 5-30',
            requirement: 'if not already settled'
        },
        description: 'PHL 5-30 if not already settled'
    },
    {
        id: 'OKC_2027_R2_COMPLEX1',
        year: 2027,
        round: 2,
        type: 'swap',
        originalOwner: 'OKC',
        swapConditions: {
            description: 'Most favorable of OKC, HOU, IND and MIA; second and third most favorable to NYK; more favorable of SAN and least favorable to SAN then other to MIA',
            involvedTeams: ['OKC', 'HOU', 'IND', 'MIA', 'NYK', 'SAN'],
            outcome: 'conditional'
        },
        description: 'Most favorable of OKC, HOU, IND and MIA; second and third most favorable to NYK; more favorable of (i) SAN and (ii) least favorable of OKC, HOU, IND and MIA to SAN then other to MIA (via HOU to DET to OKC to NYK; via MIA to OKC to UTH to SAN to MIA)'
    },
    {
        id: 'OKC_2027_R2_PHL_COND',
        year: 2027,
        round: 2,
        type: 'conditional',
        originalOwner: 'PHL',
        conditionalRules: {
            condition: 'PHL pick',
            requirement: 'if PHL has not conveyed 1st round pick to OKC by 2027'
        },
        description: 'PHL if PHL has not conveyed 1st round pick to OKC by 2027'
    },
    
    // 2028
    {
        id: 'OKC_2028_R1_DAL_SWAP',
        year: 2028,
        round: 1,
        type: 'swap',
        originalOwner: 'OKC',
        swapConditions: {
            description: 'OKC or DAL pick',
            involvedTeams: ['OKC', 'DAL'],
            outcome: 'conditional'
        },
        description: 'Own or swap for DAL'
    },
    {
        id: 'OKC_2028_R1_DEN_COND',
        year: 2028,
        round: 1,
        type: 'conditional',
        originalOwner: 'DEN',
        protections: [{
            type: 'range',
            value: [6, 30]
        }],
        conditionalRules: {
            condition: 'DEN 6-30',
            requirement: 'if not already settled'
        },
        description: 'DEN 6-30 if not already settled'
    },
    {
        id: 'OKC_2028_R2_OWN',
        year: 2028,
        round: 2,
        type: 'own',
        originalOwner: 'OKC',
        description: 'Own'
    },
    {
        id: 'OKC_2028_R2_MIL',
        year: 2028,
        round: 2,
        type: 'acquired',
        originalOwner: 'MIL',
        description: 'MIL (via BRK to HOU)'
    },
    {
        id: 'OKC_2028_R2_UTH',
        year: 2028,
        round: 2,
        type: 'acquired',
        originalOwner: 'UTH',
        description: 'UTH'
    },
    
    // 2029
    {
        id: 'OKC_2029_R1_OWN',
        year: 2029,
        round: 1,
        type: 'own',
        originalOwner: 'OKC',
        description: 'Own'
    },
    {
        id: 'OKC_2029_R1_DEN_COND1',
        year: 2029,
        round: 1,
        type: 'conditional',
        originalOwner: 'DEN',
        protections: [{
            type: 'range',
            value: [6, 30]
        }],
        conditionalRules: {
            condition: 'DEN 6-30',
            requirement: 'if not already settled; or DEN 6-30 if DEN has conveyed a first potential 1st round pick to OKC by 2027'
        },
        description: 'DEN 6-30 if not already settled; or DEN 6-30 if DEN has conveyed a first potential 1st round pick to OKC by 2027'
    },
    {
        id: 'OKC_2029_R2_OWN',
        year: 2029,
        round: 2,
        type: 'own',
        originalOwner: 'OKC',
        description: 'Own'
    },
    {
        id: 'OKC_2029_R2_ATL',
        year: 2029,
        round: 2,
        type: 'acquired',
        originalOwner: 'ATL',
        description: 'ATL'
    },
    {
        id: 'OKC_2029_R2_BOS',
        year: 2029,
        round: 2,
        type: 'acquired',
        originalOwner: 'BOS',
        description: 'BOS'
    },
    {
        id: 'OKC_2029_R2_DEN_COND',
        year: 2029,
        round: 2,
        type: 'conditional',
        originalOwner: 'DEN',
        conditionalRules: {
            condition: 'DEN pick',
            requirement: 'if DEN has not conveyed a first potential 1st round pick to OKC by 2029'
        },
        description: 'DEN if DEN has not conveyed a first potential 1st round pick to OKC by 2029'
    },
    {
        id: 'OKC_2029_R2_HOU',
        year: 2029,
        round: 2,
        type: 'acquired',
        originalOwner: 'HOU',
        description: 'HOU'
    },
    {
        id: 'OKC_2029_R2_MIA',
        year: 2029,
        round: 2,
        type: 'acquired',
        originalOwner: 'MIA',
        description: 'MIA'
    },
    
    // 2030
    {
        id: 'OKC_2030_R1_OWN',
        year: 2030,
        round: 1,
        type: 'own',
        originalOwner: 'OKC',
        description: 'Own'
    },
    {
        id: 'OKC_2030_R1_DEN_COND',
        year: 2030,
        round: 1,
        type: 'conditional',
        originalOwner: 'DEN',
        protections: [{
            type: 'range',
            value: [6, 30]
        }],
        conditionalRules: {
            condition: 'DEN 6-30',
            requirement: 'if not already settled and if DEN has conveyed a first potential 1st round pick to OKC by 2028'
        },
        description: 'DEN 6-30 if not already settled and if DEN has conveyed a first potential 1st round pick to OKC by 2028'
    },
    {
        id: 'OKC_2030_R2_OWN',
        year: 2030,
        round: 2,
        type: 'own',
        originalOwner: 'OKC',
        description: 'Own'
    },
    {
        id: 'OKC_2030_R2_DEN',
        year: 2030,
        round: 2,
        type: 'acquired',
        originalOwner: 'DEN',
        acquiredFrom: 'CHA',
        description: 'DEN (via CHA)'
    },
    {
        id: 'OKC_2030_R2_HOU',
        year: 2030,
        round: 2,
        type: 'acquired',
        originalOwner: 'HOU',
        description: 'HOU'
    },
    {
        id: 'OKC_2030_R2_MIA',
        year: 2030,
        round: 2,
        type: 'acquired',
        originalOwner: 'MIA',
        description: 'MIA'
    },
    
    // 2031
    {
        id: 'OKC_2031_R1_OWN',
        year: 2031,
        round: 1,
        type: 'own',
        originalOwner: 'OKC',
        description: 'Own'
    },
    {
        id: 'OKC_2031_R2_OWN',
        year: 2031,
        round: 2,
        type: 'own',
        originalOwner: 'OKC',
        description: 'Own'
    },
    {
        id: 'OKC_2031_R2_NOP_ORL',
        year: 2031,
        round: 2,
        type: 'acquired',
        originalOwner: 'NOP',
        swapConditions: {
            description: 'Less favorable of NOP and ORL',
            involvedTeams: ['NOP', 'ORL'],
            outcome: 'less_favorable'
        },
        description: 'Less favorable of NOP and ORL (via ORL swap for NOP)'
    }
];

// Orlando Magic draft picks - only picks they actually own
const orlandoMagicOwnedPicks: OwnedDraftPick[] = [
    // 2025
    {
        id: 'ORL_2025_R1_OWN',
        year: 2025,
        round: 1,
        type: 'own',
        originalOwner: 'ORL',
        description: 'ORL (Own) #16'
    },
    {
        id: 'ORL_2025_R1_DEN',
        year: 2025,
        round: 1,
        type: 'acquired',
        originalOwner: 'DEN',
        description: 'DEN #25'
    },
    {
        id: 'ORL_2025_R2_OWN',
        year: 2025,
        round: 2,
        type: 'own',
        originalOwner: 'ORL',
        description: 'ORL (Own) #46'
    },
    {
        id: 'ORL_2025_R2_BOS',
        year: 2025,
        round: 2,
        type: 'acquired',
        originalOwner: 'BOS',
        description: 'BOS #57'
    },
    
    // 2026
    {
        id: 'ORL_2026_R1_COMPLEX1',
        year: 2026,
        round: 1,
        type: 'swap',
        originalOwner: 'ORL',
        swapConditions: {
            description: 'More favorable of ORL and less favorable of PHX and WAS 1-8 [or PHX if WAS not conveyable]; more favorable of MEM and least/less favorable of ORL, PHX and WAS 1-8 to MEM; least favorable to CHA',
            involvedTeams: ['ORL', 'PHX', 'WAS', 'MEM', 'CHA'],
            outcome: 'conditional'
        },
        description: 'More favorable of (i) ORL and (ii) less favorable of PHX and WAS 1-8 [or (ii) PHX if WAS not conveyable]; more favorable of (i) MEM and (ii) least / less favorable of ORL, PHX and WAS 1-8 to MEM; least favorable of ORL, PHX, WAS 1-8 and MEM to CHA (via WAS swap for PHX; via ORL swap for PHX or WAS; via MEM swap for PHX, WAS or ORL; via PHX to CHA)'
    },
    {
        id: 'ORL_2026_R2_DET_MIL_SWAP',
        year: 2026,
        round: 2,
        type: 'swap',
        originalOwner: 'ORL',
        swapConditions: {
            description: 'Two most favorable of ORL, DET and MIL then other to NYK',
            involvedTeams: ['ORL', 'DET', 'MIL', 'NYK'],
            outcome: 'conditional'
        },
        description: 'Two most favorable of ORL, DET and MIL then other to NYK (via DET to LAC to ORL; via ORL to PHX to BRK to NYK)'
    },
    
    // 2027
    {
        id: 'ORL_2027_R1_OWN',
        year: 2027,
        round: 1,
        type: 'own',
        originalOwner: 'ORL',
        description: 'Own'
    },
    {
        id: 'ORL_2027_R2_OWN',
        year: 2027,
        round: 2,
        type: 'own',
        originalOwner: 'ORL',
        description: 'Own'
    },
    {
        id: 'ORL_2027_R2_BOS',
        year: 2027,
        round: 2,
        type: 'acquired',
        originalOwner: 'BOS',
        description: 'BOS'
    },
    
    // 2028
    {
        id: 'ORL_2028_R1_OWN',
        year: 2028,
        round: 1,
        type: 'own',
        originalOwner: 'ORL',
        description: 'Own'
    },
    {
        id: 'ORL_2028_R2_OWN',
        year: 2028,
        round: 2,
        type: 'own',
        originalOwner: 'ORL',
        description: 'Own'
    },
    {
        id: 'ORL_2028_R2_LAL_WAS',
        year: 2028,
        round: 2,
        type: 'acquired',
        originalOwner: 'LAL',
        swapConditions: {
            description: 'More favorable of LAL and WAS',
            involvedTeams: ['LAL', 'WAS'],
            outcome: 'more_favorable'
        },
        description: 'More favorable of LAL and WAS (via LAL)'
    },
    
    // 2029
    {
        id: 'ORL_2029_R1_OWN',
        year: 2029,
        round: 1,
        type: 'own',
        originalOwner: 'ORL',
        description: 'Own'
    },
    {
        id: 'ORL_2029_R2_OWN',
        year: 2029,
        round: 2,
        type: 'own',
        originalOwner: 'ORL',
        description: 'Own'
    },
    
    // 2030
    {
        id: 'ORL_2030_R1_OWN',
        year: 2030,
        round: 1,
        type: 'own',
        originalOwner: 'ORL',
        description: 'Own'
    },
    {
        id: 'ORL_2030_R2_NOP_SWAP',
        year: 2030,
        round: 2,
        type: 'swap',
        originalOwner: 'ORL',
        swapConditions: {
            description: 'ORL or NOP pick',
            involvedTeams: ['ORL', 'NOP'],
            outcome: 'conditional'
        },
        description: 'Own or swap for NOP'
    },
    {
        id: 'ORL_2030_R2_MIL',
        year: 2030,
        round: 2,
        type: 'acquired',
        originalOwner: 'MIL',
        description: 'MIL'
    },
    
    // 2031
    {
        id: 'ORL_2031_R1_OWN',
        year: 2031,
        round: 1,
        type: 'own',
        originalOwner: 'ORL',
        description: 'Own'
    },
    {
        id: 'ORL_2031_R2_NOP_SWAP',
        year: 2031,
        round: 2,
        type: 'swap',
        originalOwner: 'ORL',
        swapConditions: {
            description: 'More favorable of ORL and NOP then other to OKC',
            involvedTeams: ['ORL', 'NOP', 'OKC'],
            outcome: 'conditional'
        },
        description: 'More favorable of ORL and NOP then other to OKC (via ORL swap for NOP)'
    }
];

// Philadelphia Sixers draft picks - only picks they actually own
const philadelphia76ersOwnedPicks: OwnedDraftPick[] = [
    // 2025
    {
        id: 'PHL_2025_R1_OWN',
        year: 2025,
        round: 1,
        type: 'own',
        originalOwner: 'PHL',
        description: 'PHL (Own) #3'
    },
    {
        id: 'PHL_2025_R2_OWN',
        year: 2025,
        round: 2,
        type: 'own',
        originalOwner: 'PHL',
        description: 'PHL (Own) #35 (via PHL to OKC to CHA; via PHL or DEN to DAL or MIN; via DAL to PHL)'
    },
    
    // 2026
    {
        id: 'PHL_2026_R1_PROTECTED',
        year: 2026,
        round: 1,
        type: 'own',
        originalOwner: 'PHL',
        protections: [{
            type: 'range',
            value: [1, 4]
        }],
        description: '1-4 Own; 5-30 to OKC'
    },
    {
        id: 'PHL_2026_R2_SWAP',
        year: 2026,
        round: 2,
        type: 'swap',
        originalOwner: 'PHL',
        swapConditions: {
            description: 'Most favorable of PHL, OKC and DAL to OKC; second most favorable to HOU and least favorable to SAN',
            involvedTeams: ['PHL', 'OKC', 'DAL', 'HOU', 'SAN'],
            outcome: 'conditional'
        },
        description: 'Most favorable of PHL, OKC and DAL to OKC; second most favorable to HOU and least favorable to SAN (via OKC to HOU; via OKC to MIA)'
    },
    
    // 2027
    {
        id: 'PHL_2027_R1_PROTECTED',
        year: 2027,
        round: 1,
        type: 'own',
        originalOwner: 'PHL',
        protections: [{
            type: 'range',
            value: [1, 4]
        }],
        conditionalRules: {
            condition: 'Protection changes based on 2025 conveyance',
            requirement: '1-4 Own; 5-30 to OKC if not already settled; or 1-8 Own; 9-30 to BRK if PHL conveys 1st round pick to OKC in 2025'
        },
        description: '1-4 Own; 5-30 to OKC if not already settled; or 1-8 Own; 9-30 to BRK if PHL conveys 1st round pick to OKC in 2025'
    },
    {
        id: 'PHL_2027_R2_CONDITIONAL',
        year: 2027,
        round: 2,
        type: 'conditional',
        originalOwner: 'PHL',
        conditionalRules: {
            condition: 'PHL second round pick',
            requirement: 'if PHL has not conveyed 1st round pick to OKC by 2027'
        },
        description: 'To OKC if PHL has not conveyed 1st round pick to OKC by 2027'
    },
    {
        id: 'PHL_2027_R2_GSW_PHX',
        year: 2027,
        round: 2,
        type: 'acquired',
        originalOwner: 'GSW',
        swapConditions: {
            description: 'More favorable of GOS and PHX',
            involvedTeams: ['GSW', 'PHX'],
            outcome: 'more_favorable'
        },
        description: 'More favorable of GOS and PHX (via WAS)'
    },
    
    // 2028
    {
        id: 'PHL_2028_R1_PROTECTED',
        year: 2028,
        round: 1,
        type: 'own',
        originalOwner: 'PHL',
        protections: [{
            type: 'range',
            value: [1, 8]
        }],
        description: '1-8 Own; if (i) PHL 9-30, if PHL does not convey 1st round pick to BRK in 2027 and if PHL has conveyed 1st round pick to OKC by 2026, is third most favorable and (ii) NYK is most or second most favorable of PHL 9-30 if conveyable, PHX, BRK and NYK, then most and third most favorable to BRK; or most / two most favorable to BRK in all other scenarios; least favorable of PHX, BRK and NYK to NYK if NYK and / or if PHL 9-30, if conveyable, is less favorable than PHX and BRK; or second most favorable of PHX, BRK and NYK to NYK in all other scenarios; more favorable of (i) WAS and (ii) least / less favorable of PHL 9-30 if conveyable, PHX and BRK to WAS then other to PHX [WAS can then swap with MIL] (via BRK swap of BRK or PHL for PHX; via BRK swap of BRK or PHX for NYK; via WAS swap for PHX, BRK or PHL)'
    },
    {
        id: 'PHL_2028_R1_LAC',
        year: 2028,
        round: 1,
        type: 'acquired',
        originalOwner: 'LAC',
        description: 'LAC'
    },
    {
        id: 'PHL_2028_R2_CONDITIONAL',
        year: 2028,
        round: 2,
        type: 'conditional',
        originalOwner: 'PHL',
        conditionalRules: {
            condition: 'PHL second round pick',
            requirement: 'if PHL has not conveyed 1st round pick to BRK by 2028'
        },
        description: 'To BRK if PHL has not conveyed 1st round pick to BRK by 2028'
    },
    {
        id: 'PHL_2028_R2_DET',
        year: 2028,
        round: 2,
        type: 'acquired',
        originalOwner: 'DET',
        protections: [{
            type: 'range',
            value: [56, 60]
        }],
        description: 'DET 56-60'
    },
    {
        id: 'PHL_2028_R2_GSW',
        year: 2028,
        round: 2,
        type: 'acquired',
        originalOwner: 'GSW',
        description: 'GOS (via POR to WAS)'
    },
    
    // 2029
    {
        id: 'PHL_2029_R1_LAC_SWAP',
        year: 2029,
        round: 1,
        type: 'swap',
        originalOwner: 'PHL',
        swapConditions: {
            description: 'PHL or LAC 4-30 pick',
            involvedTeams: ['PHL', 'LAC'],
            outcome: 'conditional'
        },
        description: 'Own or swap for LAC 4-30'
    },
    {
        id: 'PHL_2029_R2_OWN',
        year: 2029,
        round: 2,
        type: 'own',
        originalOwner: 'PHL',
        description: 'Own'
    },
    
    // 2030
    {
        id: 'PHL_2030_R1_OWN',
        year: 2030,
        round: 1,
        type: 'own',
        originalOwner: 'PHL',
        description: 'Own'
    },
    {
        id: 'PHL_2030_R2_PHX_POR',
        year: 2030,
        round: 2,
        type: 'acquired',
        originalOwner: 'PHX',
        swapConditions: {
            description: 'More favorable of PHX and POR',
            involvedTeams: ['PHX', 'POR'],
            outcome: 'more_favorable'
        },
        description: 'More favorable of PHX and POR (via WAS)'
    },
    {
        id: 'PHL_2030_R2_WAS',
        year: 2030,
        round: 2,
        type: 'acquired',
        originalOwner: 'WAS',
        description: 'WAS'
    },
    
    // 2031
    {
        id: 'PHL_2031_R1_OWN',
        year: 2031,
        round: 1,
        type: 'own',
        originalOwner: 'PHL',
        description: 'Own'
    },
    {
        id: 'PHL_2031_R2_OWN',
        year: 2031,
        round: 2,
        type: 'own',
        originalOwner: 'PHL',
        description: 'Own'
    }
];

// Phoenix Suns draft picks - only picks they actually own
const phoenixSunsOwnedPicks: OwnedDraftPick[] = [
    // 2025
    {
        id: 'PHX_2025_R1_CLE',
        year: 2025,
        round: 1,
        type: 'acquired',
        originalOwner: 'CLE',
        acquiredFrom: 'UTH',
        description: 'CLE #29 (via UTH)'
    },
    {
        id: 'PHX_2025_R2_DEN',
        year: 2025,
        round: 2,
        type: 'acquired',
        originalOwner: 'DEN',
        description: 'DEN #52 (via MIN to CHA)'
    },
    
    // 2026
    {
        id: 'PHX_2026_R1_COMPLEX',
        year: 2026,
        round: 1,
        type: 'swap',
        originalOwner: 'PHX',
        swapConditions: {
            description: 'Least favorable of PHX, WAS 1-8, ORL and MEM to CHA; more favorable of PHX and WAS 1-8 to WAS; more favorable of ORL and less favorable of PHX and WAS 1-8 to ORL; more favorable of MEM and least/less favorable of PHX, WAS 1-8 and ORL to MEM',
            involvedTeams: ['PHX', 'WAS', 'ORL', 'MEM', 'CHA'],
            outcome: 'conditional'
        },
        description: 'Least favorable of PHX, WAS 1-8, ORL and MEM to CHA; more favorable of PHX and WAS 1-8 to WAS [or neither to WAS if WAS not conveyable]; more favorable of (i) ORL and (ii) less favorable of PHX and WAS 1-8 [or (ii) PHX if WAS not conveyable] to ORL; more favorable of (i) MEM and (ii) least / less favorable of PHX, WAS 1-8 and ORL to MEM (via WAS swap for PHX; via ORL swap for PHX or WAS; via MEM swap for PHX, WAS or ORL; via PHX to CHA)'
    },
    {
        id: 'PHX_2026_R2_DEN_GSW',
        year: 2026,
        round: 2,
        type: 'acquired',
        originalOwner: 'DEN',
        swapConditions: {
            description: 'Less favorable of DEN and GOS',
            involvedTeams: ['DEN', 'GSW'],
            outcome: 'less_favorable'
        },
        description: 'Less favorable of DEN and GOS (via DEN to PHX to CHA; via GOS to ATL to OKC to NYK to CHA)'
    },
    
    // 2027
    {
        id: 'PHX_2027_R1_UTH_CLE_MIN',
        year: 2027,
        round: 1,
        type: 'acquired',
        originalOwner: 'UTH',
        swapConditions: {
            description: 'Least favorable of UTH, CLE and MIN',
            involvedTeams: ['UTH', 'CLE', 'MIN'],
            outcome: 'less_favorable'
        },
        description: 'Least favorable of UTH, CLE and MIN (via CLE and MIN to UTH)'
    },
    {
        id: 'PHX_2027_R2_GSW_SWAP',
        year: 2027,
        round: 2,
        type: 'swap',
        originalOwner: 'PHX',
        swapConditions: {
            description: 'More favorable of PHX and GOS to PHL then other to WAS',
            involvedTeams: ['PHX', 'GSW', 'PHL', 'WAS'],
            outcome: 'conditional'
        },
        description: 'More favorable of PHX and GOS to PHL then other to WAS (via WAS)'
    },
    
    // 2028
    {
        id: 'PHX_2028_R1_COMPLEX',
        year: 2028,
        round: 1,
        type: 'swap',
        originalOwner: 'PHX',
        swapConditions: {
            description: 'Extremely complex multi-team scenario with WAS, PHL, BRK, NYK involving multiple conditional outcomes',
            involvedTeams: ['PHX', 'WAS', 'PHL', 'BRK', 'NYK'],
            outcome: 'conditional'
        },
        description: 'Less favorable of (i) WAS and (ii) least / less favorable of PHX, PHL 9-30 if PHL does not convey 1st round pick to BRK in 2027 and if PHL has conveyed 1st round pick to OKC by 2026, and BRK then other to WAS; if (i) PHL 9-30, if conveyable, is third most favorable and (ii) NYK is most or second most favorable of PHX, BRK and PHL 9-30 if conveyable, and NYK, then most and third most favorable to BRK; or most / two most favorable to BRK in all other scenarios; least favorable of PHX, BRK and NYK to NYK if NYK and / or if PHL 9-30, if conveyable, is less favorable than PHX and BRK; or second most favorable of PHX, BRK and NYK to NYK in all other scenarios [WAS can then swap with MIL] (via BRK swap of BRK or PHL for PHX; via BRK swap of BRK or PHX for NYK; via WAS swap for PHX, BRK or PHL)'
    },
    {
        id: 'PHX_2028_R2_IND_SWAP',
        year: 2028,
        round: 2,
        type: 'swap',
        originalOwner: 'PHX',
        swapConditions: {
            description: 'More favorable of PHX and IND to IND then other to NYK',
            involvedTeams: ['PHX', 'IND', 'NYK'],
            outcome: 'conditional'
        },
        description: 'More favorable of PHX and IND to IND then other to NYK (via IND)'
    },
    
    // 2029
    {
        id: 'PHX_2029_R1_HOU_DAL_SWAP',
        year: 2029,
        round: 1,
        type: 'swap',
        originalOwner: 'PHX',
        swapConditions: {
            description: 'Two most favorable of PHX, DAL and HOU to HOU then other to BRK',
            involvedTeams: ['PHX', 'DAL', 'HOU', 'BRK'],
            outcome: 'conditional'
        },
        description: 'Two most favorable of PHX, DAL and HOU to HOU then other to BRK (via DAL and PHX to BRK; via DAL or PHX to HOU; via HOU swap for DAL or PHX)'
    },
    {
        id: 'PHX_2029_R1_UTH_CLE_MIN',
        year: 2029,
        round: 1,
        type: 'acquired',
        originalOwner: 'UTH',
        swapConditions: {
            description: 'Least/less favorable of UTH, CLE and MIN 6-30',
            involvedTeams: ['UTH', 'CLE', 'MIN'],
            outcome: 'less_favorable'
        },
        description: 'Least / less favorable of UTH, CLE and MIN 6-30 (via CLE and MIN to UTH)'
    },
    
    // 2030
    {
        id: 'PHX_2030_R1_WAS_MEM_SWAP',
        year: 2030,
        round: 1,
        type: 'swap',
        originalOwner: 'PHX',
        swapConditions: {
            description: 'Least favorable of PHX, WAS and MEM; more favorable of PHX and WAS to WAS; more favorable of MEM and less favorable of PHX and WAS to MEM',
            involvedTeams: ['PHX', 'WAS', 'MEM'],
            outcome: 'conditional'
        },
        description: 'Least favorable of PHX, WAS and MEM; more favorable of PHX and WAS to WAS; more favorable of (i) MEM and (ii) less favorable of PHX and WAS to MEM (via WAS swap for PHX; via MEM swap for PHX or WAS)'
    },
    {
        id: 'PHX_2030_R2_POR_SWAP',
        year: 2030,
        round: 2,
        type: 'swap',
        originalOwner: 'PHX',
        swapConditions: {
            description: 'More favorable of PHX and POR to PHL then other to WAS',
            involvedTeams: ['PHX', 'POR', 'PHL', 'WAS'],
            outcome: 'conditional'
        },
        description: 'More favorable of PHX and POR to PHL then other to WAS (via WAS)'
    }
];

// Portland Trail Blazers draft picks - only picks they actually own
const portlandTrailBlazersOwnedPicks: OwnedDraftPick[] = [
    // 2025
    {
        id: 'POR_2025_R1_OWN',
        year: 2025,
        round: 1,
        type: 'own',
        originalOwner: 'POR',
        description: 'POR (Own) #11'
    },
    
    // 2026
    {
        id: 'POR_2026_R1_PROTECTED',
        year: 2026,
        round: 1,
        type: 'own',
        originalOwner: 'POR',
        protections: [{
            type: 'range',
            value: [1, 14]
        }],
        description: '1-14 Own; 15-30 to CHI'
    },
    {
        id: 'POR_2026_R2_COMPLEX1',
        year: 2026,
        round: 2,
        type: 'swap',
        originalOwner: 'POR',
        swapConditions: {
            description: 'Most favorable of POR, NOP, MIN and NYK to BOS; less favorable of POR and NOP to SAN; less favorable of more favorable POR/NOP and more favorable MIN/NYK to WAS',
            involvedTeams: ['POR', 'NOP', 'MIN', 'NYK', 'BOS', 'SAN', 'WAS'],
            outcome: 'conditional'
        },
        description: 'Most favorable of POR, NOP, MIN and NYK to BOS; less favorable of POR and NOP to SAN; less favorable of (i) more favorable of POR and NOP and (ii) more favorable of MIN and NYK to WAS (via NOP to POR to NOP; via POR to DET; via MIN to NYK; via NOP to SAN; via DET to BOS; via DET to WAS)'
    },
    {
        id: 'POR_2026_R2_MEM',
        year: 2026,
        round: 2,
        type: 'acquired',
        originalOwner: 'MEM',
        protections: [{
            type: 'range',
            value: [43, 60]
        }],
        description: 'MEM 43-60 (via UTH to GOS)'
    },
    
    // 2027
    {
        id: 'POR_2027_R1_PROTECTED',
        year: 2027,
        round: 1,
        type: 'own',
        originalOwner: 'POR',
        protections: [{
            type: 'range',
            value: [1, 14]
        }],
        conditionalRules: {
            condition: 'POR 1-14',
            requirement: 'if not already settled'
        },
        description: '1-14 Own; 15-30 to CHI if not already settled'
    },
    {
        id: 'POR_2027_R2_NOP_SWAP',
        year: 2027,
        round: 2,
        type: 'swap',
        originalOwner: 'POR',
        swapConditions: {
            description: 'Less favorable of POR and NOP then other to CHA [POR may convey to HOU]; then less favorable of POR and NOP to HOU if either or both 56-60',
            involvedTeams: ['POR', 'NOP', 'CHA', 'HOU'],
            outcome: 'conditional'
        },
        description: 'Less favorable of POR and NOP then other to CHA [POR may convey to HOU; see following]; then less favorable of POR and NOP to HOU if either or both 56-60 (via POR to NOP to CHA; via POR to BOS to HOU)'
    },
    {
        id: 'POR_2027_R2_MIN',
        year: 2027,
        round: 2,
        type: 'acquired',
        originalOwner: 'MIN',
        description: 'MIN (via HOU to OKC to NYK)'
    },
    
    // 2028
    {
        id: 'POR_2028_R1_MIL_SWAP',
        year: 2028,
        round: 1,
        type: 'swap',
        originalOwner: 'POR',
        protections: [{
            type: 'range',
            value: [1, 14]
        }],
        swapConditions: {
            description: 'POR 1-14 or swap for MIL; 15-30 to CHI if not already settled; or Own or swap for MIL if POR has conveyed 1st round pick to CHI by 2027',
            involvedTeams: ['POR', 'MIL', 'CHI'],
            outcome: 'conditional'
        },
        description: '1-14 Own or swap for MIL; 15-30 to CHI if not already settled; or Own or swap for MIL if POR has conveyed 1st round pick to CHI by 2027 [WAS can then swap with MIL]'
    },
    {
        id: 'POR_2028_R2_CONDITIONAL',
        year: 2028,
        round: 2,
        type: 'conditional',
        originalOwner: 'POR',
        conditionalRules: {
            condition: 'POR second round pick',
            requirement: 'if POR has not conveyed 1st round pick to CHI by 2028'
        },
        description: 'To CHI if POR has not conveyed 1st round pick to CHI by 2028'
    },
    
    // 2029
    {
        id: 'POR_2029_R1_BOS_MIL_SWAP',
        year: 2029,
        round: 1,
        type: 'swap',
        originalOwner: 'POR',
        swapConditions: {
            description: 'Most and least favorable of POR, BOS and MIL; second most favorable to WAS',
            involvedTeams: ['POR', 'BOS', 'MIL', 'WAS'],
            outcome: 'conditional'
        },
        description: 'Most and least favorable of POR, BOS and MIL; second most favorable to WAS (via BOS to POR; via MIL to POR; via POR to WAS)'
    },
    {
        id: 'POR_2029_R2_IND_WAS',
        year: 2029,
        round: 2,
        type: 'acquired',
        originalOwner: 'IND',
        swapConditions: {
            description: 'Less favorable of IND and WAS',
            involvedTeams: ['IND', 'WAS'],
            outcome: 'less_favorable'
        },
        description: 'Less favorable of IND and WAS (via IND to NYK)'
    },
    
    // 2030
    {
        id: 'POR_2030_R1_MIL_SWAP',
        year: 2030,
        round: 1,
        type: 'swap',
        originalOwner: 'POR',
        swapConditions: {
            description: 'POR or MIL pick',
            involvedTeams: ['POR', 'MIL'],
            outcome: 'conditional'
        },
        description: 'Own or swap for MIL'
    },
    {
        id: 'POR_2030_R2_PHX_SWAP',
        year: 2030,
        round: 2,
        type: 'swap',
        originalOwner: 'POR',
        swapConditions: {
            description: 'More favorable of POR and PHX to PHL then other to WAS',
            involvedTeams: ['POR', 'PHX', 'PHL', 'WAS'],
            outcome: 'conditional'
        },
        description: 'More favorable of POR and PHX to PHL then other to WAS (via WAS)'
    },
    {
        id: 'POR_2030_R2_NYK',
        year: 2030,
        round: 2,
        type: 'acquired',
        originalOwner: 'NYK',
        description: 'NYK'
    },
    
    // 2031
    {
        id: 'POR_2031_R1_OWN',
        year: 2031,
        round: 1,
        type: 'own',
        originalOwner: 'POR',
        description: 'Own'
    },
    {
        id: 'POR_2031_R2_OWN',
        year: 2031,
        round: 2,
        type: 'own',
        originalOwner: 'POR',
        description: 'Own'
    }
];

// Sacramento Kings draft picks - only picks they actually own
const sacramentoKingsOwnedPicks: OwnedDraftPick[] = [
    // 2025
    {
        id: 'SAC_2025_R2_CHI',
        year: 2025,
        round: 2,
        type: 'acquired',
        originalOwner: 'CHI',
        description: 'CHI #42 (via SAN; then via CHI removal of protection)'
    },
    
    // 2026
    {
        id: 'SAC_2026_R1_OWN',
        year: 2026,
        round: 1,
        type: 'own',
        originalOwner: 'SAC',
        description: 'Own'
    },
    {
        id: 'SAC_2026_R2_OWN',
        year: 2026,
        round: 2,
        type: 'own',
        originalOwner: 'SAC',
        description: 'Own'
    },
    {
        id: 'SAC_2026_R2_CHA',
        year: 2026,
        round: 2,
        type: 'acquired',
        originalOwner: 'CHA',
        description: 'CHA (via NYK to ATL to SAN)'
    },
    
    // 2027
    {
        id: 'SAC_2027_R1_OWN',
        year: 2027,
        round: 1,
        type: 'own',
        originalOwner: 'SAC',
        description: 'Own'
    },
    {
        id: 'SAC_2027_R1_SAN',
        year: 2027,
        round: 1,
        type: 'acquired',
        originalOwner: 'SAN',
        description: 'SAN'
    },
    {
        id: 'SAC_2027_R2_OWN',
        year: 2027,
        round: 2,
        type: 'own',
        originalOwner: 'SAC',
        description: 'Own'
    },
    {
        id: 'SAC_2027_R2_CHA',
        year: 2027,
        round: 2,
        type: 'acquired',
        originalOwner: 'CHA',
        description: 'CHA (via NYK to ATL to SAN)'
    },
    
    // 2028
    {
        id: 'SAC_2028_R1_OWN',
        year: 2028,
        round: 1,
        type: 'own',
        originalOwner: 'SAC',
        description: 'Own'
    },
    
    // 2029
    {
        id: 'SAC_2029_R1_OWN',
        year: 2029,
        round: 1,
        type: 'own',
        originalOwner: 'SAC',
        description: 'Own'
    },
    
    // 2030
    {
        id: 'SAC_2030_R1_OWN',
        year: 2030,
        round: 1,
        type: 'own',
        originalOwner: 'SAC',
        description: 'Own'
    },
    
    // 2031
    {
        id: 'SAC_2031_R1_SAN_SWAP',
        year: 2031,
        round: 1,
        type: 'swap',
        originalOwner: 'SAC',
        swapConditions: {
            description: 'SAC or SAN pick',
            involvedTeams: ['SAC', 'SAN'],
            outcome: 'conditional'
        },
        description: 'Own or SAN (via SAN swap for SAC)'
    },
    {
        id: 'SAC_2031_R2_MIN',
        year: 2031,
        round: 2,
        type: 'acquired',
        originalOwner: 'MIN',
        acquiredFrom: 'SAN',
        description: 'MIN (via SAN)'
    }
];

// San Antonio Spurs draft picks - only picks they actually own
const sanAntonioSpursOwnedPicks: OwnedDraftPick[] = [
    // 2025
    {
        id: 'SAN_2025_R1_OWN',
        year: 2025,
        round: 1,
        type: 'own',
        originalOwner: 'SAN',
        description: 'SAN (Own) #2'
    },
    {
        id: 'SAN_2025_R1_ATL',
        year: 2025,
        round: 1,
        type: 'acquired',
        originalOwner: 'ATL',
        description: 'ATL #14'
    },
    {
        id: 'SAN_2025_R2_OWN',
        year: 2025,
        round: 2,
        type: 'own',
        originalOwner: 'SAN',
        description: 'SAN (Own) #38'
    },
    
    // 2026
    {
        id: 'SAN_2026_R1_ATL_SWAP',
        year: 2026,
        round: 1,
        type: 'swap',
        originalOwner: 'SAN',
        swapConditions: {
            description: 'SAN or ATL pick [ATL may convey to CLE]',
            involvedTeams: ['SAN', 'ATL', 'CLE'],
            outcome: 'conditional'
        },
        description: 'Own or swap for ATL [ATL may convey to CLE]'
    },
    {
        id: 'SAN_2026_R2_IND_MIA',
        year: 2026,
        round: 2,
        type: 'swap',
        originalOwner: 'SAN',
        swapConditions: {
            description: 'More favorable of SAN and less favorable of IND and MIA then other to MIN',
            involvedTeams: ['SAN', 'IND', 'MIA', 'MIN'],
            outcome: 'conditional'
        },
        description: 'More favorable of (i) SAN and (ii) less favorable of IND and MIA then other to MIN (via MIA to IND; via SAN swap for IND or MIA)'
    },
    {
        id: 'SAN_2026_R2_OKC_DAL_PHL',
        year: 2026,
        round: 2,
        type: 'acquired',
        originalOwner: 'OKC',
        swapConditions: {
            description: 'Least favorable of OKC, DAL and PHL',
            involvedTeams: ['OKC', 'DAL', 'PHL'],
            outcome: 'less_favorable'
        },
        description: 'Least favorable of OKC, DAL and PHL (via OKC to MIA)'
    },
    {
        id: 'SAN_2026_R2_NOP_POR',
        year: 2026,
        round: 2,
        type: 'acquired',
        originalOwner: 'NOP',
        swapConditions: {
            description: 'Less favorable of NOP and POR',
            involvedTeams: ['NOP', 'POR'],
            outcome: 'less_favorable'
        },
        description: 'Less favorable of NOP and POR (via NOP to POR to NOP; via NOP to SAN)'
    },
    {
        id: 'SAN_2026_R2_UTH',
        year: 2026,
        round: 2,
        type: 'acquired',
        originalOwner: 'UTH',
        protections: [{
            type: 'range',
            value: [31, 55]
        }],
        description: 'UTH 31-55 (via MIN)'
    },
    
    // 2027
    {
        id: 'SAN_2027_R1_ATL',
        year: 2027,
        round: 1,
        type: 'acquired',
        originalOwner: 'ATL',
        description: 'ATL'
    },
    {
        id: 'SAN_2027_R2_COMPLEX',
        year: 2027,
        round: 2,
        type: 'swap',
        originalOwner: 'SAN',
        swapConditions: {
            description: 'More favorable of SAN and least favorable of OKC, HOU, IND and MIA then other to MIA',
            involvedTeams: ['SAN', 'OKC', 'HOU', 'IND', 'MIA'],
            outcome: 'conditional'
        },
        description: 'More favorable of (i) SAN and (ii) least favorable of OKC, HOU, IND and MIA then other to MIA (via HOU to DET to OKC; via MIA to OKC to UTH to SAN to MIA)'
    },
    
    // 2028
    {
        id: 'SAN_2028_R1_BOS_SWAP',
        year: 2028,
        round: 1,
        type: 'swap',
        originalOwner: 'SAN',
        swapConditions: {
            description: 'SAN or BOS 2-30 pick',
            involvedTeams: ['SAN', 'BOS'],
            outcome: 'conditional'
        },
        description: 'Own or swap for BOS 2-30'
    },
    {
        id: 'SAN_2028_R2_OWN',
        year: 2028,
        round: 2,
        type: 'own',
        originalOwner: 'SAN',
        description: 'Own'
    },
    {
        id: 'SAN_2028_R2_MIN',
        year: 2028,
        round: 2,
        type: 'acquired',
        originalOwner: 'MIN',
        description: 'MIN'
    },
    {
        id: 'SAN_2028_R2_NOP',
        year: 2028,
        round: 2,
        type: 'acquired',
        originalOwner: 'NOP',
        description: 'NOP'
    },
    {
        id: 'SAN_2028_R2_BOS_COND',
        year: 2028,
        round: 2,
        type: 'conditional',
        originalOwner: 'BOS',
        protections: [{
            type: 'range',
            value: [31, 45]
        }],
        conditionalRules: {
            condition: 'BOS 31-45',
            requirement: 'if BOS 1 in 2028'
        },
        description: 'BOS 31-45 if BOS 1 in 2028'
    },
    
    // 2029
    {
        id: 'SAN_2029_R1_OWN',
        year: 2029,
        round: 1,
        type: 'own',
        originalOwner: 'SAN',
        description: 'Own'
    },
    {
        id: 'SAN_2029_R2_OWN',
        year: 2029,
        round: 2,
        type: 'own',
        originalOwner: 'SAN',
        description: 'Own'
    },
    {
        id: 'SAN_2029_R2_LAC',
        year: 2029,
        round: 2,
        type: 'acquired',
        originalOwner: 'LAC',
        acquiredFrom: 'PHL',
        description: 'LAC (via PHL)'
    },
    {
        id: 'SAN_2029_R2_NOP',
        year: 2029,
        round: 2,
        type: 'acquired',
        originalOwner: 'NOP',
        description: 'NOP'
    },
    
    // 2030
    {
        id: 'SAN_2030_R1_DAL_MIN_SWAP',
        year: 2030,
        round: 1,
        type: 'swap',
        originalOwner: 'SAN',
        swapConditions: {
            description: 'Most/more favorable of SAN, DAL and MIN 2-30; less favorable of SAN and DAL to DAL; less favorable of MIN 2-30 and more favorable of SAN and DAL to MIN',
            involvedTeams: ['SAN', 'DAL', 'MIN'],
            outcome: 'conditional'
        },
        description: 'Most / more favorable of SAN, DAL and MIN 2-30; less favorable of SAN and DAL to DAL; less favorable of (i) MIN 2-30 and (ii) more favorable of SAN and DAL [or MIN if MIN not conveyable] to MIN (via SAN swap for DAL; via SAN swap of SAN or DAL for MIN)'
    },
    {
        id: 'SAN_2030_R2_OWN',
        year: 2030,
        round: 2,
        type: 'own',
        originalOwner: 'SAN',
        description: 'Own'
    },
    {
        id: 'SAN_2030_R2_CLE',
        year: 2030,
        round: 2,
        type: 'acquired',
        originalOwner: 'CLE',
        description: 'CLE'
    },
    
    // 2031
    {
        id: 'SAN_2031_R1_SAC_SWAP',
        year: 2031,
        round: 1,
        type: 'swap',
        originalOwner: 'SAN',
        swapConditions: {
            description: 'SAN or SAC pick',
            involvedTeams: ['SAN', 'SAC'],
            outcome: 'conditional'
        },
        description: 'Own or swap for SAC'
    },
    {
        id: 'SAN_2031_R2_OWN',
        year: 2031,
        round: 2,
        type: 'own',
        originalOwner: 'SAN',
        description: 'Own'
    },
    {
        id: 'SAN_2031_R2_SAC',
        year: 2031,
        round: 2,
        type: 'acquired',
        originalOwner: 'SAC',
        description: 'SAC'
    }
];

// Toronto Raptors draft picks - only picks they actually own
const torontoRaptorsOwnedPicks: OwnedDraftPick[] = [
    // 2025
    {
        id: 'TOR_2025_R1_OWN',
        year: 2025,
        round: 1,
        type: 'own',
        originalOwner: 'TOR',
        description: 'TOR (Own) #9'
    },
    {
        id: 'TOR_2025_R2_POR',
        year: 2025,
        round: 2,
        type: 'acquired',
        originalOwner: 'POR',
        acquiredFrom: 'SAC',
        description: 'POR #39 (via SAC)'
    },
    
    // 2026
    {
        id: 'TOR_2026_R1_OWN',
        year: 2026,
        round: 1,
        type: 'own',
        originalOwner: 'TOR',
        description: 'Own'
    },
    {
        id: 'TOR_2026_R2_PROTECTED',
        year: 2026,
        round: 2,
        type: 'own',
        originalOwner: 'TOR',
        protections: [{
            type: 'range',
            value: [31, 55]
        }],
        description: '31-55 Own; 56-60 to IND'
    },
    {
        id: 'TOR_2026_R2_LAL',
        year: 2026,
        round: 2,
        type: 'acquired',
        originalOwner: 'LAL',
        description: 'LAL (via CLE to MIA)'
    },
    
    // 2027
    {
        id: 'TOR_2027_R1_OWN',
        year: 2027,
        round: 1,
        type: 'own',
        originalOwner: 'TOR',
        description: 'Own'
    },
    {
        id: 'TOR_2027_R2_OWN',
        year: 2027,
        round: 2,
        type: 'own',
        originalOwner: 'TOR',
        description: 'Own'
    },
    
    // 2028
    {
        id: 'TOR_2028_R1_OWN',
        year: 2028,
        round: 1,
        type: 'own',
        originalOwner: 'TOR',
        description: 'Own'
    },
    {
        id: 'TOR_2028_R2_OWN',
        year: 2028,
        round: 2,
        type: 'own',
        originalOwner: 'TOR',
        description: 'Own'
    },
    
    // 2029
    {
        id: 'TOR_2029_R1_OWN',
        year: 2029,
        round: 1,
        type: 'own',
        originalOwner: 'TOR',
        description: 'Own'
    },
    {
        id: 'TOR_2029_R2_OWN',
        year: 2029,
        round: 2,
        type: 'own',
        originalOwner: 'TOR',
        description: 'Own'
    },
    
    // 2030
    {
        id: 'TOR_2030_R1_OWN',
        year: 2030,
        round: 1,
        type: 'own',
        originalOwner: 'TOR',
        description: 'Own'
    },
    {
        id: 'TOR_2030_R2_OWN',
        year: 2030,
        round: 2,
        type: 'own',
        originalOwner: 'TOR',
        description: 'Own'
    },
    
    // 2031
    {
        id: 'TOR_2031_R1_OWN',
        year: 2031,
        round: 1,
        type: 'own',
        originalOwner: 'TOR',
        description: 'Own'
    }
];

// Utah Jazz draft picks - only picks they actually own
const utahJazzOwnedPicks: OwnedDraftPick[] = [
    // 2025
    {
        id: 'UTH_2025_R1_OWN',
        year: 2025,
        round: 1,
        type: 'own',
        originalOwner: 'UTH',
        description: 'UTH (Own) #5'
    },
    {
        id: 'UTH_2025_R1_MIN',
        year: 2025,
        round: 1,
        type: 'acquired',
        originalOwner: 'MIN',
        description: 'MIN #21'
    },
    {
        id: 'UTH_2025_R2_DAL',
        year: 2025,
        round: 2,
        type: 'acquired',
        originalOwner: 'DAL',
        description: 'DAL #43'
    },
    {
        id: 'UTH_2025_R2_LAC',
        year: 2025,
        round: 2,
        type: 'acquired',
        originalOwner: 'LAC',
        description: 'LAC #53 (via MIN to CHA)(via LAL)'
    },
    
    // 2026
    {
        id: 'UTH_2026_R1_COMPLEX',
        year: 2026,
        round: 1,
        type: 'swap',
        originalOwner: 'UTH',
        swapConditions: {
            description: 'Most/more favorable of UTH 1-8, MIN and CLE; less favorable of UTH 1-8 and MIN to MIN; less favorable of CLE and more favorable of UTH 1-8 and MIN to CLE; UTH 9-30 to OKC',
            involvedTeams: ['UTH', 'MIN', 'CLE', 'OKC'],
            outcome: 'conditional'
        },
        description: 'Most / more favorable of UTH 1-8, MIN and CLE; less favorable of UTH 1-8 and MIN to MIN; less favorable of (i) CLE and (ii) more favorable of UTH 1-8 and MIN [or CLE if UTH not conveyable] to CLE [CLE may convey to ATL]; UTH 9-30 to OKC (via UTH swap for MIN; via UTH swap of UTH or MIN for CLE)'
    },
    
    // 2027
    {
        id: 'UTH_2027_R1_CLE_MIN_SWAP',
        year: 2027,
        round: 1,
        type: 'swap',
        originalOwner: 'UTH',
        swapConditions: {
            description: 'Two most favorable of UTH, CLE and MIN then other to PHX',
            involvedTeams: ['UTH', 'CLE', 'MIN', 'PHX'],
            outcome: 'conditional'
        },
        description: 'Two most favorable of UTH, CLE and MIN then other to PHX (via CLE and MIN to UTH)'
    },
    {
        id: 'UTH_2027_R1_LAL',
        year: 2027,
        round: 1,
        type: 'acquired',
        originalOwner: 'LAL',
        protections: [{
            type: 'range',
            value: [5, 30]
        }],
        description: 'LAL 5-30'
    },
    {
        id: 'UTH_2027_R2_IND_NOP_COND',
        year: 2027,
        round: 2,
        type: 'conditional',
        originalOwner: 'UTH',
        conditionalRules: {
            condition: 'UTH pick goes to IND or NOP',
            requirement: 'To IND if IND has conveyed 1st round pick to NOP by 2027, or to NOP if IND has not conveyed 1st round pick to NOP by 2027'
        },
        description: 'To IND if IND has conveyed 1st round pick to NOP by 2027, or to NOP if IND has not conveyed 1st round pick to NOP by 2027 (via CLE to IND to TOR)'
    },
    {
        id: 'UTH_2027_R2_LAL_COND',
        year: 2027,
        round: 2,
        type: 'conditional',
        originalOwner: 'LAL',
        conditionalRules: {
            condition: 'LAL pick',
            requirement: 'if LAL does not convey 1st round pick to UTH in 2027'
        },
        description: 'LAL if LAL does not convey 1st round pick to UTH in 2027'
    },
    
    // 2028
    {
        id: 'UTH_2028_R1_CLE_SWAP',
        year: 2028,
        round: 1,
        type: 'swap',
        originalOwner: 'UTH',
        swapConditions: {
            description: 'UTH or CLE pick [CLE may convey UTH to ATL]',
            involvedTeams: ['UTH', 'CLE', 'ATL'],
            outcome: 'conditional'
        },
        description: 'Own or swap for CLE [CLE may convey UTH to ATL]'
    },
    {
        id: 'UTH_2028_R2_COMPLEX',
        year: 2028,
        round: 2,
        type: 'acquired',
        originalOwner: 'DET',
        swapConditions: {
            description: 'Least favorable of DET 31-55, less favorable of CHA and LAC, MIA conditional, and NYK',
            involvedTeams: ['DET', 'CHA', 'LAC', 'MIA', 'NYK'],
            outcome: 'less_favorable'
        },
        description: 'Least favorable of (i) DET 31-55, (ii) less favorable of CHA and LAC (via CHA to DAL to DET), (iii) MIA if DAL conveys 1st round pick to CHA in 2027 (via SAN to DAL to DET) and (iv) NYK (via DET)'
    },
    
    // 2029
    {
        id: 'UTH_2029_R1_CLE_MIN_SWAP',
        year: 2029,
        round: 1,
        type: 'swap',
        originalOwner: 'UTH',
        swapConditions: {
            description: 'Most/two most favorable of UTH, CLE and MIN 6-30 then other to PHX',
            involvedTeams: ['UTH', 'CLE', 'MIN', 'PHX'],
            outcome: 'conditional'
        },
        description: 'Most / two most favorable of UTH, CLE and MIN 6-30 then other to PHX (via CLE and MIN to UTH)'
    },
    {
        id: 'UTH_2029_R2_OWN',
        year: 2029,
        round: 2,
        type: 'own',
        originalOwner: 'UTH',
        description: 'Own'
    },
    {
        id: 'UTH_2029_R2_MIN_COND',
        year: 2029,
        round: 2,
        type: 'conditional',
        originalOwner: 'MIN',
        conditionalRules: {
            condition: 'MIN pick',
            requirement: 'if MIN does not convey 1st round pick to UTH in 2029'
        },
        description: 'MIN if MIN does not convey 1st round pick to UTH in 2029'
    },
    
    // 2030
    {
        id: 'UTH_2030_R1_OWN',
        year: 2030,
        round: 1,
        type: 'own',
        originalOwner: 'UTH',
        description: 'Own'
    },
    {
        id: 'UTH_2030_R2_OWN',
        year: 2030,
        round: 2,
        type: 'own',
        originalOwner: 'UTH',
        description: 'Own'
    },
    {
        id: 'UTH_2030_R2_LAC',
        year: 2030,
        round: 2,
        type: 'acquired',
        originalOwner: 'LAC',
        description: 'LAC'
    },
    
    // 2031
    {
        id: 'UTH_2031_R1_OWN',
        year: 2031,
        round: 1,
        type: 'own',
        originalOwner: 'UTH',
        description: 'Own'
    },
    {
        id: 'UTH_2031_R1_PHX',
        year: 2031,
        round: 1,
        type: 'acquired',
        originalOwner: 'PHX',
        description: 'PHX'
    },
    {
        id: 'UTH_2031_R2_OWN',
        year: 2031,
        round: 2,
        type: 'own',
        originalOwner: 'UTH',
        description: 'Own'
    },
    {
        id: 'UTH_2031_R2_MIA_IND',
        year: 2031,
        round: 2,
        type: 'acquired',
        originalOwner: 'MIA',
        swapConditions: {
            description: 'More favorable of MIA and IND',
            involvedTeams: ['MIA', 'IND'],
            outcome: 'more_favorable'
        },
        description: 'More favorable of MIA and IND (via MIA swap for IND)'
    }
];

// Washington Wizards draft picks - only picks they actually own
const washingtonWizardsOwnedPicks: OwnedDraftPick[] = [
    // 2025
    {
        id: 'WAS_2025_R1_OWN',
        year: 2025,
        round: 1,
        type: 'own',
        originalOwner: 'WAS',
        description: 'WAS (Own) #6'
    },
    {
        id: 'WAS_2025_R1_MEM',
        year: 2025,
        round: 1,
        type: 'acquired',
        originalOwner: 'MEM',
        description: 'MEM #18'
    },
    {
        id: 'WAS_2025_R2_PHX',
        year: 2025,
        round: 2,
        type: 'acquired',
        originalOwner: 'PHX',
        description: 'PHX #40'
    },
    
    // 2026
    {
        id: 'WAS_2026_R1_PHX_SWAP',
        year: 2026,
        round: 1,
        type: 'swap',
        originalOwner: 'WAS',
        protections: [{
            type: 'range',
            value: [1, 8]
        }],
        swapConditions: {
            description: 'WAS 1-8 or PHX pick',
            involvedTeams: ['WAS', 'PHX'],
            outcome: 'conditional'
        },
        description: '1-8 Own or swap for PHX'
    },
    {
        id: 'WAS_2026_R1_COMPLEX1',
        year: 2026,
        round: 1,
        type: 'swap',
        originalOwner: 'WAS',
        swapConditions: {
            description: 'More favorable of ORL and less favorable of WAS 1-8 and PHX to ORL; more favorable of MEM and least/less favorable of WAS 1-8, PHX and ORL to MEM; least favorable to CHA',
            involvedTeams: ['WAS', 'ORL', 'PHX', 'MEM', 'CHA'],
            outcome: 'conditional'
        },
        description: 'more favorable of (i) ORL and (ii) less favorable of WAS 1-8 and PHX [or (ii) PHX if WAS not conveyable] to ORL; more favorable of (i) MEM and (ii) least / less favorable of WAS 1-8, PHX and ORL to MEM; least favorable of WAS 1-8, PHX, ORL and MEM to CHA (via WAS swap for PHX; via ORL swap for PHX or WAS; via MEM swap for PHX, WAS or ORL; via PHX to CHA)'
    },
    {
        id: 'WAS_2026_R1_OKC_HOU_LAC',
        year: 2026,
        round: 1,
        type: 'acquired',
        originalOwner: 'OKC',
        swapConditions: {
            description: 'Least/less favorable of OKC, HOU 5-30 and LAC',
            involvedTeams: ['OKC', 'HOU', 'LAC'],
            outcome: 'less_favorable'
        },
        description: 'Least / less favorable of OKC, HOU 5-30 and LAC (via OKC to PHL)'
    },
    {
        id: 'WAS_2026_R2_CHI',
        year: 2026,
        round: 2,
        type: 'acquired',
        originalOwner: 'CHI',
        description: 'CHI'
    },
    {
        id: 'WAS_2026_R2_COMPLEX1',
        year: 2026,
        round: 2,
        type: 'acquired',
        originalOwner: 'MIN',
        swapConditions: {
            description: 'Less favorable of more favorable of MIN and NYK and more favorable of NOP and POR',
            involvedTeams: ['MIN', 'NYK', 'NOP', 'POR'],
            outcome: 'conditional'
        },
        description: 'Less favorable of (i) more favorable of MIN and NYK and (ii) more favorable of NOP and POR (via MIN to NYK; via NOP to POR to NOP; via POR to DET; via DET to WAS)'
    },
    {
        id: 'WAS_2026_R2_PHX',
        year: 2026,
        round: 2,
        type: 'acquired',
        originalOwner: 'PHX',
        description: 'PHX'
    },
    
    // 2027
    {
        id: 'WAS_2027_R1_OWN',
        year: 2027,
        round: 1,
        type: 'own',
        originalOwner: 'WAS',
        description: 'Own'
    },
    {
        id: 'WAS_2027_R2_BRK_DAL',
        year: 2027,
        round: 2,
        type: 'acquired',
        originalOwner: 'BRK',
        swapConditions: {
            description: 'More favorable of BRK and DAL',
            involvedTeams: ['BRK', 'DAL'],
            outcome: 'more_favorable'
        },
        description: 'More favorable of BRK and DAL (via DAL to BRK to DET; via DET to WAS)'
    },
    {
        id: 'WAS_2027_R2_CHI',
        year: 2027,
        round: 2,
        type: 'acquired',
        originalOwner: 'CHI',
        protections: [{
            type: 'range',
            value: [31, 50]
        }],
        description: 'CHI 31-50'
    },
    {
        id: 'WAS_2027_R2_GSW_PHX',
        year: 2027,
        round: 2,
        type: 'acquired',
        originalOwner: 'GSW',
        swapConditions: {
            description: 'Less favorable of GOS and PHX',
            involvedTeams: ['GSW', 'PHX'],
            outcome: 'less_favorable'
        },
        description: 'Less favorable of GOS and PHX'
    },
    
    // 2028
    {
        id: 'WAS_2028_R1_COMPLEX',
        year: 2028,
        round: 1,
        type: 'swap',
        originalOwner: 'WAS',
        swapConditions: {
            description: 'Extremely complex scenario involving WAS, BRK, PHL, PHX, MIL, POR with multiple conditional outcomes',
            involvedTeams: ['WAS', 'BRK', 'PHL', 'PHX', 'MIL', 'POR'],
            outcome: 'conditional'
        },
        description: 'More favorable of (i) more favorable of (a) WAS and (b) least / less favorable of BRK, PHL 9-30 if PHL does not convey 1st round pick to BRK in 2027 and if PHL has conveyed 1st round pick to OKC by 2026, and PHX and (ii) less favorable of MIL and POR 1-14 if POR has not conveyed 1st round pick to CHI by 2027 [or (ii) MIL if POR not conveyable], then other to MIL; or More favorable of (i) more favorable of (a) WAS and (b) least / less favorable of BRK, PHL 9-30 if PHL does not convey 1st round pick to BRK in 2027 and if PHL has conveyed 1st round pick to OKC by 2026, and PHX and (ii) less favorable of MIL and POR if POR has conveyed 1st round pick to CHI by 2027, then other to MIL (via POR swap for MIL; via BRK swap of BRK or PHL for PHX; via WAS swap for PHX, BRK or PHL; via WAS swap of WAS, BRK, PHL or PHX for MIL or POR)'
    },
    {
        id: 'WAS_2028_R2_LAL_SWAP',
        year: 2028,
        round: 2,
        type: 'swap',
        originalOwner: 'WAS',
        swapConditions: {
            description: 'Less favorable of WAS and LAL then other to ORL',
            involvedTeams: ['WAS', 'LAL', 'ORL'],
            outcome: 'conditional'
        },
        description: 'Less favorable of WAS and LAL then other to ORL (via WAS to LAL to ORL; via LAL to WAS)'
    },
    {
        id: 'WAS_2028_R2_DEN',
        year: 2028,
        round: 2,
        type: 'acquired',
        originalOwner: 'DEN',
        protections: [{
            type: 'range',
            value: [34, 60]
        }],
        description: 'DEN 34-60 (via SAN to SAC)'
    },
    
    // 2029
    {
        id: 'WAS_2029_R1_OWN',
        year: 2029,
        round: 1,
        type: 'own',
        originalOwner: 'WAS',
        description: 'Own'
    },
    {
        id: 'WAS_2029_R1_POR_BOS_MIL',
        year: 2029,
        round: 1,
        type: 'acquired',
        originalOwner: 'POR',
        swapConditions: {
            description: 'Second most favorable of POR, BOS and MIL',
            involvedTeams: ['POR', 'BOS', 'MIL'],
            outcome: 'conditional'
        },
        description: 'Second most favorable of POR, BOS and MIL (via BOS to POR; via MIL to POR; via POR to WAS)'
    },
    {
        id: 'WAS_2029_R2_IND_SWAP',
        year: 2029,
        round: 2,
        type: 'swap',
        originalOwner: 'WAS',
        swapConditions: {
            description: 'More favorable of WAS and IND to IND then other to POR',
            involvedTeams: ['WAS', 'IND', 'POR'],
            outcome: 'conditional'
        },
        description: 'More favorable of WAS and IND to IND then other to POR (via IND to NYK)'
    },
    {
        id: 'WAS_2029_R2_LAL',
        year: 2029,
        round: 2,
        type: 'acquired',
        originalOwner: 'LAL',
        description: 'LAL'
    },
    {
        id: 'WAS_2029_R2_SAC',
        year: 2029,
        round: 2,
        type: 'acquired',
        originalOwner: 'SAC',
        description: 'SAC'
    },
    
    // 2030
    {
        id: 'WAS_2030_R1_PHX_SWAP',
        year: 2030,
        round: 1,
        type: 'swap',
        originalOwner: 'WAS',
        swapConditions: {
            description: 'More favorable of WAS and PHX',
            involvedTeams: ['WAS', 'PHX'],
            outcome: 'more_favorable'
        },
        description: 'More favorable of WAS and PHX'
    },
    {
        id: 'WAS_2030_R1_MEM_SWAP',
        year: 2030,
        round: 1,
        type: 'swap',
        originalOwner: 'WAS',
        swapConditions: {
            description: 'More favorable of MEM and less favorable of WAS and PHX to MEM then other to PHX',
            involvedTeams: ['WAS', 'PHX', 'MEM'],
            outcome: 'conditional'
        },
        description: 'more favorable of (i) MEM and (ii) less favorable of WAS and PHX to MEM then other to PHX (via WAS swap for PHX; via MEM swap for WAS or PHX)'
    },
    {
        id: 'WAS_2030_R1_GSW',
        year: 2030,
        round: 1,
        type: 'acquired',
        originalOwner: 'GSW',
        protections: [{
            type: 'range',
            value: [21, 30]
        }],
        description: 'GOS 21-30'
    },
    {
        id: 'WAS_2030_R2_GSW_COND',
        year: 2030,
        round: 2,
        type: 'conditional',
        originalOwner: 'GSW',
        conditionalRules: {
            condition: 'GOS pick',
            requirement: 'if GOS does not convey 1st round pick to WAS in 2030'
        },
        description: 'GOS if GOS does not convey 1st round pick to WAS in 2030'
    },
    {
        id: 'WAS_2030_R2_PHX_POR',
        year: 2030,
        round: 2,
        type: 'acquired',
        originalOwner: 'PHX',
        swapConditions: {
            description: 'Less favorable of PHX and POR',
            involvedTeams: ['PHX', 'POR'],
            outcome: 'less_favorable'
        },
        description: 'Less favorable of PHX and POR'
    },
    
    // 2031
    {
        id: 'WAS_2031_R1_OWN',
        year: 2031,
        round: 1,
        type: 'own',
        originalOwner: 'WAS',
        description: 'Own'
    },
    {
        id: 'WAS_2031_R2_OWN',
        year: 2031,
        round: 2,
        type: 'own',
        originalOwner: 'WAS',
        description: 'Own'
    }
];

// Function to get team's owned picks
export function getTeamOwnedPicks(teamId: string): OwnedDraftPick[] {
    switch (teamId) {
        case 'ATL':
            return atlantaHawksOwnedPicks;
        case 'BOS':
            return bostonCelticsOwnedPicks;
        case 'BKN': // Brooklyn Nets - mapping BKN to BRK
        case 'BRK':
            return brooklynNetsOwnedPicks;
        case 'CHA':
            return charlotteHornetsOwnedPicks;
        case 'CHI':
            return chicagoBullsOwnedPicks;
        case 'CLE':
            return clevelandCavaliersOwnedPicks;
        case 'DAL':
            return dallasMavericksOwnedPicks;
        case 'DEN':
            return denverNuggetsOwnedPicks;
        case 'DET':
            return detroitPistonsOwnedPicks;
        case 'GSW':
            return goldenStateWarriorsOwnedPicks;
        case 'HOU':
            return houstonRocketsOwnedPicks;
        case 'IND':
            return indianaPacersOwnedPicks;
        case 'LAC':
            return losAngelesClippersOwnedPicks;
        case 'LAL':
            return losAngelesLakersOwnedPicks;
        case 'MEM':
            return memphisGrizzliesOwnedPicks;
        case 'MIA':
            return miamiHeatOwnedPicks;
        case 'MIL':
            return milwaukeeBucksOwnedPicks;
        case 'MIN':
            return minnesotaTimberwolvesOwnedPicks;
        case 'NOP':
            return newOrleansPelicansOwnedPicks;
        case 'NYK':
            return newYorkKnicksOwnedPicks;
        case 'OKC':
            return oklahomaCityThunderOwnedPicks;
        case 'ORL':
            return orlandoMagicOwnedPicks;
        case 'PHI': // Philadelphia 76ers - mapping PHI to PHL
        case 'PHL':
            return philadelphia76ersOwnedPicks;
        case 'PHX':
            return phoenixSunsOwnedPicks;
        case 'POR':
            return portlandTrailBlazersOwnedPicks;
        case 'SAC':
            return sacramentoKingsOwnedPicks;
        case 'SAS': // San Antonio Spurs - mapping SAS to SAN
        case 'SAN':
            return sanAntonioSpursOwnedPicks;
        case 'TOR':
            return torontoRaptorsOwnedPicks;
        case 'UTA': // Utah Jazz - mapping UTA to UTH
        case 'UTH':
            return utahJazzOwnedPicks;
        case 'WAS':
            return washingtonWizardsOwnedPicks;
        default:
            return [];
    }
}

// Export the main data
export const TEAM_DRAFT_PICKS = {
    ATL: atlantaHawksOwnedPicks,
    BOS: bostonCelticsOwnedPicks,
    BRK: brooklynNetsOwnedPicks,
    CHA: charlotteHornetsOwnedPicks,
    CHI: chicagoBullsOwnedPicks,
    CLE: clevelandCavaliersOwnedPicks,
    DAL: dallasMavericksOwnedPicks,
    DEN: denverNuggetsOwnedPicks,
    DET: detroitPistonsOwnedPicks,
    GSW: goldenStateWarriorsOwnedPicks,
    HOU: houstonRocketsOwnedPicks,
    IND: indianaPacersOwnedPicks,
    LAC: losAngelesClippersOwnedPicks,
    LAL: losAngelesLakersOwnedPicks,
    MEM: memphisGrizzliesOwnedPicks,
    MIA: miamiHeatOwnedPicks,
    MIL: milwaukeeBucksOwnedPicks,
    MIN: minnesotaTimberwolvesOwnedPicks,
    NOP: newOrleansPelicansOwnedPicks,
    NYK: newYorkKnicksOwnedPicks,
    OKC: oklahomaCityThunderOwnedPicks,
    ORL: orlandoMagicOwnedPicks,
    PHL: philadelphia76ersOwnedPicks,
    PHX: phoenixSunsOwnedPicks,
    POR: portlandTrailBlazersOwnedPicks,
    SAC: sacramentoKingsOwnedPicks,
    SAN: sanAntonioSpursOwnedPicks,
    TOR: torontoRaptorsOwnedPicks,
    UTH: utahJazzOwnedPicks,
    WAS: washingtonWizardsOwnedPicks
};

// Function to organize picks by year and round
function organizePicks(picks: OwnedDraftPick[]) {
    const organized: { [year: number]: { firstRound?: OwnedDraftPick[]; secondRound?: OwnedDraftPick[] } } = {};
    
    picks.forEach(pick => {
        if (!organized[pick.year]) {
            organized[pick.year] = {};
        }
        
        const roundKey = pick.round === 1 ? 'firstRound' : 'secondRound';
        if (!organized[pick.year][roundKey]) {
            organized[pick.year][roundKey] = [];
        }
        
        organized[pick.year][roundKey]!.push(pick);
    });
    
    return organized;
}

// Function to get organized team draft assets
export function getTeamDraftAssets(teamId: string): TeamDraftAssets {
    const ownedPicks = getTeamOwnedPicks(teamId);
    const organizedPicks = organizePicks(ownedPicks);
    
    return {
        teamId,
        picks: organizedPicks,
        lastUpdated: new Date()
    };
}

// Function to analyze team's draft capital
export function analyzeTeamDraftCapital(teamId: string) {
    const picks = getTeamOwnedPicks(teamId);
    
    const analysis = {
        totalFirstRoundPicks: 0,
        totalSecondRoundPicks: 0,
        ownOriginalPicks: 0,
        acquiredPicks: 0,
        swapPicks: 0,
        conditionalPicks: 0,
        yearlyBreakdown: {} as { [year: number]: { first: number; second: number; details: string[] } }
    };
    
    picks.forEach(pick => {
        // Count by round
        if (pick.round === 1) {
            analysis.totalFirstRoundPicks++;
        } else {
            analysis.totalSecondRoundPicks++;
        }
        
        // Count by type
        switch (pick.type) {
            case 'own':
                analysis.ownOriginalPicks++;
                break;
            case 'acquired':
                analysis.acquiredPicks++;
                break;
            case 'swap':
                analysis.swapPicks++;
                break;
            case 'conditional':
                analysis.conditionalPicks++;
                break;
        }
        
        // Yearly breakdown
        if (!analysis.yearlyBreakdown[pick.year]) {
            analysis.yearlyBreakdown[pick.year] = { first: 0, second: 0, details: [] };
        }
        
        if (pick.round === 1) {
            analysis.yearlyBreakdown[pick.year].first++;
        } else {
            analysis.yearlyBreakdown[pick.year].second++;
        }
        
        analysis.yearlyBreakdown[pick.year].details.push(pick.description);
    });
    
    return analysis;
}

// Function to get picks by type
export function getPicksByType(teamId: string, type: 'own' | 'acquired' | 'swap' | 'conditional'): OwnedDraftPick[] {
    return getTeamOwnedPicks(teamId).filter(pick => pick.type === type);
}

// Function to get picks by year
export function getPicksByYear(teamId: string, year: number): OwnedDraftPick[] {
    return getTeamOwnedPicks(teamId).filter(pick => pick.year === year);
}