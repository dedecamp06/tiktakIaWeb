import { Entrar } from "./Entrar";
import { Inicio } from "./Inicio";

export function App() {
  return window.location.pathname.startsWith("/entrar") ? <Entrar /> : <Inicio />;
}
