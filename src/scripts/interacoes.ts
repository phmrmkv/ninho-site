// Interações da página. Tudo aqui é melhoria: sem este arquivo a página continua
// legível, com âncoras e CSS puros (docs/transicoes.md).

const reduzido = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const raiz = document.documentElement;
const COR_CLARO = '#f2f4f1';
const COR_ESCURO = '#0e1617';

/* ---------- Tema ---------- */
const botaoTema = document.querySelector<HTMLButtonElement>('[data-tema-botao]');
if (botaoTema) {
  const sincronizar = () => {
    const escuro = raiz.dataset.theme === 'dark';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', escuro ? COR_ESCURO : COR_CLARO);
    botaoTema.setAttribute('aria-label', (escuro ? botaoTema.dataset.rotuloClaro : botaoTema.dataset.rotuloEscuro) ?? '');
  };
  sincronizar();
  new MutationObserver(sincronizar).observe(raiz, { attributes: true, attributeFilter: ['data-theme'] });
  botaoTema.addEventListener('click', () => {
    const proximo = raiz.dataset.theme === 'dark' ? 'light' : 'dark';
    raiz.dataset.theme = proximo;
    try {
      localStorage.setItem('ninho-tema', proximo);
    } catch {
      /* sem armazenamento: a troca vale só nesta visita */
    }
  });
  window.addEventListener('storage', (e) => {
    if (e.key === 'ninho-tema' && (e.newValue === 'dark' || e.newValue === 'light')) raiz.dataset.theme = e.newValue;
  });
}

/* ---------- Rolagem suave das âncoras (curva do sistema) ---------- */
function curvaSuave(t: number): number {
  const x1 = 0.22, y1 = 1, x2 = 0.36, y2 = 1;
  const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
  const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
  const sx = (u: number) => ((ax * u + bx) * u + cx) * u;
  const dsx = (u: number) => (3 * ax * u + 2 * bx) * u + cx;
  let u = t;
  for (let i = 0; i < 6; i++) {
    const d = dsx(u);
    if (Math.abs(d) < 1e-6) break;
    u -= (sx(u) - t) / d;
  }
  u = Math.min(1, Math.max(0, u));
  return ((ay * u + by) * u + cy) * u;
}

let rolagemAtual = 0;
function rolarAte(y: number, aoTerminar?: () => void) {
  cancelAnimationFrame(rolagemAtual);
  const inicio = window.scrollY;
  const distancia = y - inicio;
  if (Math.abs(distancia) < 2) {
    window.scrollTo(0, y);
    aoTerminar?.();
    return;
  }
  const duracao = reduzido() ? 300 : Math.min(900, Math.max(450, Math.abs(distancia) * 0.25));
  const t0 = performance.now();
  const passo = (agora: number) => {
    const p = Math.min(1, (agora - t0) / duracao);
    window.scrollTo(0, inicio + distancia * curvaSuave(p));
    if (p < 1) rolagemAtual = requestAnimationFrame(passo);
    else aoTerminar?.();
  };
  rolagemAtual = requestAnimationFrame(passo);
}
for (const ev of ['wheel', 'touchstart', 'keydown'] as const) {
  window.addEventListener(ev, () => cancelAnimationFrame(rolagemAtual), { passive: true });
}

const menu = document.querySelector<HTMLDetailsElement>('[data-menu]');

document.addEventListener('click', (e) => {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  const link = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[href*="#"]');
  if (!link || link.pathname !== location.pathname || !link.hash) return;
  const id = decodeURIComponent(link.hash.slice(1));
  const alvo = document.getElementById(id);
  if (!alvo) return;
  e.preventDefault();
  if (menu?.open) menu.open = false;
  history.pushState(null, '', `#${id}`);
  const margem = parseFloat(getComputedStyle(alvo).scrollMarginTop) || 0;
  const y = alvo.getBoundingClientRect().top + window.scrollY - margem;
  rolarAte(Math.max(0, y), () => {
    if (!alvo.hasAttribute('tabindex')) alvo.setAttribute('tabindex', '-1');
    alvo.focus({ preventScroll: true });
  });
});

/* ---------- Menu do celular: Esc fecha e devolve o foco ao botão ---------- */
if (menu) {
  menu.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.open) {
      menu.open = false;
      menu.querySelector('summary')?.focus();
    }
  });
  document.addEventListener('click', (e) => {
    if (menu.open && !menu.contains(e.target as Node)) menu.open = false;
  });
}

/* ---------- Cabeçalho: borda ao rolar ---------- */
const cabecalho = document.querySelector<HTMLElement>('[data-cabecalho]');
if (cabecalho) {
  const marcar = () => (cabecalho.dataset.rolado = String(window.scrollY > 8));
  marcar();
  window.addEventListener('scroll', marcar, { passive: true });
}

/* ---------- Seção atual no menu ---------- */
const nav = document.querySelector<HTMLElement>('[data-nav]');
if (nav && 'IntersectionObserver' in window) {
  const links = [...nav.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')];
  const secoes = links.map((a) => document.getElementById(a.hash.slice(1))).filter((s): s is HTMLElement => !!s);
  const visiveis = new Set<string>();
  const io = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((en) => (en.isIntersecting ? visiveis.add(en.target.id) : visiveis.delete(en.target.id)));
      const atual = secoes.find((s) => visiveis.has(s.id));
      links.forEach((a) => (atual && a.hash === `#${atual.id}` ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current')));
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );
  secoes.forEach((s) => io.observe(s));
}

/* ---------- Copiar comandos ---------- */
document.querySelectorAll<HTMLButtonElement>('[data-copiar]').forEach((botao) => {
  const rotulo = botao.querySelector<HTMLElement>('[data-copiar-rotulo]');
  const aviso = botao.parentElement?.querySelector<HTMLElement>('[data-copiar-aviso]');
  const original = rotulo?.textContent ?? '';
  let tempo = 0;
  botao.addEventListener('click', async () => {
    const alvo = document.getElementById(botao.dataset.copiar ?? '');
    if (!alvo) return;
    try {
      await navigator.clipboard.writeText(alvo.textContent ?? '');
    } catch {
      return; // sem permissão: o texto continua selecionável
    }
    if (rotulo) rotulo.textContent = botao.dataset.copiado ?? original;
    if (aviso) aviso.textContent = botao.dataset.copiado ?? '';
    window.clearTimeout(tempo);
    tempo = window.setTimeout(() => {
      if (rotulo) rotulo.textContent = original;
      if (aviso) aviso.textContent = '';
    }, 2000);
  });
});
