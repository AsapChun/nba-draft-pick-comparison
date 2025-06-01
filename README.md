# NBA Draft Pick Comparison Tool

A web application for calculating and comparing the value of NBA draft picks in potential trade scenarios. This tool assists decision makers in creating and evaluating trade concepts involving draft picks.

## Live Application

🚀 **Try the live version**: [https://nba-draft-pick-comparison.vercel.app/](https://nba-draft-pick-comparison.vercel.app/)

The live version is fully configured with all necessary API keys and database connections.

## Features

- **Trade Scenario Builder**: Create scenarios where teams exchange draft picks
- **Trade Evaluation**: Analyze whether trades are balanced or favor one side
- **Draft Pick Valuation**: Systematic approach to value each draft pick powered by AI
- **Save & Compare**: Save trade concepts for comparison with other scenarios

## Example Usage

Evaluate trades like:
- **Team A receives**: Team B's 2026 1st round pick
- **Team B receives**: Team A's 2030 1st round pick + Team A's 2030 2nd round pick

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun
- OpenAI API key (for local development)
- Supabase account and project (for local development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/nba-draft-pick-comparison.git
cd nba-draft-pick-comparison
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
# Create .env.local file
touch .env.local

# Add your API keys
echo "OPENAI_API_KEY=your_openai_api_key_here" >> .env.local
echo "NEXT_PUBLIC_SUPABASE_URL=your_supabase_url" >> .env.local
echo "NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key" >> .env.local
```

4. Set up Supabase database:

Create a table called `trade_scenarios` in your Supabase project with the following SQL:

```sql
CREATE TABLE trade_scenarios (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  team_a_name TEXT NOT NULL,
  team_b_name TEXT NOT NULL,
  team_a_picks JSONB NOT NULL,
  team_b_picks JSONB NOT NULL,
  analysis TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (optional)
ALTER TABLE trade_scenarios ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows all operations (adjust as needed)
CREATE POLICY "Allow all operations" ON trade_scenarios
FOR ALL USING (true);
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Tech Stack

- **Framework**: Next.js 15.3.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Runtime**: React 19
- **AI**: OpenAI API (for trade analysis)
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel

## Implementation Choices

This section explains the key architectural decisions and reasoning behind the technology choices made for this project.

### Frontend Framework: Next.js 15 with React 19
- **Choice**: Next.js with App Router and React Server Components
- **Reasoning**: Provides excellent developer experience with built-in optimization, server-side rendering for better SEO, and seamless API route integration for backend functionality
- **Benefits**: Fast page loads, automatic code splitting, and simplified deployment to Vercel

### Language: TypeScript
- **Choice**: TypeScript over JavaScript
- **Reasoning**: Type safety reduces runtime errors, improves developer experience with better IDE support, and makes the codebase more maintainable as it scales
- **Benefits**: Compile-time error detection, better refactoring capabilities, and self-documenting code

### Styling: Tailwind CSS
- **Choice**: Tailwind CSS over styled-components or CSS modules
- **Reasoning**: Utility-first approach provides rapid prototyping, consistent design system, and smaller bundle sizes through unused CSS purging
- **Benefits**: No CSS naming conflicts, responsive design utilities, and easy customization

### AI Integration: OpenAI API
- **Choice**: OpenAI GPT models for trade analysis
- **Reasoning**: Advanced natural language processing capabilities allow for nuanced trade evaluation that considers multiple factors beyond simple pick values
- **Benefits**: Intelligent analysis, natural language explanations, and ability to incorporate complex basketball knowledge

### Database: Supabase (PostgreSQL)
- **Choice**: Supabase over Firebase or traditional databases
- **Reasoning**: Open-source alternative with PostgreSQL's robustness, real-time subscriptions, built-in authentication, and excellent TypeScript support
- **Benefits**: SQL flexibility, JSONB support for complex data structures, and automatic API generation

### Deployment: Vercel
- **Choice**: Vercel over AWS, Netlify, or traditional hosting
- **Reasoning**: Seamless Next.js integration, automatic deployments, global CDN, and serverless functions that scale automatically
- **Benefits**: Zero-configuration deployment, preview deployments for PRs, and excellent performance optimization

### Data Storage Strategy: JSONB for Pick Data
- **Choice**: Store draft pick arrays as JSONB in PostgreSQL
- **Reasoning**: Flexible schema for varying pick structures while maintaining queryability and atomic operations for trade scenarios
- **Benefits**: Schema flexibility, JSON querying capabilities, and simplified data modeling

## Services Used

### OpenAI API
We use OpenAI's GPT models to provide intelligent trade analysis. The AI evaluates draft pick trades by considering factors like:
- Pick position and round value
- Team needs and projected standings
- Draft class strength
- Historical trade precedents

An OpenAI API token is required for local development to enable trade analysis functionality.

### Supabase
Supabase serves as our backend database for storing and retrieving saved trade scenarios. It provides:
- PostgreSQL database with real-time subscriptions
- Authentication (if needed in future)
- Auto-generated APIs
- Row Level Security

## Deployment

This application is deployed on [Vercel](https://vercel.com), which provides seamless deployment for Next.js applications. The production deployment already includes all necessary API keys and database configurations.

Vercel automatically builds and deploys your app from your Git repository with:

- **Automatic deployments** on every push to main branch
- **Preview deployments** for pull requests
- **Global CDN** for fast loading worldwide
- **Serverless functions** for optimal performance
- **Environment variables** securely managed

To deploy your own instance:
1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Vercel
3. Add your environment variables to Vercel:
   - `OPENAI_API_KEY`
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Vercel automatically detects it's a Next.js app and deploys it

## Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## Environment Variables

For local development, create a `.env.local` file with:

```env
OPENAI_API_KEY=your_openai_api_key_here
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Note**: The deployed version on Vercel already has all API keys and database connections configured, so no additional setup is needed for the live application.

## Future Improvements

### Real-time Draft Pick Data
- **Current**: Using static data for draft picks
- **Future**: Implement real-time scraping of [RealGM's Future Draft Picks](https://basketball.realgm.com/nba/draft/future_drafts/team) and transform the HTML into usable objects for up-to-date pick ownership information

### Enhanced Trade Analysis
- **Current**: Basic AI-powered trade evaluation
- **Future**: Improve analysis accuracy by incorporating:
  - Draft class quality and depth assessment
  - Positional needs analysis for each team
  - Historical performance of similar draft positions
  - Market value trends for draft picks

### Player Trade Integration
- **Current**: Draft picks only
- **Future**: Add player trading capabilities for more comprehensive trade analysis that includes:
  - Player salaries and contract details
  - Player performance metrics
  - Age and potential considerations
  - Salary cap implications

### AI Trade Suggestions
- **Current**: Manual trade creation only
- **Future**: Implement AI-powered trade suggestions that:
  - Analyze team needs and assets
  - Suggest realistic trade scenarios
  - Provide multiple trade options for specific goals
  - Consider league-wide trade patterns and precedents

### Contextual Team Situation Analysis
- **Current**: Trade evaluation without detailed team-specific context
- **Future**: Enhance trade analysis by incorporating real-time team situations:
  - Current roster composition and depth charts
  - Team salary cap situation and luxury tax implications
  - Playoff positioning and championship window timeline
  - Recent team performance and trajectory
  - Coaching staff preferences and system fit
  - Front office trading patterns and philosophy
  - Injury reports and player availability

### Draft Trading Rules & Restrictions Engine
- **Current**: No validation of trade legality or CBA compliance
- **Future**: Implement comprehensive draft trading rules validation:
  - NBA CBA draft pick trading restrictions (Stepien Rule, etc.)
  - Pick protection and conversion scenarios
  - Trade deadline restrictions for draft picks
  - International pick trading limitations
  - Two-round pick and cash considerations rules
  - Future year trading windows and restrictions
  - Conditional pick scenarios and triggers
  - Validation warnings for potentially invalid trades
