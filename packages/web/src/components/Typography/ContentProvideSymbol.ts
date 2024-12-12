import type { InjectionKey } from 'vue';

type HeadingRegister = (level: number, text: string) => number[]
type TitleRegister = (text: string) => undefined

export const RegisterHeading = Symbol() as InjectionKey<HeadingRegister>;
export const RegisterTitle = Symbol() as InjectionKey<TitleRegister>;
export const IsInContent = Symbol() as InjectionKey<true>;
