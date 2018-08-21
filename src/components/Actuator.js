import React, { Fragment } from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Manager from './Manager';
import getClipById from './../utils/getClipById';
import { Flex } from './Styles';
import Button from './Button';
import { withRouter } from 'react-router-dom';
import {
  boundedPlaylistClipCreate as clipCreate, 
  boundedPlaylistClipEdit as clipEdit,
  boundedVideoUrlUpdate as urlUpdate
} from './../redux/boundedActions';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background: linear-gradient(transparent, black);
`;

const Section = Flex.extend`
  flex-direction: column;
  padding: 10px 20px;
  background-color: white;
`;

const Title = styled.div`
  font-size: calc(3vh + 8px);
  text-align: center;
`;

const Label = styled.div`
  display: flex;
  margin-bottom: 10px;
  max-height: 42.5px;
  min-height: 36px;
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

const StyleButtons = Flex.extend`
  margin-top: 10px;
  & button:first-child {
    margin-right: 20px;
  }
  & button:last-child {
    color: white;
    background: linear-gradient(45deg, #681484, #ff7a7a);
  }
`;

/** 
 * @description This component represent the buttons for creating or saving changes in a Clip component
 */
const Buttons = (props) => {
  let { onSave, onCreate, goHome, ...inputsState } = props;
  return (
    <Route render={({ history }) => (
      <StyleButtons>
        <Button onClick={goHome}> Cancel </Button>
        { 
          props.editing
          ? <Button onClick={() => onSave(inputsState)}>Save</Button>
          : <Button onClick={() => onCreate(inputsState)}>Create</Button>
        }
      </StyleButtons>
    )}/>
  )
}

/**
 * @description These are four input that are displayed for editing or create a Clip component
 * @example
 * name   ____
 * start  ____
 * end    ____
 * tags   ____
 */
const Body = (props) => {
  const { name, start, end, tags, updateState } = props;
  return (
    <MaxWidth onInput={ (e) => updateState(e.target.name, e.target.value) }>
      <Label>
        <span>Name</span>
        <input
          defaultValue={ name }
          name = 'name'/>
      </Label>
      <Label>
        <span>Start time</span>
        <input
          defaultValue={ start }
          name='start'
          placeholder='in seconds'/>
      </Label>
      <Label>
        <span>End time</span>
        <input
          defaultValue={ end }
          name='end'
          placeholder='in seconds'/>
      </Label>
      <Label>
        <span>Tags</span>
        <input
          defaultValue={ tags }
          name='tags'
          placeholder='separeted by commas'/>
      </Label>
    </MaxWidth>
  )
}

const Inputs = (props) => {
  const { updateState, onSave, onCreate, inputsState, editing, id, goHome } = props;
  return (
    <Fragment>
      <Title>{ editing ? 'Edit clip' : 'Add a new clip' }</Title>
      <Body updateState={updateState} {...inputsState}/>
      <Buttons
        id={id}
        onSave={onSave}
        onCreate={onCreate}
        goHome={goHome}
        {...inputsState}/>
    </Fragment>
  )
}

const InputsWithManager = (props) => {
  return (
    <Manager 
      initialState={props.id ? props : { name: '', start: '', end: '', tags: '' }}
      render={(state, updateState) => (
        <Inputs {...props} inputsState={state} updateState={updateState} />
      )}
    />
  )
}

const Actuator = (props) => {
  const { match, playlist, history } = props;
  const path = match.params[0];
  const id = match.params.id;
  const editing = (path === 'edit' && id !== undefined);
  const adding = path === 'add';

  // if the path is indication that it is neither editing nor adding, then return null because path is wrong
  if(!editing && !adding) return null;

  // this doesn't assume there is an actual Id or that we are on /edit,
  // if the id is undefined it will just return an empty object
  const clipProps = getClipById(playlist.clips, id);

  const goHome = () => history.push('/playsity/');

  const onSave = (data) => {
    clipEdit(data);
    goHome();
    // we'll only update video's url if this clip is the one selected (the one currently playing)
    if(playlist.currentClip === id) urlUpdate(data.start, data.end);
  }

  const onCreate = (data) => {
    clipCreate(data);
    goHome();
  }

  return (
    <Container>
      <Link to='/playsity/' style={{ flex: '1' }}/>
      <Section>
        <InputsWithManager
          editing={editing}
          playlist={playlist}
          onSave={onSave}
          onCreate={onCreate}
          goHome={goHome}
          {...clipProps}/>
      </Section>
    </Container>
  )
}

const mapStateToProps = ({ playlist }) => ({
  playlist
});

export default connect(mapStateToProps)(withRouter(Actuator));
export { Actuator }; 