import React, { Component, Fragment } from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { boundedPlaylistClipCreate, boundedPlaylistClipEdit } from './../redux/boundedActions';
import getClipById from './../utils/getClipById';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.70);
`;

const Section = styled.div`
  flex: 0.7;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const Title = styled.div`
  font-size: 3vh;
  text-align: center;
`;

const Input = styled.input`
  height: 45px;
  border: 1px solid;
`;

const Label = styled.div`
  display: flex;
  margin-bottom: 10px;
  & span {
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
  & input {
    width: calc(100% - 80px);
    border: 0px;
    border-bottom: 2px solid;
  }
`;

const MaxWidth = styled.div`
  width: 100%;
  max-width: 500px;
  flex: 1;
  display: flex;
  flex-direction: column;
  & > * {
    flex: 1;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  & button:first-child {
    margin-right: 20px;
    color: red;
  }
  & button {
    padding: 5px 10px;
    box-shadow: 0px 0px 3px gray;
  }
`;
// this component can be reused here and in the other search-filter
// it just need to handle the inputs, so div {props.render(value)}
// the state will be ...this.props and the inputs need to have a name equal to the props, and thats it!
class InputsManager  extends Component {
  state = {
    name: this.props.name || '',
    start: this.props.start  || '',
    end: this.props.end || '',
    tags: this.props.tags || ''
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  render() {
    const { name, start, end, tags } = this.state;
    return (
      <MaxWidth onInput={ this.handleInput }>
        <Title>
          { this.props.editing ? 'Edit clip' : 'Add a new clip' }
        </Title>
        <Label>
          <span>Name</span>
          <Input
            defaultValue={ name }
            name = 'name'/>
        </Label>
        <Label>
          <span>Start time</span>
          <Input
            defaultValue={ start }
            name='start'
            placeholder='in seconds'
            maxLength='2'/>
        </Label>
        <Label>
          <span>End time</span>
          <Input
            defaultValue={ end }
            name='end'
            placeholder='in seconds'
            maxLength='2'/>
        </Label>
        <Label>
          <span>Tags</span>
          <Input
            defaultValue={ tags }
            name='tags'
            placeholder='separeted by commas'/>
        </Label>
        <Buttons>
          <Route render={({ history }) => (
            <Fragment>
              <button onClick={() => history.push('/')}>
                Cancel
              </button>
              { 
                this.props.editing
                ? <button
                    onClick={() => {
                      boundedPlaylistClipEdit({id: this.props.id, ...this.state})
                      history.push('/');
                    }}>
                    Save
                  </button>
                : <button
                    onClick={() => {
                      boundedPlaylistClipCreate(this.state)
                      history.push('/');
                    }}>
                    Create
                  </button>
              }
            </Fragment>
          )}/>
        </Buttons>
      </MaxWidth>
    )
  }
}
// this component needs to be stateless
class Actuator extends Component {

  render() {
    const path = this.props.match.params[0];
    const id = this.props.match.params.id;
    const editing = (path === 'edit' && id !== undefined);
    const adding = path === 'add';

    // if the path is indication that it is neither editing nor adding, then return null because path is wrong
    if(!editing && !adding) {
      return null;
    }

    // this doesn't assume there is an actual Id or that we are on /edit,
    // if the id is undefined it will just return an empty object
    const clipProperties = getClipById(this.props.playlist, id);

    return (
      <Container>
        <Link to='/' style={{ flex: '1' }}/>
        <Section>
          <InputsManager editing={editing} {...clipProperties}/>
        </Section>
      </Container>
    )
  }
}

const mapStateToProps = ({ playlist }) => ({
  playlist
});

export default connect(mapStateToProps)(Actuator);
export { Actuator }; 