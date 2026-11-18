# Fontes das afirmações do site

Repositório do Ninho (público, cópia rasa lida em 2026-11-18): `phmrmkv/Ninho`, versão 0.7.0. Abreviações: **README** = `README.md`, **CHANGELOG** = `CHANGELOG.md`, **FEATURES** = `FEATURES.md`, **SEC** = `SECURITY.md`, **LANC** = `LANCAMENTO.md`, **SITE** = `docs/index.html` (o site atual), **SRC** = código em `src/`. Os números são linhas do README em inglês (a seção em português começa na linha 246). Textos em inglês e em português dizem a mesma coisa: cada linha vale para os dois.

## Hero e selo
| Afirmação | Fonte |
|---|---|
| Servidor local gratuito, portátil, para Windows | README 5-9 |
| Liga Apache, MySQL, PHP, Node.js, Mailpit e Redis num painel só | README 8-9, 248-250 |
| Baixa a última versão estável de cada um, direto dos sites oficiais | README 30-32, 249-250 |
| Sem instalador, é só abrir o `Ninho.exe` | README 9, 250 |
| Para quem usa PHP, WordPress, Laravel ou Node.js no Windows | README 24-25; SITE (texto de "What it does") |
| Versão 0.7.0 | CHANGELOG 3; `packaging/scoop/ninho.json` (`"version": "0.7.0"`) |
| Gratuito, código aberto, MIT ou GPL-3.0 à escolha | README 26, 216, 313; `LICENSE` |
| Windows 10 e 11, 64 e 32 bits | README 84; SITE (hero) |
| Linux e macOS em prévia | README 140-142 |

## Tabela de módulos (ilustração, rotulada)
| Afirmação | Fonte |
|---|---|
| Apache porta 80, MySQL 3306, PHP Server 8000, Mailpit 1025 (SMTP) e 8025 (web), Redis 6379 | SRC `services.rs` 28-36 (`default_port`), `home.rs` 269 (8025); README 34 (1025 é o padrão do Mailpit) |
| Tabela com colunas Módulo, Porta(s), Estado e botão Ligar tudo | README 38-39; `docs/painel.png`; `locales/pt-BR.json` (`start_all`) |
| Nomes "PHP Server" e "Mailpit" como no painel | `docs/painel.png` |
| A sequência de acender é só efeito visual e o texto diz "Ilustração" | decisão do site (não é afirmação sobre o programa) |

## O que o Ninho faz
| Afirmação | Fonte |
|---|---|
| Um arquivo, configurações no `ninho.json` ao lado; pendrive | README 28-29 |
| Instalar pelo Menu Iniciar com um clique, sem administrador | README 68; CHANGELOG 0.5.0 |
| Baixar e atualizar lê windows.php.net, dev.mysql.com, nodejs.org, GitHub; instala ao lado das versões antigas; configurações e dados ficam | README 30-32 |
| Mais de um de cada: dois MySQL com pasta de dados própria, vários PHP e Redis em portas diferentes | README 36-37 |
| Tabela com PID, porta, Ligar/Desligar, Admin, Config, Logs; estilo XAMPP; menus estilo WampServer (versão e extensões do PHP) | README 38-39, 48 |
| Cada pasta de `www` vira `http://nome.test`; hosts e configs do Apache/Nginx escritos pelo Ninho | README 51 |
| HTTPS com um interruptor, certificado da autoridade local, confiável só para o usuário | README 53; CHANGELOG 0.3.0 |
| Aba Sites: tipo (Laravel, WordPress, Symfony, Node.js), endereço, Abrir, Terminal, VS Code | README 54 |
| PHP por site, em servidor próprio, ao lado do Apache | README 55; CHANGELOG 0.3.0 |
| `ninho.project.json` (PHP, Node.js, servidores, porta, banco), vai no repositório | README 59, 102-125 |
| Projetos rápidos: em branco, WordPress, Laravel, Symfony, com o banco criado junto | README 61 |
| Link público `https://….trycloudflare.com`, túnel rápido da Cloudflare, sem conta | README 56; CHANGELOG 0.3.0 |
| QR code para abrir o link no celular | CHANGELOG 0.4.0; FEATURES 89; SITE |
| Aba Portas: programa escutando, quem usa 80/3306, encerrar; Windows e a porta 1025, troca com um clique | README 33-35, 62 |
| Contêineres do Docker na aba Portas quando o Docker roda | README 52; CHANGELOG 0.7.0 |
| Bancos: backup, restauração, importar `.sql`; Admin abre HeidiSQL ou Adminer | README 49, 57 |
| Senha do root pelo menu Config, guardada criptografada pelo Windows (DPAPI) | README 60, 128-138; CHANGELOG 0.7.0 |
| Mailpit pega os e-mails; caixa de entrada pelo Admin | README 63 |
| PHP, cliente MySQL, Node.js/npm, Composer e Git no PATH do Terminal (os dois últimos se estiverem presentes) | README 46 |
| Xdebug em um clique; extensões do PHP pelo menu Config; logs ao vivo com filtro | README 48, 58, 66 |
| Importa de XAMPP, WampServer, Laragon; só lê a instalação antiga; não sobrescreve pasta existente em `www` | README 69, 224; CHANGELOG 0.6.0 |
| Atualiza sozinho (GitHub, exe certo, SHA-256, reinicia; dá para desligar) | README 70, 226 |
| Janela de boas-vindas: idioma, pasta, o que baixar (Apache, PHP e MySQL marcados) | README 71; `docs/boas-vindas.png` |
| Linha de comando: `status --json`, `start`, `stop`, `--install` | README 67; SITE; SRC `cli.rs` 2-7 |
| `Ninho.exe mcp`, servidor MCP (stdio); ferramentas status, start, stop, restart, list_sites, read_log; comandos do Claude Code e do Cursor | README 182-199 |
| Bandeja com ponto verde/laranja/cinza; fechar a janela mantém o Ninho rodando | README 64 |
| Temas claro, escuro ou do Windows | README 65 |
| 18 idiomas, segue o idioma do Windows na primeira vez | README 74; CHANGELOG 0.5.0 |
| Módulos: Apache, Nginx, Caddy, PHP, MySQL 8.4 LTS, MariaDB LTS, PostgreSQL, MongoDB, Node.js LTS, Redis, Memcached, Mailpit, Xdebug, Composer | README 45-46, 58; SITE (chips); CHANGELOG 0.7.0 (MongoDB, Caddy) |
| MySQL 9 não é oferecido porque converte a pasta de dados e não há volta | README 221-222; `docs/baixar-e-atualizar.png` |

