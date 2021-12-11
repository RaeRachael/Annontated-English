import { annotate, checker, mutateLetter } from "../src/Annotator/annotator";
// import { AnnotatedCodeToAnnotatedText } from "../src/Mappings/AECodeToAE"
import { AnnotatedLetter, annotation } from "../src/Types/AnnotedLetter";

describe("mutate - adds annotation to specific AE letter", () => {
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
      mutateLetter(testWordAE, 0, testCase.ipa);
      expect(testWordAE).toEqual(expectedAE);
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
      mutateLetter(testWordAE, 0, testCase.ipa);
      expect(testWordAE).toEqual(expectedAE);
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
    mutateLetter(testWordAE, 0, "v");
    expect(testWordAE).toEqual(expectedAE);
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
      mutateLetter(testWordAE, 0, testCase.ipa);
      expect(testWordAE).toEqual(expectedAE);
    });
  });
});

describe("annotate - adds annotiona to get IPA", () => {
  test("ant", () => {
    let testWord: string = "ant";
    let expectedAE: AnnotatedLetter[] = [
      {
        annotatedString: "a̓",
        annotations: ["plain"],
        digraph: false,
        groupType: "vowel",
        ipa: "æ",
        plainText: "a",
      },
      {
        annotatedString: "n",
        annotations: [],
        digraph: false,
        groupType: "consonant",
        ipa: "n",
        plainText: "n",
      },
      {
        annotatedString: "t",
        annotations: [],
        digraph: false,
        groupType: "consonant",
        ipa: "t",
        plainText: "t",
      },
    ];
    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("be", () => {
    let testWord: string = "be";
    let expectedAE: AnnotatedLetter[] = [
      {
        annotatedString: "b",
        annotations: [],
        digraph: false,
        groupType: "consonant",
        ipa: "b",
        plainText: "b",
      },
      {
        annotatedString: "ẽ",
        annotations: ["natural"],
        digraph: false,
        groupType: "vowel",
        ipa: "iː",
        plainText: "e",
      },
    ];
    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("the", () => {
    let testWord: string = "the";
    let expectedAE: AnnotatedLetter[] = [
      {
        annotatedString: "t​\u200bh",
        annotations: ["digraph"],
        digraph: true,
        groupType: "consonant",
        ipa: "ð",
        plainText: "th",
      },
      {
        annotatedString: "ë",
        annotations: ["central"],
        digraph: false,
        groupType: "vowel",
        ipa: "ə",
        plainText: "e",
      },
    ];
    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("was", () => {
    let testWord: string = "was";
    let expectedAE: AnnotatedLetter[] = [
      {
        annotatedString: "w",
        annotations: [],
        digraph: false,
        groupType: "consonant",
        ipa: "w",
        plainText: "w",
      },
      {
        annotatedString: "ǎ",
        annotations: ["opaque"],
        digraph: false,
        groupType: "vowel",
        ipa: "ɒ",
        plainText: "a",
      },
      {
        annotatedString: "s̬",
        annotations: ["voiced"],
        digraph: false,
        groupType: "consonant",
        ipa: "z",
        plainText: "s",
      },
    ];
    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("twelve", () => {
    let testWord: string = "twelve";
    let expectedAE: AnnotatedLetter[] = [
      {
        annotatedString: "t",
        annotations: [],
        digraph: false,
        groupType: "consonant",
        ipa: "t",
        plainText: "t",
      },
      {
        annotatedString: "w",
        annotations: [],
        digraph: false,
        groupType: "consonant",
        ipa: "w",
        plainText: "w",
      },
      {
        annotatedString: "e̓",
        annotations: ["plain"],
        digraph: false,
        groupType: "vowel",

        ipa: "ɛ",
        plainText: "e",
      },
      {
        annotatedString: "l",
        annotations: [],
        digraph: false,
        groupType: "consonant",
        ipa: "l",
        plainText: "l",
      },
      {
        annotatedString: "v",
        annotations: [],
        digraph: false,
        groupType: "consonant",
        ipa: "v",
        plainText: "v",
      },
      {
        annotatedString: "e͓",
        annotations: ["silent"],
        digraph: false,
        groupType: "vowel",
        ipa: "NOIPA",
        plainText: "e",
      },
    ];
    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("invasion", () => {
    let testWord: string = "invasion";
    let expectedAE: AnnotatedLetter[] = [
      {
        annotatedString: "i̓",
        annotations: ["plain"],
        digraph: false,
        groupType: "vowel",
        ipa: "ɪ",
        plainText: "i",
      },
      {
        annotatedString: "n",
        annotations: [],
        digraph: false,
        groupType: "consonant",
        ipa: "n",
        plainText: "n",
      },
      {
        annotatedString: "v",
        annotations: [],
        digraph: false,
        groupType: "consonant",
        ipa: "v",
        plainText: "v",
      },
      {
        annotatedString: "ã",
        annotations: ["natural"],
        digraph: false,
        groupType: "vowel",
        ipa: "eɪ",
        plainText: "a",
      },
      {
        annotatedString: "s̺",
        annotations: ["soft_voiced"],
        digraph: false,
        groupType: "consonant",
        ipa: "ʒ",
        plainText: "s",
      },
      {
        annotatedString: "ï",
        annotations: ["central"],
        digraph: false,
        groupType: "vowel",
        ipa: "ə",
        plainText: "i",
      },
      {
        annotatedString: "o͓",
        annotations: ["silent"],
        digraph: false,
        groupType: "vowel",
        ipa: "NOIPA",
        plainText: "o",
      },
      {
        annotatedString: "n",
        annotations: [],
        digraph: false,
        groupType: "consonant",
        ipa: "n",
        plainText: "n",
      },
    ];
    expect(annotate(testWord)).toEqual(expectedAE);
  });
});

describe("checker - checks AE against ipa dictionary", () => {
  test("the - corect", () => {
    let testWord: AnnotatedLetter[] = [
      {
        plainText: "th",
        annotations: ["voiced"],
        annotatedString: "",
        ipa: "ð",
        digraph: true,
        groupType: "undetermined",
      },
      {
        plainText: "e",
        annotations: ["central"],
        annotatedString: "",
        ipa: "ə",
        digraph: false,
        groupType: "undetermined",
      },
    ];
    expect(checker(testWord, "ðə")).toEqual(true);
  });

  test("the - wrong", () => {
    let testWord: AnnotatedLetter[] = [
      {
        plainText: "th",
        annotations: ["voiced"],
        annotatedString: "",
        ipa: "",
        digraph: true,
        groupType: "undetermined",
      },
      {
        plainText: "e",
        annotations: ["round"],
        annotatedString: "",
        ipa: "",
        digraph: false,
        groupType: "undetermined",
      },
    ];
    expect(checker(testWord, "ðə")).toEqual(false);
  });
});
