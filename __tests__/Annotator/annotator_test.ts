import { annotate } from "../../src/Annotator/annotator";

describe("annotate - adds annotiona to get IPA", () => {
  test("ant", () => {
    let testWord: string = "ant";
    let expectedAE: string = "a̩̓nt";

    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("be", () => {
    let testWord: string = "be";
    let expectedAE: string = "bẽ̩";

    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("the", () => {
    let testWord: string = "the";
    let expectedAE: string = "t\u200bhẻ̩";

    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("was", () => {
    let testWord: string = "was";
    let expectedAE: string = "wǎ̩s̬";

    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("twelve", () => {
    let testWord: string = "twelve";
    let expectedAE: string = "twe̩̓lve͓";

    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("invasion", () => {
    let testWord: string = "invasion";
    let expectedAE: string = "i̓nvã̩s̺ỉo͓n";

    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("pterodactyl", () => {
    let testWord: string = "pterodactyl";
    let expectedAE: string = "p\u200bte̩̓rỏda͈̓ctỹl";

    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("helicopter", () => {
    let testWord: string = "helicopter";
    let expectedAE: string = "he̩̓li̓co͈̓p​̝tẻr͓";

    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("draught", () => {
    let testWord: string = "draught";
    let expectedAE: string = "drā̩u͓g​̥ht";

    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("awry", () => {
    let testWord: string = "awry";
    let expectedAE: string = "ảw͓rỹ̩";

    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("cute", () => {
    let testWord: string = "cute";
    let expectedAE: string = "c​̼ũ̩te͓";

    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("penguin", () => {
    let testWord: string = "penguin";
    let expectedAE: string = "pe̩̓n̥gu̫i̓n";

    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("one", () => {
    let testWord: string = "one";
    let expectedAE: string = "​̫o̩̓ne͓";

    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("onion", () => {
    let testWord: string = "onion";
    let expectedAE: string = "ô̩ni̼ỏn";

    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("exploitation", () => {
    let testWord: string = "exploitation";
    let expectedAE: string = "e̓xplo\u200bitã̩t̺ỉo͓n";

    expect(annotate(testWord)).toEqual(expectedAE);
  });

  test("constituent", () => {
    let testWord: string = "constituent";
    let expectedAE: string = "cỏnsti̩̓t​̼ũẻnt";

    expect(annotate(testWord)).toEqual(expectedAE);
  });
});