## Capturas
| Afirmação | Fonte |
|---|---|
| Sete capturas reais (`painel`, `painel-claro`, `sites`, `portas`, `baixar-e-atualizar`, `verificar`, `boas-vindas`) | `docs/*.png` do repositório, sem edição |
| Estão em inglês e mostram a versão 0.5.0; o tema virou um botão só na 0.6.1 | `docs/painel.png` (cabeçalho "v0.5.0"); CHANGELOG 0.6.1 |
| `verificar.png`: 0 problemas, 0 avisos, 15 ok | `docs/verificar.png` |
| Legendas | README 76-80; SITE (textos das abas) |

## Como começar, downloads, pacotes
| Afirmação | Fonte |
|---|---|
| Passos: baixar x64/x86, pasta vazia (`C:\ninho`) ou `C:\laragon`, abrir, Baixar e atualizar, Ligar tudo, `www\blog` = `http://blog.test` | README 84-88, 100; SITE (Quick start) |
| Nomes dos arquivos da release: Ninho-x64.exe, Ninho-x86.exe, Ninho-linux-x64, Ninho-macos-arm64, Ninho-macos-x64, SHA256SUMS.txt | README 84, 148; briefing da frente |
| Links `releases/latest/download/<arquivo>` respondem 302 (conferido com HEAD em 2026-11-18) | teste feito na entrega |
| Scoop: `scoop bucket add ninho https://github.com/phmrmkv/scoop-ninho` e `scoop install ninho`; pacote na 0.7.0 | README 93-95; LANC (bucket pronto); `packaging/scoop/ninho.json` |
| WinGet: proposta enviada e em análise, ainda não instala | LANC ("Pacote no winget" 🟡); briefing da frente. O README (93) ainda lista `winget install`, por isso o site NÃO o oferece |
| Comandos de terminal `Ninho.exe status --json`, `start mysql`, `--install php mysql nodejs` | SITE; README 67; SRC `cli.rs` 6 |

## Linux e macOS (prévia)
| Afirmação | Fonte |
|---|---|
| Linux x64 e macOS (Apple silicon e Intel); janela, Portas, Sites, logs, CLI e MCP iguais; servidores pelo gerenciador de pacotes | README 142-146, 284-287 |
| `chmod +x`; no macOS botão direito > Abrir (não notarizado) | README 148-149 |
| Configuração em `~/Ninho`; Instalar usa o que já existe; roda como o usuário; Mailpit e Node.js baixados | README 150-164 |
| Apache na 8080; Ninho nunca pede senha, mostra o `sudo` quando o `/etc/hosts` precisa mudar | README 168-170 |
| Exemplos `apt`, `dnf`, `brew` | README 154-158 |
| Lista "ainda não existe": Nginx, HTTPS .test, download do Xdebug, extensões do PHP, importar, MySQL no Ubuntu com AppArmor | README 177-180 |

