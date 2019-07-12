"use strict";

import React, { Component } from "react";
import Table from "./Table";

/**
 * Main application class
 * Class component must have a method render() that return just one component
 */
class App extends Component {
  render() {
    const name = "Jack";
    const heading = <h1 className="site-heading">Hello, React World!</h1>;
    const helloName = <h3 className="other-class">Hello, {name}</h3>;
    
    const characters = [
      {
        name: 'Bob',
        job: 'Musiciant'
      },
      {
        name: 'Arthur',
        job: 'King'
      },
      {
        name: 'Sam',
        job: 'Serious'
      },
      {
        name: 'Adele',
        job: 'Singer'
      },
      {
        name: 'Phill',
        job: 'Dude'
      },
    ];
    
    const table = (
      <div className="table-container">
        <Table characterData={characters}/>
      </div>
    );

    // this variable contains all elements
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
