import { isConsonant, isVowel } from "../Helpers/groupTypeChecker";
import { getIPAForConsonant, getIPAForVowel } from "../Helpers/IPAHelpers";
import {
  isUnAnnotatedConsonant,
  isUnAnnotatedVowel,
} from "../Helpers/letterHelpers";
import { digraphs } from "../Mappings/Digraphs";
import { AnnotatedLetter } from "../Types/AnnotedLetter";

export function getIPAForAE(word: AnnotatedLetter[]): string {
  const ipaStrings: string[] = [];
  removeSilentLetters(word);
  const wordSegments = indentifyWordSegments(word);
  wordSegments.forEach((segment) => {
    // parseCriticalDigraphs(segment) - TO ADD WHEN WANTING FULL RULES IN PLACE
    addVowelAndConsonantMarkers(segment);
    makeVowelDigraphs(segment);
    makeConsonantDigraphs(segment);
    // sort out rhotic vowels
    getIPAForLetter(segment);
    ipaStrings.push(
      segment.map((annotatedLetter) => annotatedLetter.ipa).join("")
    );
    // postProcess
  });
  return ipaStrings.join("");
}

export function removeSilentLetters(word: AnnotatedLetter[]): void {
  for (const letter in word) {
    // console.log(letter, word)
    if (word[letter].annotations.includes("silent")) {
      word.splice(word.indexOf(word[letter]), 1);
    }
  }
}

export function indentifyWordSegments(
  word: AnnotatedLetter[]
): [AnnotatedLetter[]] {
  let wordSegments: [AnnotatedLetter[]] = [[]];
  let numberOfSegments = 0;
  for (var i = 0; i < word.length; i++) {
    if (i + 1 === word.length) {
      wordSegments[numberOfSegments] = word.splice(0, i + 1);
      numberOfSegments++;
      continue;
    }
    if (
      (word[i].plainText === "'" && word[i + 1].plainText !== "r") ||
      word[i].annotations.some((annotation) =>
        annotation.includes("seperator")
      ) ||
      word[i].plainText === "-"
    ) {
      wordSegments[numberOfSegments] = word.splice(0, i);
      word.splice(0, 1); // removing the separation causing letter
      numberOfSegments++;
      i = -1; //move the pointer to the begining of the word
    } else if (word[i].plainText === "'") {
      // remove " ' "
      word.splice(i, 1);
      i--;
    }
  }
  return wordSegments;
}

export function addVowelAndConsonantMarkers(segment: AnnotatedLetter[]): void {
  for (var i = 0; i < segment.length; i++) {
    if (isVowel(segment, i)) {
      if (segment[i].plainText === "w") {
        console.log(segment, "w is vowel....?");
      }
      segment[i].groupType = "vowel";
    } else {
      //if (isConsonant(segment, i)) {
      segment[i].groupType = "consonant";
      // } else {
      //   console.log("not vowel or consonant ?", segment[i])
    }
  }
}

export function makeVowelDigraphs(segment: AnnotatedLetter[]): void {
  for (var i = 1; i < segment.length; i++) {
    if (isUnAnnotatedVowel(segment[i]) && isUnAnnotatedVowel(segment[i - 1])) {
      if (
        digraphs.vowel.includes(segment[i - 1].plainText + segment[i].plainText)
      ) {
        segment[i - 1].plainText += segment[i].plainText;
        segment[i - 1].digraph = true;
        segment.splice(i, 1);
      }
    }
  }
}

export function makeConsonantDigraphs(segment: AnnotatedLetter[]): void {
  digraphs.consonant.forEach((currentDigraph) => {
    for (var i = 1; i < segment.length; i++) {
      if (
        isUnAnnotatedConsonant(segment[i]) &&
        isUnAnnotatedConsonant(segment[i - 1])
      ) {
        if (
          currentDigraph ===
          segment[i - 1].plainText + segment[i].plainText
        ) {
          segment[i - 1].plainText += segment[i].plainText;
          segment[i - 1].digraph = true;
          segment.splice(i, 1);
        }
      }
    }
  });
}

export function getIPAForLetter(segment: AnnotatedLetter[]): void {
  for (var i = 0; i < segment.length; i++) {
    if (segment[i].groupType === "vowel") {
      getIPAForVowel(segment[i]);
    } else if (segment[i].groupType === "consonant") {
      getIPAForConsonant(segment[i]);
    } else {
      console.log("what is ??", segment[i]);
    }
  }
}
