import React from "react";

function IPATablesPage() {
  return (
    <div className="IpaTables">
      <h3> Vowels </h3>
      <h4>Single Vowels</h4>
      <table style={{ textAlign: "center", width: "70%" }}>
        <tr>
          <td>letter </td>
          <td>nautural</td>
          <td>plain </td>
          <td>broad </td>
          <td>clear </td>
          <td>central </td>
          <td>iotted </td>
          <td>round </td>
          <td>opaque </td>
          <td>idiphthong </td>
          <td>udiphthong </td>
        </tr>
        <tr>
          <td>a</td>
          <td>{"a\u0303"} - /eɪ/</td>
          <td>{"a\u0313"} - /æ/</td>
          <td>{"a\u0304"} - /ɑː/</td>
          <td>{"a\u0302"} - /ʌ/</td>
          <td>{"a\u0308"} - /ɛ/</td>
          <td>{"a\u0307"} - /ɪ/</td>
          <td>{"a\u030a"} - /ɔː/</td>
          <td>{"a\u030c"} - /ɒ/</td>
          <td>{"a\u0300"} - /ɪ/</td>
          <td>{"a\u0301"} - /aʊ/</td>
        </tr>
        <tr>
          <td>e</td>
          <td>{"e\u0303"} - /iː/</td>
          <td>{"e\u0313"} - /ɛ/</td>
          <td>{"e\u0304"} - /eɪ/</td>
          <td>{"e\u0302"} - /æ/</td>
          <td>{"e\u0308"} - /ɪ/</td>
          <td>{"e\u0307"} - /i/</td>
          <td>{"e\u030a"} - /oʊ/</td>
          <td>{"e\u030c"} - /ɜː/</td>
          <td>{"e\u0300"} - /aɪ/</td>
          <td>{"e\u0301"} - /ɔɪ/</td>
        </tr>
        <tr>
          <td>i</td>
          <td>{"i\u0303"} - /aɪ/</td>
          <td>{"i\u0313"} - /ɪ/</td>
          <td>{"i\u0304"} - /iː/</td>
          <td>{"i\u0302"} - /ɐ/</td>
          <td>{"i\u0308"} - /æ/</td>
          <td>{"i\u0307"} - /i/</td>
          <td>{"i\u030a"} - /ɜː/</td>
          <td>{"i\u030c"} - /ɔ/</td>
          <td>Not Used</td>
          <td>Not Used</td>
        </tr>
        <tr>
          <td>o</td>
          <td>{"o\u0303"} - /əʊ/</td>
          <td>{"o\u0313"} - /ɒ/</td>
          <td>{"o\u0304"} - /ɔː/</td>
          <td>{"o\u0302"} - /ʌ/</td>
          <td>{"o\u0308"} - /ʌ/</td>
          <td>{"o\u0307"} - /ɪ/</td>
          <td>{"o\u030a"} - /uː/</td>
          <td>{"o\u030c"} - /ʊ/</td>
          <td>{"o\u0300"} - /waɪ/</td>
          <td>{"o\u0301"} - /aʊ/</td>
        </tr>
        <tr>
          <td>u</td>
          <td>{"u\u0303"} - /uː/</td>
          <td>{"u\u0313"} - /ʌ/</td>
          <td>{"u\u0304"} - /uː/</td>
          <td>{"u\u0302"} - /ɜː/</td>
          <td>{"u\u0308"} - /ɛ/</td>
          <td>{"u\u0307"} - /ɪ/</td>
          <td>{"u\u030a"} - /oʊ/</td>
          <td>{"u\u030c"} - /ʊ/</td>
          <td>{"u\u0300"} - /jə/</td>
          <td>{"u\u0301"} - /jʊ/</td>
        </tr>
        <tr>
          <td>y</td>
          <td>{"y\u0303"} - /aɪ/</td>
          <td>{"y\u0313"} - /i/</td>
          <td>{"y\u0304"} - /iː/</td>
          <td>Not Used</td>
          <td>Not Used</td>
          <td>{"y\u0307"} - /ɪ/</td>
          <td>Not Used</td>
          <td>Not Used</td>
          <td>Not Used</td>
          <td>Not Used</td>
        </tr>
        <tr>
          <td>w</td>
          <td>{"w\u0303"} - /uː/</td>
          <td>{"w\u0313"} - /ʌ/</td>
          <td>{"w\u0304"} - /uː/</td>
          <td>Not Used</td>
          <td>Not Used</td>
          <td>Not Used</td>
          <td>Not Used</td>
          <td>{"w\u030c"} - /ʊ/</td>
          <td>Not Used</td>
          <td>Not Used</td>
        </tr>
      </table>
      <h4> Digraph Vowels </h4>
      <table>
        <tr>
          <td> letters </td>
          <td> stressed </td>
          <td> unstressed </td>
        </tr>
        <tr>
          <td> aa </td>
          <td> /ɑː/ </td>
          <td> /ɑː/ </td>
        </tr>
        <tr>
          <td> ae </td>
          <td> /iː/ </td>
          <td> /iː/ </td>
        </tr>
        <tr>
          <td> ai </td>
          <td> /eɪ/ </td>
          <td> /eɪ/ </td>
        </tr>
        <tr>
          <td> au </td>
          <td> /ɔː/ </td>
          <td> /ɔː/ </td>
        </tr>
        <tr>
          <td> aw </td>
          <td> /ɔː/ </td>
          <td> /ɔː/ </td>
        </tr>
        <tr>
          <td> ay </td>
          <td> /eɪ/ </td>
          <td> /eɪ/ </td>
        </tr>
        <tr>
          <td> ea </td>
          <td> /iː/ </td>
          <td> /ɪə/ </td>
        </tr>
        <tr>
          <td> ee </td>
          <td> /iː/ </td>
          <td> /iː/ </td>
        </tr>
        <tr>
          <td> ei </td>
          <td> /eɪ/ </td>
          <td> /ɪ/ </td>
        </tr>
        <tr>
          <td> eu </td>
          <td> /uː/ </td>
          <td> /uː/ </td>
        </tr>
        <tr>
          <td> ew </td>
          <td> /uː/ </td>
          <td> /uː/ </td>
        </tr>
        <tr>
          <td> ey </td>
          <td> /eɪ/ </td>
          <td> /ɪ/ </td>
        </tr>
        <tr>
          <td> oa </td>
          <td> /oʊ/ </td>
          <td> /oʊ/ </td>
        </tr>
        <tr>
          <td> oi </td>
          <td> /ɔɪ/ </td>
          <td> /ɔɪ/ </td>
        </tr>
        <tr>
          <td> oo </td>
          <td> /uː/ </td>
          <td> /uː/ </td>
        </tr>
        <tr>
          <td> ou </td>
          <td> /aʊ/ </td>
          <td> /ə/ </td>
        </tr>
        <tr>
          <td> oy </td>
          <td> /ɔɪ/ </td>
          <td> /ɔɪ/ </td>
        </tr>
        <tr>
          <td> ow </td>
          <td> /oʊ/ </td>
          <td> /oʊ/ </td>
        </tr>
      </table>
    </div>
  );
}

export default IPATablesPage;
