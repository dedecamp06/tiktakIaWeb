import type { ReactNode } from "react";
import { DOCUMENTOS } from "./empresa";
import { Rodape } from "./Rodape";
import { Topo } from "./Topo";

export function Documento({ titulo, resumo, children }: { titulo: string; resumo: ReactNode; children: ReactNode }) {
  return (
    <>
      <Topo />
      <main className="documento">
        <div className="container container-estreito">
          <p className="sobretitulo">Atualizado em {DOCUMENTOS.atualizadoEm}</p>
          <h1>{titulo}</h1>
          <div className="documento-resumo">{resumo}</div>
          <div className="documento-corpo">{children}</div>
        </div>
      </main>
      <Rodape />
    </>
  );
}
