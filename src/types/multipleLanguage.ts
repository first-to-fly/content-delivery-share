import { LanguageCode } from "./enums/language";


export type MultiLangRecord<T> = {
  [key in LanguageCode]?: T
};
