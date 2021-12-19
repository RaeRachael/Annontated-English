import { getIPAForConsonant } from "../../../src/Helpers/IPAHelpers";
import { AnnotatedLetter } from "../../../src/Types/AnnotedLetter";

describe("getIPAForConsonant - B", () => {
  test("b no annotation - b", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "b",
      annotations: [],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("b");
  });

  test("b common_change - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "b",
      annotations: ["common_change"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("b voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "b",
      annotations: ["voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("b soft_voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "b",
      annotations: ["soft_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("b hard_voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "b",
      annotations: ["hard_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("b voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "b",
      annotations: ["voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("b soft_voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "b",
      annotations: ["soft_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("b hard_voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "b",
      annotations: ["hard_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });
});

describe("getIPAForConsonant - C", () => {
  test("c no annotation - k", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "c",
      annotations: [],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("k");
  });

  test("c common_change - k", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "c",
      annotations: ["common_change"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("k");
  });

  test("c voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "c",
      annotations: ["voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("c soft_voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "c",
      annotations: ["soft_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("c hard_voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "c",
      annotations: ["hard_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("c voiceless - s", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "c",
      annotations: ["voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("s");
  });

  test("c soft_voiceless - ʃ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "c",
      annotations: ["soft_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("ʃ");
  });

  test("c hard_voiceless - tʃ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "c",
      annotations: ["hard_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("tʃ");
  });
});

describe("getIPAForConsonant - D", () => {
  test("d no annotation - d", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "d",
      annotations: [],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("d");
  });

  test("d common_change - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "d",
      annotations: ["common_change"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("d voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "d",
      annotations: ["voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("d soft_voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "d",
      annotations: ["soft_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("d hard_voiced - dʒ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "d",
      annotations: ["hard_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("dʒ");
  });

  test("d voiceless - t", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "d",
      annotations: ["voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("t");
  });

  test("d soft_voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "d",
      annotations: ["soft_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("d hard_voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "d",
      annotations: ["hard_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });
});

describe("getIPAForConsonant - F", () => {
  test("f no annotation - d", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "f",
      annotations: [],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("f");
  });

  test("f common_change - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "f",
      annotations: ["common_change"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("f voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "f",
      annotations: ["voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("f soft_voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "f",
      annotations: ["soft_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("f hard_voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "f",
      annotations: ["hard_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("f voiceless - v", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "f",
      annotations: ["voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("v");
  });

  test("f soft_voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "f",
      annotations: ["soft_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("f hard_voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "f",
      annotations: ["hard_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });
});

describe("getIPAForConsonant - G", () => {
  test("g no annotation - g", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "g",
      annotations: [],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("g");
  });

  test("g common_change - g", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "g",
      annotations: ["common_change"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("g");
  });

  test("g voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "g",
      annotations: ["voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("g soft_voiced - ʒ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "g",
      annotations: ["soft_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("ʒ");
  });

  test("g hard_voiced - dʒ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "g",
      annotations: ["hard_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("dʒ");
  });

  test("g voiceless - k", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "g",
      annotations: ["voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("k");
  });

  test("g soft_voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "g",
      annotations: ["soft_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("g hard_voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "g",
      annotations: ["hard_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });
});

describe("getIPAForConsonant - H", () => {
  test("h no annotation - h", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "h",
      annotations: [],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("h");
  });

  test("h common_change - x", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "h",
      annotations: ["common_change"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("x");
  });

  test("h voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "h",
      annotations: ["voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("h soft_voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "h",
      annotations: ["soft_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("h hard_voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "h",
      annotations: ["hard_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("h voiceless - h", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "h",
      annotations: ["voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("h");
  });

  test("h soft_voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "h",
      annotations: ["soft_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("h hard_voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "h",
      annotations: ["hard_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });
});

describe("getIPAForConsonant - J", () => {
  test("j no annotation - dʒ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "j",
      annotations: [],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("dʒ");
  });

  test("j common_change - h", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "j",
      annotations: ["common_change"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("h");
  });

  test("j voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "j",
      annotations: ["voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("j soft_voiced - ʒ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "j",
      annotations: ["soft_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("ʒ");
  });

  test("j hard_voiced - dʒ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "j",
      annotations: ["hard_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("dʒ");
  });

  test("j voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "j",
      annotations: ["voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("j soft_voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "j",
      annotations: ["soft_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("j hard_voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "j",
      annotations: ["hard_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });
});

describe("getIPAForConsonant - K", () => {
  test("k no annotation - k", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "k",
      annotations: [],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("k");
  });

  test("k common_change - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "k",
      annotations: ["common_change"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("k voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "k",
      annotations: ["voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("k soft_voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "k",
      annotations: ["soft_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("k hard_voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "k",
      annotations: ["hard_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("k voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "k",
      annotations: ["voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("k soft_voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "k",
      annotations: ["soft_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("k hard_voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "k",
      annotations: ["hard_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });
});

describe("getIPAForConsonant - L", () => {
  test("l no annotation - l", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "l",
      annotations: [],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("l");
  });

  test("l common_change - ɹ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "l",
      annotations: ["common_change"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("ɹ");
  });

  test("l voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "l",
      annotations: ["voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("l soft_voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "l",
      annotations: ["soft_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("l hard_voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "l",
      annotations: ["hard_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("l voiceless - ɹ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "l",
      annotations: ["voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("ɹ");
  });

  test("l soft_voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "l",
      annotations: ["soft_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("l hard_voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "l",
      annotations: ["hard_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });
});

describe("getIPAForConsonant - M", () => {
  test("m no annotation - m", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "m",
      annotations: [],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("m");
  });

  test("m common_change - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "m",
      annotations: ["common_change"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("m voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "m",
      annotations: ["voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("m soft_voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "m",
      annotations: ["soft_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("m hard_voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "m",
      annotations: ["hard_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("m voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "m",
      annotations: ["voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("m soft_voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "m",
      annotations: ["soft_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("m hard_voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "m",
      annotations: ["hard_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });
});

describe("getIPAForConsonant - N", () => {
  test("n no annotation - n", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "n",
      annotations: [],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("n");
  });

  test("n common_change - ŋ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "n",
      annotations: ["common_change"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("ŋ");
  });

  test("n voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "n",
      annotations: ["voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("n soft_voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "n",
      annotations: ["soft_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("n hard_voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "n",
      annotations: ["hard_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("n voiceless - n", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "n",
      annotations: ["voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("n");
  });

  test("n soft_voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "n",
      annotations: ["soft_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("n hard_voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "n",
      annotations: ["hard_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });
});

describe("getIPAForConsonant - P", () => {
  test("p no annotation - p", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "p",
      annotations: [],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("p");
  });

  test("p common_change - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "p",
      annotations: ["common_change"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("p voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "p",
      annotations: ["voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("p soft_voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "p",
      annotations: ["soft_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("p hard_voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "p",
      annotations: ["hard_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("p voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "p",
      annotations: ["voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("p soft_voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "p",
      annotations: ["soft_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("p hard_voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "p",
      annotations: ["hard_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });
});

describe("getIPAForConsonant - Q", () => {
  test("q no annotation - k", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "q",
      annotations: [],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("k");
  });

  test("q common_change - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "q",
      annotations: ["common_change"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("q voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "q",
      annotations: ["voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("q soft_voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "q",
      annotations: ["soft_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("q hard_voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "q",
      annotations: ["hard_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("q voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "q",
      annotations: ["voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("q soft_voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "q",
      annotations: ["soft_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("q hard_voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "q",
      annotations: ["hard_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });
});

describe("getIPAForConsonant - R", () => {
  test("r no annotation - ɹ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "r",
      annotations: [],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("ɹ");
  });

  test("r common_change - ɹ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "r",
      annotations: ["common_change"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("ɹ");
  });

  test("r voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "r",
      annotations: ["voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("r soft_voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "r",
      annotations: ["soft_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("r hard_voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "r",
      annotations: ["hard_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("r voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "r",
      annotations: ["voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("r soft_voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "r",
      annotations: ["soft_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("r hard_voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "r",
      annotations: ["hard_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });
});

describe("getIPAForConsonant - S", () => {
  test("s no annotation - s", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "s",
      annotations: [],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("s");
  });

  test("s common_change - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "s",
      annotations: ["common_change"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("s voiced - z", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "s",
      annotations: ["voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("z");
  });

  test("s soft_voiced - ʒ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "s",
      annotations: ["soft_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("ʒ");
  });

  test("s hard_voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "s",
      annotations: ["hard_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("s voiceless - s", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "s",
      annotations: ["voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("s");
  });

  test("s soft_voiceless - ʃ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "s",
      annotations: ["soft_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("ʃ");
  });

  test("s hard_voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "s",
      annotations: ["hard_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });
});

describe("getIPAForConsonant - T", () => {
  test("t no annotation - t", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "t",
      annotations: [],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("t");
  });

  test("t common_change - ɾ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "t",
      annotations: ["common_change"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("ɾ");
  });

  test("t voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "t",
      annotations: ["voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("t soft_voiced - ʒ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "t",
      annotations: ["soft_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("ʒ");
  });

  test("t hard_voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "t",
      annotations: ["hard_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("t voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "t",
      annotations: ["voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("t soft_voiceless - ʃ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "t",
      annotations: ["soft_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("ʃ");
  });

  test("t hard_voiceless - tʃ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "t",
      annotations: ["hard_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("tʃ");
  });
});

describe("getIPAForConsonant - V", () => {
  test("v no annotation - v", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "v",
      annotations: [],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("v");
  });

  test("v common_change - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "v",
      annotations: ["common_change"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("v voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "v",
      annotations: ["voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("v soft_voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "v",
      annotations: ["soft_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("v hard_voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "v",
      annotations: ["hard_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("v voiceless - f", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "v",
      annotations: ["voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("f");
  });

  test("v soft_voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "v",
      annotations: ["soft_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("v hard_voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "v",
      annotations: ["hard_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });
});

describe("getIPAForConsonant - W", () => {
  test("w no annotation - w", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "w",
      annotations: [],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("w");
  });

  test("w common_change - w", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "w",
      annotations: ["common_change"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("w");
  });

  test("w voiced - v", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "w",
      annotations: ["voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("v");
  });

  test("w soft_voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "w",
      annotations: ["soft_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("w hard_voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "w",
      annotations: ["hard_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("w voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "w",
      annotations: ["voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("w soft_voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "w",
      annotations: ["soft_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("w hard_voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "w",
      annotations: ["hard_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });
});

describe("getIPAForConsonant - X", () => {
  test("x no annotation - ks", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "ks",
      annotations: [],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("ks");
  });

  test("x common_change - z", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "z",
      annotations: ["common_change"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("z");
  });

  test("x voiced - gz", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "x",
      annotations: ["voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("gz");
  });

  test("x soft_voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "x",
      annotations: ["soft_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("x hard_voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "x",
      annotations: ["hard_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("x voiceless - ks", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "x",
      annotations: ["voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("ks");
  });

  test("x soft_voiceless - kʃ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "x",
      annotations: ["soft_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("kʃ");
  });

  test("x hard_voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "x",
      annotations: ["hard_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });
});

describe("getIPAForConsonant - Y", () => {
  test("y no annotation - j", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "y",
      annotations: [],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("j");
  });

  test("y common_change - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "y",
      annotations: ["common_change"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("y voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "y",
      annotations: ["voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("y soft_voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "y",
      annotations: ["soft_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("y hard_voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "y",
      annotations: ["hard_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("y voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "y",
      annotations: ["voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("y soft_voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "y",
      annotations: ["soft_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("y hard_voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "y",
      annotations: ["hard_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });
});

describe("getIPAForConsonant - Z", () => {
  test("z no annotation - z", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "z",
      annotations: [],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("z");
  });

  test("z common_change - ts", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "ts",
      annotations: ["common_change"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("ts");
  });

  test("z voiced - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "z",
      annotations: ["voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("z soft_voiced - ʒ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "z",
      annotations: ["soft_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("ʒ");
  });

  test("z hard_voiced - dʒ", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "z",
      annotations: ["hard_voiced"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("dʒ");
  });

  test("z voiceless - s", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "z",
      annotations: ["voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("s");
  });

  test("z soft_voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "z",
      annotations: ["soft_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });

  test("z hard_voiceless - noIPA", () => {
    let testLetter: AnnotatedLetter;
    testLetter = {
      plainText: "z",
      annotations: ["hard_voiceless"],
      annotatedString: "",
      ipa: "",
      digraph: false,
      groupType: "consonant",
    };
    getIPAForConsonant(testLetter);
    expect(testLetter.ipa).toEqual("NO_IPA");
  });
});
