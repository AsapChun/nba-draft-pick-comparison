import { NBATeam } from './types';

export const NBA_TEAMS: NBATeam[] = [
  {
    id: 'ATL',
    name: 'Hawks',
    city: 'Atlanta',
    abbreviation: 'ATL',
    primaryColor: '#e03a3e',
    secondaryColor: '#c1d32f',
  },
  {
    id: 'BOS',
    name: 'Celtics',
    city: 'Boston',
    abbreviation: 'BOS',
    primaryColor: '#007a33',
    secondaryColor: '#ba9653',
  },
  {
    id: 'BKN',
    name: 'Nets',
    city: 'Brooklyn',
    abbreviation: 'BKN',
    primaryColor: '#000000',
    secondaryColor: '#ffffff',
  },
  {
    id: 'CHA',
    name: 'Hornets',
    city: 'Charlotte',
    abbreviation: 'CHA',
    primaryColor: '#1d1160',
    secondaryColor: '#00788c',
  },
  {
    id: 'CHI',
    name: 'Bulls',
    city: 'Chicago',
    abbreviation: 'CHI',
    primaryColor: '#ce1141',
    secondaryColor: '#000000',
  },
  {
    id: 'CLE',
    name: 'Cavaliers',
    city: 'Cleveland',
    abbreviation: 'CLE',
    primaryColor: '#860038',
    secondaryColor: '#fdbb30',
  },
  {
    id: 'DAL',
    name: 'Mavericks',
    city: 'Dallas',
    abbreviation: 'DAL',
    primaryColor: '#00538c',
    secondaryColor: '#002b5e',
  },
  {
    id: 'DEN',
    name: 'Nuggets',
    city: 'Denver',
    abbreviation: 'DEN',
    primaryColor: '#0e2240',
    secondaryColor: '#fec524',
  },
  {
    id: 'DET',
    name: 'Pistons',
    city: 'Detroit',
    abbreviation: 'DET',
    primaryColor: '#c8102e',
    secondaryColor: '#1d42ba',
  },
  {
    id: 'GSW',
    name: 'Warriors',
    city: 'Golden State',
    abbreviation: 'GSW',
    primaryColor: '#1d428a',
    secondaryColor: '#ffc72c',
  },
  {
    id: 'HOU',
    name: 'Rockets',
    city: 'Houston',
    abbreviation: 'HOU',
    primaryColor: '#ce1141',
    secondaryColor: '#000000',
  },
  {
    id: 'IND',
    name: 'Pacers',
    city: 'Indiana',
    abbreviation: 'IND',
    primaryColor: '#002d62',
    secondaryColor: '#fdbb30',
  },
  {
    id: 'LAC',
    name: 'Clippers',
    city: 'LA',
    abbreviation: 'LAC',
    primaryColor: '#c8102e',
    secondaryColor: '#1d428a',
  },
  {
    id: 'LAL',
    name: 'Lakers',
    city: 'Los Angeles',
    abbreviation: 'LAL',
    primaryColor: '#552583',
    secondaryColor: '#fdb927',
  },
  {
    id: 'MEM',
    name: 'Grizzlies',
    city: 'Memphis',
    abbreviation: 'MEM',
    primaryColor: '#5d76a9',
    secondaryColor: '#12173f',
  },
  {
    id: 'MIA',
    name: 'Heat',
    city: 'Miami',
    abbreviation: 'MIA',
    primaryColor: '#98002e',
    secondaryColor: '#f9a01b',
  },
  {
    id: 'MIL',
    name: 'Bucks',
    city: 'Milwaukee',
    abbreviation: 'MIL',
    primaryColor: '#00471b',
    secondaryColor: '#eee1c6',
  },
  {
    id: 'MIN',
    name: 'Timberwolves',
    city: 'Minnesota',
    abbreviation: 'MIN',
    primaryColor: '#0c2340',
    secondaryColor: '#236192',
  },
  {
    id: 'NOP',
    name: 'Pelicans',
    city: 'New Orleans',
    abbreviation: 'NOP',
    primaryColor: '#0c2340',
    secondaryColor: '#c8102e',
  },
  {
    id: 'NYK',
    name: 'Knicks',
    city: 'New York',
    abbreviation: 'NYK',
    primaryColor: '#006bb6',
    secondaryColor: '#f58426',
  },
  {
    id: 'OKC',
    name: 'Thunder',
    city: 'Oklahoma City',
    abbreviation: 'OKC',
    primaryColor: '#007ac1',
    secondaryColor: '#ef3b24',
  },
  {
    id: 'ORL',
    name: 'Magic',
    city: 'Orlando',
    abbreviation: 'ORL',
    primaryColor: '#0077c0',
    secondaryColor: '#c4ced4',
  },
  {
    id: 'PHI',
    name: '76ers',
    city: 'Philadelphia',
    abbreviation: 'PHI',
    primaryColor: '#006bb6',
    secondaryColor: '#ed174c',
  },
  {
    id: 'PHX',
    name: 'Suns',
    city: 'Phoenix',
    abbreviation: 'PHX',
    primaryColor: '#1d1160',
    secondaryColor: '#e56020',
  },
  {
    id: 'POR',
    name: 'Trail Blazers',
    city: 'Portland',
    abbreviation: 'POR',
    primaryColor: '#e03a3e',
    secondaryColor: '#000000',
  },
  {
    id: 'SAC',
    name: 'Kings',
    city: 'Sacramento',
    abbreviation: 'SAC',
    primaryColor: '#5a2d81',
    secondaryColor: '#63727a',
  },
  {
    id: 'SAS',
    name: 'Spurs',
    city: 'San Antonio',
    abbreviation: 'SAS',
    primaryColor: '#c4ced4',
    secondaryColor: '#000000',
  },
  {
    id: 'TOR',
    name: 'Raptors',
    city: 'Toronto',
    abbreviation: 'TOR',
    primaryColor: '#ce1141',
    secondaryColor: '#000000',
  },
  {
    id: 'UTA',
    name: 'Jazz',
    city: 'Utah',
    abbreviation: 'UTA',
    primaryColor: '#002b5c',
    secondaryColor: '#00471b',
  },
  {
    id: 'WAS',
    name: 'Wizards',
    city: 'Washington',
    abbreviation: 'WAS',
    primaryColor: '#002b5c',
    secondaryColor: '#e31837',
  },
];

export const getTeamById = (id: string): NBATeam | undefined => {
  return NBA_TEAMS.find(team => team.id === id);
};

export const generateTeamPicks = (teamId: string, currentYear: number = 2025, yearsOut: number = 6) => {
  const picks = [];
  
  for (let year = currentYear; year < currentYear + yearsOut; year++) {
    // First round pick
    picks.push({
      id: `${teamId}-${year}-1`,
      teamId,
      year,
      round: 1 as const,
      originalTeam: teamId,
    });
    
    // Second round pick
    picks.push({
      id: `${teamId}-${year}-2`,
      teamId,
      year,
      round: 2 as const,
      originalTeam: teamId,
    });
  }
  
  return picks;
};