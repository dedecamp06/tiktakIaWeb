import type { ComponentType } from "react";
import { Entrar } from "./Entrar";
import { Inicio } from "./Inicio";
import { Privacidade } from "./Privacidade";
import { Termos } from "./Termos";

const PAGINAS: [string, ComponentType][] = [
  ["/entrar", Entrar],
  ["/privacidade", Privacidade],
  ["/termos", Termos],
];

export function App() {
  const caminho = window.location.pathname.replace(/\/+$/, "");
  const Pagina = PAGINAS.find(([rota]) => caminho === rota)?.[1] ?? Inicio;
  return <Pagina />;
}
