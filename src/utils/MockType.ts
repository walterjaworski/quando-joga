export interface Paging {
  current: number;
  total: number;
}

export interface Parameters {
  league: string;
  season: string;
  team: string;
}

export interface Response {
  fixture: Fixture;
  league: League;
  teams: Teams;
  goals: Goals;
  score: Score;
}

export interface Fixture {
  id: number;
  referee: null | string;
  timezone: Timezone;
  date: Date;
  timestamp: number;
  periods: Periods;
  venue: Venue;
  status: Status;
}

export interface Periods {
  first: number | null;
  second: number | null;
}

export interface Status {
  long: Long;
  short: Short;
  elapsed: number | null;
}

export enum Long {
  MatchFinished = "Match Finished",
  MatchPostponed = "Match Postponed",
  NotStarted = "Not Started",
  TimeToBeDefined = "Time to be defined",
}

export enum Short {
  Ft = "FT",
  NS = "NS",
  Pst = "PST",
  Tbd = "TBD",
}

export enum Timezone {
  UTC = "UTC",
}

export interface Venue {
  id: number | null;
  name: string;
  city: string;
}

export interface Teams {
  home: Team;
  away: Team;
}

export interface Team {
  id: number;
  logo: string;
  name: string;
  winner: boolean;
}

export interface Goals {
  home: AwayClass | number | null;
  away: AwayClass | number | null;
}

export interface AwayClass {
  id: number;
  name: string;
  logo: string;
  winner: boolean | null;
}

export interface League {
  id: number;
  name: Name;
  country: Country;
  logo: string;
  flag: string;
  season: number;
  round: string;
}

export enum Country {
  Brazil = "Brazil",
}

export enum Name {
  SerieA = "Serie A",
}

export interface Score {
  halftime: Goals;
  fulltime: Goals;
  extratime: Goals;
  penalty: Goals;
}
