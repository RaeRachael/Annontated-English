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
    let expectedAE: string = "a̓nt";

    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("be", () => {
    let testWord: string = "be";
    let expectedAE: string = "bẽ";

    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("the", () => {
    let testWord: string = "the";
    let expectedAE: string = "t\u200bhë";

    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("was", () => {
    let testWord: string = "was";
    let expectedAE: string = "wǎs̬";

    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("twelve", () => {
    let testWord: string = "twelve";
    let expectedAE: string = "twe̓lve͓";

    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("invasion", () => {
    let testWord: string = "invasion";
    let expectedAE: string = "i̓nvãs̺ïo͓n";

    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("pterodactyl", () => {
    let testWord: string = "pterodactyl";
    let expectedAE: string = "pte̓rỏda̓ctỹl";

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
