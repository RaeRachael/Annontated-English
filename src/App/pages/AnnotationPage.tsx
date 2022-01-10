import React from "react";
import AnnotatedText from "../components/AnnotatedText";
import { annotate } from "../../Annotator/annotator";
import { rules } from "../../Types/Rules";
import SwitchInput from "../components/switchInput";

// import './App.css';

interface ITestProps {}

interface ITestState {
  text: string;
  rules: rules;
}

export default class AnnotationPage extends React.Component<
  ITestProps,
  ITestState
> {
  constructor(props: ITestProps) {
    super(props);

    this.state = {
      text: "",
      rules: {
        annotateTwoVowels: false,
        silentFinalE: false,
        silentFinalEx: false,
        naturalFinalO: false,
        naturalFinalOx: false,
      },
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
    words = words.map((word) => annotate(word, this.state.rules));
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
          <div className="RulesArea">
            Rules
            <SwitchInput
              label="combine vowels when possible: "
              checked={this.state.rules.annotateTwoVowels}
              onChange={(newValue: boolean) =>
                this.setState({
                  rules: {
                    annotateTwoVowels: newValue,
                    silentFinalE: this.state.rules.silentFinalE,
                    silentFinalEx: this.state.rules.silentFinalEx,
                    naturalFinalO: this.state.rules.naturalFinalO,
                    naturalFinalOx: this.state.rules.naturalFinalOx,
                  },
                })
              }
            ></SwitchInput>
            <SwitchInput
              label="default silent final 'e': "
              checked={this.state.rules.silentFinalE}
              onChange={(newValue: boolean) =>
                this.setState({
                  rules: {
                    annotateTwoVowels: this.state.rules.annotateTwoVowels,
                    silentFinalE: newValue,
                    silentFinalEx: this.state.rules.silentFinalEx,
                    naturalFinalO: this.state.rules.naturalFinalO,
                    naturalFinalOx: this.state.rules.naturalFinalOx,
                  },
                })
              }
            ></SwitchInput>
            <SwitchInput
              label="default silent final 'e(d/s)': "
              checked={this.state.rules.silentFinalEx}
              onChange={(newValue: boolean) => {
                this.setState({
                  rules: {
                    annotateTwoVowels: this.state.rules.annotateTwoVowels,
                    silentFinalE: newValue
                      ? true
                      : this.state.rules.silentFinalE,
                    silentFinalEx: newValue,
                    naturalFinalO: this.state.rules.naturalFinalO,
                    naturalFinalOx: this.state.rules.naturalFinalOx,
                  },
                });
              }}
            ></SwitchInput>
            <SwitchInput
              label="default natural final 'o': "
              checked={this.state.rules.naturalFinalO}
              onChange={(newValue: boolean) =>
                this.setState({
                  rules: {
                    annotateTwoVowels: this.state.rules.annotateTwoVowels,
                    silentFinalE: this.state.rules.silentFinalE,
                    silentFinalEx: this.state.rules.silentFinalEx,
                    naturalFinalO: newValue,
                    naturalFinalOx: this.state.rules.naturalFinalOx,
                  },
                })
              }
            ></SwitchInput>
            <SwitchInput
              label="default natural final 'o(s/es)': "
              checked={this.state.rules.naturalFinalOx}
              onChange={(newValue: boolean) => {
                this.setState({
                  rules: {
                    annotateTwoVowels: this.state.rules.annotateTwoVowels,
                    silentFinalE: this.state.rules.silentFinalE,
                    silentFinalEx: this.state.rules.silentFinalEx,
                    naturalFinalO: newValue
                      ? true
                      : this.state.rules.naturalFinalO,
                    naturalFinalOx: newValue,
                  },
                });
              }}
            ></SwitchInput>
          </div>
          <div>
            <input type="submit" value="Annotate" />
          </div>
        </form>

        <AnnotatedText text={this.state.text} />
      </div>
    );
  }
}
