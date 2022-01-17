import { postProcess } from "../../../../../src/Annotator/annotatingText";
import { AnnotatedLetter } from "../../../../../src/Types/AnnotedLetter";
import { rules, defaultRules } from "../../../../../src/Types/Rules";

describe("postProcess, default qu digraph", () => {
  describe("rule used, make 'q' -w_semi 'u' unannotated before vowel)", () => {
    let rules: rules = JSON.parse(JSON.stringify(defaultRules));
    rules.defaultDigraphQU = true;
    test("case 'q' -semi_w 'u' -> 'q' -semi_w 'u'", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "q",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "u",
          annotations: ["w_semiconsonant"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          plainText: "q",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "u",
          annotations: ["w_semiconsonant"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
      ];
      let output = postProcess(testWord, rules);
      expect(output).toEqual(expectedOutput);
    });

    test("case 'q' -semi_w 'u' '[vowel](not silent)'  -> -common 'q' 'u'", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "q",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "u",
          annotations: ["w_semiconsonant"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "a",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          plainText: "q",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "u",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "a",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
      ];
      let output = postProcess(testWord, rules);
      expect(output).toEqual(expectedOutput);
    });

    test("case 'q' -semi_w 'u' '[vowel](silent)'  -> -common 'q' -semi_w 'u'", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "q",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "u",
          annotations: ["w_semiconsonant"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "a",
          annotations: ["silent"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          plainText: "q",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "u",
          annotations: ["w_semiconsonant"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "a",
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

    test("case 'q' -(not semi_w)'u' -> 'q' -(not semi_w)'u'", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "q",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "u",
          annotations: ["secondary_stress"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          plainText: "q",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "u",
          annotations: ["secondary_stress"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
      ];
      let output = postProcess(testWord, rules);
      expect(output).toEqual(expectedOutput);
    });

    test("case -any 'q' 'u' -> -any 'q' 'u'", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "q",
          annotations: ["silent"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "u",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          plainText: "q",
          annotations: ["silent"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "u",
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
    rules.defaultDigraphQU = false;
    test("case 'q' -semi_w 'u' '[vowel]' -> 'q' -semi_w 'u' '[vowel'", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "q",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "u",
          annotations: ["w_semiconsonant"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "a",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          plainText: "q",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "u",
          annotations: ["w_semiconsonant"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "a",
          annotations: [],
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
