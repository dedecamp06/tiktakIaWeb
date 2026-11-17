import { Logo } from "./Topo";

export function Rodape() {
  return (
    <footer className="rodape">
      <div className="container rodape-linha">
        <Logo />
        <p>
          Dúvidas ou convite para o beta: <a href="mailto:suporte@tikitakia.com.br">suporte@tikitakia.com.br</a>
          <br />
          <a href="/termos">Termos de Uso</a> · <a href="/privacidade">Política de Privacidade</a>
          <br />
          © 2026 TikitakIA. Foto:{" "}
          <a href="https://unsplash.com/photos/soccer-match-in-a-packed-stadium-at-night-65yjpk2HSlA">Eduard Delputte / Unsplash</a>.
        </p>
      </div>
    </footer>
  );
}
