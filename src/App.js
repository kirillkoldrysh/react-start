"use strict";

import React, { Component } from "react";
import Table from "./Table";

class App extends Component {
  render() {
    const name = "Jack";
    const heading = <h1 className="site-heading">Hello, React World!</h1>;
    const helloName = <h3 className="other-class">Hello, {name}</h3>;
    const table = (
      <div className="table-container">
        <Table />
      </div>
    );
    const container = (
      <div>
        {heading}
        {helloName}
        {table}
      </div>
    );
    return container;
  }
}

export default App;
