import { getIPAForVowel } from "../../../src/Helpers/IPAHelpers";
import { AnnotatedLetter } from "../../../src/Types/AnnotedLetter";

describe("getIPAForVowel - A", () => {
  test("a natural - eɪ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "a",
      annotations: ["natural"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("eɪ");
  });

  test("a plain - æ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "a",
      annotations: ["plain"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("æ");
  });

  test("a broad - ɑː", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "a",
      annotations: ["broad"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ɑː");
  });

  test("a clear - ʌ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "a",
      annotations: ["clear"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ʌ");
  });

  test("a central - ɛ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "a",
      annotations: ["central"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ɛ");
  });

  test("a iotted - ɪ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "a",
      annotations: ["iotted"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ɪ");
  });

  test("a round - ɔː", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "a",
      annotations: ["round"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ɔː");
  });

  test("a opaque - ɒ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "a",
      annotations: ["opaque"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ɒ");
  });

  test("a idiphthong - aɪ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "a",
      annotations: ["idiphthong"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("aɪ");
  });

  test("a udiphthong - aʊ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "a",
      annotations: ["udiphthong"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("aʊ");
  });
});

describe("getIPAForVowel - E", () => {
  test("e natural - iː", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "e",
      annotations: ["natural"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("iː");
  });

  test("e plain - ɛ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "e",
      annotations: ["plain"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ɛ");
  });

  test("e broad - eɪ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "e",
      annotations: ["broad"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("eɪ");
  });

  test("e clear - æ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "e",
      annotations: ["clear"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("æ");
  });

  test("e central - ɪ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "e",
      annotations: ["central"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ɪ");
  });

  test("e iotted - i", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "e",
      annotations: ["iotted"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("i");
  });

  test("e round - oʊ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "e",
      annotations: ["round"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("oʊ");
  });

  test("e opaque - ɜː", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "e",
      annotations: ["opaque"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ɜː");
  });

  test("e idiphthong - aɪ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "e",
      annotations: ["idiphthong"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("aɪ");
  });

  test("e udiphthong - ɔɪ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "e",
      annotations: ["udiphthong"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ɔɪ");
  });
});

describe("getIPAForVowel - O", () => {
  test("o natural - əʊ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "o",
      annotations: ["natural"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("əʊ");
  });

  test("o plain - ɒ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "o",
      annotations: ["plain"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ɒ");
  });

  test("o broad - ɔː", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "o",
      annotations: ["broad"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ɔː");
  });

  test("o clear - ʌ REPEAT WITH central", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "o",
      annotations: ["clear"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ʌ");
  });

  test("o central - ʌ REPEAT WITH clear", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "o",
      annotations: ["central"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ʌ");
  });

  test("o iotted - ɪ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "o",
      annotations: ["iotted"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ɪ");
  });

  test("o round - uː", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "o",
      annotations: ["round"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("uː");
  });

  test("o opaque - ʊ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "o",
      annotations: ["opaque"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ʊ");
  });

  test("o idiphthong - waɪ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "o",
      annotations: ["idiphthong"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("waɪ");
  });

  test("o udiphthong - aʊ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "o",
      annotations: ["udiphthong"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("aʊ");
  });
});

