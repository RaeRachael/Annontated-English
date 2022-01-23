import { postProcess } from "../../../../../src/Annotator/annotatingText";
import { AnnotatedLetter } from "../../../../../src/Types/AnnotedLetter";
import { rules, defaultRules } from "../../../../../src/Types/Rules";

describe("postProcess, default silent [vowel]h", () => {
  describe("rule used, make '[vowel]' silent 'h' unannotated if not followed by vowel", () => {
    let rules: rules = JSON.parse(JSON.stringify(defaultRules));
    rules.defaultDigraphVowelH = true;
    test("case '[vowel]' silent 'h'", () => {
      ["a", "e", "i", "o", "u", "w", "y"].forEach((letter) => {
        let testWord: AnnotatedLetter[] = [
          {
            plainText: letter,
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
            plainText: letter,
            annotations: [],
            annotatedString: "",
            ipa: "",
            digraph: false,
            groupType: "vowel",
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

    test("case '[vowel]' silent 'h' [vowel]", () => {
      ["a", "e", "i", "o", "u", "w", "y"].forEach((letter) => {
        let testWord: AnnotatedLetter[] = [
          {
            plainText: letter,
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
            plainText: letter,
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

    test("case '[vowel]' silent 'h' [consonant]", () => {
      ["a", "e", "i", "o", "u", "w", "y"].forEach((letter) => {
        let testWord: AnnotatedLetter[] = [
          {
            plainText: letter,
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
          {
            plainText: "b",
            annotations: [],
            annotatedString: "",
            ipa: "",
            digraph: false,
            groupType: "vowel",
          },
        ];
        let expectedOutput: AnnotatedLetter[] = [
          {
            plainText: letter,
            annotations: [],
            annotatedString: "",
            ipa: "",
            digraph: false,
            groupType: "vowel",
          },
          {
            plainText: "h",
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
            groupType: "vowel",
          },
        ];
        let output = postProcess(testWord, rules);
        expect(output).toEqual(expectedOutput);
      });
    });

    test("case '[vowel]' 'h'", () => {
      ["a", "e", "i", "o", "u", "w", "y"].forEach((letter) => {
        let testWord: AnnotatedLetter[] = [
          {
            plainText: letter,
            annotations: [],
            annotatedString: "",
            ipa: "",
            digraph: false,
            groupType: "vowel",
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
            plainText: letter,
            annotations: [],
            annotatedString: "",
            ipa: "",
            digraph: false,
            groupType: "vowel",
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
    });
  });

  describe("rule not used, no edits", () => {
    let rules: rules = JSON.parse(JSON.stringify(defaultRules));
    rules.defaultDigraphVowelH = false;
    test("case '[vowel]' silent 'h'", () => {
      ["a", "e", "i", "o", "u", "w", "y"].forEach((letter) => {
        let testWord: AnnotatedLetter[] = [
          {
            plainText: letter,
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
            plainText: letter,
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

    test("case '[vowel]' 'h'", () => {
      ["a", "e", "i", "o", "u", "w", "y"].forEach((letter) => {
        let testWord: AnnotatedLetter[] = [
          {
            plainText: letter,
            annotations: [],
            annotatedString: "",
            ipa: "",
            digraph: false,
            groupType: "vowel",
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
            plainText: letter,
            annotations: [],
            annotatedString: "",
            ipa: "",
            digraph: false,
            groupType: "vowel",
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
});
