export type GameStatus = 'finished' | 'scheduled';

export type Game = {
  date: string;
  home: string;
  away: string;
  competition: string;
  venue: string;
  isHome: boolean;
  status: GameStatus;
  score?: {
    home: number;
    away: number;
  };
};
