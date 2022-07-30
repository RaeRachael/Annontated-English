import { postProcess } from "../../../../../src/Annotator/annotatingText";
import { AnnotatedLetter } from "../../../../../src/Types/AnnotedLetter";
import { rules, defaultRules } from "../../../../../src/Types/Rules";

describe("postProcess, default double consonants", () => {
  describe("rule used, unannotated if simple sperator and second letter silent", () => {
    let rules: rules = JSON.parse(JSON.stringify(defaultRules));
    rules.defaultSilentDoubleConsonants = true;
    test("case 's' - simple sperator - silent 's' ", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "s",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        // {
        //   plainText: "",
        //   annotations: ["simple_seperator"],
        //   annotatedString: "",
        //   ipa: "",
        //   digraph: false,
        //   groupType: "undetermined",
        // },
        {
          plainText: "s",
          annotations: ["silent"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          plainText: "s",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
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

    test("case 'f' - sperator - silent 'f' ", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "f",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        // {
        //   plainText: "",
        //   annotations: ["simple_seperator"],
        //   annotatedString: "",
        //   ipa: "",
        //   digraph: false,
        //   groupType: "undetermined",
        // },
        {
          plainText: "f",
          annotations: ["silent"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          plainText: "f",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "f",
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

    test("case 't' 't'  - adds a sperator", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "t",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "t",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          plainText: "t",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "",
          annotations: ["simple_seperator"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "undetermined",
        },
        {
          plainText: "t",
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
    rules.defaultSilentDoubleConsonants = false;
    test("case common 's' - seperator - silent 's'", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "s",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "",
          annotations: ["simple_seperator"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "undetermined",
        },
        {
          plainText: "s",
          annotations: ["silent"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
      ];
      let expectedOutput: AnnotatedLetter[] = [
        {
          plainText: "s",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "consonant",
        },
        {
          plainText: "",
          annotations: ["simple_seperator"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "undetermined",
        },
        {
          plainText: "s",
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
