const { annotations, annotationCode } = require("../Mappings/Annotations");
const { consonants } = require("../Mappings/ConsonantPronounciation");
const { vowels } = require("../Mappings/VowelPronouciation");

function getIPAForVowel(letter) {
  if (letter.annotations.includes("silent")) {
    letter.ipa = "";
    return;
  } else if (letter.annotations.includes("w_semiconsonant")) {
    letter.ipa = "w";
    return "";
  } else if (letter.annotations.includes("y_semiconsonant")) {
    letter.ipa = "j";
    return "";
  } else if (letter.annotations.includes("schwa")) {
    letter.ipa = "ə";
    // return;
  } else {
    let ipaAnnotation = letter.annotations.filter(
      (annotation) => annotations[annotation].ipa
    )[0];

    if (!ipaAnnotation) {
      if (
        letter.annotations.includes("main_stress") ||
        letter.annotations.includes("secondary_stress")
      ) {
        ipaAnnotation = "stressed";
      } else {
        ipaAnnotation = "unStressed";
      }
    }

    let letterPlainText = letter.plainText.toLowerCase();

    if (!vowels[letterPlainText]) {
      // console.log("no ipa found for:", letter.plainText, ipaAnnotation);
      letter.ipa = "NOIPA-NOTvalidVowel";
      return "";
    }

    if (!vowels[letterPlainText][ipaAnnotation]?.ipa) {
      // console.log("no ipa found for:", letter.plainText, ipaAnnotation);
      letter.ipa = "NO_IPA";
      return "";
    }

    letter.ipa = vowels[letterPlainText][ipaAnnotation]?.ipa;
  }

  if (letter.annotations.includes("main_stress")) {
    letter.ipa = "M" + letter.ipa;
  }

  if (letter.annotations.includes("secondary_stress")) {
    letter.ipa = "S" + letter.ipa;
  }
}

function getIPAForConsonant(letter) {
  if ([".", ","].includes(letter.plainText)) {
    // punctuation escape
    letter.ipa = "";
    return;
  }
  if (letter.annotations.includes("silent")) {
    letter.ipa = "";
    return;
  }
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

  let letterPlainText = letter.plainText.toLowerCase();

  if (!consonants[letterPlainText]) {
    // console.log("no ipa found for:", letter.plainText, ipaAnnotation);
    letter.ipa = "NOIPA-NOTvalidConsonant";
    return "";
  }

  if (!consonants[letterPlainText][ipaAnnotation]) {
    // console.log("no ipa found for:", letter.plainText, ipaAnnotation);
    letter.ipa = "NO_IPA";
    return "";
  }

  letter.ipa = consonants[letterPlainText][ipaAnnotation];

  if (letter.annotations.includes("schwa")) {
    letter.ipa = "ə" + letter.ipa;
  }
  // if (letter.plainText === "g") {
  //   //(ipaAnnotation === "natural") {
  //   console.log(letter.ipa, ipaAnnotation);
  // }
}

function annotationForUnicode(number) {
  return annotationCode[number];
}

exports.getIPAForConsonant = getIPAForConsonant;
exports.getIPAForVowel = getIPAForVowel;
exports.annotationForUnicode = annotationForUnicode;
