import { useState, type FormEvent } from "react";
import { Logo } from "./Topo";

// Ainda não existe login de verdade: toda tentativa válida cai no aviso do beta fechado.
const AVISO_BETA = "Apenas convidados têm acesso ao Vestiário.";
const ESPERA_MS = 700;

export function Entrar() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [enviando, setEnviando] = useState(false);

  const entrar = (e: FormEvent) => {
    e.preventDefault();
    if (!usuario.trim() || !senha) {
      setErro("Preencha o usuário e a senha.");
      return;
    }
    setErro("");
    setEnviando(true);
    setTimeout(() => {
      setEnviando(false);
      setErro(AVISO_BETA);
    }, ESPERA_MS);
  };

  return (
    <main className="entrar">
      <div className="entrar-caixa">
        <Logo />
        <div>
          <h1>Entrar no Vestiário</h1>
          <p>Seu painel do TikitakIA</p>
        </div>

        <form className="formulario" onSubmit={entrar} noValidate>
          <label>
            Usuário ou e-mail
            <input
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              autoComplete="username"
              aria-invalid={!!erro && !usuario.trim()}
            />
          </label>
          <label>
            Senha
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              autoComplete="current-password"
              aria-invalid={!!erro && !senha}
            />
          </label>

          {erro && (
            <p className="erro" role="alert">
              {erro}
            </p>
          )}

          <button type="submit" className="botao" disabled={enviando}>
            {enviando ? "Entrando…" : "Entrar"}
          </button>
        </form>

        <p className="entrar-rodape">
          <span className="selo-beta selo-beta-claro">BETA</span> Acesso só para convidados por enquanto.
        </p>
        <p className="entrar-contato">
          Quer um convite? Fale com <a href="mailto:suporte@tikitakia.com.br">suporte@tikitakia.com.br</a>
        </p>
        <a href="/" className="link-voltar">← Voltar ao início</a>
      </div>
    </main>
  );
}
