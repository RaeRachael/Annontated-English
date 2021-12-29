import React from "react";
import AnnotationPage from "./AnnotationPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./NavBar";
import AboutPage from "./AboutPage";

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
    // let page;
    // if (this.state.page === "annotation") {
    //   page = <AnnotationPage />;
    // }
    return (
      <Router>
        <div className="App">
          <Navbar></Navbar>
          {/* <NavBar slected="this.state.page" @navigation={this.handlePageChange}></NavBar> */}
          <div className="mainPage">
            <Switch>
              <Route exact path="/" component={AnnotationPage} />
              <Route path="/annotation" component={AnnotationPage} />
              <Route path="/about" component={AboutPage} />
            </Switch>

            {/* <Route path='/events' component={Events} />
        <Route path='/annual' component={AnnualReport} />
        <Route path='/team' component={Teams} />
        <Route path='/blogs' component={Blogs} />
        <Route path='/sign-up' component={SignUp} /> */}
            {/* {page} */}
          </div>
        </div>
      </Router>
    );
  }
}
