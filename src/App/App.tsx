import React from "react";
import Annotated from "./Annotated";
import { annotate } from "../Annotator/annotator";

// import './App.css';

interface ITestProps {}

interface ITestState {
  text: string;
}

export default class App extends React.Component<ITestProps, ITestState> {
  constructor(props: ITestProps) {
    super(props);

    this.state = {
      text: "",
    };

    this.handleAnnotation = this.handleAnnotation.bind(this);
  }
  // state = {
  //   text: "",
  // };

  handleAnnotation(text: string) {
    text = text.trim();
    let words: string[] = text.split(" ");
    console.log(text, words, "input");
    words = words.map((word) => annotate(word));
    console.log(words.join(" "), words, "output");
    this.setState({ text: words.join(" ") });
  }

  render() {
    return (
      <div className="App">
        <form
          // ref={formRef}
          onSubmit={(e: React.SyntheticEvent) => {
            e.preventDefault();
            const target = e.target as typeof e.target & {
              text: { value: string };
            };
            console.log(target);
            this.handleAnnotation(target.text.value);
            // let AEtext = annotate(target.text.value);
            // this.setState({ text: AEtext });
            // console.log(AEtext);
          }}
        >
          <div>
            <label>
              Text:
              <textarea name="text" style={{ width: "80%", height: "20%" }} />
            </label>
          </div>
          <div>
            <input type="submit" value="Annotate" />
          </div>
        </form>

        <Annotated text={this.state.text} />
      </div>
    ); // your code here
  }
}
