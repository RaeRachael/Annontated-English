import { AnnotatedLetter} from "../Types/AnnotedLetter";
import { annotations } from "../Mappings/Annotations";

const standardVowels = ['a', 'e', 'i', 'o', 'u']

// using 'w' and 'y' as consonants unless marked by annotations atm!!!
export function isVowel(segment: AnnotatedLetter[], i: number): boolean {
  if (standardVowels.includes(segment[i].plainText) && 
  (!segment[i].annotations.some(annotation => annotations[annotation].type === "consonant"))) {
    return true
  }
  if (segment[i].annotations.some(annotation => annotations[annotation].type === "vowel")) {
    return true
  }
  return false
}

export function isConsonant(segment: AnnotatedLetter[], i: number): boolean {

  return false
}