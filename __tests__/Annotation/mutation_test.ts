import { mutateLetter } from "../../src/Annotator/annotator";
import { AnnotatedLetter, annotation } from "../../src/Types/AnnotedLetter";

describe("mutate - adds annotation to specific AE letter", () => {
  test("split digraph", () => {
    let testWordAE: AnnotatedLetter[] = [
      {
        annotatedString: "pt",
        annotations: [],
        digraph: true,
        groupType: "consonant",
        ipa: "",
        plainText: "pt",
      },
    ];
    let expectedAE: AnnotatedLetter[] = [
      {
        annotatedString: "",
        annotations: [],
        digraph: false,
        groupType: "consonant",
        ipa: "",
        plainText: "p",
      },
      {
        annotatedString: "",
        annotations: ["simple_seperator"],
        digraph: false,
        groupType: "undetermined",
        ipa: "",
        plainText: "",
      },
      {
        annotatedString: "",
        annotations: [],
        digraph: false,
        groupType: "consonant",
        ipa: "",
        plainText: "t",
      },
    ];
    // mutateLetter(testWordAE, 0, "pt");
    expect(mutateLetter(testWordAE, 0, "pt")).toEqual({
      letters: expectedAE,
      numberMutated: 1,
    });
  });

  test("a into annoted 'a's", () => {
    let testCases: { annotation: annotation; ipa: string }[] = [
      { annotation: "natural", ipa: "eɪ" },
      { annotation: "plain", ipa: "æ" },
      { annotation: "broad", ipa: "ɑː" },
      { annotation: "clear", ipa: "ʌ" },
    ];
    testCases.forEach((testCase) => {
      let testWordAE: AnnotatedLetter[] = [
        {
          annotatedString: "a",
          annotations: [],
          digraph: false,
          groupType: "vowel",
          ipa: "",
          plainText: "a",
        },
      ];
      let expectedAE: AnnotatedLetter[] = [
        {
          annotatedString: "a",
          annotations: [testCase.annotation],
          digraph: false,
          groupType: "vowel",
          ipa: "",
          plainText: "a",
        },
      ];
      // mutateLetter(testWordAE, 0, testCase.ipa);
      expect(mutateLetter(testWordAE, 0, testCase.ipa)).toEqual({
        letters: expectedAE,
        numberMutated: 1,
      });
    });
  });

  test("e into annoted 'e's", () => {
    let testCases: { annotation: annotation; ipa: string }[] = [
      { annotation: "plain", ipa: "ɛ" },
      { annotation: "broad", ipa: "eɪ" },
      { annotation: "clear", ipa: "æ" },
    ];
    testCases.forEach((testCase) => {
      let testWordAE: AnnotatedLetter[] = [
        {
          annotatedString: "e",
          annotations: [],
          digraph: false,
          groupType: "vowel",
          ipa: "",
          plainText: "e",
        },
      ];
      let expectedAE: AnnotatedLetter[] = [
        {
          annotatedString: "e",
          annotations: [testCase.annotation],
          digraph: false,
          groupType: "vowel",
          ipa: "",
          plainText: "e",
        },
      ];
      // mutateLetter(testWordAE, 0, testCase.ipa)
      expect(mutateLetter(testWordAE, 0, testCase.ipa)).toEqual({
        letters: expectedAE,
        numberMutated: 1,
      });
    });
  });

  test("f into annoted 'f's", () => {
    let testWordAE: AnnotatedLetter[] = [
      {
        annotatedString: "f",
        annotations: [],
        digraph: false,
        groupType: "consonant",
        ipa: "",
        plainText: "f",
      },
    ];
    let expectedAE: AnnotatedLetter[] = [
      {
        annotatedString: "f",
        annotations: ["voiceless"],
        digraph: false,
        groupType: "consonant",
        ipa: "",
        plainText: "f",
      },
    ];
    // mutateLetter(testWordAE, 0, "v");
    expect(mutateLetter(testWordAE, 0, "v")).toEqual({
      letters: expectedAE,
      numberMutated: 1,
    });
  });

  test("s into annoted 's's", () => {
    let testCases: { annotation: annotation; ipa: string }[] = [
      { annotation: "voiced", ipa: "z" },
      { annotation: "soft_voiced", ipa: "ʒ" },
      { annotation: "voiceless", ipa: "s" },
      { annotation: "soft_voiceless", ipa: "ʃ" },
    ];
    testCases.forEach((testCase) => {
      let testWordAE: AnnotatedLetter[] = [
        {
          annotatedString: "s",
          annotations: [],
          digraph: false,
          groupType: "consonant",
          ipa: "",
          plainText: "s",
        },
      ];
      let expectedAE: AnnotatedLetter[] = [
        {
          annotatedString: "s",
          annotations: [testCase.annotation],
          digraph: false,
          groupType: "consonant",
          ipa: "",
          plainText: "s",
        },
      ];
      // mutateLetter(testWordAE, 0, testCase.ipa);
      expect(mutateLetter(testWordAE, 0, testCase.ipa)).toEqual({
        letters: expectedAE,
        numberMutated: 1,
      });
    });
  });
});
