import { getIPAFor } from "../src/Mappings/collectIPA"

describe("getIPAFor", () => {

  describe("should return the ipa for plainText word", () => {
    test("'house' - 'hˈa‍ʊs'", () => {
      let testWord = "house"
      expect(getIPAFor(testWord)).toEqual("hˈa‍ʊs")
    })

    test("'cheese' - 't‍ʃˈiːz'", () => {
      let testWord = "cheese"
      expect(getIPAFor(testWord)).toEqual("t‍ʃˈiːz")
    })
  })
})