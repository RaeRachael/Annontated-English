import { annotate, checker, mutateLetter } from "../src/Annotator/annotator";
// import { AnnotatedCodeToAnnotatedText } from "../src/Mappings/AECodeToAE"
import { AnnotatedLetter, annotation } from "../src/Types/AnnotedLetter";

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
    expect(mutateLetter(testWordAE, 0, "pt")).toEqual(expectedAE);
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
      expect(mutateLetter(testWordAE, 0, testCase.ipa)).toEqual(expectedAE);
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
      expect(mutateLetter(testWordAE, 0, testCase.ipa)).toEqual(expectedAE);
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
    expect(mutateLetter(testWordAE, 0, "v")).toEqual(expectedAE);
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
      expect(mutateLetter(testWordAE, 0, testCase.ipa)).toEqual(expectedAE);
    });
  });
});

describe("annotate - adds annotiona to get IPA", () => {
  test("ant", () => {
    let testWord: string = "ant";
    let expectedAE: string = "a̩̓nt";

    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("be", () => {
    let testWord: string = "be";
    let expectedAE: string = "bẽ̩";

    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("the", () => {
    let testWord: string = "the";
    let expectedAE: string = "t\u200bhẻ̩";

    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("was", () => {
    let testWord: string = "was";
    let expectedAE: string = "wǎ̩s̬";

    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("twelve", () => {
    let testWord: string = "twelve";
    let expectedAE: string = "twe̩̓lve͓";

    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("invasion", () => {
    let testWord: string = "invasion";
    let expectedAE: string = "i̓nvã̩s̺ỉo͓n";

    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("pterodactyl", () => {
    let testWord: string = "pterodactyl";
    let expectedAE: string = "p\u200bte̩̓rỏda͈̓ctỹl";

    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("helicopter", () => {
    let testWord: string = "helicopter";
    let expectedAE: string = "he̩̓li̓co͈̓p​̝tẻr͓";

    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("draught", () => {
    let testWord: string = "draught";
    let expectedAE: string = "drā̩u͓g​̥ht";

    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("awry", () => {
    let testWord: string = "awry";
    let expectedAE: string = "ảw͓rỹ̩";

    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("cute", () => {
    let testWord: string = "cute";
    let expectedAE: string = "c​̼ũ̩te͓";

    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("penguin", () => {
    let testWord: string = "penguin";
    let expectedAE: string = "pe̩̓n̥gu̫i̓n";

    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("one", () => {
    let testWord: string = "one";
    let expectedAE: string = "​̫o̩̓ne͓";

    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("onion", () => {
    let testWord: string = "onion";
    let expectedAE: string = "ô̩ni̼ỏn";

    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("exploitation", () => {
    let testWord: string = "exploitation";
    let expectedAE: string = "e̓xplo\u200bitã̩t̻ỉo͓n";

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
        annotations: ["schwa"],
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
