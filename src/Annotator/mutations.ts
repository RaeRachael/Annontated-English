import { makeAnnotatedLetter } from "../Helpers/letterHelpers";
import { getIPAForAE } from "../Interpretor/PronouceAE";
import { annotations } from "../Mappings/Annotations";
import {
  AnnotatedLetter,
  annotation,
  Annotation,
} from "../Types/AnnotedLetter";

const isAnnotation = (x: any): x is annotation => Annotation.includes(x);

export function mutateLetter(
  lettersAE: AnnotatedLetter[],
  index: number,
  targetIPA: string
): { letters: AnnotatedLetter[]; numberMutated: number } {
  let testAE: AnnotatedLetter[] = JSON.parse(JSON.stringify(lettersAE));

  if (lettersAE[index].digraph) {
    console.log("digraph", lettersAE[index], index, lettersAE);
    let mutatedLetters = splitDigraphWithSeperator(lettersAE, index, targetIPA);
    console.log("plain seperator...", mutatedLetters);
    if (mutatedLetters.numberMutated !== -1) {
      return mutatedLetters;
    }
  }

  for (const [name, annotationHere] of Object.entries(annotations)) {
    if (lettersAE[index].digraph) {
      if (isAnnotation(name)) {
        let mutatedLetters = splitDigraphWithAnnotation(
          lettersAE,
          index,
          targetIPA,
          name
        );

        if (mutatedLetters.numberMutated !== -1) {
          return mutatedLetters;
        }
      }
    }
    if (
      (lettersAE[index].groupType === "vowel" ||
        lettersAE[index].plainText === "y" ||
        lettersAE[index].plainText === "w") &&
      ["vowel", "letter", "any"].includes(annotationHere.valid)
    ) {
      if (isAnnotation(name)) {
        let mutatedLetter = mutateLetterWithAnnotation(
          lettersAE,
          testAE,
          index,
          targetIPA,
          name
        );

        if (mutatedLetter.numberMutated !== -1) {
          return mutatedLetter;
        }

        mutatedLetter = mutateLetterWithAnnotationStress(
          lettersAE,
          testAE,
          index,
          targetIPA,
          name
        );

        if (mutatedLetter.numberMutated !== -1) {
          return mutatedLetter;
        }
      }
    }
    if (
      (lettersAE[index].groupType === "consonant" ||
        lettersAE[index].plainText === "y" ||
        lettersAE[index].plainText === "w") &&
      ["consonant", "letter", "any"].includes(annotationHere.valid)
    ) {
      if (isAnnotation(name)) {
        let mutatedLetter = mutateLetterWithAnnotation(
          lettersAE,
          testAE,
          index,
          targetIPA,
          name
        );

        if (mutatedLetter.numberMutated !== -1) {
          return mutatedLetter;
        }
      }
    }
  }
  console.log(
    "faield to find a correct mutation",
    // index,
    lettersAE[index]
    // lettersAE,
    // targetIPA
  );
  return { letters: [lettersAE[index]], numberMutated: 1 };
}

function mutateLetterWithAnnotation(
  lettersAE: AnnotatedLetter[],
  testAE: AnnotatedLetter[],
  index: number,
  targetIPA: string,
  annotation: string
): { letters: AnnotatedLetter[]; numberMutated: number } {
  if (isAnnotation(annotation)) {
    testAE[index].annotations = testAE[index].digraph
      ? ["digraph", annotation]
      : [annotation];

    let ipaAESection = getIPAForAE(testAE.slice(0, index + 1));

    if (matchingIPASoFar(targetIPA, ipaAESection)) {
      // console.log("good mutation", name, ipaAESection, targetIPA);
      if (["y_semiconsonant", "w_semiconsonant"].includes(annotation)) {
        if (index !== lettersAE.length - 1) {
          let nextLetterCheckLetters = checkNextLetterCanMakeSound(
            lettersAE,
            index,
            targetIPA,
            annotation
          );

          if (nextLetterCheckLetters.numberMutated !== -1) {
            return nextLetterCheckLetters;
          }
        }

        return {
          letters: [
            makeAnnotatedLetter("\u200b", [annotation], false, "consonant"),
            lettersAE[index],
          ],
          numberMutated: 1,
        };
      }

      return { letters: [testAE[index]], numberMutated: 1 };
    }
  }
  return { letters: [], numberMutated: -1 };
}

function mutateLetterWithAnnotationStress(
  lettersAE: AnnotatedLetter[],
  testAE: AnnotatedLetter[],
  index: number,
  targetIPA: string,
  annotation: string
): { letters: AnnotatedLetter[]; numberMutated: number } {
  if (isAnnotation(annotation) && isAnnotation("main_stress")) {
    testAE[index].annotations = testAE[index].digraph
      ? ["digraph", annotation, "main_stress"]
      : [annotation, "main_stress"];

    let ipaAESection = getIPAForAE(testAE.slice(0, index + 1));

    if (matchingIPASoFar(targetIPA, ipaAESection)) {
      // console.log("good mutation", annotation, ipaAESection, targetIPA);
      if (["y_semiconsonant", "w_semiconsonant"].includes(annotation)) {
        return {
          letters: [
            makeAnnotatedLetter("\u200b", [annotation], false, "consonant"),
            lettersAE[index],
          ],
          numberMutated: 0,
        };
      }

      return { letters: [testAE[index]], numberMutated: 1 };
    }
  }
  if (isAnnotation(annotation) && isAnnotation("secondary_stress")) {
    testAE[index].annotations = testAE[index].digraph
      ? ["digraph", "secondary_stress", annotation]
      : ["secondary_stress", annotation];

    let ipaAESection = getIPAForAE(testAE.slice(0, index + 1));

    if (matchingIPASoFar(targetIPA, ipaAESection)) {
      // console.log("good mutation", annotation, ipaAESection, targetIPA);
      if (["y_semiconsonant", "w_semiconsonant"].includes(annotation)) {
        return {
          letters: [
            makeAnnotatedLetter("\u200b", [annotation], false, "consonant"),
            lettersAE[index],
          ],
          numberMutated: 0,
        };
      }

      return { letters: [testAE[index]], numberMutated: 1 };
    }
  }

  return { letters: [], numberMutated: -1 };
}

