import { postProcess } from "../../../../../src/Annotator/annotatingText";
import { AnnotatedLetter } from "../../../../../src/Types/AnnotedLetter";
import { rules, defaultRules } from "../../../../../src/Types/Rules";

describe("postProcess, default wr digraph", () => {
  describe("rule used, make - silent 'w' 'r' unannotated whenever - (if w not part of a vowel digraph)", () => {
    let rules: rules = JSON.parse(JSON.stringify(defaultRules));
    rules.defaultDigraphWR = true;
    test("case silent 'w' 'r' -> 'w' - 'r'", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "w",
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
          plainText: "w",
          annotations: [],
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

    test("case 'w' 'r'  -> -common 'w' 'h'", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "w",
          annotations: [],
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
          plainText: "w",
          annotations: ["common_change"],
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

    test("case 'consonant' -silent 'w''r' -> 'w' - 'r'", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "b",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "w",
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
          plainText: "b",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "w",
          annotations: [],
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

    test("case ['vowel' 'w']digraph 'r' -> 'w' - 'r'", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "aw",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
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
          plainText: "aw",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
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
    rules.defaultDigraphWR = false;
    test("case - silent 'w' 'r' -> - silent 'w' 'r'", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "w",
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
          plainText: "w",
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

    test("case 'w'- 'r' -> 'w' - 'r'", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "w",
          annotations: [],
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
          plainText: "w",
          annotations: [],
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
});
