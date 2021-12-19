import {
  addVowelAndConsonantMarkers,
  indentifyWordSegments,
  makeVowelDigraphs,
  removeSilentLetters,
} from "../../src/Interpretor/PronouceAE";
import { AnnotatedLetter } from "../../src/Types/AnnotedLetter";

describe("removeSilentLetters", () => {
  test("should remove letters marked with silent annotation", () => {
    let testString: AnnotatedLetter[] = [
      {
        plainText: "a",
        annotations: ["silent"],
        annotatedString: "",
        ipa: "",
        digraph: false,
        groupType: "undetermined",
      },
    ];
    removeSilentLetters(testString);
    expect(testString).toEqual([]);
  });

  test("shouldn't remove letters not marked with silent annotation", () => {
    let testString: AnnotatedLetter[] = [
      {
        plainText: "a",
        annotations: [],
        annotatedString: "",
        ipa: "",
        digraph: false,
        groupType: "undetermined",
      },
    ];
    removeSilentLetters(testString);
    expect(testString).toEqual([
      {
        plainText: "a",
        annotations: [],
        annotatedString: "",
        ipa: "",
        digraph: false,
        groupType: "undetermined",
      },
    ]);
  });
});

describe("indentifyWordSegments", () => {
  test("should split word into segments at ''' not followed by 'r' ", () => {
    let testString: AnnotatedLetter[] = [
      {
        plainText: "a",
        annotations: [],
        annotatedString: "",
        ipa: "",
        digraph: false,
        groupType: "undetermined",
      },
      {
        plainText: "'",
        annotations: [],
        annotatedString: "",
        ipa: "",
        digraph: false,
        groupType: "undetermined",
      },
      {
        plainText: "b",
        annotations: [],
        annotatedString: "",
        ipa: "",
        digraph: false,
        groupType: "undetermined",
      },
    ];
    expect(indentifyWordSegments(testString)).toEqual([
      [
        {
          plainText: "a",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "undetermined",
        },
      ],
      [
        {
          plainText: "b",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "undetermined",
        },
      ],
    ]);
  });

  test("should not split word into segments at ''' if followed by 'r' ", () => {
    let testString: AnnotatedLetter[] = [
      {
        plainText: "a",
        annotations: [],
        annotatedString: "",
        ipa: "",
        digraph: false,
        groupType: "undetermined",
      },
      {
        plainText: "'",
        annotations: [],
        annotatedString: "",
        ipa: "",
        digraph: false,
        groupType: "undetermined",
      },
      {
        plainText: "r",
        annotations: [],
        annotatedString: "",
        ipa: "",
        digraph: false,
        groupType: "undetermined",
      },
    ];
    expect(indentifyWordSegments(testString)).toEqual([
      [
        {
          plainText: "a",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "undetermined",
        },
        {
          plainText: "r",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "undetermined",
        },
      ],
    ]);
  });

  test("should split word into segments at a seperator", () => {
    let testString: AnnotatedLetter[] = [
      {
        plainText: "a",
        annotations: [],
        annotatedString: "",
        ipa: "",
        digraph: false,
        groupType: "undetermined",
      },
      {
        plainText: "\u200b",
        annotations: ["left_seperator"],
        annotatedString: "",
        ipa: "",
        digraph: false,
        groupType: "undetermined",
      },
      {
        plainText: "b",
        annotations: [],
        annotatedString: "",
        ipa: "",
        digraph: false,
        groupType: "undetermined",
      },
    ];
    expect(indentifyWordSegments(testString)).toEqual([
      [
        {
          plainText: "a",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "undetermined",
        },
      ],
      [
        {
          plainText: "b",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "undetermined",
        },
      ],
    ]);
  });
});

describe("addVowelAndConsonantMarkers", () => {
  test("should add vowel groupType to vowels", () => {
    let testString: AnnotatedLetter[];
    testString = [
      {
        plainText: "a",
        annotations: [],
        annotatedString: "",
        ipa: "",
        digraph: false,
        groupType: "undetermined",
      },
    ];
    addVowelAndConsonantMarkers(testString);
    expect(testString[0].groupType).toEqual("vowel");
  });

  test("should add consonant groupType to consonants", () => {
    let testString: AnnotatedLetter[];
    testString = [
      {
        plainText: "b",
        annotations: [],
        annotatedString: "",
        ipa: "",
        digraph: false,
        groupType: "undetermined",
      },
    ];
    addVowelAndConsonantMarkers(testString);
    expect(testString[0].groupType).toEqual("consonant");
    testString = [
      {
        plainText: "a",
        annotations: ["y_semiconsonant"],
        annotatedString: "",
        ipa: "",
        digraph: false,
        groupType: "undetermined",
      },
    ];
    addVowelAndConsonantMarkers(testString);
    expect(testString[0].groupType).toEqual("consonant");
  });
});

describe("makeVowelDigraphs", () => {
  test("should turn possible digraphs into one Annotated Letter", () => {
    let testString: AnnotatedLetter[] = [
      {
        plainText: "a",
        annotations: [],
        annotatedString: "",
        ipa: "",
        digraph: false,
        groupType: "vowel",
      },
      {
        plainText: "e",
        annotations: [],
        annotatedString: "",
        ipa: "",
        digraph: false,
        groupType: "vowel",
      },
    ];
    makeVowelDigraphs(testString);
    expect(testString).toEqual([
      {
        plainText: "ae",
        annotations: [],
        annotatedString: "",
        ipa: "",
        digraph: true,
        groupType: "vowel",
      },
    ]);
  });

  test("should turn possible digraphs into one Annotated Letter from left to right", () => {
    let testString: AnnotatedLetter[] = [
      {
        plainText: "e",
        annotations: [],
        annotatedString: "",
        ipa: "",
        digraph: false,
        groupType: "vowel",
      },
      {
        plainText: "e",
        annotations: [],
        annotatedString: "",
        ipa: "",
        digraph: false,
        groupType: "vowel",
      },
      {
        plainText: "i",
        annotations: [],
        annotatedString: "",
        ipa: "",
        digraph: false,
        groupType: "vowel",
      },
    ];
    makeVowelDigraphs(testString);
    expect(testString).toEqual([
      {
        plainText: "ee",
        annotations: [],
        annotatedString: "",
        ipa: "",
        digraph: true,
        groupType: "vowel",
      },
      {
        plainText: "i",
        annotations: [],
        annotatedString: "",
        ipa: "",
        digraph: false,
        groupType: "vowel",
      },
    ]);
  });

  test("should not make invalid digraphs into one Annotated Letter", () => {
    let testString: AnnotatedLetter[] = [
      {
        plainText: "a",
        annotations: [],
        annotatedString: "",
        ipa: "",
        digraph: false,
        groupType: "vowel",
      },
      {
        plainText: "o",
        annotations: [],
        annotatedString: "",
        ipa: "",
        digraph: false,
        groupType: "vowel",
      },
    ];
    makeVowelDigraphs(testString);
    expect(testString).toEqual([
      {
        plainText: "a",
        annotations: [],
        annotatedString: "",
        ipa: "",
        digraph: false,
        groupType: "vowel",
      },
      {
        plainText: "o",
        annotations: [],
        annotatedString: "",
        ipa: "",
        digraph: false,
        groupType: "vowel",
      },
    ]);
  });
});
