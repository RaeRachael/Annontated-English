const { annotations, annotationCode } = require("../Mappings/Annotations");
const { consonants } = require("../Mappings/ConsonantPronounciation");
const { vowels } = require("../Mappings/VowelPronouciation");

function getIPAForVowel(letter) {
  if (letter.annotations.includes("w_semiconsonant")) {
    letter.ipa = "w";
    return "";
  }
  if (letter.annotations.includes("y_semiconsonant")) {
    letter.ipa = "j";
    return "";
  }
  if (letter.annotations.includes("schwa")) {
    letter.ipa = "ə";
    return;
  }

  let ipaAnnotation = letter.annotations.filter(
    (annotation) => annotations[annotation].ipa
  )[0];
  ipaAnnotation = ipaAnnotation ? ipaAnnotation : "stressed";

  if (!vowels[letter.plainText][ipaAnnotation]?.ipa) {
    // console.log("no ipa found for:", letter.plainText, ipaAnnotation);
    letter.ipa = "NOIPA";
    return "";
  }
  letter.ipa = vowels[letter.plainText][ipaAnnotation]?.ipa;
}

function getIPAForConsonant(letter) {
  if (letter.annotations.includes("w_semiconsonant")) {
    letter.ipa = "w";
    return "";
  }
  if (letter.annotations.includes("y_semiconsonant")) {
    letter.ipa = "j";
    return "";
  }
  let ipaAnnotation = letter.annotations.filter(
    (annotation) => annotations[annotation].ipa
  )[0];
  ipaAnnotation = ipaAnnotation ? ipaAnnotation : "";

  if (!consonants[letter.plainText][ipaAnnotation]) {
    // console.log("no ipa found for:", letter.plainText, ipaAnnotation);
    letter.ipa = "NOIPA";
    return "";
  }

  letter.ipa = consonants[letter.plainText][ipaAnnotation];

  if (letter.annotations.includes("schwa")) {
    letter.ipa = "ə" + letter.ipa;
  }
}

function annotationForUnicode(number) {
  return annotationCode[number];
}

exports.getIPAForConsonant = getIPAForConsonant;
exports.getIPAForVowel = getIPAForVowel;
exports.annotationForUnicode = annotationForUnicode;
