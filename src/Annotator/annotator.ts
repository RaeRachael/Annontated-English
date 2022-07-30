import { makeAnnotatedLetter } from "../Helpers/letterHelpers";
import { getIPAForAE } from "../Interpretor/PronouceAE";
import { AnnotatedCodeToAnnotatedText } from "./annotatingText";

import { getIPAForText } from "../Mappings/collectIPA";
import { consonants } from "../Mappings/ConsonantPronounciation";
import { digraphs } from "../Mappings/Digraphs";
import { vowels } from "../Mappings/VowelPronouciation";
import { AnnotatedLetter } from "../Types/AnnotedLetter";
import { mutateLetter } from "./mutations";
import { defaultRules, rules } from "../Types/Rules";

// const isAnnotation = (x: any): x is annotation => Annotation.includes(x);
export function annotate(plainText: string, rules: rules = defaultRules) {
  const ipaNeeded = getIPAForText(plainText);
  // console.log(ipaNeeded, "needed");
  const lettersAE = buildAECodeForText(plainText);
  // console.log(lettersAE, "builtLetters");
  let correctAE: AnnotatedLetter[] = [];

  correctAE = mutateAsNeeded(lettersAE, ipaNeeded) || [];

  console.log(
    checker(correctAE, ipaNeeded),
    ipaNeeded,
    getIPAForAE(correctAE),
    AnnotatedCodeToAnnotatedText(JSON.parse(JSON.stringify(correctAE)), rules)
    // correctAE
  );

  return AnnotatedCodeToAnnotatedText(correctAE, rules);
}

function buildAECodeForText(plainText: string): AnnotatedLetter[] {
  const letters: AnnotatedLetter[] = [];
  for (var i = 0; i < plainText.length; i++) {
    if (
      i + 1 !== plainText.length &&
      digraphs.consonant.includes(plainText[i].toLowerCase() + plainText[i + 1])
    ) {
      letters.push(
        makeAnnotatedLetter(
          plainText[i] + plainText[i + 1],
          ["digraph"],
          true,
          "consonant"
        )
      );
      i++;
    } else if (
      i + 1 !== plainText.length &&
      digraphs.vowel.includes(plainText[i].toLowerCase() + plainText[i + 1])
    ) {
      letters.push(
        makeAnnotatedLetter(
          plainText[i] + plainText[i + 1],
          ["digraph"],
          true,
          "vowel"
        )
      );
      i++;
      // console.log("vowel digraph", letters);
    } else if (Object.keys(consonants).includes(plainText[i].toLowerCase())) {
      letters.push(makeAnnotatedLetter(plainText[i], [], false, "consonant"));
    } else {
      letters.push(makeAnnotatedLetter(plainText[i], [], false, "vowel"));
    }
  }
  return letters;
}

export function checker(
  annotatedWord: AnnotatedLetter[],
  ipaWord: string
): boolean {
  // let copyOfWord = JSON.parse(JSON.stringify(annotatedWord));
  return getIPAForAE(annotatedWord) === ipaWord;
}

function mutateAsNeeded(
  lettersAE: AnnotatedLetter[],
  ipaString: string
): AnnotatedLetter[] | void {
  if (checker(JSON.parse(JSON.stringify(lettersAE)), ipaString)) {
    return lettersAE;
  }

  //mutate 'letter' if corresponding ipa doesn't match target.

  for (var i = 0; ; ) {
    let ipaAESection = getIPAForAE(lettersAE.slice(0, i + 1));

    if (ipaString.substring(0, ipaAESection.length) === ipaAESection) {
      console.log(
        "index,",
        i,
        lettersAE[i].plainText,
        ipaAESection,
        ipaString.substring(0, ipaAESection.length),
        "no mutation needed"
      );
      i++;
    } else {
      console.log(
        "index,",
        i,
        lettersAE[i].plainText,
        ipaAESection,
        ipaString.substring(0, ipaAESection.length),
        "mutation needed"
      );
      const mutatedLetterObject = mutateLetter(lettersAE, i, ipaString);
      const mutatedLettersAE: AnnotatedLetter[] = [
        ...lettersAE.slice(0, i),
        ...mutatedLetterObject.letters,
        ...lettersAE.slice(
          i + mutatedLetterObject.numberMutated,
          lettersAE.length
        ),
      ];
      console.log(
        "post mutation",
        mutatedLetterObject,
        mutatedLettersAE,
        lettersAE,
        i,
        lettersAE.length
      );
      console.log(mutatedLettersAE, "post mutation");
      lettersAE = mutatedLettersAE;
      i += mutatedLetterObject.numberMutated;
      // console.log(lettersAE, i, "next to check");
    }
    // console.log(lettersAE[i], ipaString, "mutation stage", i);
    if (i === lettersAE.length) {
      // console.log("finished mutation");
      return lettersAE;
    }
  }
}
