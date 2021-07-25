import { digraphs } from "../Mappings/Digraphs";
import { AnnotatedLetter, annotation, groupType } from "../Types/AnnotedLetter";

export function isUnAnnotatedVowel(letter: AnnotatedLetter): boolean {
  if (letter.groupType === "vowel" && letter.annotations.length === 0) {
    return true
  }
  return false
}

export function isUnAnnotatedConsonant(letter: AnnotatedLetter): boolean {
  if (letter.groupType === "consonant" && letter.annotations.length === 0) {
    return true
  }
  return false
}

export function makeAnnotatedLetter(
  plainText: string,
  annotations: annotation[],
  digraph: boolean,
  groupType: groupType)
  : AnnotatedLetter 
  {
  return {
    plainText: plainText,
    annotations: annotations,
    annotatedString: "",
    ipa: "",
    digraph: digraph,
    groupType: groupType
  }
}

const vowelDigraphs = [
  "aa",
  "ae",
  "ai",
  "ay",
  "au",
  "aw",
  "ea",
  "ee",
  "ei",
  "ey",
  "eu",
  "ew",
  "oa",
  "oi",
  "oy",
  "oo",
  "ou",
  "ow"
]


export function getVowelUnits(group: AnnotatedLetter[]): AnnotatedLetter[] {
  let vowelUnits = []
  for (var i = 0; i < group.length; i++) {
    if (i === group.length -1 || group[i].annotations || group[i+1].annotations) {
      vowelUnits.push(
        makeAnnotatedLetter(group[i].plainText,group[i].annotations,group[i].digraph,"vowel")
      )
      continue 
    }
    if (vowelDigraphs.includes(group[i].plainText+group[1+1].plainText)) {
      vowelUnits.push(
        makeAnnotatedLetter(group[i].plainText+group[1+1].plainText,[],true,"vowel")
      )
      i++
    }
  }
  return vowelUnits
}