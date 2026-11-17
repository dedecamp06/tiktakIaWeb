import { useEffect, useRef, useState } from "react";
import { Prancheta } from "./Prancheta";
import { Logo, Topo } from "./Topo";

const PASSOS = [
  { n: "01", titulo: "Abra o TikitakIA", texto: "Ele roda no seu Windows ao lado do jogo de futebol. Não instala nada dentro do jogo." },
  { n: "02", titulo: "Ele lê o adversário", texto: "Na tela de escalação, ele diz a formação do rival, como ele joga e qual formação usar contra ela." },
  { n: "03", titulo: "Ele fala durante o jogo", texto: "Nos primeiros minutos só observa. Depois diz onde atacar e como defender, de adversário para adversário." },
];

const RECURSOS = [
  { titulo: "Análise pré-jogo", texto: "Formação do rival, estilo de jogo e a sua formação ideal antes de a bola rolar." },
  { titulo: "Leitura ao vivo", texto: "Acompanha a partida pela tela e percebe o padrão do adversário: linha alta, lado aberto, contra-ataque." },
  { titulo: "Comandos de voz", texto: "“Me ajude a ganhar”, “Onde atacar”, “Como defender”, “Silêncio”. Você pergunta, ele responde." },
  { titulo: "Histórico de partidas", texto: "Cada jogo fica salvo com o adversário, o placar e as dicas que funcionaram.", emBreve: true },
  { titulo: "Evolução dos seus jogadores", texto: "Sugere como upar a ficha de cada jogador com base no seu estilo de jogo, para o elenco render do jeito que você joga.", emBreve: true },
  { titulo: "Treinos com pro players", texto: "Vídeos novos com frequência, gravados por jogadores profissionais, para treinar o que o TikitakIA apontou nas suas partidas.", emBreve: true },
];

const TREINOS = [
  { tema: "Saída de bola contra marcação alta", nivel: "Intermediário", duracao: "12 min" },
  { tema: "Como defender o contra-ataque no 4‑2‑2‑2", nivel: "Iniciante", duracao: "9 min" },
  { tema: "Upando o volante para o seu estilo", nivel: "Avançado", duracao: "15 min" },
];

const DUVIDAS = [
  { p: "O TikitakIA mexe no jogo?", r: "Não. Ele só olha a tela, como um programa de gravação, e fala com você. Não altera arquivos, não lê a memória do jogo e não aperta botões." },
  { p: "Funciona com quais jogos?", r: "Com jogos de futebol no PC com Windows, inclusive os que você joga pelo app do Xbox. Ate o momento console não é suportado." },
  { p: "Preciso de quê?", r: "Windows 10 ou 11, microfone e fone de ouvido, e o jogo em modo janela sem borda." },
  { p: "As dicas chegam na hora?", r: "Chegam alguns segundos depois do lance. Por isso ele dá conselho de técnico, não de reflexo." },
  { p: "Como consigo um convite para o beta?", r: "No momento só é possível através de convite direto da equipe do TikitakIA. Entre em contato pelo e-mail suporte@tikitakia.com.br." },
];

// Mesmo texto do áudio em public/fala-exemplo.mp3.
const FALA_EXEMPLO =
  "Beleza, agora vamos ver a formação dele. Ele tá vindo no 4‑3‑3 e gosta de sair no contra-ataque. Então a gente muda pro 4‑2‑2‑2 e fica no contra-ataque também, tá? E segura os laterais lá atrás, sem subir.";

function CartaoVoz() {
  const audio = useRef<HTMLAudioElement>(null);
  const [falando, setFalando] = useState(false);

  useEffect(() => () => audio.current?.pause(), []);

  const alternar = () => {
    const a = audio.current;
    if (!a) return;
    if (falando) {
      a.pause();
      a.currentTime = 0;
    } else {
      void a.play();
    }
  };

  return (
    <div className={`cartao-voz${falando ? " falando" : ""}`}>
      <div className="cartao-voz-topo">
        <span className="ao-vivo">
          <span className="ponto" aria-hidden="true" /> Pré-jogo
        </span>
        <span className="ondas" aria-hidden="true">
          {Array.from({ length: 14 }, (_, i) => (
            <i key={i} style={{ animationDelay: `${(i % 7) * 0.09}s` }} />
          ))}
        </span>
      </div>
      <p className="cartao-voz-texto">“{FALA_EXEMPLO}”</p>
      <audio
        ref={audio}
        src="/fala-exemplo.mp3"
        preload="none"
        onPlay={() => setFalando(true)}
        onPause={() => setFalando(false)}
        onEnded={() => setFalando(false)}
      />
      <button type="button" className="botao botao-claro" onClick={alternar} aria-pressed={falando}>
        {falando ? "■ Parar" : "▶ Ouvir o TikitakIA"}
      </button>
    </div>
  );
}

