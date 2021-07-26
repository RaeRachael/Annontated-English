import dictionaryEN from '../Dictionary/en_UK.json'

const dictionary: {[index: string]:any} = dictionaryEN

export function getIPAFor(word: string): string {
  var ipa: string | undefined = dictionary[word]
  if (!ipa) return "NOT FOUND"
  return ipa.substring(1, ipa.length-1)
}

