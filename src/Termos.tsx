import { Documento } from "./Documento";
import { EMPRESA } from "./empresa";

export function Termos() {
  return (
    <Documento
      titulo="Termos de Uso"
      resumo={
        <p>
          Em resumo: o TikitakIA é um técnico de IA que dá dicas, não garante vitórias e não mexe no jogo. Você é
          responsável por usar a ferramenta de acordo com as regras do jogo que joga. Ao criar sua conta, você aceita estes
          termos.
        </p>
      }
    >
      <h2>1. Aceite</h2>
      <p>
        Estes Termos regulam o uso do site, do aplicativo e dos serviços do TikitakIA, oferecidos por {EMPRESA.razaoSocial},
        CNPJ {EMPRESA.cnpj}. Ao criar uma conta, você declara que leu e aceita estes Termos e a{" "}
        <a href="/privacidade">Política de Privacidade</a>. Se não concordar, não use o serviço.
      </p>

      <h2>2. O que é o TikitakIA</h2>
      <p>
        O TikitakIA é um assistente de inteligência artificial para jogos de futebol no PC. Ele analisa prints da sua tela
        e dá dicas táticas por voz: formação, onde atacar e como defender. A plataforma também pode oferecer histórico de
        partidas, sugestões de evolução dos seus jogadores, vídeos de treino e mentorias com jogadores profissionais.
      </p>

      <h2>3. Fase beta</h2>
      <p>
        O serviço está em beta, com acesso apenas por convite. Nessa fase, recursos podem mudar, falhar, ficar
        indisponíveis ou ser removidos sem aviso prévio. O convite é pessoal e pode ser revogado.
      </p>

      <h2>4. Sua conta</h2>
      <ul>
        <li>Informe dados verdadeiros e mantenha-os atualizados.</li>
        <li>
          Você precisa ter 18 anos ou mais. Adolescentes só podem usar com autorização do responsável legal, que aceita
          estes Termos em nome deles.
        </li>
        <li>A conta é pessoal. Não compartilhe a senha nem o acesso com outras pessoas.</li>
        <li>Você é responsável pelo que acontecer na sua conta. Se suspeitar de acesso indevido, avise o suporte.</li>
      </ul>

      <h2>5. Como o guia funciona e seus limites</h2>
      <ul>
        <li>
          As dicas são geradas por inteligência artificial a partir de prints da tela. Elas podem estar erradas,
          incompletas ou chegar alguns segundos depois do lance.
        </li>
        <li>O TikitakIA não garante vitórias, pontos, ranking nem qualquer resultado.</li>
        <li>As decisões dentro do jogo são sempre suas.</li>
        <li>
          O aplicativo captura o seu monitor principal. Feche o que não quiser que seja enviado para análise.
        </li>
      </ul>

      <h2>6. Relação com os jogos</h2>
      <p>
        O TikitakIA é independente e não é afiliado, patrocinado nem aprovado por nenhuma desenvolvedora ou publicadora de
        jogos. O aplicativo não altera arquivos do jogo, não lê a memória do jogo e não envia comandos ao jogo: ele só
        observa a tela e fala com você.
      </p>
      <p>
        Cada jogo tem os próprios termos de uso, e alguns restringem ferramentas externas, principalmente em partidas
        ranqueadas, competições e torneios. <strong>Cabe a você verificar se o uso do TikitakIA é permitido no jogo e no
        modo em que você joga.</strong> Não nos responsabilizamos por advertências, suspensões ou banimentos aplicados por
        desenvolvedoras ou organizadores de campeonatos. Não use o TikitakIA em competições que proíbam ajuda externa.
      </p>

      <h2>7. O que não é permitido</h2>
      <ul>
        <li>Copiar, modificar, descompilar ou fazer engenharia reversa do aplicativo ou da plataforma.</li>
        <li>Revender, alugar ou compartilhar o acesso, inclusive o conteúdo de treinos e mentorias.</li>
        <li>Usar o TikitakIA junto com trapaças, automações, macros ou programas que alterem o jogo.</li>
        <li>Tentar burlar limites de uso, sobrecarregar ou atacar os nossos sistemas.</li>
        <li>Desrespeitar, assediar ou ofender mentores, jogadores ou a equipe.</li>
        <li>Usar o serviço para qualquer finalidade ilegal.</li>
      </ul>

      <h2>8. Treinos e mentorias</h2>
      <ul>
        <li>
          Os vídeos de treino e as mentorias são produzidos por jogadores profissionais parceiros. As opiniões e técnicas
          são de quem produziu o conteúdo.
        </li>
        <li>
          Os vídeos e as mentorias gravadas são para o seu uso pessoal. Não é permitido baixar, redistribuir ou publicar
          esse conteúdo.
        </li>
        <li>
          Não é permitido gravar mentorias ao vivo sem autorização do mentor.
        </li>
        <li>
          Preço, duração, regras de agendamento, remarcação e cancelamento de cada mentoria são informados antes da
          contratação.
        </li>
      </ul>

      <h2>9. Planos, pagamento e cancelamento</h2>
      <p>Quando houver planos pagos:</p>
      <ul>
        <li>O preço, o que está incluído e a forma de cobrança são informados antes de você contratar.</li>
        <li>
          Assinaturas são renovadas automaticamente ao fim de cada período, até você cancelar. Você pode cancelar quando
          quiser; o acesso continua até o fim do período já pago.
        </li>
        <li>
          Você pode desistir da contratação em até 7 dias a partir da compra, com reembolso integral, como garante o art.
          49 do Código de Defesa do Consumidor.
        </li>
        <li>Mudanças de preço são avisadas com antecedência e valem a partir da renovação seguinte.</li>
      </ul>

      <h2>10. Propriedade intelectual</h2>
      <p>
        A marca TikitakIA, o aplicativo, o site e seus conteúdos pertencem a {EMPRESA.razaoSocial} ou aos seus parceiros.
        Você recebe uma licença pessoal, limitada, não exclusiva e revogável para usar o serviço conforme estes Termos.
      </p>

      <h2>11. Disponibilidade e mudanças no serviço</h2>
      <p>
        Fazemos o possível para manter o TikitakIA no ar, mas ele pode ficar indisponível por manutenção, falhas de
        provedores ou motivos fora do nosso controle. Podemos alterar, incluir ou encerrar recursos. Se encerrarmos um
        serviço pago, devolveremos proporcionalmente o valor do período não usado.
      </p>

      <h2>12. Suspensão e encerramento da conta</h2>
      <p>
        Você pode encerrar a sua conta quando quiser, pelo suporte. Podemos suspender ou encerrar contas que descumprirem
        estes Termos, avisando o motivo sempre que possível.
      </p>

      <h2>13. Responsabilidade</h2>
      <p>
        Na medida permitida pela lei, não respondemos por resultados de partidas, por sanções aplicadas por terceiros, por
        falhas de serviços de terceiros ou por uso do TikitakIA em desacordo com estes Termos. Nada nestes Termos limita
        os direitos que você tem como consumidor.
      </p>

      <h2>14. Privacidade</h2>
      <p>
        O uso dos seus dados é explicado na <a href="/privacidade">Política de Privacidade</a>, que faz parte destes
        Termos.
      </p>

      <h2>15. Mudanças nestes Termos</h2>
      <p>
        Podemos atualizar estes Termos. A data no topo mostra a última versão. Mudanças relevantes serão avisadas antes de
        valer e, quando necessário, pediremos um novo aceite.
      </p>

      <h2>16. Lei e foro</h2>
      <p>
        Estes Termos seguem a lei brasileira. Fica eleito o foro do seu domicílio para resolver qualquer questão
        relacionada a eles.
      </p>

      <h2>17. Contato</h2>
      <p>
        Dúvidas sobre estes Termos: <a href={`mailto:${EMPRESA.email}`}>{EMPRESA.email}</a>.
      </p>
    </Documento>
  );
}
