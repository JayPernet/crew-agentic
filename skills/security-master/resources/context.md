
Recentemente descobri que 1 em cada 5 aplicações feitas com ferramentas de vibe coding estão expostas a vulnerabilidades críticas. E não estou falando de hacks ultra-sofisticados - estou falando de vulnerabilidades que qualquer pessoa com 3 cliques no navegador consegue explorar.

Casos que eu fiquei sabendo:

    O Tea (um app de relacionamento) vazou mais de 72.000 selfies e fotos de carteira de motorista simplesmente porque deixaram o bucket de storage completamente aberto

    Uma empresa chamada Pythagora perdeu mais de $30.000 em tokens da OpenAI porque hackers conseguiram acesso às suas chaves de API

    Um app de finanças chamado Hisab fez uma waitlist, mas deixou TODOS os emails de quem se inscrevesse disponíveis no frontend

E esse é um medo comum de todo mundo que não é engenheiro: “Será que a minha aplicação está segura?”

Por isso eu resolvi mapear as 5 vulnerabilidades mais comuns que vejo em apps vibe-coded e, mais importante, te ensinar exatamente como se proteger de cada uma delas.

Vou começar com o erro que mais vejo por aí: confundir chaves públicas com chaves privadas.

Vou tentar explicar de um jeito simples de entender: imagine que suas chaves de API são como chaves de casa. Algumas você pode deixar embaixo do tapete (públicas), outras você guarda no cofre (privadas).

Exemplo prático com Stripe:

    Chave pública (pk_...): Pode ficar exposta no frontend. Ela serve só para tokenizar informações de pagamento (como os dados do cartão de crédito do usuário, por exemplo)

    Chave privada (sk_...): JAMAIS pode aparecer no frontend. Ela serve pra fazer cobranças no cartão dos seus clientes.

Se sua chave privada vazar, hackers podem literalmente fazer cobranças nos cartões dos seus clientes e até transferir esse dinheiro para outras contas. 💰

Como se proteger:

    No NextJS: Só use o prefixo NEXT_PUBLIC_ em variáveis que realmente podem ser públicas

    Importantíssimo: Sempre leia a documentação da API antes de usar qualquer chave

Exemplo de chaves públicas e privadas da Stripe

Esse é o erro mais básico e mais comum: a AI vai lá e coloca sua chave de API diretamente no código do frontend.

Imagina só: você coloca sua chave da OpenAI direto no código JavaScript. Qualquer pessoa pode clicar com o botão direito, inspecionar o seu app pelo Google Chrome, e em 60 segundos ter acesso à sua chave. Simples assim.

Como se proteger:

    NUNCA chumbe secrets no código.

    Todas as chaves vão para o arquivo .env (ou edge functions se você usa Lovable + Supabase)

    Sempre adicione .env no seu .gitignore

    Nunca faça chamadas para APIs externas direto do frontend - sempre chame o seu backend, o seu backend vai pegar a sua variável no .env e aí sim, fazer a chamada de API externa.

Exemplo de uma Secret Key exposta no frontend da aplicação

Aqui entra um conceito técnico que todo mundo que usa Supabase precisa entender: RLS Policies (Row Level Security).

Na prática, são como filtros que controlam quais dados cada usuário pode ver. O problema é que muita gente esquece de configurar isso direito ou deixa muito permissivo.

O que acontece quando dá errado:

    Alguém pega sua anon key (que é pública)

    Se você não tem RLS configurado, essa key vira um “passe livre” (tipo um crachá de admin)

    Hacker cria conta no seu app e consegue acessae dados de TODOS os usuários da sua app (não só os dados que pertencem a ele mesmo)

Foi exatamente isso que aconteceu com o Tea - eles não configuraram as políticas de storage e qualquer um com a anon key conseguia acessar todas as fotos.

Como se proteger:

    Adote “deny by default”: por padrão, nenhum usuário pode fazer nada

    Configure políticas específicas para cada tabela (ex: nessa tabela, usuários podem ver/ editar/ criar/ deletar seus próprios registros).

    Usuário só acessa dados que pertencem ao próprio user_id

    Teste sempre: tente acessar dados de outros usuários para ver se sua política está funcionando. No Supabase, você pode ‘impersonate’ um outro usuário, ou o usuário admin.

Esse é especialmente para você que usa Lovable para fazer ferramentas internas da empresa.

Muita gente pensa: “Ah, é só um link interno, não vou compartilhar com ninguém, está seguro.” Não senhor(a). 🚨

Existe uma técnica chamada fingerprinting onde hackers usam crawlers (robôs) para encontrar todas as aplicações que usam determinadas ferramentas.

Por exemplo: eles fazem uma varredura em todos os domínios .lovable.app , encontram todos os apps que existem nesse domínio, e se a sua aplicação ou app privado estiver lá no meio, já era.

O que eu já vi sendo exposto:

    Landing pages de produtos não-lançados com dados reais

    Bases de conhecimento empresariais com informações confidenciais

    Chatbots treinados com dados sensíveis da empresa

Como se proteger:

    Qualquer dado sensível = autenticação obrigatória

    Mesmo que seja “só para o time”

    Mesmo que você “não compartilhou a URL com ninguém”

    URLs públicas podem ser descobertas independentemente de você compartilhar ou não

Vou te contar uma história bem famosa no mundo de cybersecurity chamada “Little Bobby Tables” para explicar esse.

Imagina que você tem um formulário de cadastro de usuários no seu site e que o código SQL que roda por trás dele é mais ou menos assim:


INSERT INTO students (name) VALUES (’$nome_do_usuario’);

Se o usuário inserir um nome normal, como ‘Robert’, por exemplo, tá tudo certo. Você vai inserir o nome do usuário na tabela ‘students’.

Agora, se um usuário malicioso colocar no campo um comando de SQL disfarçado de nome do usuário, como:
Comando malicioso disfarçado

Isso vai contatenar com o seu código e transformar aquele SQL em dois comandos:

    Um para inserir o ‘Robert’ na sua tabela de ‘students’

    Outro para DELETAR a sua tabela inteira de ‘students’

Entende como isso é perigoso?

Como se proteger:

    Nunca concatene strings diretamente no SQL

    Use placeholders parametrizados: INSERT INTO students (name) VALUES (?);

    Sempre sanitize os inputs dos usuários

    Chaves públicas vs privadas: Entenda a diferença e use cada uma no lugar certo

    Jamais chumbe secrets no código: Tudo vai para .env ou edge functions

    Adote RLS policies restritivas: Melhor negar por padrão e liberar específico

    Coloque autenticação em tudo que é sensível: Mesmo apps “internos” precisam de login

    Sanitize de inputs: Nunca confie no que o usuário envia

Só pra deixar claro, essas não são as únicas vulnerabilidades que existem, mas são as mais comuns

