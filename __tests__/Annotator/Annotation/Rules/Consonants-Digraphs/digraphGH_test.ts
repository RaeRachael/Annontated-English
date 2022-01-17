import { postProcess } from "../../../../../src/Annotator/annotatingText";
import { AnnotatedLetter } from "../../../../../src/Types/AnnotedLetter";
import { rules, defaultRules } from "../../../../../src/Types/Rules";

describe("postProcess, default gh digraph", () => {
  describe("rule used, make silent 'g'- silent 'h' unannotated ", () => {
    let rules: rules = JSON.parse(JSON.stringify(defaultRules));
    rules.defaultDigraphGH = true;
    test("case slient 'g'- silent 'h'", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "g",
          annotations: ["silent"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "h",
          annotations: ["silent"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          plainText: "g",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "h",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
      ];
      let output = postProcess(testWord, rules);
      expect(output).toEqual(expectedOutput);
    });

    test("case 'g, silent 'h' ", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "g",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "h",
          annotations: ["silent"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          plainText: "g",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "h",
          annotations: ["silent"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
      ];
      let output = postProcess(testWord, rules);
      expect(output).toEqual(expectedOutput);
    });
  });

  describe("rule not used, no edits", () => {
    let rules: rules = JSON.parse(JSON.stringify(defaultRules));
    rules.defaultDigraphGH = false;
    test("case silent 'g'- silent 'h'", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "g",
          annotations: ["silent"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "h",
          annotations: ["silent"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          plainText: "g",
          annotations: ["silent"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "h",
          annotations: ["silent"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
      ];
      let output = postProcess(testWord, rules);
      expect(output).toEqual(expectedOutput);
    });
  });
});
