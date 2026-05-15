export const LOCALES = {
  en: {
    iso: "en-US",
    name: "English",
  },
  hi: {
    iso: "hi-IN",
    name: "हिन्दी",
  },
  mr: {
    iso: "mr-IN",
    name: "मराठी",
  },
} as const satisfies Record<
  string,
  {
    name: string;
    iso: string;
  }
>;

export const LOCALE_DEFAULT: keyof typeof LOCALES = "en";
