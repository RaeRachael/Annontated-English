import { postProcess } from "../../../../../src/Annotator/annotatingText";
import { AnnotatedLetter } from "../../../../../src/Types/AnnotedLetter";
import { rules, defaultRules } from "../../../../../src/Types/Rules";

describe("postProcess, default qu digraph", () => {
  describe("rule used, make 'g' -w_semi 'u' unannotated before ['a', 'o', 'u'] / 'g' -silent 'u' unannotated before ['e', 'i', 'y']", () => {
    let rules: rules = JSON.parse(JSON.stringify(defaultRules));
    rules.defaultDigraphGU = true;
    test("case 'g' -semi_w 'u' -> 'g' -semi_w 'u'", () => {
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
          plainText: "g",
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

    test("case 'g' -semi_w 'u' '['a', 'o', 'u']'  -> -common 'g' 'u'", () => {
      let letterOptions = ["a", "o", "u"];
      letterOptions.forEach((letter) => {
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
            plainText: "u",
            annotations: ["w_semiconsonant"],
            annotatedString: "",
            ipa: "",
            digraph: false,
            groupType: "consonant",
          },
          {
            plainText: letter,
            annotations: [],
            annotatedString: "",
            ipa: "",
            digraph: false,
            groupType: "vowel",
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
            plainText: "u",
            annotations: [],
            annotatedString: "",
            ipa: "",
            digraph: false,
            groupType: "consonant",
          },
          {
            plainText: letter,
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

    test("case 'g' -silent 'u' '['e', 'i', 'y']'  ->  'g' 'u'", () => {
      let letterOptions = ["e", "i", "y"];
      letterOptions.forEach((letter) => {
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
            plainText: "u",
            annotations: ["silent"],
            annotatedString: "",
            ipa: "",
            digraph: false,
            groupType: "consonant",
          },
          {
            plainText: letter,
            annotations: [],
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
            plainText: "u",
            annotations: [],
            annotatedString: "",
            ipa: "",
            digraph: false,
            groupType: "consonant",
          },
          {
            plainText: letter,
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

    test("case 'g' -(not semi_w)'u' -> 'g' -(not semi_w)'u'", () => {
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
          plainText: "g",
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

    test("case -any 'g' 'u' -> -any 'g' 'u'", () => {
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
          plainText: "g",
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
    rules.defaultDigraphGU = false;
    test("case 'g' -semi_w 'u' '['a', 'o', 'u']'  -> 'g' -semi_w 'u'", () => {
      let letterOptions = ["a", "o", "u"];
      letterOptions.forEach((letter) => {
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
            plainText: "u",
            annotations: ["w_semiconsonant"],
            annotatedString: "",
            ipa: "",
            digraph: false,
            groupType: "consonant",
          },
          {
            plainText: letter,
            annotations: [],
            annotatedString: "",
            ipa: "",
            digraph: false,
            groupType: "vowel",
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
            plainText: "u",
            annotations: ["w_semiconsonant"],
            annotatedString: "",
            ipa: "",
            digraph: false,
            groupType: "consonant",
          },
          {
            plainText: letter,
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

    test("case 'g' -silent 'u' '['e', 'i', 'y']'  -> 'g' -silent 'u'", () => {
      let letterOptions = ["e", "i", "y"];
      letterOptions.forEach((letter) => {
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
            plainText: "u",
            annotations: ["silent"],
            annotatedString: "",
            ipa: "",
            digraph: false,
            groupType: "consonant",
          },
          {
            plainText: letter,
            annotations: [],
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
            plainText: "u",
            annotations: ["silent"],
            annotatedString: "",
            ipa: "",
            digraph: false,
            groupType: "consonant",
          },
          {
            plainText: letter,
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
});
