export type AnnotatedLetter = { 
  plainText: string,
  annotations: annotation[],
  annotatedString: string,
  ipa: string,
  digraph: boolean,
  groupType: groupType
}

// export type groupLevel = "undetermined" | "single" | "group" | "digraph"

export type groupType = "undetermined" | "vowel" | "consonant"

export type annotation = 
  "digraph" |
  "silent" |
  "main_stress" |
  "secondary_stress" |
  "simple_seperator" |
  "left_seperator" |
  "right_seperator" |
  "both_seperator" |
  "schwa" |
  "natural" |
  "plain" |
  "broad" |
  "clear" |
  "central" |
  "iotted" |
  "round" |
  "opaque" |
  "idiphthong" |
  "udiphthong" |
  "w_semiconsonant" |
  "y_semiconsonant" |
  "common_change" |
  "voiced" |
  "voiceless" |
  "soft_voiced" |
  "soft_voiceless" |
  "hard_voiced" |
  "hard_voiceless"