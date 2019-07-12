import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: "",
      job: "",
      hobby: ""
    };

    this.state = this.initialState;
  }

  render() {
    const { name, job, hobby } = this.state;

    return (
      <form>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <label>Job</label>
        <input
          type="text"
          name="job"
          value={job}
          onChange={this.handleChange}
        />
        <label>Hobby</label>
        <input
          type="text"
          name="hobby"
          value={hobby}
          onChange={this.handleChange}
        />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }

  // form changing handler
  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  // this method calls handleSubmit function
  // and return form to initial state
  submitForm = () => {
      this.props.handleSubmit(this.state);
      this.setState(this.initialState);
  }

  
}

export default Form;
