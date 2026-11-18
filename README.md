# Site do Ninho

Site de apresentação do [Ninho](https://github.com/phmrmkv/Ninho), o servidor local gratuito e portátil para Windows. Endereço: https://ninho.phmr.com.br (português em `/`, inglês em `/en/`).

Astro 7 (saída estática), Tailwind CSS 4, TypeScript estrito. Sem React: o pouco de interação (tema, menu, copiar comandos) é TypeScript puro em `src/scripts/interacoes.ts`.

## Rodar

```bash
npm install
npm run dev        # desenvolvimento
npm run check      # astro check (0 erros, 0 avisos, 0 dicas)
npm run build      # gera dist/
npm run preview    # serve dist/ na porta 4403
npm run marca      # refaz favicon-32, apple-touch-icon e og-image a partir de public/favicon.svg
```

## Como está organizado

- `src/dados/ninho.ts`: **versão do Ninho** (`VERSAO`, `DATA_VERSAO`), links de download e do repositório. Para atualizar o site numa nova versão, mude só `VERSAO` aqui (o texto do selo, o JSON-LD e a chamada final usam a constante). Os links `releases/latest/download/...` já apontam para a última release.
- `src/i18n/pt.ts` e `src/i18n/en.ts`: todos os textos. O inglês precisa ter as mesmas chaves do português (o `astro check` acusa se faltar).
- `src/components/Pagina.astro`: a página inicial, usada pelos dois idiomas (`src/pages/index.astro` e `src/pages/en/index.astro`). `Pagina404.astro` faz o mesmo para as duas 404.
- `src/components/CreditoPHMR.astro`: crédito "Desenvolvido por PHMR Tech Solutions", com a prop `idioma` (`pt` ou `en`).
- `src/styles/global.css`: tokens de cor (claro e escuro), movimento e componentes. `docs/transicoes.md` explica as regras de movimento.
- `src/assets/capturas/`: capturas reais do repositório do Ninho (PNG originais; o Astro gera AVIF e WebP).
- `public/`: favicon (o `assets/ninho.svg` do Ninho, sem alteração), `og-image.jpg`, `robots.txt` e `.htaccess` (com `public/en/.htaccess` para a 404 em inglês).
- `docs/fontes.md`: de onde vem cada afirmação do site e a lista "site atual → site novo".

## Identidade

Verde-água do logo do Ninho com castanho de galho como cor de apoio. A assinatura é a tabela de módulos do hero (HTML e CSS), rotulada "Ilustração", que acende em sequência como um "Ligar tudo"; com movimento reduzido ou sem JavaScript, mostra tudo aceso.

## Hospedagem

Site estático para a Hostinger (Apache). Publicar o conteúdo de `dist/`. O `.htaccess` força HTTPS e sem www, define cabeçalhos de segurança e cache e aponta `ErrorDocument 404` para `/404.html` (e `/en/404.html` dentro de `/en/`).

## Pendências do conteúdo

- As capturas são da versão 0.5.0 do Ninho (o site avisa); trocar por capturas da 0.7.0 quando houver, mantendo os nomes de arquivo.
- WinGet: hoje aparece só como "em breve". Quando o pacote for aprovado, trocar o texto em `pacotes.winget` nos dois dicionários e acrescentar `winget install Phmrmkv.Ninho`.
