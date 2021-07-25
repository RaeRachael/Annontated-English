import { getIPAForAE } from "../src/PronouceAE"
import { AnnotatedLetter } from "../src/Types/AnnotedLetter"

describe("getIPAForAE", () => {
  test("", () => {
    let testWord: AnnotatedLetter[] = [
      {
        plainText: "a", annotations: ["central"], annotatedString: "", ipa: "", digraph: false, groupType: "undetermined"
      }, {
        plainText: "n", annotations: [], annotatedString: "", ipa: "", digraph: false, groupType: "undetermined"
      }
    ]
    getIPAForAE(testWord)
    expect(1).toEqual(1)
  })

  test("", () => {
    let testWord: AnnotatedLetter[] = [
      {
        plainText: "w", annotations: [], annotatedString: "", ipa: "", digraph: false, groupType: "undetermined"
      }, {
        plainText: "a", annotations: ["opaque"], annotatedString: "", ipa: "", digraph: false, groupType: "undetermined"
      }, {
        plainText: "s", annotations: ["voiced"], annotatedString: "", ipa: "", digraph: false, groupType: "undetermined"
      }
    ]
    getIPAForAE(testWord)
    expect(1).toEqual(1)
  })

  test("", () => {
    let testWord: AnnotatedLetter[] = [
      {
        plainText: "th", annotations: ["voiced"], annotatedString: "", ipa: "", digraph: false, groupType: "undetermined"
      }, {
        plainText: "e", annotations: ["central"], annotatedString: "", ipa: "", digraph: false, groupType: "undetermined"
      }
    ]
    getIPAForAE(testWord)
    expect(1).toEqual(1)
  })
})