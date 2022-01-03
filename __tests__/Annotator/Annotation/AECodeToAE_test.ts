import { AnnotatedCodeToAnnotatedText } from "../../../src/Annotator/annotatingText";
import { AnnotatedLetter } from "../../../src/Types/AnnotedLetter";

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

  // describe("postProcessed by rules, annotateTwoVowels", () => {
  //   describe("make the second letter the same annotation if silent", () => {
  //     test("natural", () => {
  //       let testWord: AnnotatedLetter[] = [
  //         {
  //           plainText: "a",
  //           annotations: ["natural"],
  //           annotatedString: "",
  //           ipa: "",
  //           digraph: true,
  //           groupType: "vowel",
  //         },
  //         {
  //           plainText: "e",
  //           annotations: ["silent"],
  //           annotatedString: "",
  //           ipa: "",
  //           digraph: false,
  //           groupType: "vowel",
  //         },
  //       ];
  //       expect(AnnotatedCodeToAnnotatedText(testWord)).toEqual("a\u0360e");
  //     });

  //     test("natural, stress", () => {
  //       let testWord: AnnotatedLetter[] = [
  //         {
  //           plainText: "a",
  //           annotations: ["main_stress", "natural"],
  //           annotatedString: "",
  //           ipa: "",
  //           digraph: true,
  //           groupType: "vowel",
  //         },
  //         {
  //           plainText: "e",
  //           annotations: ["silent"],
  //           annotatedString: "",
  //           ipa: "",
  //           digraph: false,
  //           groupType: "vowel",
  //         },
  //       ];
  //       expect(AnnotatedCodeToAnnotatedText(testWord)).toEqual("a̩͠e");
  //     });

  //     test("board", () => {
  //       let testWord: AnnotatedLetter[] = [
  //         {
  //           plainText: "a",
  //           annotations: ["broad"],
  //           annotatedString: "",
  //           ipa: "",
  //           digraph: true,
  //           groupType: "vowel",
  //         },
  //         {
  //           plainText: "e",
  //           annotations: ["silent"],
  //           annotatedString: "",
  //           ipa: "",
  //           digraph: false,
  //           groupType: "vowel",
  //         },
  //       ];
  //       expect(AnnotatedCodeToAnnotatedText(testWord)).toEqual("a\u035ee");
  //     });
  //   });
  // });

  // describe("postProcessed by rules, final silent e", () => {
  //   describe("make final e not annotated if silent", () => {
  //     test("case to remove annoatation", () => {
  //       let testWord: AnnotatedLetter[] = [
  //         {
  //           plainText: "e",
  //           annotations: ["silent"],
  //           annotatedString: "",
  //           ipa: "",
  //           digraph: false,
  //           groupType: "vowel",
  //         },
  //       ];
  //       expect(AnnotatedCodeToAnnotatedText(testWord)).toEqual("e");
  //     });

  //     test("add plain annotation if not silent", () => {
  //       let testWord: AnnotatedLetter[] = [
  //         {
  //           plainText: "e",
  //           annotations: [],
  //           annotatedString: "",
  //           ipa: "",
  //           digraph: false,
  //           groupType: "vowel",
  //         },
  //       ];
  //       expect(AnnotatedCodeToAnnotatedText(testWord)).toEqual("e̓");
  //     });
  //   });
  // });
});
