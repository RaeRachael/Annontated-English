import { postProcess } from "../../../../src/Annotator/annotatingText";
import { vowels } from "../../../../src/Mappings/VowelPronouciation";
import { AnnotatedLetter } from "../../../../src/Types/AnnotedLetter";
import { rules } from "../../../../src/Types/Rules";

describe("postProcess, final natural 'o", () => {
  describe("rule used, make final 'o(s/es)' not annotated if natural", () => {
    let rules: rules = {
      annotateTwoVowels: false,
      silentFinalE: false,
      silentFinalEx: false,
      naturalFinalO: false,
      naturalFinalOx: true,
    };
    test("case natural final 'o(s)' ", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "o",
          annotations: ["natural"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
        {
          plainText: "s",
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
          annotations: [],
          digraph: false,
          groupType: "vowel",
          ipa: "",
          plainText: "o",
        },
        {
          plainText: "s",
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

    test("case not natural 'o(s)'", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "o",
          annotations: ["round"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
        {
          plainText: "s",
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
          annotations: ["round"],
          digraph: false,
          groupType: "vowel",
          ipa: "",
          plainText: "o",
        },
        {
          plainText: "s",
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

    test("case natural final 'o(es)' ", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "o",
          annotations: ["natural"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
        {
          plainText: "e",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
        {
          plainText: "s",
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
          annotations: [],
          digraph: false,
          groupType: "vowel",
          ipa: "",
          plainText: "o",
        },
        {
          plainText: "e",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
        {
          plainText: "s",
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

    test("case not natural 'o(es)'", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "o",
          annotations: ["round"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
        {
          plainText: "e",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
        {
          plainText: "s",
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
          annotations: ["round"],
          digraph: false,
          groupType: "vowel",
          ipa: "",
          plainText: "o",
        },
        {
          plainText: "e",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
        {
          plainText: "s",
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
    let rules: rules = {
      annotateTwoVowels: false,
      silentFinalE: false,
      silentFinalEx: false,
      naturalFinalO: false,
      naturalFinalOx: false,
    };
    test("case natural final 'o(s)' ", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "o",
          annotations: ["natural"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "vowel",
        },
        {
          plainText: "s",
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
          annotations: ["natural"],
          digraph: false,
          groupType: "vowel",
          ipa: "",
          plainText: "o",
        },
        {
          plainText: "s",
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
        {
          plainText: "s",
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
          annotations: ["round"],
          digraph: false,
          groupType: "vowel",
          ipa: "",
          plainText: "o",
        },
        {
          plainText: "s",
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
