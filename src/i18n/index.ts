import { pt } from './pt';
import { en } from './en';
import type { Idioma } from '@/dados/ninho';
import type { Textos } from './tipos';

export type { Textos };
export const textos: Record<Idioma, Textos> = { pt, en };
