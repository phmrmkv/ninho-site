// Dados do Ninho que mudam a cada versão. Para atualizar o site, mude VERSAO e DATA_VERSAO aqui.
export const VERSAO = '0.7.0';
export const DATA_VERSAO = '2026-11-14';

export const SITE = 'https://ninho.phmr.com.br';
export const REPO = 'https://github.com/phmrmkv/Ninho';
export const RELEASES = `${REPO}/releases/latest`;
const BAIXAR = `${REPO}/releases/latest/download`;

export const ARQUIVOS = {
  win64: `${BAIXAR}/Ninho-x64.exe`,
  win32: `${BAIXAR}/Ninho-x86.exe`,
  linux: `${BAIXAR}/Ninho-linux-x64`,
  macArm: `${BAIXAR}/Ninho-macos-arm64`,
  macIntel: `${BAIXAR}/Ninho-macos-x64`,
  sums: `${BAIXAR}/SHA256SUMS.txt`,
} as const;

export const LINKS = {
  repo: REPO,
  releases: RELEASES,
  changelog: `${REPO}/blob/main/CHANGELOG.md`,
  roadmap: `${REPO}/blob/main/ROADMAP.md`,
  features: `${REPO}/blob/main/FEATURES.md`,
  contribuir: `${REPO}/blob/main/CONTRIBUTING.md`,
  seguranca: `${REPO}/blob/main/SECURITY.md`,
  assinatura: `${REPO}#code-signing-policy`,
  privacidade: `${REPO}#privacy`,
  licencaMit: `${REPO}/blob/main/LICENSE-MIT`,
  licencaGpl: `${REPO}/blob/main/LICENSE-GPL-3.0`,
  issues: `${REPO}/issues`,
  scoop: 'https://github.com/phmrmkv/scoop-ninho',
} as const;

export type Idioma = 'pt' | 'en';

/** Caminho de cada idioma (com barra no fim, como o Astro gera). */
export const ROTAS: Record<Idioma, string> = { pt: '/', en: '/en/' };
