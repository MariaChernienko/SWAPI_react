import React, { Component } from "react";
import "./App.scss";

import Menu from "./components/Menu";
import Main from "./components/Main";
// import Menu from "./components/Menu";

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Main />
      </div>
    );
  }
}

export default App;
