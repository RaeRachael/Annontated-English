import { postProcess } from "../../../../../src/Annotator/annotatingText";
import { AnnotatedLetter } from "../../../../../src/Types/AnnotedLetter";
import { rules, defaultRules } from "../../../../../src/Types/Rules";

describe("postProcess, default vowel A", () => {
  describe("rule used, make schwa 'a' unannotated if not forming a digraph", () => {
    let rules: rules = JSON.parse(JSON.stringify(defaultRules));
    rules.defaultVowelA = true;
    test("case schwa 'a'", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "a",
          annotations: ["schwa"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          annotatedString: "",
          annotations: [],
          digraph: false,
          groupType: "vowel",
          ipa: "",
          plainText: "a",
        },
      ];
      let output = postProcess(testWord, rules);
      expect(output).toEqual(expectedOutput);
    });

    test("case schwa 'a' 'w'", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "a",
          annotations: ["schwa"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
        {
          plainText: "w",
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
          annotations: ["schwa"],
          digraph: false,
          groupType: "vowel",
          ipa: "",
          plainText: "a",
        },
        {
          annotatedString: "",
          annotations: [],
          digraph: false,
          groupType: "consonant",
          ipa: "",
          plainText: "w",
        },
      ];
      let output = postProcess(testWord, rules);
      expect(output).toEqual(expectedOutput);
    });

    test("case not schwa 'a'", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "a",
          annotations: ["plain"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          annotatedString: "",
          annotations: ["plain"],
          digraph: false,
          groupType: "vowel",
          ipa: "",
          plainText: "a",
        },
      ];
      let output = postProcess(testWord, rules);
      expect(output).toEqual(expectedOutput);
    });
  });

  describe("rule not used, no edits", () => {
    let rules: rules = JSON.parse(JSON.stringify(defaultRules));
    rules.defaultVowelA = false;
    test("case to schwa 'a'", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "a",
          annotations: ["schwa"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          annotatedString: "",
          annotations: ["schwa"],
          digraph: false,
          groupType: "vowel",
          ipa: "",
          plainText: "a",
        },
      ];
      let output = postProcess(testWord, rules);
      expect(output).toEqual(expectedOutput);
    });

    test("case not schwa 'a'", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "a",
          annotations: ["plain"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          annotatedString: "",
          annotations: ["plain"],
          digraph: false,
          groupType: "vowel",
          ipa: "",
          plainText: "a",
        },
      ];
      let output = postProcess(testWord, rules);
      expect(output).toEqual(expectedOutput);
    });
  });
});
