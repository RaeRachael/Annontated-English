import { AnnotatedLetter } from "../Types/AnnotedLetter";
import { annotations } from "../Mappings/Annotations";
import { defaultRules, processRules, ruleList, rules } from "../Types/Rules";
import { makeAnnotatedLetter } from "../Helpers/letterHelpers";

export function AnnotatedCodeToAnnotatedText(
  word: AnnotatedLetter[],
  rules: rules = defaultRules
) {
  word = postProcess(word, rules);

  for (var i = 0; i < word.length; i++) {
    getAnnotatedText(word[i]);
  }
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
  for (const [rule, value] of Object.entries(rules)) {
    if (value === true && typeof processFunction[rule] === "function") {
      processFunction[rule](word);
    }
  }
  return word;
}

const processFunction: processRules = {
  annotateTwoVowels: processAnnotateTwoVowels,
  silentFinalE: processSilentFinalE,
  silentFinalEx: processSilentFinalEx,
  naturalFinalO: processNaturalFinalO,
  naturalFinalOx: processNaturalFinalOx,
  defaultVowelA: processDefaultVowelA,
  defaultVowelE: processDefaultVowelE,
  defaultVowelYI: processDefaultVowelYI,
  defaultVowelO: processDefaultVowelO,
  defaultVowelU: processDefaultVowelU,
  defaultDigraphNG: processDefaultDigraphNG,
  defaultDigraphGH: processDefaultDigraphGH,
  defaultDigraphWH: processDefaultDigraphWH,
  defaultDigraphWR: processDefaultDigraphWR,
  defaultDigraphQU: processDefaultDigraphQU,
  defaultDigraphGU: processDefaultDigraphGU,
  defaultDigraphVowelH: processDefaultDigraphVowelH,
  defaultSilentDoubleConsonants: processDefaultSilentDoubleConsonants,
};

