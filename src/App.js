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

    // State using for any data that should be saved and modified
    // without necessarily being added to a DB
    // this.state.characters - to retrieve the state
    // this.setState() - to update
    this.state = {
      characters: [
        {
          name: "Bob",
          job: "Musiciant",
          hobby: ["Tennis", "Girls"]
        },
        {
          name: "Arthur",
          job: "King",
          hobby: ["Volleyball"]
        },
        {
          name: "Sam",
          job: "Serious",
          hobby: ["Videogames", "Cooking", "Boxing"]
        },
        {
          name: "Adele",
          job: "Singer",
          hobby: ["Photography", "Learning"]
        },
        {
          name: "Phill",
          job: "Dude",
          hobby: ["Movies", "Good books"]
        }
      ],
    }

    const characters = this.state.characters;

    const table = (
      <div className="table-container">
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
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

  // function for remove character from state.characters
  // you must use setState to update array
  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  };
}

export default App;
