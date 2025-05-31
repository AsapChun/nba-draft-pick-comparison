# NBA Draft Pick Comparison Tool

A web application for calculating and comparing the value of NBA draft picks in potential trade scenarios. This tool assists decision makers in creating and evaluating trade concepts involving draft picks.

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

# Add your OpenAI API key
echo "OPENAI_API_KEY=your_openai_api_key_here" >> .env.local
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This application is deployed on [Vercel](https://vercel.com), which provides seamless deployment for Next.js applications. The production deployment already includes the necessary OpenAI API key configuration.

Vercel automatically builds and deploys your app from your Git repository with:

- **Automatic deployments** on every push to main branch
- **Preview deployments** for pull requests
- **Global CDN** for fast loading worldwide
- **Serverless functions** for optimal performance
- **Environment variables** securely managed

To deploy your own instance:
1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Vercel
3. Add your `OPENAI_API_KEY` to Vercel's environment variables
4. Vercel automatically detects it's a Next.js app and deploys it

## Tech Stack

- **Framework**: Next.js 15.3.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Runtime**: React 19
- **AI**: OpenAI API
- **Deployment**: Vercel

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
```

**Note**: The deployed version on Vercel already has the API key configured, so no additional setup is needed for the live application.
