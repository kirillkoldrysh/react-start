import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
// import * as serviceWorker from './serviceWorker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React World!</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
