import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar";
import AnnotationPage from "./pages/AnnotationPage";
import AboutPage from "./pages/AboutPage";
import IPATablesPage from "./pages/IPATablesPage";

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

  handlePageChange(text: string) {
    this.setState({ page: text });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <div className="mainPage">
            <Switch>
              <Route exact path="/" component={AnnotationPage} />
              <Route path="/annotation" component={AnnotationPage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/ipaTables" component={IPATablesPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
