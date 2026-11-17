/** Campo visto de cima: o adversário (vermelho) num 4-3-3 e você (branco) no 4-2-2-2, saindo no contra-ataque. */
const ADVERSARIO: [number, number][] = [
  [562, 210],
  [488, 80], [478, 168], [478, 252], [488, 340],
  [410, 125], [400, 210], [410, 295],
  [330, 70], [312, 210], [330, 350],
];
const NOSSO: [number, number][] = [
  [38, 210],
  [108, 92], [100, 172], [100, 248], [108, 328],
  [178, 172], [178, 248],
  [250, 118], [250, 302],
  [282, 182], [282, 238],
];

export function Prancheta() {
  return (
    <figure className="prancheta">
      <svg viewBox="0 0 600 420" role="img" aria-label="Campo tático: adversário no 4-3-3, você no 4-2-2-2 saindo no contra-ataque pelo espaço atrás do lateral">
        <defs>
          <marker id="seta" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0 0 L10 5 L0 10 z" fill="var(--destaque)" />
          </marker>
          <pattern id="gramado" width="60" height="420" patternUnits="userSpaceOnUse">
            <rect width="30" height="420" fill="var(--campo-1)" />
            <rect x="30" width="30" height="420" fill="var(--campo-2)" />
          </pattern>
          <radialGradient id="luz" cx="50%" cy="0%" r="90%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="600" height="420" rx="18" fill="url(#gramado)" />
        <rect width="600" height="420" rx="18" fill="url(#luz)" />
        <g fill="none" stroke="var(--giz)" strokeWidth="2" opacity="0.55">
          <rect x="16" y="16" width="568" height="388" rx="4" />
          <line x1="300" y1="16" x2="300" y2="404" />
          <circle cx="300" cy="210" r="52" />
          <rect x="16" y="120" width="70" height="180" />
          <rect x="514" y="120" width="70" height="180" />
        </g>
        <rect x="508" y="22" width="70" height="44" rx="8" className="zona" />
        <path d="M178 172 C 205 150, 225 135, 248 122" className="jogada jogada-passe" markerEnd="url(#seta)" />
        <path d="M250 118 C 330 30, 430 26, 528 44" className="jogada" markerEnd="url(#seta)" />
        {ADVERSARIO.map(([x, y], i) => <circle key={`a${i}`} cx={x} cy={y} r="9" className="jogador-adversario" />)}
        {NOSSO.map(([x, y], i) => <circle key={`n${i}`} cx={x} cy={y} r="9" className="jogador-nosso" />)}
        <circle cx="178" cy="172" r="4.5" fill="#fff" />
        <g className="rotulo-formacao">
          <rect x="26" y="374" width="112" height="22" rx="11" />
          <text x="82" y="389" textAnchor="middle">VOCÊ 4-2-2-2</text>
          <rect x="452" y="374" width="122" height="22" rx="11" className="rotulo-adversario" />
          <text x="513" y="389" textAnchor="middle">RIVAL 4-3-3</text>
        </g>
      </svg>
    </figure>
  );
}
