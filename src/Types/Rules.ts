export type rules = {
  annotateTwoVowels: boolean;
  silentFinalE: boolean;
  silentFinalEx: boolean;
  naturalFinalO: boolean;
  naturalFinalOx: boolean;
  defaultVowelA: boolean;
  defaultVowelE: boolean;
  defaultVowelYI: boolean;
  defaultVowelO: boolean;
  defaultVowelU: boolean;
  defaultDigraphNG: boolean;
  defaultDigraphGH: boolean;
  defaultDigraphWH: boolean;
  defaultDigraphWR: boolean;
};

export const ruleList = [
  "annotateTwoVowels",
  "silentFinalE",
  "silentFinalEx",
  "naturalFinalO",
  "naturalFinalOx",
  "defaultVowelA",
  "defaultVowelE",
  "defaultVowelYI",
  "defaultVowelO",
  "defaultVowelU",
  "defaultDigraphNG",
  "defaultDigraphGH",
  "defaultDigraphWH",
  "defaultDigraphWR",
];

export const defaultRules: rules = {
  annotateTwoVowels: false,
  silentFinalE: false,
  silentFinalEx: false,
  naturalFinalO: false,
  naturalFinalOx: false,
  defaultVowelA: false,
  defaultVowelE: false,
  defaultVowelYI: false,
  defaultVowelO: false,
  defaultVowelU: false,
  defaultDigraphNG: false,
  defaultDigraphGH: false,
  defaultDigraphWH: false,
  defaultDigraphWR: false,
};

export type processRules = {
  [key: string]: Function;
};
