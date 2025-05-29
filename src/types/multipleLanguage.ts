import { LanguageCode } from "./enums/language";


export type MultiLangRecord<T> = {
  [key in LanguageCode]?: T
};

export function getMultiLangRecord<T>(record: MultiLangRecord<T>, preferredLanguages?: LanguageCode[]): T | undefined {
  for (let i = 0; i < (preferredLanguages?.length ?? 0); i++) {
    const language = preferredLanguages?.[i];
    if (language && record[language]) {
      return record[language];
    }
  }

  return record[LanguageCode.ENGLISH];
}
