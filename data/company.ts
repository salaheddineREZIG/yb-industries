// Company details shown in the footer. Fill in only what the company has confirmed.
// An empty or missing field is simply not displayed. Never invent a value.

export type CompanyInfo = {
  /** Postal address, one line per item. */
  addressLines?: readonly string[];
  /** As it should be displayed, for example "+213 ...". */
  phone?: string;
  email?: string;
  /** One line per item. */
  openingHours?: readonly string[];
};

export const company: CompanyInfo = {};