import { Documento } from "./Documento";
import { EMPRESA } from "./empresa";

export function Privacidade() {
  return (
    <Documento
      titulo="Política de Privacidade"
      resumo={
        <p>
          Em resumo: usamos seus dados só para fazer o TikitakIA funcionar, não vendemos nada a ninguém, e os prints da
          sua tela são enviados à IA apenas para gerar as dicas, sem ficarem guardados nos nossos servidores.
        </p>
      }
    >
      <h2>1. Quem cuida dos seus dados</h2>
      <p>
        O TikitakIA é oferecido por {EMPRESA.razaoSocial}, CNPJ {EMPRESA.cnpj}, que é a
        controladora dos seus dados pessoais, nos termos da Lei Geral de Proteção de Dados (Lei 13.709/2018, a LGPD).
        Para qualquer assunto sobre privacidade, fale com a gente em <a href={`mailto:${EMPRESA.email}`}>{EMPRESA.email}</a>.
      </p>

      <h2>2. Quais dados usamos</h2>
      <h3>Quando você visita o site</h3>
      <ul>
        <li>
          Dados técnicos da visita, como endereço IP, navegador, data e hora, registrados pela nossa hospedagem para manter
          o site no ar e seguro.
        </li>
        <li>
          O site carrega fontes do Google Fonts, então o Google recebe o seu endereço IP ao abrir a página.
        </li>
        <li>Não usamos cookies de publicidade nem ferramentas de rastreamento de anúncios.</li>
      </ul>

      <h3>Quando você cria uma conta</h3>
      <ul>
        <li>Nome, e-mail e nome de usuário.</li>
        <li>Senha, guardada de forma criptografada. Ninguém da equipe consegue ver a sua senha.</li>
        <li>Data, hora e versão dos Termos de Uso e desta Política que você aceitou.</li>
        <li>Registros de acesso à conta (data, hora e endereço IP).</li>
      </ul>

      <h3>Quando você usa o guia durante a partida</h3>
      <ul>
        <li>
          <strong>Prints da tela.</strong> O aplicativo captura o seu monitor principal em intervalos regulares (a cada 15 a
          30 segundos) e envia a imagem para análise. Tudo o que estiver visível nesse monitor vai junto, então feche
          janelas com informações pessoais antes de jogar.
        </li>
        <li>
          <strong>Comandos de voz.</strong> O reconhecimento de voz é feito pelo seu navegador (Chrome ou Edge), que pode
          usar o serviço de voz do Google ou da Microsoft. O áudio não chega aos nossos servidores; recebemos só o texto do
          comando reconhecido, como "onde atacar".
        </li>
        <li>
          <strong>Dados da partida.</strong> Formação, placar, minuto, observações sobre o jogo e as dicas dadas, usados
          para continuar a análise e montar o seu histórico de partidas.
        </li>
        <li>O nome do seu time no jogo, se você informar.</li>
      </ul>

      <h3>Quando você contrata um plano, treino ou mentoria</h3>
      <ul>
        <li>
          Dados necessários para cobrança e emissão de nota fiscal. O pagamento é processado por um intermediador; não
          guardamos o número completo do seu cartão.
        </li>
        <li>Agendamentos de mentoria e o que você escolher compartilhar com o mentor, como partidas para análise.</li>
      </ul>

      <h3>Quando você fala com o suporte</h3>
      <ul>
        <li>As mensagens trocadas e os dados que você enviar nelas.</li>
      </ul>

      <h2>3. Para que usamos e com qual base legal</h2>
      <ul>
        <li>
          <strong>Prestar o serviço</strong>: analisar a partida, dar as dicas, manter sua conta, histórico, treinos e
          mentorias. Base legal: execução de contrato (art. 7º, V, da LGPD).
        </li>
        <li>
          <strong>Segurança e prevenção de fraude</strong>: proteger contas, evitar abuso e manter o serviço estável. Base
          legal: legítimo interesse (art. 7º, IX).
        </li>
        <li>
          <strong>Melhorar o TikitakIA</strong>: entender o que funciona e corrigir erros, preferindo dados agregados.
          Base legal: legítimo interesse (art. 7º, IX).
        </li>
        <li>
          <strong>Obrigações legais</strong>: notas fiscais, registros de acesso exigidos pelo Marco Civil da Internet e
          pedidos de autoridades. Base legal: cumprimento de obrigação legal (art. 7º, II).
        </li>
        <li>
          <strong>Novidades e ofertas por e-mail</strong>: só se você autorizar, e você pode cancelar quando quiser. Base
          legal: consentimento (art. 7º, I).
        </li>
      </ul>
      <p>Não usamos seus prints nem suas partidas para vender anúncios.</p>

      <h2>4. Com quem compartilhamos</h2>
      <p>Não vendemos seus dados. Compartilhamos apenas com quem nos ajuda a operar o serviço:</p>
      <ul>
        <li>
          <strong>Provedores de inteligência artificial</strong> (GitHub Copilot, da Microsoft, e Anthropic), que recebem os
          prints e os dados da partida para gerar a análise. Eles tratam esses dados conforme os próprios termos e
          políticas.
        </li>
        <li>
          <strong>Hospedagem e infraestrutura</strong> (Vercel, Cloudflare e o provedor do banco de dados).
        </li>
        <li>
          <strong>E-mail</strong> (Google), para receber e responder mensagens do suporte.
        </li>
        <li>
          <strong>Intermediador de pagamento</strong>, quando houver cobrança.
        </li>
        <li>
          <strong>Mentores</strong>, apenas os dados necessários para a mentoria que você agendar.
        </li>
        <li>
          <strong>Autoridades</strong>, quando a lei ou uma ordem judicial exigir.
        </li>
      </ul>

      <h2>5. Transferência para fora do Brasil</h2>
      <p>
        Parte desses serviços funciona em servidores fora do Brasil, principalmente nos Estados Unidos. Nesses casos, a
        transferência acontece para executar o contrato com você e com as garantias previstas no art. 33 da LGPD.
      </p>

      <h2>6. Por quanto tempo guardamos</h2>
      <ul>
        <li>
          <strong>Prints da tela</strong>: não ficam armazenados nos nossos servidores. Servem apenas para gerar a análise
          daquele momento.
        </li>
        <li>
          <strong>Conta, histórico de partidas e mentorias</strong>: enquanto a conta estiver ativa. Se você pedir a
          exclusão, apagamos em até 30 dias, salvo o que a lei obrigar a manter.
        </li>
        <li>
          <strong>Registros de acesso</strong>: 6 meses, como exige o Marco Civil da Internet (Lei 12.965/2014).
        </li>
        <li>
          <strong>Dados fiscais</strong>: pelo prazo exigido pela legislação tributária, em geral 5 anos.
        </li>
      </ul>

      <h2>7. Seus direitos</h2>
      <p>Pela LGPD, você pode a qualquer momento:</p>
      <ul>
        <li>confirmar se tratamos seus dados e pedir acesso a eles;</li>
        <li>corrigir dados incompletos, inexatos ou desatualizados;</li>
        <li>pedir a anonimização, o bloqueio ou a eliminação de dados desnecessários ou tratados em desacordo com a lei;</li>
        <li>pedir a portabilidade dos seus dados;</li>
        <li>pedir a eliminação dos dados tratados com base no seu consentimento e revogar esse consentimento;</li>
        <li>saber com quem compartilhamos seus dados;</li>
        <li>se opor a um tratamento feito com base em legítimo interesse.</li>
      </ul>
      <p>
        Para exercer qualquer um deles, escreva para <a href={`mailto:${EMPRESA.email}`}>{EMPRESA.email}</a>.
        Respondemos em até 15 dias. Você também pode reclamar à Autoridade Nacional de Proteção de Dados (ANPD).
      </p>

      <h2>8. Segurança</h2>
      <p>
        Usamos conexão criptografada (HTTPS), senhas guardadas com criptografia, acesso restrito aos dados e provedores
        reconhecidos. Nenhum sistema é totalmente imune a falhas; se acontecer um incidente que traga risco a você,
        avisaremos você e a ANPD, como manda a lei.
      </p>

      <h2>9. Crianças e adolescentes</h2>
      <p>
        O TikitakIA é destinado a maiores de 18 anos. Adolescentes só podem usar com autorização e acompanhamento do pai,
        mãe ou responsável legal, que aceita os Termos de Uso e esta Política em nome deles. Não aceitamos cadastro de
        menores de 12 anos.
      </p>

      <h2>10. Cookies</h2>
      <p>
        Hoje o site não usa cookies de rastreamento. Quando o login estiver disponível, usaremos apenas cookies
        essenciais para manter você conectado, que não exigem consentimento por serem necessários ao funcionamento.
      </p>

      <h2>11. Mudanças nesta Política</h2>
      <p>
        Podemos atualizar esta Política. A data no topo mostra a última versão. Se a mudança for relevante, avisaremos por
        e-mail ou dentro da plataforma antes de ela valer.
      </p>
    </Documento>
  );
}
