"use strict";

import React, { Component } from 'react';

class App extends Component {
  render() {
    const name = "Jack";
    const heading = <h1 className="site-heading">Hello, React World!</h1>;
    const helloName = <h3 className="other-class">Hello, {name}</h3>;
    const container = <div>{heading}{helloName}</div>
    return (
      container
    );
  }
}

export default App;
