import type { InjectionKey } from 'vue';

export const RegisterHeading = Symbol() as InjectionKey<(level: number) => number[]>;
export const IsInContent = Symbol() as InjectionKey<true>;
