import en from "./en.json" with {type : "json"}
import hr from "./hr.json" with {type : "json"}

export function getDictionary(locale: string) {
  return locale === "en" ? en : hr;
}