import React from "react";
import AnnotationPage from "./AnnotationPage";

// import './App.css';

interface ITestProps {}

interface ITestState {
  page: string;
}

export default class App extends React.Component<ITestProps, ITestState> {
  constructor(props: ITestProps) {
    super(props);

    this.state = {
      page: "annotation",
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }
  // state = {
  //   text: "",
  // };

  handlePageChange(text: string) {
    this.setState({ page: text });
  }

  render() {
    let page;
    if (this.state.page === "annotation") {
      page = <AnnotationPage />;
    }
    return (
      <div className="App">
        {/* <NavBar slected="this.state.page" @navigation={this.handlePageChange}></NavBar> */}
        <div className="mainPage">{page}</div>
      </div>
    );
  }
}
