import { postProcess } from "../../../../../src/Annotator/annotatingText";
import { AnnotatedLetter } from "../../../../../src/Types/AnnotedLetter";
import { rules, defaultRules } from "../../../../../src/Types/Rules";

describe("postProcess, default vowel O", () => {
  describe("rule used, make schwa 'o' unannotated if not forming a digraph", () => {
    let rules: rules = JSON.parse(JSON.stringify(defaultRules));
    rules.defaultVowelO = true;
    test("case schwa 'o'", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "o",
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
          plainText: "o",
        },
      ];
      let output = postProcess(testWord, rules);
      expect(output).toEqual(expectedOutput);
    });

    test("case schwa 'o' 'w'", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "o",
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
          plainText: "o",
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

    test("case not schwa 'o'", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "o",
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
          plainText: "o",
        },
      ];
      let output = postProcess(testWord, rules);
      expect(output).toEqual(expectedOutput);
    });
  });

  describe("rule not used, no edits", () => {
    let rules: rules = JSON.parse(JSON.stringify(defaultRules));
    rules.defaultVowelO = false;
    test("case to schwa 'o'", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "o",
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
          plainText: "o",
        },
      ];
      let output = postProcess(testWord, rules);
      expect(output).toEqual(expectedOutput);
    });

    test("case not schwa 'o'", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "o",
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
          plainText: "o",
        },
      ];
      let output = postProcess(testWord, rules);
      expect(output).toEqual(expectedOutput);
    });
  });
});
