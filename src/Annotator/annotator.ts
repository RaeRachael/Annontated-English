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
    } else if (Object.keys(vowels).includes(plainText[i])) {
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

  for (var i = 0; ; i++) {
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
    } else {
      // console.log(
      //   "index,",
      //   i,
      //   lettersAE[i].plainText,
      //   ipaAESection,
      //   ipaString.substring(0, ipaAESection.length),
      //   "mutation needed"
      // );
      const mutatedLettersAE: AnnotatedLetter[] = [
        ...lettersAE.slice(0, i),
        ...mutateLetter(lettersAE, i, ipaString),
        ...lettersAE.slice(i + 1, lettersAE.length),
      ];
      lettersAE = mutatedLettersAE;
    }
    // console.log(lettersAE[i], ipaString, "mutation stage", i);
    if (i === lettersAE.length - 1) {
      console.log("finished mutation");
      return lettersAE;
    }
  }
}

export function mutateLetter(
  lettersAE: AnnotatedLetter[],
  index: number,
  targetIPA: string
): AnnotatedLetter[] {
  let testAE: AnnotatedLetter[] = JSON.parse(JSON.stringify(lettersAE));

  if (lettersAE[index].digraph) {
    let mutatedLetters = mutateAndSplitLetter(
      lettersAE,
      // testAE,
      index,
      targetIPA
    );

    if (mutatedLetters[0]) {
      return mutatedLetters;
    }
  }

  for (const [name, annotationHere] of Object.entries(annotations)) {
    if (lettersAE[index].digraph) {
      // let splitTestAE = [
      //   ...lettersAE.slice(0, index),
      //   makeAnnotatedLetter(
      //     testAE[index].plainText[0],
      //     [],
      //     false,
      //     "undetermined"
      //   ),
      //   makeAnnotatedLetter(
      //     testAE[index].plainText[1],
      //     [],
      //     false,
      //     "undetermined"
      //   ),
      //   ...lettersAE.slice(index + 1, lettersAE.length),
      // ];

      // if (["consonant", "letter", "any"].includes(annotationHere.valid)) {
      if (isAnnotation(name)) {
        let mutatedLetters = mutateAndSplitLetterWithAnnotation(
          lettersAE,
          index,
          targetIPA,
          name
        );

        if (mutatedLetters[0]) {
          return mutatedLetters;
        }
      }
      // }
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

        if (mutatedLetter[0]) {
          return mutatedLetter;
        }

        mutatedLetter = mutateLetterWithAnnotationStress(
          lettersAE,
          testAE,
          index,
          targetIPA,
          name
        );

        if (mutatedLetter[0]) {
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

        if (mutatedLetter[0]) {
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
  return [lettersAE[index]];
}

function mutateLetterWithAnnotation(
  lettersAE: AnnotatedLetter[],
  testAE: AnnotatedLetter[],
  index: number,
  targetIPA: string,
  annotation: string
): AnnotatedLetter[] {
  if (isAnnotation(annotation)) {
    testAE[index].annotations = testAE[index].digraph
      ? ["digraph", annotation]
      : [annotation];

    let ipaAESection = getIPAForAE(testAE.slice(0, index + 1));

    if (targetIPA.substring(0, ipaAESection.length) === ipaAESection) {
      // console.log("good mutation", name, ipaAESection, targetIPA);
      if (
        index !== lettersAE.length - 1 &&
        ["y_semiconsonant", "w_semiconsonant"].includes(annotation) &&
        lettersAE[index + 1].groupType === "consonant"
      ) {
        return [
          makeAnnotatedLetter("\u200b", [annotation], false, "consonant"),
          lettersAE[index],
        ];
      }
      // lettersAE[index].annotations = testAE[index].annotations;
      return [testAE[index]];
    }
  } else {
    console.log("not annotation", annotation);
  }
  return [];
}

function mutateLetterWithAnnotationStress(
  lettersAE: AnnotatedLetter[],
  testAE: AnnotatedLetter[],
  index: number,
  targetIPA: string,
  annotation: string
): AnnotatedLetter[] {
  if (isAnnotation(annotation) && isAnnotation("main_stress")) {
    testAE[index].annotations = testAE[index].digraph
      ? ["digraph", "main_stress", annotation]
      : ["main_stress", annotation];

    let ipaAESection = getIPAForAE(testAE.slice(0, index + 1));

    if (targetIPA.substring(0, ipaAESection.length) === ipaAESection) {
      // console.log("good mutation", name, ipaAESection, targetIPA);
      if (
        index !== lettersAE.length - 1 &&
        ["y_semiconsonant", "w_semiconsonant"].includes(annotation) &&
        lettersAE[index + 1].groupType === "consonant"
      ) {
        return [
          makeAnnotatedLetter("\u200b", [annotation], false, "consonant"),
          lettersAE[index],
        ];
      }
      // lettersAE[index].annotations = testAE[index].annotations;
      return [testAE[index]];
    }
  }
  if (isAnnotation(annotation) && isAnnotation("secondary_stress")) {
    testAE[index].annotations = testAE[index].digraph
      ? ["digraph", "secondary_stress", annotation]
      : ["secondary_stress", annotation];

    let ipaAESection = getIPAForAE(testAE.slice(0, index + 1));

    if (targetIPA.substring(0, ipaAESection.length) === ipaAESection) {
      // console.log("good mutation", name, ipaAESection, targetIPA);
      if (
        index !== lettersAE.length - 1 &&
        ["y_semiconsonant", "w_semiconsonant"].includes(annotation) &&
        lettersAE[index + 1].groupType === "consonant"
      ) {
        return [
          makeAnnotatedLetter("\u200b", [annotation], false, "consonant"),
          lettersAE[index],
        ];
      }
      // lettersAE[index].annotations = testAE[index].annotations;
      return [testAE[index]];
    }
  }

  return [];
}

function mutateAndSplitLetter(
  lettersAE: AnnotatedLetter[],
  index: number,
  targetIPA: string
): AnnotatedLetter[] {
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
    return splitTestAE.slice(index, index + 3);
  }

  return [];
}

function mutateAndSplitLetterWithAnnotation(
  lettersAE: AnnotatedLetter[],
  index: number,
  targetIPA: string,
  annotation: string
): AnnotatedLetter[] {
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

  if (isAnnotation(annotation)) {
    let mutatedLetter = mutateLetterWithAnnotation(
      lettersAE,
      splitTestAE,
      index,
      targetIPA,
      annotation
    );

    if (mutatedLetter[0]) {
      // console.log("split letter", mutatedLetter, splitTestAE, index);
      return [...mutatedLetter, splitTestAE[index + 1]];
    }

    if (lettersAE[index].groupType === "vowel") {
      mutatedLetter = mutateLetterWithAnnotationStress(
        lettersAE,
        splitTestAE,
        index,
        targetIPA,
        annotation
      );

      if (mutatedLetter[0]) {
        return [...mutatedLetter, splitTestAE[index + 1]];
      }
    }
  } else {
    console.log("not annotation", annotation);
  }
  return [];
}
