import React, { Component } from 'react';

class Inputs extends Component {

  state = {
    ...this.props.hydrate
  }

  onInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    console.log(this.state, this.props)
    return this.props.render(this.state, this.onInput);
  }
};

const Mock = (props) => {
  return <input
          onInput={(e) => props.onInput(e)}
          name='diego'
          defaultValue={props.diego}/>
}

const MockWithInputs = (props) => {
  return (
    <Inputs hydrate={{diego:'hola chavales'}} render={(state, onInput) => (
      <Mock {...state} onInput={onInput} />
    )}/>
  )
}

export default MockWithInputs;