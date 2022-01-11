import { postProcess } from "../../../../src/Annotator/annotatingText";
import { AnnotatedLetter } from "../../../../src/Types/AnnotedLetter";
import { defaultRules, rules } from "../../../../src/Types/Rules";

describe("postProcess, annotateTwoVowels", () => {
  describe("rule used, make the second letter the same annotation if silent", () => {
    let rules: rules = JSON.parse(JSON.stringify(defaultRules));
    rules.annotateTwoVowels = true;
    test("natural", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "a",
          annotations: ["natural"],
          annotatedString: "",
          ipa: "",
          digraph: true,
          groupType: "vowel",
        },
        {
          plainText: "e",
          annotations: ["silent"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          plainText: "ae",
          annotations: ["natural"],
          annotatedString: "",
          ipa: "",
          digraph: true,
          groupType: "vowel",
        },
      ];
      let output = postProcess(testWord, rules);
      expect(output).toEqual(expectedOutput);
    });

    test("natural, stress", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "a",
          annotations: ["main_stress", "natural"],
          annotatedString: "",
          ipa: "",
          digraph: true,
          groupType: "vowel",
        },
        {
          plainText: "e",
          annotations: ["silent"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          plainText: "ae",
          annotations: ["main_stress", "natural"],
          annotatedString: "",
          ipa: "",
          digraph: true,
          groupType: "vowel",
        },
      ];
      let output = postProcess(testWord, rules);
      expect(output).toEqual(expectedOutput);
    });

    test("board", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "a",
          annotations: ["broad"],
          annotatedString: "",
          ipa: "",
          digraph: true,
          groupType: "vowel",
        },
        {
          plainText: "e",
          annotations: ["silent"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          plainText: "ae",
          annotations: ["broad"],
          annotatedString: "",
          ipa: "",
          digraph: true,
          groupType: "vowel",
        },
      ];
      let output = postProcess(testWord, rules);
      expect(output).toEqual(expectedOutput);
    });
  });

  describe("rule not used, no edits", () => {
    let rules: rules = JSON.parse(JSON.stringify(defaultRules));
    rules.annotateTwoVowels = false;
    test("natural", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "a",
          annotations: ["natural"],
          annotatedString: "",
          ipa: "",
          digraph: true,
          groupType: "vowel",
        },
        {
          plainText: "e",
          annotations: ["silent"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          plainText: "a",
          annotations: ["natural"],
          annotatedString: "",
          ipa: "",
          digraph: true,
          groupType: "vowel",
        },
        {
          plainText: "e",
          annotations: ["silent"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
      ];
      let output = postProcess(testWord, rules);
      expect(output).toEqual(expectedOutput);
    });

    test("natural, stress", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "a",
          annotations: ["main_stress", "natural"],
          annotatedString: "",
          ipa: "",
          digraph: true,
          groupType: "vowel",
        },
        {
          plainText: "e",
          annotations: ["silent"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          plainText: "a",
          annotations: ["main_stress", "natural"],
          annotatedString: "",
          ipa: "",
          digraph: true,
          groupType: "vowel",
        },
        {
          plainText: "e",
          annotations: ["silent"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
      ];
      let output = postProcess(testWord, rules);
      expect(output).toEqual(expectedOutput);
    });

    test("board", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "a",
          annotations: ["broad"],
          annotatedString: "",
          ipa: "",
          digraph: true,
          groupType: "vowel",
        },
        {
          plainText: "e",
          annotations: ["silent"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          plainText: "a",
          annotations: ["broad"],
          annotatedString: "",
          ipa: "",
          digraph: true,
          groupType: "vowel",
        },
        {
          plainText: "e",
          annotations: ["silent"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
      ];
      let output = postProcess(testWord, rules);
      expect(output).toEqual(expectedOutput);
    });
  });
});
