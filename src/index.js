import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
// import * as serviceWorker from './serviceWorker';

class App extends Component {
  render() {
      const heading = <h1 className="site-heading">Hello, React World!</h1>
    return (
      heading
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
