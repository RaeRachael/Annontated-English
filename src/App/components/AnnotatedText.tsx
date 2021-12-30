import React from "react";

function AnnotatedText(props: { text: string }) {
  return (
    <div className="Annotated">
      <div style={{ fontSize: "30px", fontFamily: "sans-serif" }}>
        {props.text}
      </div>
    </div>
  );
}

export default AnnotatedText;
