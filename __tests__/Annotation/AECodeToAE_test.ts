import { AnnotatedCodeToAnnotatedText } from "../../src/Mappings/AECodeToAE";
import { AnnotatedLetter } from "../../src/Types/AnnotedLetter";

describe("AnnotatedCodeToAnnotatedText", () => {
  describe("should turn AnnotatedLetters[] into a string of annotated letters", () => {
    test("wǎs̬", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "w",
          annotations: [],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "undetermined",
        },
        {
          plainText: "a",
          annotations: ["opaque"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "undetermined",
        },
        {
          plainText: "s",
          annotations: ["voiced"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "undetermined",
        },
      ];
      expect(AnnotatedCodeToAnnotatedText(testWord)).toEqual("wǎs̬");
    });

    test("t​̬hë", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "th",
          annotations: ["digraph", "voiced"],
          annotatedString: "",
          ipa: "",
          digraph: true,
          groupType: "undetermined",
        },
        {
          plainText: "e",
          annotations: ["central"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "undetermined",
        },
      ];
      expect(AnnotatedCodeToAnnotatedText(testWord)).toEqual("t​̬hë");
    });

    test("ã̩", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "a",
          annotations: ["natural", "main_stress"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "undetermined",
        },
      ];
      expect(AnnotatedCodeToAnnotatedText(testWord)).toEqual("ã̩");
    });
  });
});
