import { AnnotatedLetter } from "../Types/AnnotedLetter";
import { annotations } from "../Mappings/Annotations";
import { defaultRules, rules } from "../Types/Rules";
import { makeAnnotatedLetter } from "../Helpers/letterHelpers";

export function AnnotatedCodeToAnnotatedText(
  word: AnnotatedLetter[],
  rules: rules = defaultRules
) {
  // console.log(word, "preprocess");
  word = postProcess(word, rules);
  // console.log(word, "postprocess");
  for (var i = 0; i < word.length; i++) {
    if (
      word[i].plainText === "w" &&
      // word[i].groupType === "consonant" &&
      word[i].annotations.includes("w_semiconsonant")
    ) {
      // console.log("remove unneded w_semiconst", i, word);
      word[i].annotations = [];
      word[i].groupType = "consonant";
    }
    if (
      word[i].plainText === "y" &&
      // word[i].groupType === "consonant" &&
      word[i].annotations.includes("y_semiconsonant")
    ) {
      word[i].annotations = [];
      word[i].groupType = "consonant";
    }
    getAnnotatedText(word[i]);
  }

  // word = postProcess(word, rules);
  // console.log(word, "pp ");
  // let fullAnnotationString = word
  //   .map((letter) => letter.annotatedString)
  //   .join("");
  // // console.log(word);
  return word.map((letter) => letter.annotatedString).join("");
}

function getAnnotatedText(letter: AnnotatedLetter): void {
  let marks = letter.annotations
    .map((mark) =>
      !letter.annotations.includes("digraph") &&
      letter.digraph &&
      annotations[mark].doublecode
        ? annotations[mark].doublecode
        : annotations[mark].unicode
    )
    .join("");
  if (!letter.digraph) {
    letter.annotatedString = letter.plainText + marks;
  }
  if (letter.digraph) {
    letter.annotatedString = letter.plainText[0] + marks + letter.plainText[1];
  }
}

