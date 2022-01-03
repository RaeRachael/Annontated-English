import { checker } from "../../src/Annotator/annotator";
import { AnnotatedLetter } from "../../src/Types/AnnotedLetter";

describe("checker - checks AE against ipa dictionary", () => {
  test("the - corect", () => {
    let testWord: AnnotatedLetter[] = [
      {
        plainText: "th",
        annotations: ["voiced"],
        annotatedString: "",
        ipa: "ð",
        digraph: true,
        groupType: "undetermined",
      },
      {
        plainText: "e",
        annotations: ["schwa"],
        annotatedString: "",
        ipa: "ə",
        digraph: false,
        groupType: "undetermined",
      },
    ];
    expect(checker(testWord, "ðə")).toEqual(true);
  });

  test("the - wrong", () => {
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
        annotations: ["round"],
        annotatedString: "",
        ipa: "",
        digraph: false,
        groupType: "undetermined",
      },
    ];
    expect(checker(testWord, "ðə")).toEqual(false);
  });
});
