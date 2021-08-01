import { annotate, checker } from "../src/Annotator/annotator"
import { AnnotatedLetter } from "../src/Types/AnnotedLetter"

describe("annotate - adds annotiona to get IPA", () => {
  test("ant", () => {
    let testWord: string = 'ant'
    let expectedAE: AnnotatedLetter[] = 
    [
      {"annotatedString": "a̓", "annotations": ["plain"], "digraph": false, "groupType": "vowel", "ipa": "", "plainText": "a"}, 
      {"annotatedString": "n", "annotations": [], "digraph": false, "groupType": "consonant", "ipa": "", "plainText": "n"}, 
      {"annotatedString": "t", "annotations": [], "digraph": false, "groupType": "consonant", "ipa": "", "plainText": "t"}
    ]
    expect(annotate(testWord)).toEqual(expectedAE)
  })

  test("be", () => {
    let testWord: string = 'be'
    let expectedAE: AnnotatedLetter[] = 
    [
      {"annotatedString": "b", "annotations": [], "digraph": false, "groupType": "consonant", "ipa": "", "plainText": "b"}, 
      {"annotatedString": "ẽ", "annotations": ["natural"], "digraph": false, "groupType": "vowel", "ipa": "", "plainText": "e"}]
    expect(annotate(testWord)).toEqual(expectedAE)
  })

  test("the", () => {
    let testWord: string = 'the'
    let expectedAE: AnnotatedLetter[] = 
    [
      {"annotatedString": "t​\u200bh", "annotations": ["digraph"], "digraph": true, "groupType": "consonant", "ipa": "", "plainText": "th"}, 
      {"annotatedString": "ë", "annotations": ["central"], "digraph": false, "groupType": "vowel", "ipa": "", "plainText": "e"}
    ]
    expect(annotate(testWord)).toEqual(expectedAE)
  })

  test("was", () => {
    let testWord: string = 'was'
    let expectedAE: AnnotatedLetter[] = 
    [
      {"annotatedString": "w", "annotations": [], "digraph": false, "groupType": "consonant", "ipa": "", "plainText": "w"}, 
      {"annotatedString": "ǎ", "annotations": ["opaque"], "digraph": false, "groupType": "vowel", "ipa": "", "plainText": "a"}, 
      {"annotatedString": "s̬", "annotations": ["voiced"], "digraph": false, "groupType": "consonant", "ipa": "", "plainText": "s"}
    ]
    expect(annotate(testWord)).toEqual(expectedAE)
  })
})

describe("checker - checks AE against ipa dictionary", () => {
  test("the - corect", () => {
    let testWord: AnnotatedLetter[] = [
      {
        plainText: "th", annotations: ["voiced"], annotatedString: "", ipa: "", digraph: true, groupType: "undetermined"
      }, {
        plainText: "e", annotations: ["central"], annotatedString: "", ipa: "", digraph: false, groupType: "undetermined"
      }
    ]
    expect(checker(testWord, "ðə")).toEqual(true)
  })
  test("the - wrong", () => {
    let testWord: AnnotatedLetter[] = [
      {
        plainText: "th", annotations: ["voiced"], annotatedString: "", ipa: "", digraph: true, groupType: "undetermined"
      }, {
        plainText: "e", annotations: ["round"], annotatedString: "", ipa: "", digraph: false, groupType: "undetermined"
      }
    ]
    expect(checker(testWord, "ðə")).toEqual(false)
  })
})
