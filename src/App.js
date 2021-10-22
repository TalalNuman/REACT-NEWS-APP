import React, { Component } from "react";
import Newx from "./components/Newx";
import Navbar from "./components/Navbar";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default class App extends Component {
  state = {
    progress: 0,
  };
  constructor(){
    super();
    this.setProgress =this.setProgress.bind(this)
  }
  setProgress
  setProgress(progress) {
    this.setState({
      progress: progress
    });
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <Switch>
            <Route exact path="/business">
              <Newx
                setProgress={this.setProgress}
                key="business"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <Newx
                setProgress={this.setProgress}
                key="entertainment"
                category="entertainment"
              />
            </Route>
            <Route exact path="/health">
              <Newx
                setProgress={this.setProgress}
                key="health"
                category="health"
              />
            </Route>
            <Route exact path="/sports">
              <Newx
                setProgress={this.setProgress}
                key="sports"
                category="sports"
              />
            </Route>
            <Route exact path="/science">
              <Newx
                setProgress={this.setProgress}
                key="science"
                category="science"
              />
            </Route>
            <Route exact path="/technology">
              <Newx
                setProgress={this.setProgress}
                key="technology"
                category="technology"
              />
            </Route>
            <Route exact path="/">
              <Newx setProgress={this.setProgress} key="" category="general" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