export function postProcess(
  word: AnnotatedLetter[],
  rules: rules
): AnnotatedLetter[] {
  if (rules.annotateTwoVowels) {
    for (var i = 0; i + 1 < word.length; i++) {
      if (
        word[i].groupType === "vowel" &&
        word[i].annotations.filter(
          (annotation) => annotations[annotation].type === "vowel"
        ).length > 0 &&
        word[i + 1].groupType === "vowel" &&
        word[i + 1].annotations.includes("silent")
      ) {
        word[i] = makeAnnotatedLetter(
          word[i].plainText + word[i + 1].plainText,
          word[i].annotations,
          true,
          "vowel"
        );

        word.splice(i + 1, 1);
      }
    }
  }
  if (rules.silentFinalE) {
    const finalLetter: AnnotatedLetter = word[word.length - 1];
    if (finalLetter.plainText === "e") {
      if (finalLetter.annotations.length === 0) {
        finalLetter.annotations = ["plain"];
      } else if (finalLetter.annotations.includes("silent")) {
        finalLetter.annotations = finalLetter.annotations.filter((item) => {
          return item !== "silent";
        });
      }
    }
  }
  if (rules.silentFinalEx && word.length > 1) {
    const secondFinalLetter: AnnotatedLetter = word[word.length - 2];
    const finalLetter: AnnotatedLetter = word[word.length - 1];
    if (
      secondFinalLetter.plainText === "e" &&
      ["d", "s"].includes(finalLetter.plainText)
    ) {
      if (secondFinalLetter.annotations.length === 0) {
        secondFinalLetter.annotations = ["plain"];
      } else if (secondFinalLetter.annotations.includes("silent")) {
        secondFinalLetter.annotations = secondFinalLetter.annotations.filter(
          (item) => {
            return item !== "silent";
          }
        );
      }
    }
  }
  if (rules.naturalFinalO) {
    const finalLetter: AnnotatedLetter = word[word.length - 1];
    if (finalLetter.plainText === "o") {
      if (
        finalLetter.annotations.length === 1 &&
        finalLetter.annotations[0] === "natural"
      ) {
        finalLetter.annotations = [];
      }
    }
  }
  if (rules.naturalFinalOx && word.length > 1) {
    const secondFinalLetter: AnnotatedLetter = word[word.length - 2];
    const finalLetter: AnnotatedLetter = word[word.length - 1];
    if (
      secondFinalLetter.plainText[0] === "o" &&
      finalLetter.plainText === "s"
    ) {
      if (
        secondFinalLetter.annotations.length === 1 &&
        secondFinalLetter.annotations[0] === "natural"
      ) {
        secondFinalLetter.annotations = [];
      }
    } else if (
      word.length > 2 &&
      word[word.length - 3].plainText === "o" &&
      secondFinalLetter.plainText === "e" &&
      finalLetter.plainText === "s"
    ) {
      if (
        word[word.length - 3].annotations.length === 1 &&
        word[word.length - 3].annotations[0] === "natural"
      ) {
        word[word.length - 3].annotations = [];
      }
    }
  }
  if (rules.defaultVowelA) {
    word.forEach((letter) => {
      if (
        letter.plainText === "a" &&
        letter.annotations.length === 1 &&
        letter.annotations[0] === "schwa"
      ) {
        letter.annotations = [];
      }
    });
  }
  if (rules.defaultVowelE) {
    word.forEach((letter) => {
      if (
        letter.plainText === "e" &&
        letter.annotations.length === 1 &&
        letter.annotations[0] === "schwa"
      ) {
        letter.annotations = [];
      }
    });
  }
  if (rules.defaultVowelYI) {
    word.forEach((letter) => {
      if (
        ["y", "i"].includes(letter.plainText) &&
        letter.annotations.length === 1 &&
        letter.annotations[0] === "plain"
      ) {
        letter.annotations = [];
      }
    });
  }
  if (rules.defaultVowelO) {
    word.forEach((letter) => {
      if (
        letter.plainText === "o" &&
        letter.annotations.length === 1 &&
        letter.annotations[0] === "schwa"
      ) {
        letter.annotations = [];
      }
    });
  }
  if (rules.defaultVowelU) {
    word.forEach((letter) => {
      if (
        letter.plainText === "u" &&
        letter.annotations.length === 1 &&
        letter.annotations[0] === "schwa"
      ) {
        letter.annotations = [];
      }
    });
  }
  if (rules.defaultDigraphNG && word.length > 1) {
    const secondFinalLetter: AnnotatedLetter = word[word.length - 2];
    const finalLetter: AnnotatedLetter = word[word.length - 1];
    if (
      secondFinalLetter.plainText === "n" &&
      secondFinalLetter.annotations.length === 1 &&
      secondFinalLetter.annotations[0] === "common_change" &&
      finalLetter.plainText === "g" &&
      finalLetter.annotations.length === 1 &&
      finalLetter.annotations[0] === "silent"
    ) {
      secondFinalLetter.annotations = [];
      finalLetter.annotations = [];
    } else if (word.length > 2) {
      const thirdFinalLetter: AnnotatedLetter = word[word.length - 3];
      if (
        thirdFinalLetter.plainText === "n" &&
        thirdFinalLetter.annotations.length === 1 &&
        thirdFinalLetter.annotations[0] === "common_change" &&
        secondFinalLetter.plainText === "g" &&
        secondFinalLetter.annotations.length === 1 &&
        secondFinalLetter.annotations[0] === "silent" &&
        !["a", "e", "i", "o", "u", "l", "r"].includes(finalLetter.plainText)
      ) {
        thirdFinalLetter.annotations = [];
        secondFinalLetter.annotations = [];
      }
    }
  }
  if (rules.defaultDigraphGH) {
    for (var i = 0; i < word.length - 1; i++) {
      if (
        word[i].plainText === "g" &&
        word[i].annotations.length === 1 &&
        word[i].annotations[0] === "silent" &&
        word[i + 1].plainText === "h" &&
        word[i + 1].annotations.length === 1 &&
        word[i + 1].annotations[0] === "silent"
      ) {
        word[i].annotations = [];
        word[i + 1].annotations = [];
      }
    }
  }
  return word;
}
