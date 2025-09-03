import type { CDEntity } from "../entity";
import type { CurrencyCode } from "../enums/currency";
import type { LanguageCode } from "../enums/language";

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
  localizationSupportLanguages: LanguageCode[];
  homeCurrency: CurrencyCode;
  currencyExtra: {
    supportedCurrencies: {
      currency: CurrencyCode;
      rate: number;
    }[];
  } | null;
  defaultTaxConfig: {
    scheme: string;
    rate: number; // Tax rate as percentage, e.g., 7.5 for 7.5%
  } | null;

  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string | null;
}
