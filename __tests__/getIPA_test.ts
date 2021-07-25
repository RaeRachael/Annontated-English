
import { getIPAForVowel } from '../src/Helpers/IPAHelpers'
import { AnnotatedLetter } from '../src/Types/AnnotedLetter'

describe("getIPAForVowel", () => {

  test("should return the ipa for a vowel", () => {
    let testLetter: AnnotatedLetter 
    testLetter = {  
      plainText: "a", annotations: ["plain"], annotatedString: "", ipa: "", digraph: false, groupType: "undetermined"
    }
    getIPAForVowel(testLetter)
    expect(testLetter.ipa).toEqual("æ")
  })

})


/// lots of TESTS!!!