## Requisitos, confiança, privacidade, perguntas
| Afirmação | Fonte |
|---|---|
| Sem administrador; o Windows só pergunta ao escrever o hosts | SITE (FAQ "Does it need administrator rights?"); CHANGELOG 0.5.0 |
| Aviso do Windows para programa novo; SHA-256 de cada arquivo; código no GitHub | SITE (FAQ); LANC ("sem assinatura... o Windows mostra...") |
| Política de assinatura de código (SignPath) | README 291-298 (só o link; o site não afirma que o `.exe` esteja assinado) |
| O que o Ninho acessa na internet; sem dados de uso, sem relatórios de falha, sem identificadores; falha só em `tmp\ninho-crash.log` | README 300-309 |
| MySQL 8.4 LTS | README 221-222 |
| 32 bits: PHP, Apache, Mailpit, Node.js (até a 22) e cloudflared têm; MySQL 8.4, MariaDB, PostgreSQL, MongoDB, Caddy e Redis não | README 232 |
| Se travar, `tmp\ninho-crash.log`; configurações em `ninho.json` | README 228-230 |
| Traduzir: copiar `locales/en.json`, abrir pull request | README 237 |
| Substitui XAMPP/WampServer/Laragon para PHP+MySQL+Node.js no Windows; pode rodar ao lado | README 218-219 |
| Aviso de que o Ninho não tem ligação com Apache, Oracle, etc. | README 313-315 |

## Rodapé
| Link | Destino |
|---|---|
| GitHub, Versões, Histórico de mudanças, Roteiro, Contribuir, Segurança, Licenças MIT e GPL-3.0, Assinatura de código, Privacidade | arquivos e âncoras do repositório (`CHANGELOG.md`, `ROADMAP.md`, `CONTRIBUTING.md`, `SECURITY.md`, `LICENSE-MIT`, `LICENSE-GPL-3.0`, README `#code-signing-policy`, `#privacy`); todos responderam 200 ou 302 |

Total: cerca de 95 afirmações verificáveis, vindas de README, CHANGELOG, FEATURES, LANCAMENTO, SECURITY, `docs/index.html`, `docs/*.png`, `packaging/scoop/ninho.json` e `src/` (`services.rs`, `home.rs`, `cli.rs`).

## Lista "site atual → site novo" (nada se perde)
| No site atual (`docs/index.html`) | No site novo |
|---|---|
| Botão "Download for Windows" (releases/latest) | Botão do hero e da chamada final: link direto para `Ninho-x64.exe`; "Todas as versões" e "Outros arquivos" levam à página de releases |
| Botão "Source code" | "Ver o código no GitHub" (hero) e links do rodapé |
| "Windows 10 and 11, 64 and 32 bit · MIT or GPL-3.0" | Nota do hero e seção Requisitos |
| Abas de capturas (Modules, Sites, Ports, Download and update, Check the environment, Light theme) | Seção "Por dentro": painel (claro/escuro conforme o tema) e galeria com sites, portas, baixar e atualizar, verificar e boas-vindas |
| 12 cartões de recursos | 16 itens em 4 grupos (inclui todos os 12) |
| Chips de módulos | Lista de módulos (com MongoDB e Caddy, novos na 0.7.0) |
| Quick start (3 passos) | Como começar (4 passos, do README) |
| Terminal: `winget install`, `scoop install ninho`, `Ninho.exe status --json`, `start mysql` | Scoop e comandos do Ninho; WinGet só como "em breve" (ainda em análise) |
| FAQ: gratuito; Windows protegeu o PC; manter XAMPP etc.; administrador; Linux e macOS | Todas mantidas, mais 7 perguntas do README |
| Rodapé: GitHub, Changelog, Contribute, Code signing policy, Privacy, MIT or GPL-3.0 | Todos no rodapé, mais Segurança, Roteiro, Versões e as duas licenças |
| Botão de tema System/Light/Dark | Botão sol/lua; sem escolha salva, segue o tema do sistema |
| "Made by the community, for the community" | Não repetido (frase de efeito; "Contribuir" continua no rodapé) |
| JSON-LD SoftwareApplication, canonical, og, keywords | Mantidos e atualizados (versão 0.7.0, idioma, hreflang) |
| Seção sobre agentes de IA (MCP) só no card "Made for AI agents too" | Seção própria com os comandos |
