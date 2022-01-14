import { AnnotatedLetter } from "../Types/AnnotedLetter";
import { annotations } from "../Mappings/Annotations";

const standardVowels = ["a", "e", "i", "o", "u"];

// using 'w' and 'y' as consonants unless marked by annotations atm!!!
export function isVowel(segment: AnnotatedLetter[], i: number): boolean {
  if (segment[i].groupType === "vowel") {
    return true;
  }
  if (
    standardVowels.includes(segment[i].plainText) &&
    !segment[i].annotations.some(
      (annotation) => annotations[annotation].type === "consonant"
    )
  ) {
    return true;
  }
  // if (
  //   segment[i].annotations.some(
  //     (annotation) => annotations[annotation].type === "vowel"
  //   )
  // ) {
  //   return true;
  // }
  if (segment[i].plainText === "y" && yShouldBeVowel(i, segment)) {
    return true;
  }
  if (segment[i].plainText === "w" && wShouldBeVowel(i, segment)) {
    // console.log("w - vowel", segment, i);
    return true;
  }
  // if (
  //   segment[i].plainText === "w" &&
  //   !standardVowels.includes(segment[i + 1].plainText)
  // ) {
  //   return true;
  // }
  return false;
}

function yShouldBeVowel(position: number, segment: AnnotatedLetter[]): boolean {
  if (position !== 0 && isVowel(segment, position - 1)) {
    return false;
  } // remove ^ once digraphs are properly treated
  if (position === segment.length - 1) {
    return true;
  }
  if (position !== segment.length - 1 && !isVowel(segment, position + 1)) {
    return true;
  }
  if (position !== 0 && !isVowel(segment, position - 1)) {
    return true;
  }
  return false;
}

function wShouldBeVowel(position: number, segment: AnnotatedLetter[]): boolean {
  if (position !== 0 && isVowel(segment, position - 1)) {
    return false;
  } // remove ^ once digraphs are properly treated
  if (position === segment.length - 1) {
    return true;
  }
  if (position !== segment.length - 1) {
    if (
      !["w", "y"].includes(segment[position + 1].plainText) &&
      !isVowel(segment, position + 1)
    ) {
      return true;
    }
  }
  return false;
}

export function isConsonant(segment: AnnotatedLetter[], i: number): boolean {
  return false;
}
