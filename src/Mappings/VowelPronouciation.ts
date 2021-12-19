export const vowels = {
  a: {
    natural: {
      //"ã"
      ipa: "eɪ",
    },
    plain: {
      //"a̓"
      ipa: "æ",
    },
    broad: {
      //"ā"
      ipa: "ɑː",
    },
    clear: {
      //"â"
      ipa: "ʌ",
    },
    central: {
      //"ä"
      ipa: "ɛ",
    },
    iotted: {
      //"ȧ"
      ipa: "ɪ",
    },
    round: {
      //"å"
      ipa: "ɔː",
    },
    opaque: {
      //"ǎ"
      ipa: "ɒ", //"ɔ" (edit made to get 'was' to work)
    },
    idiphthong: {
      // "à"
      ipa: "aɪ",
    },
    udiphthong: {
      // "á"
      ipa: "aʊ",
    },
  },
  e: {
    natural: {
      ipa: "iː",
    },
    plain: {
      ipa: "ɛ",
    },
    broad: {
      ipa: "eɪ",
    },
    clear: {
      ipa: "æ",
    },
    central: {
      ipa: "ɪ", //"ə", // could be reused maybe shifted iotted here - with 'i' in iotted
    },
    iotted: {
      ipa: "i", //"ɪ",
    },
    round: {
      ipa: "oʊ",
    },
    opaque: {
      ipa: "ɜː", //"ɔ",
    },
    idiphthong: {
      ipa: "aɪ",
    },
    udiphthong: {
      ipa: "ɔɪ",
    },
  },
  i: {
    natural: {
      ipa: "aɪ",
    },
    plain: {
      ipa: "ɪ",
    },
    broad: {
      ipa: "iː",
    },
    clear: {
      ipa: "ɐ", //"æ",
    },
    central: {
      ipa: "æ", //"ə", // could be reused - allowing for "æ"
    },
    iotted: {
      ipa: "i",
    },
    round: {
      ipa: "ɜː",
    },
    opaque: {
      ipa: "ɔ",
    },
    idiphthong: {},
    udiphthong: {},
  },
  o: {
    natural: {
      ipa: "əʊ", //"oʊ",
    },
    plain: {
      ipa: "ɒ", //"ɑ",
    },
    broad: {
      ipa: "ɔː",
    },
    clear: {
      ipa: "ʌ", //repeated??
    },
    central: {
      ipa: "ʌ",
    },
    iotted: {
      ipa: "ɪ",
    },
    round: {
      ipa: "uː",
    },
    opaque: {
      ipa: "ʊ",
    },
    idiphthong: {
      ipa: "waɪ",
    },
    udiphthong: {
      ipa: "aʊ",
    },
  },
  u: {
    natural: {
      ipa: "uː",
    },
    plain: {
      ipa: "ʌ",
    },
    broad: {
      ipa: "uː",
    },
    clear: {
      ipa: "ɜː", //RAE addition - 'turkey'
    },
    central: {
      ipa: "ɛ",
    },
    iotted: {
      ipa: "ɪ",
    },
    round: {
      ipa: "oʊ",
    },
    opaque: {
      ipa: "ʊ",
    },
    idiphthong: {
      ipa: "jə",
    },
    udiphthong: {
      ipa: "jʊ",
    },
  },
  y: {
    natural: {
      ipa: "aɪ",
    },
    plain: {
      ipa: "i", //"ɪ", for palyground - very and pretty
    },
    iotted: {
      ipa: "ɪ", //why not?
    },
    broad: {
      ipa: "iː",
    },
  },
  w: {
    natural: {
      ipa: "uː",
    },
    plain: {
      ipa: "ʌ",
    },
    broad: {
      ipa: "uː",
    },
    opaque: {
      ipa: "ʊ",
    },
  },
  aa: {
    stressed: {
      ipa: "ɑː",
    },
    unStressed: {
      ipa: "ɑː",
    },
  },
  ae: {
    stressed: {
      ipa: "iː",
    },
    unStressed: {
      ipa: "iː",
    },
  },
  ee: {
    stressed: {
      ipa: "iː",
    },
    unStressed: {
      ipa: "iː",
    },
  },
  ea: {
    stressed: {
      ipa: "iː",
    },
    unStressed: {
      ipa: "ɪə",
    },
  },
  ai: {
    stressed: {
      ipa: "eɪ",
    },
    unStressed: {
      ipa: "eɪ",
    },
  },
  ay: {
    stressed: {
      ipa: "eɪ",
    },
    unStressed: {
      ipa: "eɪ",
    },
  },
  ei: {
    stressed: {
      ipa: "eɪ",
    },
    unStressed: {
      ipa: "ɪ",
    },
  },
  ey: {
    stressed: {
      ipa: "eɪ",
    },
    unStressed: {
      ipa: "ɪ",
    },
  },
  au: {
    stressed: {
      ipa: "ɔː",
    },
    unStressed: {
      ipa: "ɔː",
    },
  },
  aw: {
    stressed: {
      ipa: "ɔː",
    },
    unStressed: {
      ipa: "ɔː",
    },
  },
  eu: {
    stressed: {
      ipa: "uː",
    },
    unStressed: {
      ipa: "uː",
    },
  },
  ew: {
    stressed: {
      ipa: "uː",
    },
    unStressed: {
      ipa: "uː",
    },
  },
  oa: {
    stressed: {
      ipa: "oʊ",
    },
    unStressed: {
      ipa: "oʊ",
    },
  },
  ow: {
    stressed: {
      ipa: "oʊ",
    },
    unStressed: {
      ipa: "oʊ",
    },
  },
  ou: {
    stressed: {
      ipa: "aʊ",
    },
    unStressed: {
      ipa: "ə",
    },
  },
  oi: {
    stressed: {
      ipa: "ɔɪ",
    },
    unStressed: {
      ipa: "ɔɪ",
    },
  },
  oy: {
    stressed: {
      ipa: "ɔɪ",
    },
    unStressed: {
      ipa: "ɔɪ",
    },
  },
  oo: {
    stressed: {
      ipa: "uː",
    },
    unStressed: {
      ipa: "uː",
    },
  },
};
