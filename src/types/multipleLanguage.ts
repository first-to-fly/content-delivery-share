import { LanguageCode } from "./enums/language";


export type MultiLanguageData<T> = {
  [key in LanguageCode]?: T
};
