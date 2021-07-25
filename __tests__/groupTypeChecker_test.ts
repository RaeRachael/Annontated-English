
import { isVowel } from '../src/Helpers/groupTypeChecker'
import { AnnotatedLetter } from '../src/Types/AnnotedLetter'

describe("isVowel", () => {

  test("should return true for 'a', 'e', 'i', 'o', u'", () => {
    let testSegment: AnnotatedLetter[] 
    ['a', 'e', 'i', 'o', 'u'].forEach(letter => {
      testSegment = [{
      plainText: letter, annotations: [], annotatedString: "", ipa: "", digraph: false, groupType: "undetermined"
      }]
      expect(isVowel(testSegment, 0)).toEqual(true)
    })
  })

// ["natural", "plain", "broad", "clear", "central", "iotted", "round", "opaque", "idiphthong", "udiphthong"]
  describe("should return true for vowel annotated letter", () => {
    test("natural annotation", () => {
      let testSegment: AnnotatedLetter[] = [{
        plainText: "x", annotations: ["natural"], annotatedString: "", ipa: "", digraph: false, groupType: "undetermined"
      }]
      expect(isVowel(testSegment, 0)).toEqual(true)
    })

    test("plain annotation", () => {
      let testSegment: AnnotatedLetter[] = [{
        plainText: "x", annotations: ["plain"], annotatedString: "", ipa: "", digraph: false, groupType: "undetermined"
      }]
      expect(isVowel(testSegment, 0)).toEqual(true)
    })
    // ect (not writting all tests as code isn't against a list but annotation mapping)
  })

// ["w_semiconsonant" | "y_semiconsonant" | "common_change" | "voiced" | "voiceless" | "soft_voiced" | "soft_voiceless" | "hard_voiced" | "hard_voiceless""]
  describe("should return false for consonant annotated letter", () => {
    test("w_semiconsonant annotation", () => {
      let testSegment: AnnotatedLetter[] = [{
        plainText: "a", annotations: ["w_semiconsonant"], annotatedString: "", ipa: "", digraph: false, groupType: "undetermined"
      }]
      expect(isVowel(testSegment, 0)).toEqual(false)
    })

    test("common_change annotation", () => {
      let testSegment: AnnotatedLetter[] = [{
        plainText: "a", annotations: ["common_change"], annotatedString: "", ipa: "", digraph: false, groupType: "undetermined"
      }]
      expect(isVowel(testSegment, 0)).toEqual(false)
    })
    // ect (not writting all tests as code isn't against a list but annotation mapping)
  })
})