export function Inicio() {
  return (
    <>
      <Topo />
      <main>
        <section className="heroi">
          <picture className="heroi-foto">
            <source media="(max-width: 860px)" srcSet="/estadio-vertical.jpg" />
            <img src="/estadio.jpg" alt="" />
          </picture>
          <div className="container heroi-grade">
            <div className="heroi-texto">
              <p className="sobretitulo">Técnico de IA para jogos de futebol</p>
              <h1>Um técnico falando no seu ouvido, a partida inteira.</h1>
              <p className="lead">
                O TikitakIA lê o time adversário, assiste ao jogo com você e diz por voz onde atacar e como defender.
              </p>
              <div className="acoes">
                <span className="botao botao-em-breve" aria-disabled="true">Em breve disponível</span>
                <a href="#como-funciona" className="botao botao-vidro">Como funciona</a>
              </div>
              <p className="aviso-beta">
                <span className="selo-beta">BETA</span>
                Ainda estamos no beta, apenas convidados conseguem fazer o download.
              </p>
            </div>
            <div className="heroi-visual">
              <img src="/tecnico.webp" alt="Jogador no notebook com um técnico holográfico de IA mostrando a leitura do rival" width="900" height="900" />
              <CartaoVoz />
            </div>
          </div>
        </section>

        <section id="como-funciona" className="secao">
          <div className="container">
            <h2>Como funciona</h2>
            <ol className="passos">
              {PASSOS.map((p) => (
                <li key={p.n} className="passo">
                  <span className="passo-numero">{p.n}</span>
                  <h3>{p.titulo}</h3>
                  <p>{p.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="secao secao-alternada">
          <div className="container tatica-grade">
            <div>
              <p className="sobretitulo">Antes de a bola rolar</p>
              <h2>Ele vê o 4-3-3 dele e monta o seu 4-2-2-2.</h2>
              <p className="lead">
                O rival gosta de contra-atacar? O TikitakIA segura os seus laterais, fecha o meio com dois volantes e
                mostra onde sobra espaço para você sair rápido também.
              </p>
            </div>
            <Prancheta />
          </div>
        </section>

        <section id="recursos" className="secao">
          <div className="container">
            <h2>O que ele faz por você</h2>
            <div className="recursos">
              {RECURSOS.map((r) => (
                <article key={r.titulo} className="recurso">
                  {r.emBreve && <span className="selo-em-breve">Em breve</span>}
                  <h3>{r.titulo}</h3>
                  <p>{r.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="treinos" className="secao secao-escura">
          <div className="container">
            <div className="treinos-topo">
              <div>
                <p className="sobretitulo">Treinos e mentorias · em breve</p>
                <h2>Treine com quem joga no nível mais alto.</h2>
              </div>
              <p className="lead">
                Pro players vão publicar vídeos com frequência na plataforma. O TikitakIA indica quais assistir conforme os
                erros e acertos das suas partidas.
              </p>
            </div>
            <div className="treinos">
              {TREINOS.map((t, i) => (
                <article key={t.tema} className="treino">
                  <div className={`treino-capa treino-capa-${i}`}>
                    <span className="treino-play" aria-hidden="true">▶</span>
                    <span className="treino-duracao">{t.duracao}</span>
                  </div>
                  <div className="treino-info">
                    <span className="treino-nivel">{t.nivel}</span>
                    <h3>{t.tema}</h3>
                  </div>
                </article>
              ))}
            </div>

            <article className="mentoria">
              <div>
                <span className="selo-em-breve selo-em-breve-fixo">Em breve</span>
                <h3>Mentorias com pro players</h3>
                <p>
                  Mentorias com jogadores profissionais, direto na plataforma e por um preço acessível. Marque uma
                  conversa ao vivo ou assista às mentorias gravadas quando quiser, no seu tempo.
                </p>
              </div>
              <ul className="mentoria-itens">
                <li>Ao vivo: ele analisa as suas partidas com você</li>
                <li>Gravadas: assista quantas vezes quiser</li>
                <li>Plano de treino para o seu estilo</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="duvidas" className="secao secao-alternada">
          <div className="container container-estreito">
            <h2>Dúvidas</h2>
            {DUVIDAS.map((d) => (
              <details key={d.p} className="duvida">
                <summary>{d.p}</summary>
                <p>{d.r}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="chamada">
          <div className="container chamada-caixa">
            <h2>Pronto para jogar com um técnico do lado?</h2>
            <a href="/entrar" className="botao">Entrar</a>
          </div>
        </section>
      </main>
      <footer className="rodape">
        <div className="container rodape-linha">
          <Logo />
          <p>
            Dúvidas ou convite para o beta: <a href="mailto:suporte@tikitakia.com.br">suporte@tikitakia.com.br</a>
            <br />
            © 2026 TikitakIA. Foto:{" "}
            <a href="https://unsplash.com/photos/soccer-match-in-a-packed-stadium-at-night-65yjpk2HSlA">Eduard Delputte / Unsplash</a>.
          </p>
        </div>
      </footer>
    </>
  );
}
