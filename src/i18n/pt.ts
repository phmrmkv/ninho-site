import { VERSAO, ARQUIVOS, LINKS } from '@/dados/ninho';

const ext = (href: string, texto: string) => `<a href="${href}" rel="noopener">${texto}</a>`;

export const pt = {
  idioma: 'pt' as 'pt' | 'en',
  htmlLang: 'pt-BR',
  hreflang: 'pt-BR',
  ogLocale: 'pt_BR',
  meta: {
    titulo: 'Ninho: servidor local gratuito e portátil para Windows',
    descricao:
      'O Ninho liga Apache, MySQL, PHP, Node.js, Mailpit e Redis num painel só e baixa a última versão estável de cada um. Sem instalador, gratuito e de código aberto.',
    ogAlt: 'Ninho: servidor local gratuito e portátil para Windows',
    palavras:
      'servidor local windows, servidor web portátil, php mysql windows, apache php mysql, ambiente de desenvolvimento local, alternativa ao xampp, alternativa ao wampserver, mailpit, código aberto',
  },
  pular: 'Pular para o conteúdo',
  logoRotulo: 'Ninho, início',
  selo: `Versão ${VERSAO} · gratuito e de código aberto`,
  nav: {
    rotulo: 'Principal',
    rotuloMenu: 'Menu',
    itens: [
      { id: 'o-que-faz', texto: 'O que faz' },
      { id: 'por-dentro', texto: 'Por dentro' },
      { id: 'comecar', texto: 'Como começar' },
      { id: 'perguntas', texto: 'Perguntas' },
    ],
    github: 'GitHub',
  },
  idiomaTroca: { texto: 'English', lang: 'en' },
  tema: { escuro: 'Mudar para o tema escuro', claro: 'Mudar para o tema claro' },

  hero: {
    h1: 'Seu servidor local para Windows, em um arquivo só',
    texto:
      'O Ninho liga Apache, MySQL, PHP, Node.js, Mailpit e Redis num painel só e baixa a última versão estável de cada um, direto dos sites oficiais. Sem instalador: é só abrir o Ninho.exe.',
    paraQuem: 'Para quem desenvolve em PHP, WordPress, Laravel ou Node.js no Windows.',
    baixar: 'Baixar para Windows (64 bits)',
    codigo: 'Ver o código no GitHub',
    nota: 'Windows 10 e 11, 64 e 32 bits · MIT ou GPL-3.0 · Linux e macOS em prévia',
  },

  painel: {
    rotuloIlustracao: 'Ilustração',
    titulo: 'Módulos',
    legenda: 'Ilustração do painel do Ninho: cada módulo com a sua porta e o seu estado.',
    colunas: { modulo: 'Módulo', porta: 'Porta', estado: 'Estado' },
    rodando: 'Rodando',
    parado: 'Parado',
    linhas: [
      { nome: 'Apache', porta: '80' },
      { nome: 'MySQL', porta: '3306' },
      { nome: 'PHP Server', porta: '8000' },
      { nome: 'Mailpit', porta: '1025, 8025' },
      { nome: 'Redis', porta: '6379' },
    ],
  },

  faz: {
    id: 'o-que-faz',
    titulo: 'O que o Ninho faz',
    texto:
      'Tudo o que um projeto em PHP, WordPress, Laravel ou Node.js precisa no seu PC, sem instalador e sem editar configuração à mão.',
    grupos: [
      {
        titulo: 'Servidores e versões',
        texto: 'Um painel para ligar, desligar e atualizar o que roda na sua máquina.',
        itens: [
          {
            titulo: 'Um arquivo, sem instalador',
            texto:
              'Abra o Ninho.exe de qualquer pasta ou de um pendrive; as configurações ficam no ninho.json, ao lado dele. Prefere o Menu Iniciar? Um clique instala, sem administrador.',
          },
          {
            titulo: 'Sempre a versão estável mais nova',
            texto:
              'Baixar e atualizar lê os sites oficiais (windows.php.net, dev.mysql.com, nodejs.org, GitHub) e instala PHP, MySQL, Node.js, Mailpit e Redis ao lado do que você já tem. Configurações e dados ficam.',
          },
          {
            titulo: 'Mais de um de cada',
            texto: 'Dois MySQL, cada um com a sua pasta de dados, vários servidores PHP ou Redis em portas diferentes, ao mesmo tempo.',
          },
          {
            titulo: 'Painel clássico',
            texto:
              'Tabela de módulos com PID, porta, Ligar, Desligar, Admin, Config e Logs, como no painel do XAMPP, e menus no estilo do WampServer para trocar de versão e ligar extensões do PHP.',
          },
        ],
      },
      {
        titulo: 'Sites',
        texto: 'Cada pasta vira um site com endereço próprio.',
        itens: [
          {
            titulo: 'Todo site ganha um endereço',
            texto:
              'Cada pasta em www abre em http://nome.test; o Ninho escreve o arquivo hosts e as configurações do Apache e do Nginx. Com um interruptor, os sites ganham HTTPS, com certificado da autoridade local do Ninho (confiável só para o seu usuário).',
          },
          {
            titulo: 'Aba Sites e PHP por site',
            texto:
              'Cada site aparece com o tipo (Laravel, WordPress, Symfony, Node.js...), o endereço e os botões Abrir, Terminal e VS Code. Um site pode rodar sozinho, com a própria versão do PHP, ao lado do Apache.',
          },
          {
            titulo: 'Arquivo do projeto e projetos rápidos',
            texto:
              'Um ninho.project.json na pasta do site guarda versão do PHP e do Node.js, servidores, porta e banco, e vai junto no repositório. Para começar do zero: em branco, WordPress, Laravel ou Symfony, com o banco criado junto.',
          },
          {
            titulo: 'Compartilhe um site',
            texto:
              'Um link público https://….trycloudflare.com com um clique (túnel rápido da Cloudflare, sem conta), com QR code para abrir no celular.',
          },
        ],
      },
      {
        titulo: 'Portas, bancos e e-mail',
        texto: 'O que costuma dar dor de cabeça no ambiente local, à vista.',
        itens: [
          {
            titulo: 'Veja todas as portas',
            texto:
              'A aba Portas lista cada programa escutando no PC, diz quem está na porta 80 ou na 3306 e pode encerrá-lo. Se o próprio Windows ocupa uma porta (acontece com a 1025 do Mailpit), o Ninho explica e troca para uma livre com um clique. Com o Docker rodando, os contêineres aparecem ali.',
          },
          {
            titulo: 'Bancos de dados',
            texto:
              'Faça backup, restaure e importe arquivos .sql de cada MySQL. O Admin abre o HeidiSQL, se estiver instalado, ou o Adminer. A senha do root muda pelo menu Config e pode ficar guardada, criptografada pelo Windows.',
          },
          {
            titulo: 'E-mails capturados',
            texto: 'O Mailpit pega todo e-mail que o seu app envia; a caixa de entrada abre pelo botão Admin.',
          },
          {
            titulo: 'Ferramentas à mão',
            texto:
              'PHP, cliente do MySQL, Node.js, npm, Composer e Git no PATH do botão Terminal. Xdebug em um clique, extensões do PHP ligadas e desligadas pelo menu Config e um visualizador de logs ao vivo, com filtro.',
          },
        ],
      },
      {
        titulo: 'No dia a dia',
        texto: 'Detalhes que poupam tempo depois da primeira semana.',
        itens: [
          {
            titulo: 'Vem do XAMPP, WampServer ou Laragon?',
            texto:
              'O Ninho encontra a instalação, copia os sites para www e os bancos para o MySQL dele. A instalação antiga só é lida, nunca alterada.',
          },
          {
            titulo: 'Atualiza sozinho',
            texto:
              'Ao abrir, vê se há versão nova no GitHub, baixa o .exe certo, confere o SHA-256 e reinicia. Dá para desligar nas Preferências. Na primeira vez, uma janela de boas-vindas pergunta o idioma, a pasta e o que baixar.',
          },
          {
            titulo: 'Linha de comando e agentes de IA',
            texto:
              'Ninho.exe status --json, start e stop funcionam sem abrir a janela. Com Ninho.exe mcp, agentes como o Claude Code e o Cursor veem e controlam os seus servidores (servidor MCP).',
          },
          {
            titulo: 'Bandeja, temas e 18 idiomas',
            texto:
              'Ícone ao lado do relógio com um ponto de estado (verde, laranja ou cinza); fechar a janela mantém o Ninho rodando. Tema claro, escuro ou o do Windows. Segue o idioma do Windows na primeira vez.',
          },
        ],
      },
    ],
    modulosTitulo: 'Módulos que o Ninho sabe gerenciar',
    modulos: ['Apache', 'Nginx', 'Caddy', 'PHP', 'MySQL 8.4 LTS', 'MariaDB LTS', 'PostgreSQL', 'MongoDB', 'Node.js LTS', 'Redis', 'Memcached', 'Mailpit', 'Xdebug', 'Composer'],
    modulosNota:
      'O MySQL 9 não é oferecido de propósito: ele converte a pasta de dados e não há volta. Composer e Git entram no PATH quando já estão instalados.',
  },

  dentro: {
    id: 'por-dentro',
    titulo: 'Por dentro do Ninho',
    texto:
      'Capturas reais do programa. Estão em inglês e são de uma versão anterior (a 0.5.0): de lá para cá o tema virou um botão só, entre outras mudanças pequenas. O Ninho fala 18 idiomas, inclusive português.',
    principal: {
      escuro: 'Painel do Ninho no tema escuro: tabela de módulos com Apache e MySQL rodando, PHP Server e Mailpit prontos para ligar.',
      claro: 'Painel do Ninho no tema claro: tabela de módulos com Apache e MySQL rodando, PHP Server e Mailpit prontos para ligar.',
    },
    figuras: [
      {
        chave: 'sites',
        legenda: 'Sites: cada projeto com o endereço .test, a versão do PHP e o link para compartilhar.',
        alt: 'Aba Sites do Ninho listando api-node (Node.js), my-blog (PHP) e shop (Laravel), cada um com endereço .test, versão do PHP e os botões Abrir site, Compartilhar e Mais.',
      },
      {
        chave: 'portas',
        legenda: 'Portas: cada porta em uso, com o programa, o PID e o alcance, e um botão para parar.',
        alt: 'Aba Portas do Ninho: lista de portas em uso com programa, PID, quem é (Ninho: Apache, Windows) e alcance (rede ou só este PC), com botões Abrir e Parar.',
      },
      {
        chave: 'baixar',
        legenda: 'Baixar e atualizar: as versões estáveis mais novas, direto dos sites oficiais.',
        alt: 'Janela Baixar e atualizar do Ninho listando Apache, PostgreSQL, MariaDB, PHP, MySQL, Node.js, Mailpit e Redis, com a versão instalada, a estável mais nova e um botão Baixar ou o aviso de que está em dia.',
      },
      {
        chave: 'verificar',
        legenda: 'Verificar o ambiente: Visual C++, portas, arquivo hosts, HTTPS e disco, cada item com um resultado.',
        alt: 'Janela Verificar o ambiente do Ninho: 0 problemas, 0 avisos e 15 itens ok, como Visual C++ instalado e as portas do Apache e do MySQL.',
      },
      {
        chave: 'boasVindas',
        legenda: 'Boas-vindas, na primeira vez: idioma, pasta do Ninho e o que baixar agora.',
        alt: 'Janela de boas-vindas do Ninho com o idioma, a pasta C:\\Ninho e as caixas Apache, PHP e MySQL marcadas para baixar agora.',
      },
    ],
  },

  comecar: {
    id: 'comecar',
    titulo: 'Como começar',
    texto: 'Do download à primeira página, em poucos minutos.',
    passos: [
      {
        titulo: 'Baixe o arquivo',
        texto: `Pegue o <strong>Ninho-x64.exe</strong> (Windows 10 ou 11, 64 bits) ou o <strong>Ninho-x86.exe</strong> (Windows de 32 bits) na ${ext(LINKS.releases, 'última versão')}.`,
      },
      {
        titulo: 'Escolha uma pasta',
        texto:
          'Ponha o arquivo numa pasta vazia, como <code>C:\\ninho</code>. Se já usa o Laragon, ponha-o em <code>C:\\laragon</code>: o Ninho usa as pastas <code>bin</code>, <code>data</code> e <code>www</code> que encontrar ao lado.',
      },
      {
        titulo: 'Abra e baixe o que precisa',
        texto:
          'Na primeira vez, a janela de boas-vindas pergunta o idioma, a pasta do Ninho e o que baixar agora (Apache, PHP e MySQL já vêm marcados). Depois, o botão <strong>Baixar e atualizar</strong> traz PHP, MySQL e o resto.',
      },
      {
        titulo: 'Ligue tudo',
        texto:
          'Clique em <strong>Ligar tudo</strong>. Seus sites ficam em <code>www</code>: a pasta <code>www\\blog</code> responde em <code>http://blog.test</code>.',
      },
    ],
    downloadsTitulo: 'Arquivos da versão',
    downloadsNota: 'Os links levam ao arquivo da última versão publicada no GitHub.',
    downloads: [
      { sistema: 'Windows 10 e 11, 64 bits', arquivo: 'Ninho-x64.exe', href: ARQUIVOS.win64, previa: false },
      { sistema: 'Windows, 32 bits', arquivo: 'Ninho-x86.exe', href: ARQUIVOS.win32, previa: false },
      { sistema: 'Linux, x64', arquivo: 'Ninho-linux-x64', href: ARQUIVOS.linux, previa: true },
      { sistema: 'macOS, Apple silicon', arquivo: 'Ninho-macos-arm64', href: ARQUIVOS.macArm, previa: true },
      { sistema: 'macOS, Intel', arquivo: 'Ninho-macos-x64', href: ARQUIVOS.macIntel, previa: true },
      { sistema: 'Somas SHA-256 de todos os arquivos', arquivo: 'SHA256SUMS.txt', href: ARQUIVOS.sums, previa: false },
    ],
    previaRotulo: 'Prévia',
    todas: 'Todas as versões na página de releases',
    pacotes: {
      titulo: 'Prefere um gerenciador de pacotes?',
      scoop: 'No Scoop, o pacote já está na versão atual:',
      scoopCmd: 'scoop bucket add ninho https://github.com/phmrmkv/scoop-ninho\nscoop install ninho',
      winget: 'No WinGet o pacote foi enviado e está em análise na Microsoft: ainda não dá para instalar por lá. Em breve.',
      copiar: 'Copiar',
      copiado: 'Copiado',
      copiarRotulo: 'Copiar os comandos',
    },
    terminal: {
      titulo: 'Pelo terminal',
      texto: 'Estes comandos funcionam sem abrir a janela:',
      cmd: 'Ninho.exe status --json\nNinho.exe start mysql\nNinho.exe --install php mysql nodejs',
    },
  },

  previa: {
    id: 'linux-macos',
    titulo: 'Linux e macOS: prévia',
    texto:
      'O Ninho também roda no Linux (x64) e no macOS (Apple silicon e Intel). É uma prévia: a janela, as abas Portas e Sites, os logs, a linha de comando e o servidor MCP são os mesmos do Windows; o gerenciamento dos servidores muda, porque Linux e macOS já têm bons pacotes para tudo.',
    pontos: [
      'Baixe o arquivo da sua plataforma, rode <code>chmod +x</code> e abra. No macOS, na primeira vez, clique com o botão direito e escolha Abrir: o programa não é notarizado.',
      'Os servidores vêm do seu gerenciador de pacotes (apt, dnf, Homebrew). O Instalar usa o que já está no computador e roda com o seu usuário, com configuração, dados e logs do Ninho em <code>~/Ninho</code>. Mailpit e Node.js são baixados dos sites oficiais.',
      'O Apache escuta na porta 8080 (portas abaixo de 1024 pedem administrador). O Ninho nunca pede a sua senha: quando o <code>/etc/hosts</code> precisa mudar, a atividade mostra o comando <code>sudo</code>.',
    ],
    exemploTitulo: 'Exemplo de instalação dos servidores',
    exemplo:
      'sudo apt install apache2 libapache2-mod-php php-cli php-mysql mariadb-server redis-server   # Debian, Ubuntu\nsudo dnf install httpd php php-cli php-mysqlnd mariadb-server valkey                        # Fedora\nbrew install httpd php mariadb redis                                                        # macOS',
    faltaTitulo: 'Ainda não existe no Linux e no macOS',
    falta: [
      'Nginx',
      'HTTPS para os sites .test (autoridade certificadora local)',
      'Download do Xdebug (use o pacote php-xdebug do sistema)',
      'Ligar e desligar extensões do PHP pelo Ninho (o PHP do sistema mantém o próprio php.ini)',
      'Importar do XAMPP, WampServer e Laragon',
      'MySQL no Ubuntu quando o perfil do AppArmor só libera /var/lib/mysql (use o MariaDB)',
    ],
  },

  mcp: {
    id: 'agentes',
    titulo: 'Use o Ninho com agentes de IA',
    texto:
      'O Ninho traz um servidor MCP (Model Context Protocol). Agentes de código, como o Claude Code e o Cursor, veem e controlam seus servidores locais. Ele roda por stdio: o agente abre o <code>Ninho.exe mcp</code> sozinho, sem precisar da janela.',
    claude: 'No Claude Code:',
    claudeCmd: 'claude mcp add ninho -- "C:\\laragon\\Ninho.exe" mcp',
    cursor: 'No Cursor e em outros clientes (mcp.json):',
    cursorCmd: '{ "mcpServers": { "ninho": { "command": "C:\\\\laragon\\\\Ninho.exe", "args": ["mcp"] } } }',
    ferramentas:
      'Ferramentas disponíveis: status, start, stop, restart, list_sites e read_log. Experimente pedir: "Quais servidores estão rodando?" ou "Reinicie o Apache e mostre as últimas 50 linhas do log dele".',
  },

  confianca: {
    id: 'requisitos',
    titulo: 'Requisitos e confiança',
    requisitos: {
      titulo: 'O que você precisa',
      itens: [
        'Windows 10 ou 11, 64 bits (ou Windows de 32 bits com o Ninho-x86.exe). Linux e macOS em prévia.',
        'Não precisa de administrador. O Windows só pergunta quando o Ninho escreve os endereços .test no arquivo hosts.',
        'Sem conta e sem cadastro. Gratuito e de código aberto, sob a licença MIT ou GPL-3.0, à sua escolha.',
      ],
    },
    privacidade: {
      titulo: 'O que o Ninho acessa na internet',
      itens: [
        'Atualizações do Ninho: ao abrir, pergunta ao GitHub qual é a última versão (dá para desligar nas Preferências).',
        'Downloads: o Baixar e atualizar lê os sites oficiais de cada programa para listar e baixar versões.',
        'Compartilhar um site: usa um túnel rápido da Cloudflare, só enquanto você compartilha.',
      ],
      nota: 'O Ninho não envia dados de uso, relatórios de falha nem identificadores. Uma falha é gravada só em <code>tmp\\ninho-crash.log</code>, no seu PC.',
    },
  },

  faq: {
    id: 'perguntas',
    titulo: 'Perguntas frequentes',
    itens: [
      {
        p: 'O Ninho é mesmo gratuito?',
        r: 'Sim. É de código aberto, sob a licença MIT ou GPL-3.0, à sua escolha, sem versão paga e sem conta.',
      },
      {
        p: 'O Windows disse que protegeu o meu PC. É seguro?',
        r: `Esse aviso aparece para programas novos que o Windows ainda não conhece. Cada versão publica o SHA-256 de cada arquivo (${ext(ARQUIVOS.sums, 'SHA256SUMS.txt')}) e o código está no GitHub para qualquer um ler e compilar. Veja também a ${ext(LINKS.assinatura, 'política de assinatura de código')}.`,
      },
      {
        p: 'Ele substitui o XAMPP, o WampServer e o Laragon?',
        r: 'Para desenvolver com PHP, MySQL e Node.js no Windows, sim. Também dá para rodar ao lado deles: a aba Portas mostra quem usa cada porta.',
      },
      {
        p: 'Posso manter o XAMPP, o WampServer ou o Laragon?',
        r: 'Pode. O Ninho só lê a instalação antiga na hora de importar, e usa portas livres quando as dela estão ocupadas. Uma pasta de site que já existe em <code>www</code> nunca é sobrescrita.',
      },
      {
        p: 'Precisa de direitos de administrador?',
        r: 'Não. O Windows só pergunta quando o Ninho escreve os endereços .test no arquivo hosts.',
      },
      {
        p: 'Qual versão do MySQL ele usa?',
        r: 'A 8.4 LTS mais nova. O MySQL 9 não é oferecido de propósito: ele converte a pasta de dados e não há como voltar.',
      },
      {
        p: 'Funciona no Windows de 32 bits?',
        r: 'Sim, com o Ninho-x86.exe. PHP, Apache, Mailpit, Node.js (até a 22) e cloudflared têm versão de 32 bits; MySQL 8.4, MariaDB, PostgreSQL, MongoDB, Caddy e Redis não têm, e o Ninho avisa.',
      },
      {
        p: 'Funciona no Linux e no macOS?',
        r: 'Como prévia, sim: o Ninho roda os servidores que o seu gerenciador de pacotes instalou, com configuração, dados e portas próprios. Veja a seção <a href="#linux-macos">Linux e macOS: prévia</a>.',
      },
      {
        p: 'O Ninho se atualiza sozinho?',
        r: 'Sim. Ao abrir, ele vê se há versão nova no GitHub; se houver, pergunta, baixa o .exe certo para o seu Windows, confere o SHA-256 e reinicia. Dá para desligar a checagem nas Preferências. Configurações, dados e sites não são tocados.',
      },
      {
        p: 'E se o Ninho travar?',
        r: 'O motivo é gravado em <code>tmp\\ninho-crash.log</code>, ao lado do Ninho, e uma mensagem mostra onde está. Anexe o arquivo ao relatar o problema.',
      },
      {
        p: 'Onde ficam as minhas configurações?',
        r: 'No <code>ninho.json</code>, ao lado do <code>Ninho.exe</code>.',
      },
      {
        p: 'Posso traduzir o Ninho?',
        r: `Pode. Copie <code>locales/en.json</code> para <code>locales/seu-idioma.json</code>, traduza os valores e abra um pull request. ${ext(LINKS.contribuir, 'Como contribuir')}.`,
      },
    ],
  },

  final: {
    titulo: 'Experimente o Ninho',
    texto: `Versão ${VERSAO}, gratuita e de código aberto. Um arquivo, sem instalador.`,
    baixar: 'Baixar para Windows (64 bits)',
    todas: 'Outros arquivos e versões',
  },

  rodape: {
    rotuloLinks: 'Links do projeto',
    sobre: 'O Ninho é um programa gratuito e de código aberto.',
    links: [
      { texto: 'GitHub', href: LINKS.repo },
      { texto: 'Versões (releases)', href: LINKS.releases },
      { texto: 'Histórico de mudanças', href: LINKS.changelog },
      { texto: 'Roteiro (roadmap)', href: LINKS.roadmap },
      { texto: 'Contribuir', href: LINKS.contribuir },
      { texto: 'Segurança', href: LINKS.seguranca },
      { texto: 'Licença MIT', href: LINKS.licencaMit },
      { texto: 'Licença GPL-3.0', href: LINKS.licencaGpl },
      { texto: 'Assinatura de código', href: LINKS.assinatura },
      { texto: 'Privacidade', href: LINKS.privacidade },
    ],
    aviso:
      'O Ninho não tem ligação com Apache, Oracle (MySQL), PHP Group, OpenJS Foundation (Node.js), Mailpit, Redis, XAMPP, WampServer nem Laragon; os nomes aparecem só para dizer o que o Ninho roda ou substitui.',
  },

  erro404: {
    titulo: 'Página não encontrada | Ninho',
    descricao: 'Esta página não existe no site do Ninho.',
    h1: 'Esse ninho está vazio',
    texto: 'A página que você procurou não existe ou mudou de endereço. Volte ao início para ver o que o Ninho faz.',
    voltar: 'Voltar ao início',
  },
};
