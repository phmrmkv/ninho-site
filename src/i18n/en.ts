import { VERSAO, ARQUIVOS, LINKS } from '@/dados/ninho';
import type { Textos } from './tipos';

const ext = (href: string, texto: string) => `<a href="${href}" rel="noopener">${texto}</a>`;

export const en: Textos = {
  idioma: 'en',
  htmlLang: 'en',
  hreflang: 'en',
  ogLocale: 'en_US',
  meta: {
    titulo: 'Ninho: free, portable local server for Windows',
    descricao:
      'Ninho starts Apache, MySQL, PHP, Node.js, Mailpit and Redis from one small control panel and downloads the newest stable version of each. No installer, free and open source.',
    ogAlt: 'Ninho: free, portable local server for Windows',
    palavras:
      'local server windows, portable web server, php mysql windows, apache php mysql, local development environment, xampp alternative, wampserver alternative, mailpit, open source',
  },
  pular: 'Skip to content',
  logoRotulo: 'Ninho, home',
  selo: `Version ${VERSAO} · free and open source`,
  nav: {
    rotulo: 'Main',
    rotuloMenu: 'Menu',
    itens: [
      { id: 'o-que-faz', texto: 'What it does' },
      { id: 'por-dentro', texto: 'Inside' },
      { id: 'comecar', texto: 'Quick start' },
      { id: 'perguntas', texto: 'FAQ' },
    ],
    github: 'GitHub',
  },
  idiomaTroca: { texto: 'Português', lang: 'pt-BR' },
  tema: { escuro: 'Switch to dark theme', claro: 'Switch to light theme' },

  hero: {
    h1: 'Your local server for Windows, in one small file',
    texto:
      'Ninho starts Apache, MySQL, PHP, Node.js, Mailpit and Redis from one control panel and downloads the newest stable version of each from the official sites. No installer: just open Ninho.exe.',
    paraQuem: 'For anyone who builds with PHP, WordPress, Laravel or Node.js on Windows.',
    baixar: 'Download for Windows (64-bit)',
    codigo: 'See the code on GitHub',
    nota: 'Windows 10 and 11, 64 and 32 bit · MIT or GPL-3.0 · Linux and macOS in preview',
  },

  painel: {
    rotuloIlustracao: 'Illustration',
    titulo: 'Modules',
    legenda: "Illustration of Ninho's control panel: each module with its port and its state.",
    colunas: { modulo: 'Module', porta: 'Port', estado: 'State' },
    rodando: 'Running',
    parado: 'Stopped',
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
    titulo: 'What Ninho does',
    texto:
      'Everything a PHP, WordPress, Laravel or Node.js project needs on your PC, without an installer and without a single setting to edit by hand.',
    grupos: [
      {
        titulo: 'Servers and versions',
        texto: 'One panel to start, stop and update what runs on your machine.',
        itens: [
          {
            titulo: 'One file, no installer',
            texto:
              'Open Ninho.exe from any folder or a USB stick; its settings stay in ninho.json beside it. Prefer the Start menu? One click installs it, no administrator needed.',
          },
          {
            titulo: 'Always the newest stable versions',
            texto:
              'Download and update reads the official sites (windows.php.net, dev.mysql.com, nodejs.org, GitHub) and installs PHP, MySQL, Node.js, Mailpit and Redis side by side with the versions you already have. Your settings and data are kept.',
          },
          {
            titulo: 'More than one of each',
            texto: 'Two MySQL servers, each with its own data folder, several PHP servers or Redis instances on different ports, all at the same time.',
          },
          {
            titulo: 'Classic control panel',
            texto:
              'A module table with PID, port, Start, Stop, Admin, Config and Logs, like the XAMPP Control Panel, plus WampServer-style menus to switch versions and turn PHP extensions on and off.',
          },
        ],
      },
      {
        titulo: 'Sites',
        texto: 'Every folder becomes a site with its own address.',
        itens: [
          {
            titulo: 'Every site gets an address',
            texto:
              "Each folder in www opens at http://name.test; Ninho writes the hosts file and the Apache and Nginx configs for you. One switch gives every site HTTPS, with a certificate from Ninho's local authority (trusted for your user only).",
          },
          {
            titulo: 'Sites tab and PHP per site',
            texto:
              'Each site shows its kind (Laravel, WordPress, Symfony, Node.js...), its address and the Open, Terminal and VS Code buttons. A site can run on its own PHP server with its own PHP version, side by side with Apache.',
          },
          {
            titulo: 'Project file and quick projects',
            texto:
              "A ninho.project.json in a site's folder keeps the PHP and Node.js version, servers, port and database, and travels with your repo. To start from scratch: blank, WordPress, Laravel or Symfony, with its database created at the same time.",
          },
          {
            titulo: 'Share a site',
            texto:
              'A public https://….trycloudflare.com link in one click (Cloudflare quick tunnel, no account), with a QR code to open it on your phone.',
          },
        ],
      },
      {
        titulo: 'Ports, databases and mail',
        texto: 'The things that usually hurt in a local setup, in plain sight.',
        itens: [
          {
            titulo: 'See every port',
            texto:
              "The Ports tab lists every program listening on your PC, tells you who holds port 80 or 3306 and can stop it. If Windows itself holds a port (it happens with 1025, Mailpit's default), Ninho explains it and moves the server to a free port in one click. When Docker is running, its containers show up there.",
          },
          {
            titulo: 'Databases',
            texto:
              'Back up, restore and import .sql files for every MySQL server. Admin opens HeidiSQL when installed, otherwise Adminer. The root password can be changed from the Config menu and remembered, encrypted by Windows.',
          },
          {
            titulo: 'Mail catcher',
            texto: 'Mailpit catches every e-mail your app sends; open the inbox from the Admin button.',
          },
          {
            titulo: 'Tools at hand',
            texto:
              "PHP, the MySQL client, Node.js, npm, Composer and Git on the PATH of the Terminal button. Xdebug in one click, PHP extensions switched from the Config menu and a live log viewer with a filter.",
          },
        ],
      },
      {
        titulo: 'Day to day',
        texto: 'Details that save time after the first week.',
        itens: [
          {
            titulo: 'Coming from XAMPP, WampServer or Laragon?',
            texto:
              'Ninho finds the install, copies your sites into www and your databases into its own MySQL. The old install is only read, never changed.',
          },
          {
            titulo: 'Updates itself',
            texto:
              'When it opens, it checks GitHub for a newer version, downloads the right exe, checks its SHA-256 and restarts. You can turn it off in Preferences. On the first start, a welcome window asks for your language, folder and what to download.',
          },
          {
            titulo: 'Command line and AI agents',
            texto:
              'Ninho.exe status --json, start and stop work without opening the window. With Ninho.exe mcp, agents such as Claude Code and Cursor can see and control your servers (an MCP server).',
          },
          {
            titulo: 'Tray, themes and 18 languages',
            texto:
              'An icon next to the clock with a status dot (green, orange or grey); closing the window keeps Ninho running. Light, dark, or follow Windows. It follows the Windows language on the first start.',
          },
        ],
      },
    ],
    modulosTitulo: 'Modules Ninho can manage',
    modulos: ['Apache', 'Nginx', 'Caddy', 'PHP', 'MySQL 8.4 LTS', 'MariaDB LTS', 'PostgreSQL', 'MongoDB', 'Node.js LTS', 'Redis', 'Memcached', 'Mailpit', 'Xdebug', 'Composer'],
    modulosNota:
      'MySQL 9 is not offered on purpose: it converts the data folder and there is no way back. Composer and Git go on the PATH when they are already installed.',
  },

  dentro: {
    id: 'por-dentro',
    titulo: 'Inside Ninho',
    texto:
      'Real screenshots of the program. They come from an earlier version (0.5.0): since then the theme became a single button, among other small changes. Ninho speaks 18 languages.',
    principal: {
      escuro: 'Ninho control panel in the dark theme: a modules table with Apache and MySQL running, PHP Server and Mailpit ready to start.',
      claro: 'Ninho control panel in the light theme: a modules table with Apache and MySQL running, PHP Server and Mailpit ready to start.',
    },
    figuras: [
      {
        chave: 'sites',
        legenda: 'Sites: each project with its .test address, PHP version and share link.',
        alt: 'Ninho Sites tab listing api-node (Node.js), my-blog (PHP) and shop (Laravel), each with a .test address, a PHP version and the Open site, Share link and More buttons.',
      },
      {
        chave: 'portas',
        legenda: 'Ports: every listening port with program, PID and reach, and a button to stop it.',
        alt: 'Ninho Ports tab: a list of ports in use with program, PID, what it is (Ninho: Apache, Windows) and reach (network or this PC only), with Open and Stop buttons.',
      },
      {
        chave: 'baixar',
        legenda: 'Download and update: the newest stable versions, straight from the official sites.',
        alt: 'Ninho Download and update window listing Apache, PostgreSQL, MariaDB, PHP, MySQL, Node.js, Mailpit and Redis with the installed version, the newest stable version and a Download button or an up to date label.',
      },
      {
        chave: 'verificar',
        legenda: 'Check my environment: Visual C++, ports, hosts file, HTTPS and disk, each with a result.',
        alt: 'Ninho Check my environment window: 0 problems, 0 warnings and 15 ok, such as Visual C++ installed and the Apache and MySQL ports.',
      },
      {
        chave: 'boasVindas',
        legenda: 'Welcome, on the first start: language, Ninho folder and what to download now.',
        alt: 'Ninho welcome window with the language, the C:\\Ninho folder and the Apache, PHP and MySQL boxes checked to download now.',
      },
    ],
  },

  comecar: {
    id: 'comecar',
    titulo: 'Quick start',
    texto: 'From download to your first page in a few minutes.',
    passos: [
      {
        titulo: 'Download the file',
        texto: `Get <strong>Ninho-x64.exe</strong> (Windows 10 or 11, 64-bit) or <strong>Ninho-x86.exe</strong> (32-bit Windows) from the ${ext(LINKS.releases, 'latest release')}.`,
      },
      {
        titulo: 'Pick a folder',
        texto:
          'Put it in an empty folder, for example <code>C:\\ninho</code>. If you already use Laragon, put it in <code>C:\\laragon</code>: Ninho uses the <code>bin</code>, <code>data</code> and <code>www</code> folders it finds beside it.',
      },
      {
        titulo: 'Open it and download what you need',
        texto:
          'On the first start, the welcome window asks for your language, the Ninho folder and what to download now (Apache, PHP and MySQL come checked). Later, <strong>Download and update</strong> brings PHP, MySQL and the rest.',
      },
      {
        titulo: 'Start all',
        texto:
          'Click <strong>Start all</strong>. Your sites live in <code>www</code>: <code>www\\blog</code> answers at <code>http://blog.test</code>.',
      },
    ],
    downloadsTitulo: 'Release files',
    downloadsNota: 'The links go to the file of the latest release published on GitHub.',
    downloads: [
      { sistema: 'Windows 10 and 11, 64-bit', arquivo: 'Ninho-x64.exe', href: ARQUIVOS.win64, previa: false },
      { sistema: 'Windows, 32-bit', arquivo: 'Ninho-x86.exe', href: ARQUIVOS.win32, previa: false },
      { sistema: 'Linux, x64', arquivo: 'Ninho-linux-x64', href: ARQUIVOS.linux, previa: true },
      { sistema: 'macOS, Apple silicon', arquivo: 'Ninho-macos-arm64', href: ARQUIVOS.macArm, previa: true },
      { sistema: 'macOS, Intel', arquivo: 'Ninho-macos-x64', href: ARQUIVOS.macIntel, previa: true },
      { sistema: 'SHA-256 sums of every file', arquivo: 'SHA256SUMS.txt', href: ARQUIVOS.sums, previa: false },
    ],
    previaRotulo: 'Preview',
    todas: 'All versions on the releases page',
    pacotes: {
      titulo: 'Prefer a package manager?',
      scoop: 'On Scoop, the package is already on the current version:',
      scoopCmd: 'scoop bucket add ninho https://github.com/phmrmkv/scoop-ninho\nscoop install ninho',
      winget: 'On WinGet the package has been submitted and is under review at Microsoft: you cannot install it from there yet. Coming soon.',
      copiar: 'Copy',
      copiado: 'Copied',
      copiarRotulo: 'Copy the commands',
    },
    terminal: {
      titulo: 'From the terminal',
      texto: 'These commands work without opening the window:',
      cmd: 'Ninho.exe status --json\nNinho.exe start mysql\nNinho.exe --install php mysql nodejs',
    },
  },

  previa: {
    id: 'linux-macos',
    titulo: 'Linux and macOS: preview',
    texto:
      "Ninho also runs on Linux (x64) and macOS (Apple silicon and Intel). This is a preview: the window, the Ports and Sites tabs, the logs, the command line and the MCP server are the same as on Windows; the server management works differently, because Linux and macOS already have good packages for every server.",
    pontos: [
      'Download the file for your platform, run <code>chmod +x</code> on it and open it. On macOS, right-click and choose Open the first time: the program is not notarized.',
      "The servers come from your package manager (apt, dnf, Homebrew). Install uses the program already on the computer and runs it as you, with Ninho's own config, data and logs in <code>~/Ninho</code>. Mailpit and Node.js are downloaded from their official sites.",
      'Apache listens on port 8080 (ports below 1024 need administrator rights). Ninho never asks for your password: when <code>/etc/hosts</code> needs to change, the activity list shows the <code>sudo</code> command to run.',
    ],
    exemploTitulo: 'Example: installing the servers',
    exemplo:
      'sudo apt install apache2 libapache2-mod-php php-cli php-mysql mariadb-server redis-server   # Debian, Ubuntu\nsudo dnf install httpd php php-cli php-mysqlnd mariadb-server valkey                        # Fedora\nbrew install httpd php mariadb redis                                                        # macOS',
    faltaTitulo: 'Not yet on Linux and macOS',
    falta: [
      'Nginx',
      'HTTPS for the .test sites (local certificate authority)',
      "Xdebug downloads (use your system's php-xdebug package)",
      'The PHP extension switches (the system PHP keeps its own php.ini)',
      'Importing from XAMPP, WampServer and Laragon',
      "MySQL on Ubuntu when its AppArmor profile only allows /var/lib/mysql (use MariaDB)",
    ],
  },

  mcp: {
    id: 'agentes',
    titulo: 'Use Ninho from AI agents',
    texto:
      "Ninho ships a Model Context Protocol (MCP) server, so coding agents such as Claude Code or Cursor can see and control your local servers. It runs over stdio: the agent launches <code>Ninho.exe mcp</code> itself, and you don't need to open the window.",
    claude: 'Claude Code:',
    claudeCmd: 'claude mcp add ninho -- "C:\\laragon\\Ninho.exe" mcp',
    cursor: 'Cursor and other clients (mcp.json):',
    cursorCmd: '{ "mcpServers": { "ninho": { "command": "C:\\\\laragon\\\\Ninho.exe", "args": ["mcp"] } } }',
    ferramentas:
      'Tools: status, start, stop, restart, list_sites and read_log. Try: "Which servers are running?" or "Restart Apache and show me the last 50 lines of its log".',
  },

  confianca: {
    id: 'requisitos',
    titulo: 'Requirements and trust',
    requisitos: {
      titulo: 'What you need',
      itens: [
        'Windows 10 or 11, 64-bit (or 32-bit Windows with Ninho-x86.exe). Linux and macOS in preview.',
        'No administrator rights needed. Windows only asks when Ninho writes the .test addresses to the hosts file.',
        'No account and no sign-up. Free and open source, under the MIT or the GPL-3.0 license, at your choice.',
      ],
    },
    privacidade: {
      titulo: 'What Ninho reaches on the internet',
      itens: [
        'Updates of Ninho: when it opens, it asks GitHub for the latest release (switch it off in Preferences).',
        'Downloads: Download and update reads the official site of each program to list and download versions.',
        'Share a site: it starts a Cloudflare quick tunnel, only while you share.',
      ],
      nota: 'Ninho sends no usage data, no crash reports and no identifiers. A crash is written only to <code>tmp\\ninho-crash.log</code> on your PC.',
    },
  },

  faq: {
    id: 'perguntas',
    titulo: 'Questions',
    itens: [
      {
        p: 'Is it really free?',
        r: 'Yes. Ninho is open source under MIT or GPL-3.0, your choice, with no paid version and no account.',
      },
      {
        p: 'Windows says it protected my PC. Is it safe?',
        r: `That warning shows for new programs that Windows does not know yet. Every release publishes the SHA-256 of each file (${ext(ARQUIVOS.sums, 'SHA256SUMS.txt')}), and the code is on GitHub for anyone to read and build. See also the ${ext(LINKS.assinatura, 'code signing policy')}.`,
      },
      {
        p: 'Does it replace XAMPP, WampServer and Laragon?',
        r: 'For PHP + MySQL + Node.js development on Windows, yes. It can also run next to them: the Ports tab shows who is using each port.',
      },
      {
        p: 'Can I keep my XAMPP, WampServer or Laragon?',
        r: 'Yes. Ninho only reads the old install when you import, and it uses free ports when theirs are busy. A site folder that already exists in <code>www</code> is never overwritten.',
      },
      {
        p: 'Does it need administrator rights?',
        r: 'No. Windows asks only when Ninho writes the .test addresses to the hosts file.',
      },
      {
        p: 'Which MySQL version does it use?',
        r: 'The newest 8.4 LTS. MySQL 9 is not offered on purpose: it converts the data folder and there is no way back.',
      },
      {
        p: '32-bit Windows?',
        r: "Use Ninho-x86.exe. PHP, Apache, Mailpit, Node.js (up to 22) and cloudflared have 32-bit builds; MySQL 8.4, MariaDB, PostgreSQL, MongoDB, Caddy and Redis don't, and Ninho tells you so.",
      },
      {
        p: 'Linux or macOS?',
        r: 'Yes, as a preview: Ninho runs the servers your package manager installed, with its own settings, data and ports. See <a href="#linux-macos">Linux and macOS: preview</a>.',
      },
      {
        p: 'Does Ninho update itself?',
        r: 'Yes. When it opens, it checks GitHub for a newer release; if there is one, it asks, downloads the right exe for your Windows, checks its SHA-256 and restarts. You can turn the check off in Preferences. Your settings, data and sites are not touched.',
      },
      {
        p: 'What if Ninho crashes?',
        r: 'The reason is written to <code>tmp\\ninho-crash.log</code> beside Ninho, and a message shows where. Attach it to a bug report.',
      },
      {
        p: 'Where are my settings?',
        r: 'In <code>ninho.json</code>, beside <code>Ninho.exe</code>.',
      },
      {
        p: 'Can I translate Ninho?',
        r: `Yes: copy <code>locales/en.json</code> to <code>locales/your-language.json</code>, translate the values and open a pull request. ${ext(LINKS.contribuir, 'How to contribute')}.`,
      },
    ],
  },

  final: {
    titulo: 'Try Ninho',
    texto: `Version ${VERSAO}, free and open source. One file, no installer.`,
    baixar: 'Download for Windows (64-bit)',
    todas: 'Other files and versions',
  },

  rodape: {
    rotuloLinks: 'Project links',
    sobre: 'Ninho is a free and open source program.',
    links: [
      { texto: 'GitHub', href: LINKS.repo },
      { texto: 'Releases', href: LINKS.releases },
      { texto: 'Changelog', href: LINKS.changelog },
      { texto: 'Roadmap', href: LINKS.roadmap },
      { texto: 'Contribute', href: LINKS.contribuir },
      { texto: 'Security', href: LINKS.seguranca },
      { texto: 'MIT license', href: LINKS.licencaMit },
      { texto: 'GPL-3.0 license', href: LINKS.licencaGpl },
      { texto: 'Code signing policy', href: LINKS.assinatura },
      { texto: 'Privacy', href: LINKS.privacidade },
    ],
    aviso:
      'Ninho is not affiliated with Apache, Oracle (MySQL), the PHP Group, the OpenJS Foundation (Node.js), Mailpit, Redis, XAMPP, WampServer or Laragon; their names are used only to say what Ninho runs or replaces.',
  },

  erro404: {
    titulo: 'Page not found | Ninho',
    descricao: 'This page does not exist on the Ninho website.',
    h1: 'This nest is empty',
    texto: 'The page you were looking for does not exist or has moved. Go back home to see what Ninho does.',
    voltar: 'Back to home',
  },
};
