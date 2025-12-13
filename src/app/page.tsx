import { GameCard } from "./components/ui/GameCard";
import { Game } from "./types/game";

const lastGameMock: Game = {
  date: '2024-12-08T16:00:00',
  home: 'Athlético-PR',
  away: 'Flamengo',
  competition: 'Brasileirão',
  venue: 'Arena da Baixada',
  isHome: true,
  status: 'finished',
  score: {
    home: 2,
    away: 1,
  },
};

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-6">
      <GameCard game={lastGameMock} />
    </main>
  );
}
