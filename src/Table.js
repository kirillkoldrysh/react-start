"use strict";

import React, { Component } from "react";

// simple components
// in React simple component is a function
const TableHeader = () => {
  // return() can return only one parent component
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Hobby</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};

// we are using ES6 arrow functions for create these components
const TableBody = props => {
  // incapsulate code for displaying table data
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>       
        <td>{row.job}</td>
        <td>
          {row.hobby.map((element, index) => {
            return (
              <table key={index}>
                <tbody>
                  <tr>
                    <td>{element}</td>
                  </tr>
                </tbody>
              </table>
            );
          })}
        </td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  // if the return has just one line - it doesn't need parentheses
  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    // props is a good way to pass data to React components
    // but they are read-only
    const { characterData, removeCharacter } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
    );
  }
}

export default Table;
