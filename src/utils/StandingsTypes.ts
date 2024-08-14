export interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  standings: Standing[][];
}

export interface Standing {
  rank: number;
  team: Team;
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string;
  all: Record;
  home: Record;
  away: Record;
  update: string;
}

export interface Team {
  id: number;
  name: string;
  logo: string;
}

export interface Record {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals;
}

export interface Goals {
  for: number;
  against: number;
}
