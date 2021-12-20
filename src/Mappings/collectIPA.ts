import dictionaryEN from "../Dictionary/en_UK.json";

const dictionary: { [index: string]: any } = dictionaryEN;

export function getIPAForText(word: string): string {
  word = word.toLowerCase();
  word = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  var ipa: string | undefined = dictionary[word];
  if (!ipa) return "NOT FOUND";
  return ipa
    .substring(1, ipa.length - 1)
    .replace("ˈ", "M")
    .replace("ˌ", "S")
    .replace(/u200B/g, "");
}
