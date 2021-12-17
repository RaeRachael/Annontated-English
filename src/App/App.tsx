import React from "react";
import Annotated from "./Annotated";
import { annotate } from "../Annotator/annotator";

// import './App.css';

interface ITestProps {}

interface ITestState {
  text: string;
}

export default class App extends React.Component<ITestProps, ITestState> {
  state = {
    text: "",
  };

  // function handleAnnotation(text: string) {

  // }

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
            let AEtext = annotate(target.text.value);
            this.setState({ text: AEtext });
            console.log(AEtext);
          }}
        >
          <div>
            <label>
              Text:
              <input type="text" name="text" />
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
