import { getIPAForText } from "../src/Mappings/collectIPA"

describe("getIPAFor", () => {

  describe("should return the ipa for plainText word", () => {
    test("'house' - 'hˈa‍ʊs'", () => {
      let testWord = "house"
      expect(getIPAForText(testWord)).toEqual("ha‍ʊs")//"hˈa‍ʊs"
    })

    test("'cheese' - 't‍ʃˈiːz'", () => {
      let testWord = "cheese"
      expect(getIPAForText(testWord)).toEqual("t‍ʃiːz")//"t‍ʃˈiːz"
    })
  })
})