function splitDigraphWithSeperator(
  lettersAE: AnnotatedLetter[],
  index: number,
  targetIPA: string
): { letters: AnnotatedLetter[]; numberMutated: number } {
  let splitTestAE = splitDigraphLettersSeparator(lettersAE, index);

  let ipaAESection = getIPAForAE(splitTestAE.slice(0, index + 1));

  if (matchingIPASoFar(targetIPA, ipaAESection)) {
    return {
      letters: splitTestAE.slice(index, index + 3),
      numberMutated: 1,
    };
  }

  return { letters: [], numberMutated: -1 };
}

function splitDigraphWithAnnotation(
  lettersAE: AnnotatedLetter[],
  index: number,
  targetIPA: string,
  annotation: string
): { letters: AnnotatedLetter[]; numberMutated: number } {
  let splitTestAE = splitDigraphLetters(lettersAE, index);

  if (isAnnotation(annotation) && !annotation.includes("seperator")) {
    let mutatedLetter = mutateLetterWithAnnotation(
      lettersAE,
      splitTestAE,
      index,
      targetIPA,
      annotation
    );

    if (mutatedLetter.numberMutated !== -1) {
      // console.log("split letter", mutatedLetter, splitTestAE, index);
      return {
        letters: [...mutatedLetter.letters, splitTestAE[index + 1]],
        numberMutated: 1,
      };
    }

    if (lettersAE[index].groupType === "vowel") {
      mutatedLetter = mutateLetterWithAnnotationStress(
        lettersAE,
        splitTestAE,
        index,
        targetIPA,
        annotation
      );

      if (mutatedLetter.numberMutated !== -1) {
        return {
          letters: [...mutatedLetter.letters, splitTestAE[index + 1]],
          numberMutated: 1,
        };
      }
    }
  }
  return { letters: [], numberMutated: -1 };
}

function checkNextLetterCanMakeSound(
  lettersAE: AnnotatedLetter[],
  index: number,
  targetIPA: string,
  annotation: string
): { letters: AnnotatedLetter[]; numberMutated: number } {
  if (isAnnotation(annotation)) {
    let secondLetterTestAE = [
      ...lettersAE.slice(0, index),
      makeAnnotatedLetter(
        lettersAE[index].plainText[0],
        [annotation],
        false,
        lettersAE[index].groupType === "vowel" ? "vowel" : "consonant"
      ),
      ...lettersAE.slice(index + 1, lettersAE.length),
    ];
    let ipaAESection = getIPAForAE(secondLetterTestAE.slice(0, index + 2));

    if (matchingIPASoFar(targetIPA, ipaAESection)) {
      // console.log("can make sound - no annotaino next letter");
      return {
        letters: secondLetterTestAE.slice(index, index + 2),
        numberMutated: 2,
      };
    } else {
      const mutatedLettersAE: AnnotatedLetter[] = [
        ...secondLetterTestAE.slice(0, index + 1),
        ...mutateLetter(secondLetterTestAE, index + 1, targetIPA).letters,
      ];
      ipaAESection = getIPAForAE(mutatedLettersAE.slice(0, index + 2));

      if (
        matchingIPASoFar(targetIPA, ipaAESection) &&
        !mutatedLettersAE[index + 1].annotations.includes("silent")
      ) {
        if (secondLetterTestAE[index + 1].digraph) {
          return {
            letters: mutatedLettersAE.slice(index, index + 3),
            numberMutated: 2,
          };
        }
        return {
          letters: mutatedLettersAE.slice(index, index + 2),
          numberMutated: 2,
        };
      }
    }
  }
  // console.log("can not make sound");
  return { letters: [], numberMutated: -1 };
}

function splitDigraphLetters(
  lettersAE: AnnotatedLetter[],
  index: number
): AnnotatedLetter[] {
  return [
    ...lettersAE.slice(0, index),
    makeAnnotatedLetter(
      lettersAE[index].plainText[0],
      [],
      false,
      lettersAE[index].groupType === "vowel" ? "vowel" : "consonant"
    ),
    makeAnnotatedLetter(
      lettersAE[index].plainText[1],
      [],
      false,
      lettersAE[index].groupType === "vowel" ? "vowel" : "consonant"
    ),
    ...lettersAE.slice(index + 1, lettersAE.length),
  ];
}

function splitDigraphLettersSeparator(
  lettersAE: AnnotatedLetter[],
  index: number
): AnnotatedLetter[] {
  return [
    ...lettersAE.slice(0, index),
    makeAnnotatedLetter(
      lettersAE[index].plainText[0],
      [],
      false,
      lettersAE[index].groupType === "vowel" ? "vowel" : "consonant"
    ),
    makeAnnotatedLetter("", ["simple_seperator"], false, "undetermined"),
    makeAnnotatedLetter(
      lettersAE[index].plainText[1],
      [],
      false,
      lettersAE[index].groupType === "vowel" ? "vowel" : "consonant"
    ),
    ...lettersAE.slice(index + 1, lettersAE.length),
  ];
}

function matchingIPASoFar(targetIPA: string, ipaAESection: string): boolean {
  return targetIPA.substring(0, ipaAESection.length) === ipaAESection;
}
