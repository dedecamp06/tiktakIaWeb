export function Logo() {
  return (
    <a href="/" className="logo" aria-label="TikitakIA, início">
      <img src="/logo.png" alt="" width="36" height="36" />
      <span>
        Tikitak<span className="logo-ia">IA</span>
      </span>
    </a>
  );
}

export function Topo() {
  return (
    <header className="topo">
      <div className="container topo-linha">
        <Logo />
        <nav className="menu" aria-label="Seções">
          <a href="#como-funciona">Como funciona</a>
          <a href="#recursos">Recursos</a>
          <a href="#treinos">Treinos</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>
        <a href="/entrar" className="botao botao-pequeno">Entrar</a>
      </div>
    </header>
  );
}
