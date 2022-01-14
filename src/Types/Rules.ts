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
};

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
};
