import React, { Component } from "react";
import ReactDOM from "react-dom";

import Header from "./includes/Header";
import Home from './pages/Home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe"
    };
  }
  clickedBtn = () => {
    console.log("swag");
  };
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
