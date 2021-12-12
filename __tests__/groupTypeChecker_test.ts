import { isVowel } from "../src/Helpers/groupTypeChecker";
import { AnnotatedLetter } from "../src/Types/AnnotedLetter";

describe("isVowel", () => {
  test("should return true for 'a', 'e', 'i', 'o', u'", () => {
    let testSegment: AnnotatedLetter[];
    ["a", "e", "i", "o", "u"].forEach((letter) => {
      testSegment = [
        {
          plainText: letter,
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "undetermined",
        },
      ];
      expect(isVowel(testSegment, 0)).toEqual(true);
    });
  });

  // ["w_semiconsonant" | "y_semiconsonant" | "common_change" | "voiced" | "voiceless" | "soft_voiced" | "soft_voiceless" | "hard_voiced" | "hard_voiceless""]
  describe("should return false for consonant annotated letter", () => {
    test("w_semiconsonant annotation", () => {
      let testSegment: AnnotatedLetter[] = [
        {
          plainText: "a",
          annotations: ["w_semiconsonant"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "undetermined",
        },
      ];
      expect(isVowel(testSegment, 0)).toEqual(false);
    });

    test("common_change annotation", () => {
      let testSegment: AnnotatedLetter[] = [
        {
          plainText: "a",
          annotations: ["common_change"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "undetermined",
        },
      ];
      expect(isVowel(testSegment, 0)).toEqual(false);
    });
    // ect (not writting all tests as code isn't against a list but annotation mapping)
  });

  describe("y", () => {
    describe("y is a vowel when", () => {
      test("before a consonant", () => {
        let testSegment: AnnotatedLetter[] = [
          {
            plainText: "y",
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
        expect(isVowel(testSegment, 0)).toEqual(true);
      });
    });

    test("after a consonant", () => {
      let testSegment: AnnotatedLetter[] = [
        {
          plainText: "b",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "undetermined",
        },
        {
          plainText: "y",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "undetermined",
        },
      ];
      expect(isVowel(testSegment, 1)).toEqual(true);
    });

    test("end of a segment", () => {
      let testSegment: AnnotatedLetter[] = [
        {
          plainText: "y",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "undetermined",
        },
      ];
      expect(isVowel(testSegment, 0)).toEqual(true);
    });

    describe("y is a consonant when", () => {
      test("followed by a vowel - no consonant infront", () => {
        let testSegment: AnnotatedLetter[] = [
          {
            plainText: "y",
            annotations: [],
            annotatedString: "",
            ipa: "",
            digraph: false,
            groupType: "undetermined",
          },
          {
            plainText: "a",
            annotations: [],
            annotatedString: "",
            ipa: "",
            digraph: false,
            groupType: "undetermined",
          },
        ];
        expect(isVowel(testSegment, 0)).toEqual(false);
      });
    });
  });

  describe("w", () => {
    describe("w is a vowel when", () => {
      test("before a consonant", () => {
        let testSegment: AnnotatedLetter[] = [
          {
            plainText: "w",
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
        expect(isVowel(testSegment, 0)).toEqual(true);
      });
    });

    test("end of a segment", () => {
      let testSegment: AnnotatedLetter[] = [
        {
          plainText: "w",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "undetermined",
        },
      ];
      expect(isVowel(testSegment, 0)).toEqual(true);
    });

    describe("w is a consonant when", () => {
      test("followed by a vowel", () => {
        let testSegment: AnnotatedLetter[] = [
          {
            plainText: "w",
            annotations: [],
            annotatedString: "",
            ipa: "",
            digraph: false,
            groupType: "undetermined",
          },
          {
            plainText: "a",
            annotations: [],
            annotatedString: "",
            ipa: "",
            digraph: false,
            groupType: "undetermined",
          },
        ];
        expect(isVowel(testSegment, 0)).toEqual(false);
      });
    });
  });
});
