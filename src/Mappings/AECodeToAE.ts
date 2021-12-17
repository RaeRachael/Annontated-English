import { annotationForUnicode } from "../Helpers/IPAHelpers";
import { makeAnnotatedLetter } from "../Helpers/letterHelpers";
import { AnnotatedLetter, annotation } from "../Types/AnnotedLetter";
import { annotations } from "./Annotations";

export function AnnotatedCodeToAnnotatedText(word: AnnotatedLetter[]): string {
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
  // console.log(word);
  return word.map((letter) => letter.annotatedString).join("");
}

function getAnnotatedText(letter: AnnotatedLetter): void {
  let marks = letter.annotations
    .map((mark) => annotations[mark].unicode)
    .join("");
  if (!letter.digraph) {
    letter.annotatedString = letter.plainText + marks;
  }
  if (letter.digraph) {
    letter.annotatedString = letter.plainText[0] + marks + letter.plainText[1];
  }
}

export function AnnotatedTextToAnnotatedCode(word: string): AnnotatedLetter[] {
  let wordCode: AnnotatedLetter[] = [];
  let marks = getAnnotationsAsArray(word);
  let plainText = getPlainTextAsArray(word);
  let digraph: boolean;
  for (var i = 0; i < marks.length; i++) {
    digraph = false;
    if (marks[i][0] === "digraph") {
      digraph = true;
      marks[i].shift();
    }
    wordCode.push(
      makeAnnotatedLetter(plainText[i], marks[i], digraph, "undetermined")
    );
  }
  return wordCode;
}

function getAnnotationsAsArray(word: string): [annotation[]] {
  let marks: [annotation[]] = [[]];
  let mark: annotation[] = [];
  for (var i = 0; i < word.length; i++) {
    if (i + 1 == word.length || word.charCodeAt(i + 1) !== 8203) {
    } else {
      word = word.slice(0, i) + word.slice(i + 1, word.length); // remove char before 0width " "
    }
  }
  for (var i = 0; i < word.length; i++) {
    // OTHER DOUBLE ANNOTATIONS
    if (word.charCodeAt(i) === 8203) {
      mark = ["digraph", ...getAnnotationsFrom(word, i + 1)];
    } else if (
      i + 1 == word.length ||
      !annotationForUnicode(word.charCodeAt(i + 1))
    ) {
      mark = [];
    } else {
      mark = [...getAnnotationsFrom(word, i + 1)];
    }
    i += mark.length;
    if (mark.includes("hard_voiced") || mark.includes("hard_voiceless")) i++;
    marks.push(mark);
  }
  marks.shift();
  return marks;
}

function getAnnotationsFrom(word: string, startPos: number): annotation[] {
  let annotations: annotation[] = [];
  for (var i = startPos; i < word.length; i++) {
    if (!annotationForUnicode(word.charCodeAt(i))) {
      break;
    } else if (i + 1 < word.length && word.charCodeAt(i + 1) === 817) {
      annotations.push(annotationForUnicode([817])[word.charCodeAt(i)]);
      i++;
    } else {
      annotations.push(annotationForUnicode(word.charCodeAt(i)));
    }
  }
  return annotations;
}

function getPlainTextAsArray(word: string): string[] {
  let plainText: string[] = [];
  let singleLetter: string = "";
  for (var i = 0; i < word.length; i++) {
    if (
      annotationForUnicode(word.charCodeAt(i)) &&
      word.charCodeAt(i) !== 8203
    ) {
      word = word.slice(0, i) + word.slice(i + 1, word.length);
      i--;
    }
  }
  for (var i = 0; i < word.length; i++) {
    if (
      annotationForUnicode(word.charCodeAt(i)) &&
      word.charCodeAt(i) !== 8203
    ) {
      word = word.slice(0, i) + word.slice(i + 1, word.length);
    }
    if (i + 1 == word.length || word.charCodeAt(i + 1) !== 8203) {
      singleLetter = word[i];
    } else {
      singleLetter = word[i] + word[i + 2];
      i += 2; // skip 0width " " and next char
    }
    plainText.push(singleLetter);
  }
  return plainText;
}