function processAnnotateTwoVowels(word: AnnotatedLetter[]): void {
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

function processSilentFinalE(word: AnnotatedLetter[]): void {
  const finalLetter: AnnotatedLetter = word[word.length - 1];
  if (finalLetter.plainText.toLowerCase() === "e") {
    if (finalLetter.annotations.length === 0) {
      finalLetter.annotations = ["plain"];
    } else if (finalLetter.annotations.includes("silent")) {
      finalLetter.annotations = finalLetter.annotations.filter((item) => {
        return item !== "silent";
      });
    }
  }
}

function processSilentFinalEx(word: AnnotatedLetter[]): void {
  if (word.length > 1) {
    const secondFinalLetter: AnnotatedLetter = word[word.length - 2];
    const finalLetter: AnnotatedLetter = word[word.length - 1];
    if (
      secondFinalLetter.plainText.toLowerCase() === "e" &&
      ["d", "s"].includes(finalLetter.plainText.toLowerCase())
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
}

function processNaturalFinalO(word: AnnotatedLetter[]): void {
  const finalLetter: AnnotatedLetter = word[word.length - 1];
  if (finalLetter.plainText.toLowerCase() === "o") {
    if (
      finalLetter.annotations.length === 1 &&
      finalLetter.annotations[0] === "natural"
    ) {
      finalLetter.annotations = [];
    }
  }
}

function processNaturalFinalOx(word: AnnotatedLetter[]): void {
  if (word.length > 1) {
    const secondFinalLetter: AnnotatedLetter = word[word.length - 2];
    const finalLetter: AnnotatedLetter = word[word.length - 1];
    if (
      secondFinalLetter.plainText[0].toLowerCase() === "o" &&
      finalLetter.plainText.toLowerCase() === "s"
    ) {
      if (
        secondFinalLetter.annotations.length === 1 &&
        secondFinalLetter.annotations[0] === "natural"
      ) {
        secondFinalLetter.annotations = [];
      }
    } else if (
      word.length > 2 &&
      word[word.length - 3].plainText.toLowerCase() === "o" &&
      secondFinalLetter.plainText.toLowerCase() === "e" &&
      finalLetter.plainText.toLowerCase() === "s"
    ) {
      if (
        word[word.length - 3].annotations.length === 1 &&
        word[word.length - 3].annotations[0] === "natural"
      ) {
        word[word.length - 3].annotations = [];
      }
    }
  }
}

function processDefaultVowelA(word: AnnotatedLetter[]): void {
  word.forEach((letter, index) => {
    if (
      letter.plainText.toLowerCase() === "a" &&
      letter.annotations.length === 1 &&
      letter.annotations[0] === "schwa" &&
      (index === word.length - 1 ||
        !(
          word[index + 1].annotations.length === 0 &&
          ["a", "e", "i", "u", "w", "y"].includes(word[index + 1].plainText)
        ))
    ) {
      letter.annotations = [];
    }
  });
}

function processDefaultVowelE(word: AnnotatedLetter[]): void {
  word.forEach((letter, index) => {
    if (
      letter.plainText.toLowerCase() === "e" &&
      letter.annotations.length === 1 &&
      letter.annotations[0] === "schwa" &&
      (index === word.length - 1 ||
        !(
          word[index + 1].annotations.length === 0 &&
          ["a", "e", "i", "u", "w", "y"].includes(word[index + 1].plainText)
        ))
    ) {
      letter.annotations = [];
    }
  });
}

function processDefaultVowelYI(word: AnnotatedLetter[]): void {
  word.forEach((letter) => {
    if (
      ["y", "i"].includes(letter.plainText.toLowerCase()) &&
      letter.annotations.length === 1 &&
      letter.annotations[0] === "plain"
    ) {
      letter.annotations = [];
    }
  });
}

function processDefaultVowelO(word: AnnotatedLetter[]): void {
  word.forEach((letter, index) => {
    if (
      letter.plainText.toLowerCase() === "o" &&
      letter.annotations.length === 1 &&
      letter.annotations[0] === "schwa" &&
      (index === word.length - 1 ||
        !(
          word[index + 1].annotations.length === 0 &&
          ["a", "i", "o", "u", "w", "y"].includes(
            word[index + 1].plainText.toLowerCase()
          )
        ))
    ) {
      letter.annotations = [];
    }
  });
}

function processDefaultVowelU(word: AnnotatedLetter[]): void {
  word.forEach((letter) => {
    if (
      letter.plainText.toLowerCase() === "u" &&
      letter.annotations.length === 1 &&
      letter.annotations[0] === "schwa"
    ) {
      letter.annotations = [];
    }
  });
}

function processDefaultDigraphNG(word: AnnotatedLetter[]) {
  if (word.length > 1) {
    const secondFinalLetter: AnnotatedLetter = word[word.length - 2];
    const finalLetter: AnnotatedLetter = word[word.length - 1];
    if (
      secondFinalLetter.plainText.toLowerCase() === "n" &&
      secondFinalLetter.annotations.length === 1 &&
      secondFinalLetter.annotations[0] === "common_change" &&
      finalLetter.plainText.toLowerCase() === "g" &&
      finalLetter.annotations.length === 1 &&
      finalLetter.annotations[0] === "silent"
    ) {
      secondFinalLetter.annotations = [];
      finalLetter.annotations = [];
    } else if (word.length > 2) {
      const thirdFinalLetter: AnnotatedLetter = word[word.length - 3];
      if (
        thirdFinalLetter.plainText.toLowerCase() === "n" &&
        thirdFinalLetter.annotations.length === 1 &&
        thirdFinalLetter.annotations[0] === "common_change" &&
        secondFinalLetter.plainText.toLowerCase() === "g" &&
        secondFinalLetter.annotations.length === 1 &&
        secondFinalLetter.annotations[0] === "silent" &&
        !["a", "e", "i", "o", "u", "l", "r"].includes(finalLetter.plainText)
      ) {
        thirdFinalLetter.annotations = [];
        secondFinalLetter.annotations = [];
      }
    }
  }
}

function processDefaultDigraphGH(word: AnnotatedLetter[]) {
  for (var i = 0; i < word.length - 1; i++) {
    if (
      word[i].plainText.toLowerCase() === "g" &&
      word[i].annotations.length === 1 &&
      word[i].annotations[0] === "silent" &&
      word[i + 1].plainText.toLowerCase() === "h" &&
      word[i + 1].annotations.length === 1 &&
      word[i + 1].annotations[0] === "silent"
    ) {
      word[i].annotations = [];
      word[i + 1].annotations = [];
    }
  }
}

function processDefaultDigraphWH(word: AnnotatedLetter[]) {
  for (var i = 0; i < word.length - 1; i++) {
    if (
      word[i].plainText.toLowerCase() === "w" &&
      word[i].annotations.length === 0 &&
      word[i + 1].plainText.toLowerCase() === "h"
    ) {
      if (
        word[i + 1].annotations.length === 1 &&
        word[i + 1].annotations[0] === "silent"
      ) {
        word[i + 1].annotations = [];
      } else if (word[i + 1].annotations.length === 0) {
        word[i + 1].annotations = ["voiceless"];
      }
    }
  }
}

function processDefaultDigraphWR(word: AnnotatedLetter[]) {
  for (var i = 0; i < word.length - 1; i++) {
    if (
      word[i].plainText.toLowerCase() === "w" &&
      word[i + 1].annotations.length === 0 &&
      word[i + 1].plainText.toLowerCase() === "r"
    ) {
      if (
        word[i].annotations.length === 1 &&
        word[i].annotations[0] === "silent"
      ) {
        word[i].annotations = [];
      } else if (word[i].annotations.length === 0) {
        word[i].annotations = ["common_change"];
      }
    }
  }
}

function processDefaultDigraphQU(word: AnnotatedLetter[]) {
  for (var i = 0; i < word.length - 2; i++) {
    if (
      word[i].plainText.toLowerCase() === "q" &&
      word[i].annotations.length === 0 &&
      word[i + 1].plainText.toLowerCase() === "u" &&
      word[i + 1].annotations.length === 1 &&
      word[i + 1].annotations[0] === "w_semiconsonant" &&
      ["a", "e", "i", "o", "u", "y"].includes(
        word[i + 2].plainText[0].toLowerCase()
      ) &&
      !word[i + 2].annotations.includes("silent")
    ) {
      word[i + 1].annotations = [];
    }
  }
}

function processDefaultDigraphGU(word: AnnotatedLetter[]) {
  for (var i = 0; i < word.length - 2; i++) {
    if (
      word[i].plainText.toLowerCase() === "g" &&
      word[i].annotations.length === 0 &&
      word[i + 1].plainText.toLowerCase() === "u"
    ) {
      if (
        word[i + 1].annotations.length === 1 &&
        word[i + 1].annotations[0] === "w_semiconsonant" &&
        ["a", "o", "u"].includes(word[i + 2].plainText[0].toLowerCase()) &&
        !word[i + 2].annotations.includes("silent")
      ) {
        word[i + 1].annotations = [];
      } else if (
        word[i + 1].annotations.length === 1 &&
        word[i + 1].annotations[0] === "silent" &&
        ["e", "i", "y"].includes(word[i + 2].plainText[0].toLowerCase()) &&
        !word[i + 2].annotations.includes("silent")
      ) {
        word[i + 1].annotations = [];
      }
    }
  }
}

function processDefaultDigraphVowelH(word: AnnotatedLetter[]) {
  for (var i = 0; i < word.length - 1; i++) {
    if (
      ["a", "e", "i", "o", "u", "w", "y"].includes(
        word[i].plainText[0].toLowerCase()
      ) &&
      !word[i].annotations.includes("silent") &&
      word[i + 1].plainText.toLowerCase() === "h" &&
      (i === word.length - 2 ||
        !["a", "e", "i", "o", "u", "w", "y"].includes(
          word[i + 2].plainText.toLowerCase()
        ))
    ) {
      if (
        word[i + 1].annotations.length === 1 &&
        word[i + 1].annotations[0] === "silent"
      ) {
        word[i + 1].annotations = [];
      } else if (word[i + 1].annotations.length === 0) {
        word[i + 1].annotations = ["voiceless"];
      }
    }
  }
}

function processDefaultSilentDoubleConsonants(word: AnnotatedLetter[]) {
  for (var i = 0; i < word.length - 1; i++) {
    if (
      word[i].groupType === "consonant" &&
      word[i].plainText === word[i + 1].plainText &&
      word[i + 1].annotations[0] === "silent"
    ) {
      word[i + 1].annotations = [];
    } else if (
      word[i].groupType === "consonant" &&
      word[i].plainText === word[i + 1].plainText &&
      word[i + 1].annotations.length === 0
    ) {
      console.log("ioierngoe");
      word.splice(
        i + 1,
        0,
        makeAnnotatedLetter("", ["simple_seperator"], false, "undetermined")
      );
    }
  }
}
