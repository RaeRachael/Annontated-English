import { makeAnnotatedLetter } from "../Helpers/letterHelpers";
import { getIPAForAE } from "../Interpretor/PronouceAE";
import { AnnotatedCodeToAnnotatedText } from "../Mappings/AECodeToAE";
import { annotations } from "../Mappings/Annotations";
import { getIPAForText } from "../Mappings/collectIPA";
import { consonants } from "../Mappings/ConsonantPronounciation";
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
  // console.log(lettersAE, "builtLetters");
  let correctAE: AnnotatedLetter[] = [];

  correctAE = mutateAsNeeded(lettersAE, ipaNeeded) || [];

  console.log(
    AnnotatedCodeToAnnotatedText(correctAE),
    checker(correctAE, ipaNeeded),
    ipaNeeded,
    getIPAForAE(correctAE)
    // correctAE
  );

  return AnnotatedCodeToAnnotatedText(correctAE);
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
    } else if (Object.keys(consonants).includes(plainText[i])) {
      letters.push(makeAnnotatedLetter(plainText[i], [], false, "vowel"));
    } else {
      letters.push(makeAnnotatedLetter(plainText[i], [], false, "consonant"));
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
      // console.log(
      //   "index,",
      //   i,
      //   lettersAE[i].plainText,
      //   ipaAESection,
      //   ipaString.substring(0, ipaAESection.length),
      //   "no mutation needed"
      // );
      i++;
    } else {
      // console.log(
      //   "index,",
      //   i,
      //   lettersAE[i].plainText,
      //   ipaAESection,
      //   ipaString.substring(0, ipaAESection.length),
      //   "mutation needed"
      // );
      const mutatedLetterObject = mutateLetter(lettersAE, i, ipaString);
      const mutatedLettersAE: AnnotatedLetter[] = [
        ...lettersAE.slice(0, i),
        ...mutatedLetterObject.letters,
        ...lettersAE.slice(
          i + mutatedLetterObject.numberMutated,
          lettersAE.length
        ),
      ];
      // console.log(
      //   "post mutation",
      //   mutatedLetterObject,
      //   mutatedLettersAE,
      //   lettersAE,
      //   i,
      //   lettersAE.length
      // );
      // console.log(mutatedLettersAE, "post mutation");
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

export function mutateLetter(
  lettersAE: AnnotatedLetter[],
  index: number,
  targetIPA: string
): { letters: AnnotatedLetter[]; numberMutated: number } {
  let testAE: AnnotatedLetter[] = JSON.parse(JSON.stringify(lettersAE));

  if (lettersAE[index].digraph) {
    // console.log("digraph", lettersAE[index], index, lettersAE);
    let mutatedLetters = mutateAndSplitLetter(
      lettersAE,
      // testAE,
      index,
      targetIPA
    );

    if (mutatedLetters.numberMutated !== -1) {
      // console.log(mutatedLetters, "this one");
      return mutatedLetters;
    }
  }

  for (const [name, annotationHere] of Object.entries(annotations)) {
    if (lettersAE[index].digraph) {
      if (isAnnotation(name)) {
        let mutatedLetters = mutateAndSplitLetterWithAnnotation(
          lettersAE,
          index,
          targetIPA,
          name
        );

        if (mutatedLetters.numberMutated !== -1) {
          // console.log(mutatedLetters, "this one");
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

    if (targetIPA.substring(0, ipaAESection.length) === ipaAESection) {
      // console.log("good mutation", name, ipaAESection, targetIPA);
      if (["y_semiconsonant", "w_semiconsonant"].includes(annotation)) {
        if (index !== lettersAE.length - 1) {
          let nextLetterCheckLetters = checkNextLetterCanMakeSound(
            lettersAE,
            index,
            targetIPA,
            annotation
          );
          // console.log(nextLetterCheckLetters, "secondLetterCheck");
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
      // lettersAE[index].annotations = testAE[index].annotations;
      return { letters: [testAE[index]], numberMutated: 1 };
    }
  } else {
    // console.log("not annotation", annotation);
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
      ? ["digraph", "main_stress", annotation]
      : ["main_stress", annotation];

    let ipaAESection = getIPAForAE(testAE.slice(0, index + 1));

    if (targetIPA.substring(0, ipaAESection.length) === ipaAESection) {
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
      // lettersAE[index].annotations = testAE[index].annotations;
      return { letters: [testAE[index]], numberMutated: 1 };
    }
  }
  if (isAnnotation(annotation) && isAnnotation("secondary_stress")) {
    testAE[index].annotations = testAE[index].digraph
      ? ["digraph", "secondary_stress", annotation]
      : ["secondary_stress", annotation];

    let ipaAESection = getIPAForAE(testAE.slice(0, index + 1));

    if (targetIPA.substring(0, ipaAESection.length) === ipaAESection) {
      // console.log("good mutation", annotation, ipaAESection, targetIPA);
      if (["y_semiconsonant", "w_semiconsonant"].includes(annotation)) {
        // console.log("semiconst used");
        return {
          letters: [
            makeAnnotatedLetter("\u200b", [annotation], false, "consonant"),
            lettersAE[index],
          ],
          numberMutated: 0,
        };
      }
      // lettersAE[index].annotations = testAE[index].annotations;
      return { letters: [testAE[index]], numberMutated: 1 };
    }
  }

  return { letters: [], numberMutated: -1 };
}

function mutateAndSplitLetter(
  lettersAE: AnnotatedLetter[],
  index: number,
  targetIPA: string
): { letters: AnnotatedLetter[]; numberMutated: number } {
  let splitTestAE = [
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
  let ipaAESection = getIPAForAE(splitTestAE.slice(0, index + 1));

  if (targetIPA.substring(0, ipaAESection.length) === ipaAESection) {
    return {
      letters: splitTestAE.slice(index, index + 3),
      numberMutated: 1,
    };
  }

  return { letters: [], numberMutated: -1 };
}

function mutateAndSplitLetterWithAnnotation(
  lettersAE: AnnotatedLetter[],
  index: number,
  targetIPA: string,
  annotation: string
): { letters: AnnotatedLetter[]; numberMutated: number } {
  let splitTestAE = [
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
        // console.log("split letter", mutatedLetter, splitTestAE, index, "out", [
        //   ...mutatedLetter.letters,
        //   splitTestAE[index + 1],
        // ]);
        return {
          letters: [...mutatedLetter.letters, splitTestAE[index + 1]],
          numberMutated: 1,
        };
      }
    }
  } else {
    // console.log("not annotation", annotation);
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
    // console.log(
    //   secondLetterTestAE,
    //   "test secondletter",
    //   index,
    //   ipaAESection,
    //   annotation
    // );
    if (targetIPA.substring(0, ipaAESection.length) === ipaAESection) {
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
      // console.log(
      //   mutatedLettersAE,
      //   targetIPA.substring(0, ipaAESection.length) === ipaAESection,
      //   ipaAESection
      // );
      if (
        targetIPA.substring(0, ipaAESection.length) === ipaAESection &&
        !mutatedLettersAE[index + 1].annotations.includes("silent")
      ) {
        // console.log(
        //   "can make sound - annotaino next letter",
        //   annotation,
        //   index
        // );
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