describe("getIPAForVowel - I", () => {
  test("i natural - aɪ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "i",
      annotations: ["natural"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("aɪ");
  });

  test("i plain - ɪ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "i",
      annotations: ["plain"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ɪ");
  });

  test("i broad - iː", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "i",
      annotations: ["broad"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("iː");
  });

  test("i clear - ɐ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "i",
      annotations: ["clear"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ɐ");
  });

  test("i central - æ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "i",
      annotations: ["central"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("æ");
  });

  test("i iotted - i", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "i",
      annotations: ["iotted"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("i");
  });

  test("i round - ɜː", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "i",
      annotations: ["round"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ɜː");
  });

  test("i opaque - ɔ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "i",
      annotations: ["opaque"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ɔ");
  });

  test("i idiphthong - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "i",
      annotations: ["idiphthong"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("i udiphthong - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "i",
      annotations: ["udiphthong"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });
});

describe("getIPAForVowel - O", () => {
  test("o natural - əʊ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "o",
      annotations: ["natural"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("əʊ");
  });

  test("o plain - ɒ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "o",
      annotations: ["plain"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ɒ");
  });

  test("o broad - ɔː", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "o",
      annotations: ["broad"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ɔː");
  });

  test("o clear - ʌ REPEAT WITH central", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "o",
      annotations: ["clear"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ʌ");
  });

  test("o central - ʌ REPEAT WITH clear", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "o",
      annotations: ["central"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ʌ");
  });

  test("o iotted - ɪ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "o",
      annotations: ["iotted"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ɪ");
  });

  test("o round - uː", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "o",
      annotations: ["round"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("uː");
  });

  test("o opaque - ʊ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "o",
      annotations: ["opaque"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ʊ");
  });

  test("o idiphthong - waɪ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "o",
      annotations: ["idiphthong"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("waɪ");
  });

  test("o udiphthong - aʊ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "o",
      annotations: ["udiphthong"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("aʊ");
  });
});

describe("getIPAForVowel - U", () => {
  test("u natural - uː REPEAT WITH broad", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "u",
      annotations: ["natural"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("uː");
  });

  test("u plain - ʌ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "u",
      annotations: ["plain"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ʌ");
  });

  test("u broad - uː REPEAT WITH natural", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "u",
      annotations: ["broad"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("uː");
  });

  test("u clear - ɜː", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "u",
      annotations: ["clear"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ɜː");
  });

  test("u central - ɛ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "u",
      annotations: ["central"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ɛ");
  });

  test("u iotted - ɪ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "u",
      annotations: ["iotted"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ɪ");
  });

  test("u round - oʊ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "u",
      annotations: ["round"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("oʊ");
  });

  test("u opaque - ʊ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "u",
      annotations: ["opaque"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ʊ");
  });

  test("u idiphthong - jə", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "u",
      annotations: ["idiphthong"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("jə");
  });

  test("u udiphthong - jʊ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "u",
      annotations: ["udiphthong"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("jʊ");
  });
});

describe("getIPAForVowel - Y", () => {
  test("y natural - aɪ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "y",
      annotations: ["natural"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("aɪ");
  });

  test("y plain - i", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "y",
      annotations: ["plain"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("i");
  });

  test("y broad - iː", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "y",
      annotations: ["broad"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("iː");
  });

  test("y clear - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "y",
      annotations: ["clear"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("y central - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "y",
      annotations: ["central"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("y iotted - ɪ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "y",
      annotations: ["iotted"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ɪ");
  });

  test("y round - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "y",
      annotations: ["round"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("y opaque - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "y",
      annotations: ["opaque"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("y idiphthong - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "y",
      annotations: ["idiphthong"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("y udiphthong - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "y",
      annotations: ["udiphthong"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });
});

describe("getIPAForVowel - W", () => {
  test("w natural - uː", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "w",
      annotations: ["natural"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("uː");
  });

  test("w plain - ʌ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "w",
      annotations: ["plain"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ʌ");
  });

  test("w broad - uː", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "w",
      annotations: ["broad"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("uː");
  });

  test("w clear - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "w",
      annotations: ["clear"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("w central - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "w",
      annotations: ["central"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("w iotted - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "w",
      annotations: ["iotted"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("w round - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "w",
      annotations: ["round"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("w opaque - ʊ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "w",
      annotations: ["opaque"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ʊ");
  });

  test("w idiphthong - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "w",
      annotations: ["idiphthong"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("w udiphthong - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "w",
      annotations: ["udiphthong"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });
});

describe("getIPAForVowel - aa", () => {
  test("aa stressed - ɑː", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "aa",
      annotations: ["main_stress"],
      annotatedString: "",
      ipa: "",
      digraph: true,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("Mɑː");

    testLetter = {
      plainText: "aa",
      annotations: ["secondary_stress"],
      annotatedString: "",
      ipa: "",
      digraph: true,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("Sɑː");
  });

  test("aa unstressed - ɑː", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "aa",
      annotations: [],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ɑː");
  });
});

describe("getIPAForVowel - ae", () => {
  test("ae stressed - iː", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "ae",
      annotations: ["main_stress"],
      annotatedString: "",
      ipa: "",
      digraph: true,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("Miː");

    testLetter = {
      plainText: "ae",
      annotations: ["secondary_stress"],
      annotatedString: "",
      ipa: "",
      digraph: true,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("Siː");
  });

  test("ae unstressed - iː", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "ae",
      annotations: [],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("iː");
  });
});

describe("getIPAForVowel - ai", () => {
  test("ai stressed - eɪ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "ai",
      annotations: ["main_stress"],
      annotatedString: "",
      ipa: "",
      digraph: true,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("Meɪ");

    testLetter = {
      plainText: "ai",
      annotations: ["secondary_stress"],
      annotatedString: "",
      ipa: "",
      digraph: true,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("Seɪ");
  });

  test("ai unstressed - eɪ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "ai",
      annotations: [],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("eɪ");
  });
});

describe("getIPAForVowel - au", () => {
  test("au stressed - ɔː", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "au",
      annotations: ["main_stress"],
      annotatedString: "",
      ipa: "",
      digraph: true,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("Mɔː");

    testLetter = {
      plainText: "au",
      annotations: ["secondary_stress"],
      annotatedString: "",
      ipa: "",
      digraph: true,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("Sɔː");
  });

  test("au unstressed - ɔː", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "au",
      annotations: [],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ɔː");
  });
});

describe("getIPAForVowel - ay", () => {
  test("ay stressed - eɪ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "ay",
      annotations: ["main_stress"],
      annotatedString: "",
      ipa: "",
      digraph: true,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("Meɪ");

    testLetter = {
      plainText: "ay",
      annotations: ["secondary_stress"],
      annotatedString: "",
      ipa: "",
      digraph: true,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("Seɪ");
  });

  test("ay unstressed - eɪ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "ay",
      annotations: [],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("eɪ");
  });
});

describe("getIPAForVowel - aw", () => {
  test("aw stressed - ɔː", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "aw",
      annotations: ["main_stress"],
      annotatedString: "",
      ipa: "",
      digraph: true,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("Mɔː");

    testLetter = {
      plainText: "aw",
      annotations: ["secondary_stress"],
      annotatedString: "",
      ipa: "",
      digraph: true,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("Sɔː");
  });

  test("aw unstressed - ɔː", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "aw",
      annotations: [],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ɔː");
  });
});

describe("getIPAForVowel - ea", () => {
  test("ea stressed - iː", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "ea",
      annotations: ["main_stress"],
      annotatedString: "",
      ipa: "",
      digraph: true,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("Miː");

    testLetter = {
      plainText: "ea",
      annotations: ["secondary_stress"],
      annotatedString: "",
      ipa: "",
      digraph: true,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("Siː");
  });

  test("ea unstressed - ɪə", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "ea",
      annotations: [],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ɪə");
  });
});

describe("getIPAForVowel - ee", () => {
  test("ee stressed - iː", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "ee",
      annotations: ["main_stress"],
      annotatedString: "",
      ipa: "",
      digraph: true,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("Miː");

    testLetter = {
      plainText: "ee",
      annotations: ["secondary_stress"],
      annotatedString: "",
      ipa: "",
      digraph: true,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("Siː");
  });

  test("ee unstressed - iː", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "ee",
      annotations: [],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("iː");
  });
});

describe("getIPAForVowel - eu", () => {
  test("eu stressed - uː", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "eu",
      annotations: ["main_stress"],
      annotatedString: "",
      ipa: "",
      digraph: true,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("Muː");

    testLetter = {
      plainText: "eu",
      annotations: ["secondary_stress"],
      annotatedString: "",
      ipa: "",
      digraph: true,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("Suː");
  });

  test("eu unstressed - uː", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "eu",
      annotations: [],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("uː");
  });
});

describe("getIPAForVowel - ew", () => {
  test("ew stressed - uː", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "ew",
      annotations: ["main_stress"],
      annotatedString: "",
      ipa: "",
      digraph: true,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("Muː");

    testLetter = {
      plainText: "ew",
      annotations: ["secondary_stress"],
      annotatedString: "",
      ipa: "",
      digraph: true,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("Suː");
  });

  test("ew unstressed - uː", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "ew",
      annotations: [],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("uː");
  });
});

describe("getIPAForVowel - oa", () => {
  test("oa stressed - oʊ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "oa",
      annotations: ["main_stress"],
      annotatedString: "",
      ipa: "",
      digraph: true,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("Moʊ");

    testLetter = {
      plainText: "oa",
      annotations: ["secondary_stress"],
      annotatedString: "",
      ipa: "",
      digraph: true,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("Soʊ");
  });

  test("oa unstressed - oʊ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "oa",
      annotations: [],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("oʊ");
  });
});

describe("getIPAForVowel - oi", () => {
  test("oi stressed - ɔɪ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "oi",
      annotations: ["main_stress"],
      annotatedString: "",
      ipa: "",
      digraph: true,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("Mɔɪ");

    testLetter = {
      plainText: "oi",
      annotations: ["secondary_stress"],
      annotatedString: "",
      ipa: "",
      digraph: true,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("Sɔɪ");
  });

  test("oi unstressed - ɔɪ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "oi",
      annotations: [],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ɔɪ");
  });
});

describe("getIPAForVowel - oo", () => {
  test("oo stressed - uː", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "oo",
      annotations: ["main_stress"],
      annotatedString: "",
      ipa: "",
      digraph: true,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("Muː");

    testLetter = {
      plainText: "oo",
      annotations: ["secondary_stress"],
      annotatedString: "",
      ipa: "",
      digraph: true,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("Suː");
  });

  test("oo unstressed - uː", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "oo",
      annotations: [],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("uː");
  });
});

describe("getIPAForVowel - ou", () => {
  test("ou stressed - ɔɪ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "ou",
      annotations: ["main_stress"],
      annotatedString: "",
      ipa: "",
      digraph: true,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("Maʊ");

    testLetter = {
      plainText: "ou",
      annotations: ["secondary_stress"],
      annotatedString: "",
      ipa: "",
      digraph: true,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("Saʊ");
  });

  test("ou unstressed - ə", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "ou",
      annotations: [],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ə");
  });
});

describe("getIPAForVowel - oy", () => {
  test("oy stressed - ɔɪ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "oy",
      annotations: ["main_stress"],
      annotatedString: "",
      ipa: "",
      digraph: true,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("Mɔɪ");

    testLetter = {
      plainText: "oy",
      annotations: ["secondary_stress"],
      annotatedString: "",
      ipa: "",
      digraph: true,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("Sɔɪ");
  });

  test("oy unstressed - ɔɪ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "oi",
      annotations: [],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "vowel",
    };
    getIPAForVowel(testLetter);
    expect(testLetter.ipa).toEqual("ɔɪ");
  });
});
