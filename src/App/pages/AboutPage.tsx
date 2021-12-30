import React from "react";

function AboutPage() {
  return (
    <div className="About">
      <h1> About Annotated English </h1>
      <p>
        Annotated English is a concept that pronounciation of english words can
        be made clear, without changing the spelling, but adding annotations to
        the word.
        <br />
        The details of the concept are more fully expanded in this paper,
        <a href="https://arxiv.org/abs/1012.5962">orginal paper</a>. There
        needed to be a few changes frm that paper to make the output in unicode
        rather than in LaTex.
        <br />
        The current annotator found here is a very basic one. Without rules that
        will reduce the number of annotatotions needed, a limited ipa dictionary
        and only supports one accent of English, RP.
      </p>
    </div>
  );
}

export default AboutPage;
