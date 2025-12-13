import type { Game } from '../../types/game';

type Props = {
  game: Game;
};

export function GameCard({ game }: Props) {
  const title =
    game.status === 'scheduled'
      ? 'Próximo jogo'
      : 'Último jogo';

  const formattedDate = new Date(game.date).toLocaleDateString(
    'pt-BR',
    {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }
  );

  return (
    <div className="rounded-lg border border-white/10 p-4">
      <span className="text-xs uppercase text-white/60">
        {title}
      </span>

      <div className="mt-2 text-lg font-semibold">
        {game.home}
        {game.score && (
          <>
            {' '}
            {game.score.home} x {game.score.away}{' '}
          </>
        )}
        {game.away}
      </div>

      <div className="mt-1 text-sm text-white/70">
        {formattedDate} • {game.competition}
      </div>

      <div className="mt-1 text-sm text-white/50">
        {game.venue}
      </div>
    </div>
  );
}
