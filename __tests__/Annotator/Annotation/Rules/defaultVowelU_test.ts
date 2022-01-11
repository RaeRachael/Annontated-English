import { postProcess } from "../../../../src/Annotator/annotatingText";
import { AnnotatedLetter } from "../../../../src/Types/AnnotedLetter";
import { rules, defaultRules } from "../../../../src/Types/Rules";

describe("postProcess, default vowel U", () => {
  describe("rule used, make schwa 'u' unannotated", () => {
    let rules: rules = JSON.parse(JSON.stringify(defaultRules));
    rules.defaultVowelU = true;
    test("case schwa 'u'", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "u",
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
          plainText: "u",
        },
      ];
      let output = postProcess(testWord, rules);
      expect(output).toEqual(expectedOutput);
    });

    test("case not schwa 'u'", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "u",
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
          plainText: "u",
        },
      ];
      let output = postProcess(testWord, rules);
      expect(output).toEqual(expectedOutput);
    });
  });

  describe("rule not used, no edits", () => {
    let rules: rules = JSON.parse(JSON.stringify(defaultRules));
    rules.defaultVowelU = false;
    test("case to schwa 'u'", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "u",
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
          plainText: "u",
        },
      ];
      let output = postProcess(testWord, rules);
      expect(output).toEqual(expectedOutput);
    });

    test("case not schwa 'u'", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "u",
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
          plainText: "u",
        },
      ];
      let output = postProcess(testWord, rules);
      expect(output).toEqual(expectedOutput);
    });
  });
});
