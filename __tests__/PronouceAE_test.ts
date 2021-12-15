import { getIPAForAE } from "../src/Interpretor/PronouceAE";
import { AnnotatedLetter } from "../src/Types/AnnotedLetter";

describe("getIPAForAE", () => {
  test("", () => {
    let testWord: AnnotatedLetter[] = [
      {
        plainText: "b",
        annotations: [],
        annotatedString: "",
        ipa: "",
        digraph: false,
        groupType: "consonant",
      },
    ];
    expect(getIPAForAE(testWord)).toEqual("b");
  });

  test("", () => {
    let testWord: AnnotatedLetter[] = [
      {
        plainText: "a",
        annotations: ["central"],
        annotatedString: "",
        ipa: "",
        digraph: false,
        groupType: "undetermined",
      },
      {
        plainText: "n",
        annotations: [],
        annotatedString: "",
        ipa: "",
        digraph: false,
        groupType: "undetermined",
      },
    ];
    expect(getIPAForAE(testWord)).toEqual("ɛn");
  });

  test("", () => {
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
    expect(getIPAForAE(testWord)).toEqual("wɒz");
  });

  test("", () => {
    let testWord: AnnotatedLetter[] = [
      {
        plainText: "th",
        annotations: ["voiced"],
        annotatedString: "",
        ipa: "",
        digraph: true,
        groupType: "undetermined",
      },
      {
        plainText: "e",
        annotations: ["schwa"],
        annotatedString: "",
        ipa: "",
        digraph: false,
        groupType: "undetermined",
      },
    ];
    expect(getIPAForAE(testWord)).toEqual("ðə");
  });

  test("oi", () => {
    let testWord: AnnotatedLetter[] = [
      {
        plainText: "oi",
        annotations: ["digraph"],
        annotatedString: "",
        ipa: "",
        digraph: true,
        groupType: "vowel",
      },
    ];
    expect(getIPAForAE(testWord)).toEqual("ɔɪ");
  });

  describe("stress on vowels", () => {
    test("main stress", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "a",
          annotations: ["main_stress", "central"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "undetermined",
        },
      ];
      expect(getIPAForAE(testWord)).toEqual("Mɛ");
    });

    test("secondary stress", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "a",
          annotations: ["secondary_stress", "central"],
          annotatedString: "",
          ipa: "",
          digraph: false,
          groupType: "undetermined",
        },
      ];
      expect(getIPAForAE(testWord)).toEqual("Sɛ");
    });
  });
});
