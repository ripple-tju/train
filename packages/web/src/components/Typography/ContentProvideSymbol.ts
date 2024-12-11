import type { InjectionKey } from 'vue';

type HeadingRegister = (level: number, text: string) => number[];

export const RegisterHeading = Symbol() as InjectionKey<HeadingRegister>;
export const IsInContent = Symbol() as InjectionKey<true>;
