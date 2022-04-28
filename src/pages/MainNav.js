import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

class MainNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    <BrowserRouter>
      <Route exact path="/" render={(p) => {
        window.scroll(0,0);
        
      }}/>
    </BrowserRouter>
  }
}

export default MainNav;
