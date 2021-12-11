import { makeAnnotatedLetter } from "../Helpers/letterHelpers";
import { getIPAForAE } from "../Interpretor/PronouceAE";
import { AnnotatedCodeToAnnotatedText } from "../Mappings/AECodeToAE";
import { annotations } from "../Mappings/Annotations";
import { getIPAForText } from "../Mappings/collectIPA";
import { digraphs } from "../Mappings/Digraphs";
import { vowels } from "../Mappings/VowelPronouciation";
import {
  AnnotatedLetter,
  annotation,
  Annotation,
} from "../Types/AnnotedLetter";

const isAnnotation = (x: any): x is annotation => Annotation.includes(x);

export function annotate(plainText: string) {
  const ipaNeeded = getIPAForText(plainText);
  // console.log(ipaNeeded, "needed");
  const lettersAE = buildAECodeForText(plainText);
  let correctAE: AnnotatedLetter[] = [];

  correctAE = mutateAsNeeded(lettersAE, ipaNeeded) || [];

  console.log(AnnotatedCodeToAnnotatedText(correctAE));
  // console.log(correctAE, "correctAE");
  return correctAE;
}

function buildAECodeForText(plainText: string): AnnotatedLetter[] {
  const letters: AnnotatedLetter[] = [];
  for (var i = 0; i < plainText.length; i++) {
    if (
      i + 1 === plainText.length ||
      !digraphs.consonant.includes(plainText[i] + plainText[i + 1])
    )
      if (Object.keys(vowels).includes(plainText[i])) {
        letters.push(makeAnnotatedLetter(plainText[i], [], false, "vowel"));
      } else {
        letters.push(makeAnnotatedLetter(plainText[i], [], false, "consonant"));
      }
    else {
      letters.push(
        makeAnnotatedLetter(
          plainText[i] + plainText[i + 1],
          ["digraph"],
          true,
          "consonant"
        )
      );
      i++;
    }
  }
  return letters;
}

export function checker(
  annotatedWord: AnnotatedLetter[],
  ipaWord: string
): boolean {
  return getIPAForAE(JSON.parse(JSON.stringify(annotatedWord))) === ipaWord;
}

function mutateAsNeeded(
  lettersAE: AnnotatedLetter[],
  ipaString: string
): AnnotatedLetter[] | void {
  if (checker(JSON.parse(JSON.stringify(lettersAE)), ipaString)) {
    return lettersAE;
  }

  //mutate 'letter' if corresponding ipa doesn't match target.

  for (var i = 0; ; i++) {
    let ipaAESection = getIPAForAE(lettersAE.slice(0, i + 1));
    if (
      ipaAESection.length > 0 &&
      ipaString.substring(0, ipaAESection.length) === ipaAESection
    ) {
    } else {
      mutateLetter(lettersAE, i, ipaString);
    }

    if (i === lettersAE.length) {
      return lettersAE;
    }
  }
}

export function mutateLetter(
  lettersAE: AnnotatedLetter[],
  index: number,
  targetIPA: string
): void {
  let testAE: AnnotatedLetter[] = JSON.parse(JSON.stringify(lettersAE));
  for (const [name, annotationHere] of Object.entries(annotations)) {
    if (
      lettersAE[index].groupType === "vowel" &&
      ["vowel", "letter", "any"].includes(annotationHere.valid)
    ) {
      if (isAnnotation(name)) {
        testAE[index].annotations = [name];
        let ipaAESection = getIPAForAE(testAE.slice(0, index + 1));
        if (
          ipaAESection.length > 0 &&
          targetIPA.substring(0, ipaAESection.length) === ipaAESection
        ) {
          // console.log("good mutation", name, ipaAESection, targetIPA);
          lettersAE[index].annotations = [name];
          return;
        }
      }
    }
    if (
      lettersAE[index].groupType === "consonant" &&
      ["consonant", "letter", "any"].includes(annotationHere.valid)
    ) {
      if (isAnnotation(name)) {
        testAE[index].annotations = [name];
        let ipaAESection = getIPAForAE(testAE.slice(0, index + 1));
        if (
          ipaAESection.length > 0 &&
          targetIPA.substring(0, ipaAESection.length) === ipaAESection
        ) {
          // console.log("good mutation", name, ipaAESection, targetIPA);
          lettersAE[index].annotations = [name];
          return;
        }
      }
    }
  }

  // if (index >= lettersAE.length) {
  //   return
  // }
  // let change:boolean
  // let mutatingAE: AnnotatedLetter[] = JSON.parse(JSON.stringify(lettersAE))

  // for (const [name, annotationHere] of Object.entries(annotations)) {
  //   change = false
  //   if (mutatingAE[index].groupType === "vowel" &&
  //     ["vowel", "letter", "any"].includes(annotationHere.valid)) {
  //     if (isAnnotation(name)) {
  //       mutatingAE[index].annotations = [name]
  //       change = true
  //     }
  //   }
  //   if (mutatingAE[index].groupType === "consonant" &&
  //     ["consonant", "letter", "any"].includes(annotationHere.valid)) {
  //     if (isAnnotation(name)) {
  //       mutatingAE[index].annotations = [name]
  //       change = true
  //     }
  //   }
  //   // if (checker(JSON.parse(JSON.stringify(mutatingAE)), ipaString)) {
  //   //   return mutatingAE
  //   // }
  //   if (change || name === 'digraph') { //digraph is the first one (and will never be added)
  //     const reMutatedAE = mutateAsNeeded(mutatingAE, ipaString, index + 1)
  //     if (reMutatedAE) return reMutatedAE
  //   }
  // }
}
