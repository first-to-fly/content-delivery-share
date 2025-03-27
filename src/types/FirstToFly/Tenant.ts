import { CDEntity } from "../entity";
import { CurrencyCode } from "../enums/currency";
import { LanguageCode } from "../enums/language";

/**
 * @export
 * @interface FTFTenant
 * @extends {CDEntity}
 */
export interface FTFTenant extends CDEntity {
  name: string;
  logo: string | null;
  description: string;
  domain: string;
  languages: LanguageCode[];
  homeCurrency: CurrencyCode;
  currencyExtra: {
    supportedCurrencies: {
      currency: CurrencyCode;
      rate: number;
    }[];
  } | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
