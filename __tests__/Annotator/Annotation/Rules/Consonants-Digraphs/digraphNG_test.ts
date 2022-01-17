import { postProcess } from "../../../../../src/Annotator/annotatingText";
import { AnnotatedLetter } from "../../../../../src/Types/AnnotedLetter";
import { rules, defaultRules } from "../../../../../src/Types/Rules";

describe("postProcess, default ng digraph", () => {
  describe("rule used, make common 'n'- silent 'g' unannotated if not followed by 'l/r' or vowel", () => {
    let rules: rules = JSON.parse(JSON.stringify(defaultRules));
    rules.defaultDigraphNG = true;
    test("case common 'n'- silent 'g'", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "n",
          annotations: ["common_change"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "g",
          annotations: ["silent"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          plainText: "n",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "g",
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

    test("case 'n'- silent 'g' followed by 'b", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "n",
          annotations: ["common_change"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "g",
          annotations: ["silent"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "b",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          plainText: "n",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "g",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "b",
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

    test("case 'n'- silent 'g' followed by 'l", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "n",
          annotations: ["common_change"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "g",
          annotations: ["silent"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "l",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          plainText: "n",
          annotations: ["common_change"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "g",
          annotations: ["silent"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "l",
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

    test("case 'n'- silent 'g' followed by 'r", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "n",
          annotations: ["common_change"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "g",
          annotations: ["silent"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "r",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          plainText: "n",
          annotations: ["common_change"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "g",
          annotations: ["silent"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "r",
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
  });

  describe("rule not used, no edits", () => {
    let rules: rules = JSON.parse(JSON.stringify(defaultRules));
    rules.defaultDigraphNG = false;
    test("case common 'n'- silent 'g'", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "n",
          annotations: ["common_change"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "g",
          annotations: ["silent"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          plainText: "n",
          annotations: ["common_change"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "g",
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
