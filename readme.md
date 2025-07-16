# Annotated English

[Original concept paper](https://arxiv.org/pdf/1012.5962.pdf) - outlines an approach to indicate the 'actual' pronounciation of a word by adding annotations around the letters to indacte how it should be pronounced.

## This Project

### Aims

- Implement a basic annotator (one that doesn't apply rules to reduce the annotations added, like a final 'e' is silent)
- Make the annotator more avalible that the LaTex system in the paper - by using unicode characters for the annotations
- Supply a basic webapp to return annotated strings

### Current State

There is a simple annotator [webapp deployed](https://annotated-english.surge.sh/) which only using a single accent, limited ipa pronounciation lookup dictionary and has very limited set of common rules, which would reduce the number of needed annotations.
The output from the webapp should be usable on most text editors (ones that do not like zero width spaces will make the annotated words look a little strange - like vscode), including word and it should be fine to change the font as well (some fonts won't have support for all annotation marks)

### Examples of annotations

#### Vowels

sounds are annotated (when needed) with marks above the letter

| Annotation Type | Example Annotation | IPA Pronunciation | Description (not perfect but useful) |
|-----------------|--------------------|-------------------|-------------------|
| Natural         | ã                | /eɪ/              | Most common pronunciation for the vowel. |
| Plain           | a̓                | /æ/               | Second most common pronunciation. |
| Broad           | ā                | /ɑː/              | elongated vowel sound ish |
| Clear           | â                | /ʌ/               |
| Central         | ä                | /ɛ/               | central vowel sound ish |
| Iotted          | ȧ                | /ɪ/               | Moved towards /ɪ/ |
| Round           | å                | /ɔː/              | Rounded vowel sound. |
| Opaque          | ǎ                | /ɒ/               |
| Idiphthong      | à                | /aɪ/              | A diphthongending ending a ɪ. |
| Udiphthong      | á                | /aʊ/              | A diphthongending ending a ʊ. |
| Schwa           | ə̇                | /ə/               | Fixed - this annotation is always /ə/ |

#### Stress

| Annotation Type | Example Annotation | IPA Pronunciation | Description (not perfect but useful) |
| Stressed        | e̩̓              | /iː/              | Indicates primary stress on the vowel. |
| Unstressed      | e̩̓              | /ɪə/              | Indicates secondary or reduced stress. |

#### Consonants

sounds are annotated (when needed) with marks below the letter

| Annotation | IPA Pronunciation | Description       |
|------------|-------------------|-------------------|
| c̥         | /k/               | Common change     |
| s̬         | /z/               | Voiced            |
| c̭         | /s/               | Voiceless         |
| g̺         | /ʒ/               | Soft voiced       |
| c̪         | /ʃ/               | Soft voiceless    |
| g̺̱        | /dʒ/              | Hard voiced       |
| c̪̱        | /tʃ/              | Hard voiceless    |

### Planned Extentions

- Expand the range on accents that the annotator can support
- Add common english rules, that will reduced the annotation marks added - which can switched on and off by the webapp
- Potentially allow options around how the annotations look - supplying them with colours, stress by underlined?
- Expand the webapp - including tables about how letter-annotation combinations should be pronounced
- Set up an API route for annotating text
