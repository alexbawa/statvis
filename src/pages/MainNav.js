import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";

class MainNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <HomePage/>
    );
  }
}

export default MainNav;
