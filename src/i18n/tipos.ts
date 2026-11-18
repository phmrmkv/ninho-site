import type { pt } from './pt';

type Largo<T> = T extends string ? string : T extends boolean ? boolean : T extends readonly (infer U)[] ? Largo<U>[] : { [K in keyof T]: Largo<T[K]> };

/** Forma dos textos: o português é a referência e o inglês precisa ter as mesmas chaves. */
export type Textos = Largo<typeof pt>;
