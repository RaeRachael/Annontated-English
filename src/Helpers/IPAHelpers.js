
const { annotations, annotationCode } = require("../Mappings/Annotations")
const { consonants } = require("../Mappings/ConsonantPronounciation")
const { vowels } = require("../Mappings/VowelPronouciation")

function getIPAForVowel(letter) {
  let ipaAnnotation = letter.annotations.filter( 
    annotation => annotations[annotation].ipa )[0]
  // ipaAnnotation = ipaAnnotation? ipaAnnotation : ""

  if (!vowels[letter.plainText][ipaAnnotation].ipa) {
    console.log("no ipa found for:", letter)
    return
  }
  letter.ipa = vowels[letter.plainText][ipaAnnotation]?.ipa
}

function getIPAForConsonant(letter) {
  let ipaAnnotation = letter.annotations.filter( 
    annotation => annotations[annotation].ipa )[0]
  ipaAnnotation = ipaAnnotation? ipaAnnotation : ""

  if (!consonants[letter.plainText][ipaAnnotation]) {
    console.log("no ipa found for:", letter)
    return
  }

  letter.ipa = consonants[letter.plainText][ipaAnnotation]
}

function annotationForUnicode(number) {
  return annotationCode[number]
}

exports.getIPAForConsonant = getIPAForConsonant
exports.getIPAForVowel = getIPAForVowel
exports.annotationForUnicode = annotationForUnicode