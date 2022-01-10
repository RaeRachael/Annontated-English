import { postProcess } from "../../../../src/Annotator/annotatingText";
import { AnnotatedLetter } from "../../../../src/Types/AnnotedLetter";
import { rules } from "../../../../src/Types/Rules";

describe("postProcess, final silent e", () => {
  describe("rule used, make final e (d/s) not annotated if silent", () => {
    let rules: rules = {
      annotateTwoVowels: false,
      silentFinalE: true,
      silentFinalEx: true,
    };
    test("case to silent final e(d)", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "e",
          annotations: ["silent"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
        {
          plainText: "d",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          annotatedString: "",
          annotations: [],
          digraph: false,
          groupType: "vowel",
          ipa: "",
          plainText: "e",
        },
        {
          annotatedString: "",
          annotations: [],
          digraph: false,
          groupType: "consonant",
          ipa: "",
          plainText: "d",
        },
      ];
      let output = postProcess(testWord, rules);
      expect(output).toEqual(expectedOutput);
    });

    test("case to silent final e(s)", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "e",
          annotations: ["silent"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
        {
          plainText: "s",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          annotatedString: "",
          annotations: [],
          digraph: false,
          groupType: "vowel",
          ipa: "",
          plainText: "e",
        },
        {
          annotatedString: "",
          annotations: [],
          digraph: false,
          groupType: "consonant",
          ipa: "",
          plainText: "s",
        },
      ];
      let output = postProcess(testWord, rules);
      expect(output).toEqual(expectedOutput);
    });

    test("add plain annotation if not silent e(d)", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "e",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
        {
          plainText: "d",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          annotatedString: "",
          annotations: ["plain"],
          digraph: false,
          groupType: "vowel",
          ipa: "",
          plainText: "e",
        },
        {
          annotatedString: "",
          annotations: [],
          digraph: false,
          groupType: "consonant",
          ipa: "",
          plainText: "d",
        },
      ];
      let output = postProcess(testWord, rules);
      expect(output).toEqual(expectedOutput);
    });

    test("add plain annotation if not silent e(s)", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "e",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
        {
          plainText: "s",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          annotatedString: "",
          annotations: ["plain"],
          digraph: false,
          groupType: "vowel",
          ipa: "",
          plainText: "e",
        },
        {
          annotatedString: "",
          annotations: [],
          digraph: false,
          groupType: "consonant",
          ipa: "",
          plainText: "s",
        },
      ];
      let output = postProcess(testWord, rules);
      expect(output).toEqual(expectedOutput);
    });
  });

  describe("rule not used, no edits", () => {
    let rules: rules = {
      annotateTwoVowels: false,
      silentFinalE: false,
      silentFinalEx: false,
    };
    test("case to silent final e(d)", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "e",
          annotations: ["silent"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
        {
          plainText: "d",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          annotatedString: "",
          annotations: ["silent"],
          digraph: false,
          groupType: "vowel",
          ipa: "",
          plainText: "e",
        },
        {
          annotatedString: "",
          annotations: [],
          digraph: false,
          groupType: "consonant",
          ipa: "",
          plainText: "d",
        },
      ];
      let output = postProcess(testWord, rules);
      expect(output).toEqual(expectedOutput);
    });

    test("case to silent final e(s)", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "e",
          annotations: ["silent"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
        {
          plainText: "s",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          annotatedString: "",
          annotations: ["silent"],
          digraph: false,
          groupType: "vowel",
          ipa: "",
          plainText: "e",
        },
        {
          annotatedString: "",
          annotations: [],
          digraph: false,
          groupType: "consonant",
          ipa: "",
          plainText: "s",
        },
      ];
      let output = postProcess(testWord, rules);
      expect(output).toEqual(expectedOutput);
    });

    test("add plain annotation if not silent e(d)", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "e",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
        {
          plainText: "d",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          annotatedString: "",
          annotations: [],
          digraph: false,
          groupType: "vowel",
          ipa: "",
          plainText: "e",
        },
        {
          annotatedString: "",
          annotations: [],
          digraph: false,
          groupType: "consonant",
          ipa: "",
          plainText: "d",
        },
      ];
      let output = postProcess(testWord, rules);
      expect(output).toEqual(expectedOutput);
    });

    test("add plain annotation if not silent e(s)", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "e",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
        {
          plainText: "s",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          annotatedString: "",
          annotations: [],
          digraph: false,
          groupType: "vowel",
          ipa: "",
          plainText: "e",
        },
        {
          annotatedString: "",
          annotations: [],
          digraph: false,
          groupType: "consonant",
          ipa: "",
          plainText: "s",
        },
      ];
      let output = postProcess(testWord, rules);
      expect(output).toEqual(expectedOutput);
    });
  });
});
