import { postProcess } from "../../../../src/Annotator/annotatingText";
import { AnnotatedLetter } from "../../../../src/Types/AnnotedLetter";
import { defaultRules, rules } from "../../../../src/Types/Rules";

describe("postProcess, final natural 'o", () => {
  describe("rule used, make final 'o' not annotated if natural", () => {
    let rules: rules = JSON.parse(JSON.stringify(defaultRules));
    rules.naturalFinalO = true;
    test("case to natural final 'o' ", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "o",
          annotations: ["natural"],
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

    test("case not natural", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "o",
          annotations: ["round"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          annotatedString: "",
          annotations: ["round"],
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
    rules.naturalFinalO = false;
    test("case to natural final 'o' ", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "o",
          annotations: ["natural"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          annotatedString: "",
          annotations: ["natural"],
          digraph: false,
          groupType: "vowel",
          ipa: "",
          plainText: "o",
        },
      ];
      let output = postProcess(testWord, rules);
      expect(output).toEqual(expectedOutput);
    });

    test("case not natural", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "o",
          annotations: ["round"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          annotatedString: "",
          annotations: ["round"],
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
