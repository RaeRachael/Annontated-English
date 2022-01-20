import React from "react";
import AnnotatedText from "../components/AnnotatedText";
import { annotate } from "../../Annotator/annotator";
import { rules, defaultRules } from "../../Types/Rules";
import SwitchInput from "../components/switchInput";

// import './App.css';

interface ITestProps {}

interface ITestState {
  text: string;
  rules: rules;
  defaultVowels: boolean;
}

export default class AnnotationPage extends React.Component<
  ITestProps,
  ITestState
> {
  constructor(props: ITestProps) {
    super(props);

    this.state = {
      text: "",
      rules: defaultRules,
      defaultVowels: false,
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
              onChange={(newValue: boolean) => {
                let rulesToSet: rules = this.state.rules;
                rulesToSet.annotateTwoVowels = newValue;

                this.setState({
                  rules: rulesToSet,
                });
              }}
            ></SwitchInput>
            <SwitchInput
              label="default silent final 'e': "
              checked={this.state.rules.silentFinalE}
              onChange={(newValue: boolean) => {
                let rulesToSet: rules = this.state.rules;
                rulesToSet.silentFinalE = newValue;

                this.setState({
                  rules: rulesToSet,
                });
              }}
            ></SwitchInput>
            <SwitchInput
              label="default silent final 'e(d/s)': "
              checked={this.state.rules.silentFinalEx}
              onChange={(newValue: boolean) => {
                let rulesToSet: rules = this.state.rules;
                rulesToSet.silentFinalEx = newValue;
                rulesToSet.silentFinalE = newValue
                  ? true
                  : this.state.rules.silentFinalE;

                this.setState({
                  rules: rulesToSet,
                });
              }}
            ></SwitchInput>
            <SwitchInput
              label="default natural final 'o': "
              checked={this.state.rules.naturalFinalO}
              onChange={(newValue: boolean) => {
                let rulesToSet: rules = this.state.rules;
                rulesToSet.naturalFinalO = newValue;

                this.setState({
                  rules: rulesToSet,
                });
              }}
            ></SwitchInput>
            <SwitchInput
              label="default natural final 'o(s/es)': "
              checked={this.state.rules.naturalFinalOx}
              onChange={(newValue: boolean) => {
                let rulesToSet: rules = this.state.rules;
                rulesToSet.naturalFinalOx = newValue;
                rulesToSet.naturalFinalO = newValue
                  ? true
                  : this.state.rules.naturalFinalO;

                this.setState({
                  rules: rulesToSet,
                });
              }}
            ></SwitchInput>
            <SwitchInput
              label="default vowels: "
              checked={this.state.defaultVowels}
              onChange={(newValue: boolean) => {
                let rulesToSet: rules = this.state.rules;
                rulesToSet.defaultVowelA = newValue;
                rulesToSet.defaultVowelE = newValue;
                rulesToSet.defaultVowelYI = newValue;
                rulesToSet.defaultVowelO = newValue;
                rulesToSet.defaultVowelU = newValue;

                this.setState({
                  rules: rulesToSet,
                });
                this.setState({
                  defaultVowels: newValue,
                });
              }}
            ></SwitchInput>
            <SwitchInput
              label="default schwa 'a': "
              checked={this.state.rules.defaultVowelA}
              onChange={(newValue: boolean) => {
                let rulesToSet: rules = this.state.rules;
                rulesToSet.defaultVowelA = newValue;
                this.setState({
                  rules: rulesToSet,
                });
                this.setState({
                  defaultVowels: false,
                });
              }}
            ></SwitchInput>
            <SwitchInput
              label="default schwa 'e': "
              checked={this.state.rules.defaultVowelE}
              onChange={(newValue: boolean) => {
                let rulesToSet: rules = this.state.rules;
                rulesToSet.defaultVowelE = newValue;
                this.setState({
                  rules: rulesToSet,
                });
                this.setState({
                  defaultVowels: false,
                });
              }}
            ></SwitchInput>
            <SwitchInput
              label="default plain 'i/y': "
              checked={this.state.rules.defaultVowelYI}
              onChange={(newValue: boolean) => {
                let rulesToSet: rules = this.state.rules;
                rulesToSet.defaultVowelYI = newValue;
                this.setState({
                  rules: rulesToSet,
                });
                this.setState({
                  defaultVowels: false,
                });
              }}
            ></SwitchInput>
            <SwitchInput
              label="default schwa 'o': "
              checked={this.state.rules.defaultVowelO}
              onChange={(newValue: boolean) => {
                let rulesToSet: rules = this.state.rules;
                rulesToSet.defaultVowelO = newValue;
                this.setState({
                  rules: rulesToSet,
                });
                this.setState({
                  defaultVowels: false,
                });
              }}
            ></SwitchInput>
            <SwitchInput
              label="default schwa 'u': "
              checked={this.state.rules.defaultVowelU}
              onChange={(newValue: boolean) => {
                let rulesToSet: rules = this.state.rules;
                rulesToSet.defaultVowelU = newValue;
                this.setState({
                  rules: rulesToSet,
                });
                this.setState({
                  defaultVowels: false,
                });
              }}
            ></SwitchInput>
            <SwitchInput
              label="default 'ng' as common 'n': "
              checked={this.state.rules.defaultDigraphNG}
              onChange={(newValue: boolean) => {
                let rulesToSet: rules = this.state.rules;
                rulesToSet.defaultDigraphNG = newValue;
                this.setState({
                  rules: rulesToSet,
                });
              }}
            ></SwitchInput>
            <SwitchInput
              label="default 'gh' as silent: "
              checked={this.state.rules.defaultDigraphGH}
              onChange={(newValue: boolean) => {
                let rulesToSet: rules = this.state.rules;
                rulesToSet.defaultDigraphGH = newValue;
                this.setState({
                  rules: rulesToSet,
                });
              }}
            ></SwitchInput>
            <SwitchInput
              label="default 'wh' as 'w':"
              checked={this.state.rules.defaultDigraphWH}
              onChange={(newValue: boolean) => {
                let rulesToSet: rules = this.state.rules;
                rulesToSet.defaultDigraphWH = newValue;
                this.setState({
                  rules: rulesToSet,
                });
              }}
            ></SwitchInput>
            <SwitchInput
              label="default 'wr' as 'r':"
              checked={this.state.rules.defaultDigraphWR}
              onChange={(newValue: boolean) => {
                let rulesToSet: rules = this.state.rules;
                rulesToSet.defaultDigraphWR = newValue;
                this.setState({
                  rules: rulesToSet,
                });
              }}
            ></SwitchInput>
            <SwitchInput
              label="default 'qu[vowel]' as 'kw[vowel]':"
              checked={this.state.rules.defaultDigraphQU}
              onChange={(newValue: boolean) => {
                let rulesToSet: rules = this.state.rules;
                rulesToSet.defaultDigraphQU = newValue;
                this.setState({
                  rules: rulesToSet,
                });
              }}
            ></SwitchInput>
            <SwitchInput
              label="default 'gu[vowel]' as 'gw[vowel] / g[vowel]':"
              checked={this.state.rules.defaultDigraphGU}
              onChange={(newValue: boolean) => {
                let rulesToSet: rules = this.state.rules;
                rulesToSet.defaultDigraphGU = newValue;
                this.setState({
                  rules: rulesToSet,
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
