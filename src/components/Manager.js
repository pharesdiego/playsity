import React, { Component } from 'react';

// this component helps us manage state
class Manager extends Component {
  state = {
    ...this.props.initialState
  }

  updateState = (prop, value) => {
    this.setState({
      [prop]: value
    })
  }

  render() {
    return this.props.render(this.state, this.updateState);
  }
}

export default Manager;