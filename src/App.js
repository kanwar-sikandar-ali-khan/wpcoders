import React, { Component } from "react";
import "./App.css";
import Practice from "./components/practice";
import Routercomp from "./config/router";
import { ToolbarComp } from "./components/Toolbar";
import NewToolbar from "./components/newToolbar";
import Wpcoders from "./components/wpcoders.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wpcoders />
        {/* <Practice /> */}
        {/* <ToolbarComp/>
        <NewToolbar/> */}

        {/* <Routercomp/> */}
      </div>
    );
  }
}

export default App;
