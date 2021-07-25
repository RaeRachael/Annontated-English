import { AnnotatedTextToAnnotatedCode } from "../src/Mappings/AECodeToAE"
import { AnnotatedLetter } from "../src/Types/AnnotedLetter"

describe("AnnotatedTextToAnnotatedCode", () => {

  describe("should turn a string of annotated letters into AnnotatedLetters[]", () => {

    test("wǎs̬", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "w", annotations: [], annotatedString: "", ipa: "", digraph: false, groupType: "undetermined"
        }, {
          plainText: "a", annotations: ["opaque"], annotatedString: "", ipa: "", digraph: false, groupType: "undetermined"
        }, {
          plainText: "s", annotations: ["voiced"], annotatedString: "", ipa: "", digraph: false, groupType: "undetermined"
        }
      ]
      expect(AnnotatedTextToAnnotatedCode("wǎs̬")).toEqual(testWord)
    })

    test("t​̬hë", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "th", annotations: ["voiced"], annotatedString: "", ipa: "", digraph: true, groupType: "undetermined"
        }, {
          plainText: "e", annotations: ["central"], annotatedString: "", ipa: "", digraph: false, groupType: "undetermined"
        }
      ]
      expect(AnnotatedTextToAnnotatedCode("t​̬hë")).toEqual(testWord)
    })

    test("a̺̱b", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "a", annotations: ["hard_voiced"], annotatedString: "", ipa: "", digraph: false, groupType: "undetermined"
        }, {
          plainText: "b", annotations: [], annotatedString: "", ipa: "", digraph: false, groupType: "undetermined"
        }
      ]
      expect(AnnotatedTextToAnnotatedCode("a̺̱b")).toEqual(testWord)
    })

    test("ã̩", () => {
      let testWord: AnnotatedLetter[] = [
        {
          plainText: "a", annotations: ["natural", "main_stress"], annotatedString: "", ipa: "", digraph: false, groupType: "undetermined"
        }
      ]
      expect(AnnotatedTextToAnnotatedCode("ã̩")).toEqual(testWord)
    })
  
  })
})