export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
      <div className="mx-auto flex h-14 max-w-5xl items-center px-4">
        {/* Logo / Nome */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">
            Quando Joga
          </span>
          <span className="text-xs text-white/60">
            Athlético
          </span>
        </div>

        {/* Espaço futuro (menu, filtros, etc) */}
        <div className="ml-auto text-xs text-white/60">
          Jogos e classificação
        </div>
      </div>
    </header>
  );
}
