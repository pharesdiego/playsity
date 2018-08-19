import React, { Component } from 'react';

// this component helps us handle inputs states
class Manager extends Component {
  state = {
    ...this.props.hydrate
  }

  onInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return this.props.render(this.state, this.onInput);
  }
}

export default Manager;