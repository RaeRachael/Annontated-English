# Annotated English

[Original concept paper](https://arxiv.org/pdf/1012.5962.pdf) - outlines an approach to indicate the 'actual' pronounciation of a word by adding annotations around the letters to indacte how it should be pronounced.

## This Project

### Aims

- Implement a basic annotator (one that doesn't apply rules to reduce the annotations added, like a final 'e' is silent)
- Make the annotator more avalible that the LaTex system in the paper - by using unicode characters for the annotations
- Supply a basic webapp to return annotated strings

### Current State

There is a simple annotator [webapp deployed](https://annotated-english.herokuapp.com/) which only using a single accent, limited ipa pronounciation lookup dictionary and has very limited set of common rules, which would reduce the number of needed annotations.
The output from the webapp should be usable on most text editors (ones that do not like zero width spaces will make the annotated words look a little strange - like vscode), including word and it should be fine to change the font as well (some fonts won't have support for all annotation marks)

### Examples of annotations

#### Vowels

sounds are annotated (when needed) with marks above the letter

(not a full list)

- ã - /eɪ/ - natural
- a̓ - /æ/ - plain

stress is indacted by dashes below the vowel

- e̩̓ - main stress
- o͈̓ - secondary stress

#### Consonants

sounds are annotated (when needed) with marks below the letter

- c̥ - /k/ - common_change
- s̬ - /z/ - voiced
- c̭ - /s/ - voiceless
- g̺ - /ʒ/ - soft_voiced
- c̪ - /ʃ/ - soft_voiceless
- g̺̱ - /dʒ/ - hard_voiced
- c̪̱ - /tʃ/ - hard_voiceless

### Planned Extentions

- Expand the range on accents that the annotator can support
- Add common english rules, that will reduced the annotation marks added - which can switched on and off by the webapp
- Potentially allow options around how the annotations look - supplying them with colours, stress by underlined?
- Expand the webapp - including tables about how letter-annotation combinations should be pronounced
- Set up an API route for annotating text
