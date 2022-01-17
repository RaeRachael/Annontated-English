import { postProcess } from "../../../../../src/Annotator/annotatingText";
import { AnnotatedLetter } from "../../../../../src/Types/AnnotedLetter";
import { rules, defaultRules } from "../../../../../src/Types/Rules";

describe("postProcess, default wh digraph", () => {
  describe("rule used, make 'w' - silent 'h' unannotated whenever - (if w not part of a vowel digraph)", () => {
    let rules: rules = JSON.parse(JSON.stringify(defaultRules));
    rules.defaultDigraphWH = true;
    test("case 'w'- silent 'h' -> 'w' - 'h'", () => {
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
          plainText: "w",
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

    test("case 'w', 'h'  -> 'w' - voiceless 'h'", () => {
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
          plainText: "h",
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
          plainText: "h",
          annotations: ["voiceless"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
      ];
      let output = postProcess(testWord, rules);
      expect(output).toEqual(expectedOutput);
    });

    test("case 'cosonant' 'w'- silent 'h' -> 'w' - 'h'", () => {
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

    test("case ['vowel' 'w']digraph- silent 'h' -> 'w' - 'h'", () => {
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
          plainText: "aw",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
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
    rules.defaultDigraphWH = false;
    test("case 'w'- silent 'h' -> 'w' - sielent 'h'", () => {
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
          plainText: "w",
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

    test("case 'w'- 'h' -> 'w' - 'h'", () => {
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
          plainText: "h",
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
  });
});
