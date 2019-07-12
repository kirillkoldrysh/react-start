import React, { Component } from "react";
import Table from "./Table";

/**
 * Main application class
 * Class component must have a method render() that return just one component
 */
class App extends Component {
  // State using for any data that should be saved and modified
  // without necessarily being added to a DB
  // this.state.characters - to retrieve the state
  // this.setState() - to update
  state = {
    characters: [],
  };
  // function for remove character from state.characters
  // you must use setState to update array
  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        console.log(character);
        return i !== index;
      })
    });
  };

  render() {
    const name = "Jack";
    const heading = <h1 className="site-heading">Hello, React World!</h1>;
    const helloName = <h3 className="other-class">Hello, {name}</h3>;
    // passes to table like a prop
    const { characters } = this.state;

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
}

export default App;
