import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import VideoPlayer from './components/VideoPlayer';
import Playlist from './components/Playlist';
import Actuator from './components/Actuator';
import Manager from './components/Manager';

const Title = styled.div`
  width: 100%;
  padding: 5px 0px;
  color: white;
  font-family: 'Pacifico';
  text-align: center;
  font-size: calc(5vh + 8px);
  @media (max-height: 400px) {
    display: none;
  }
`;

// Playlist will have its own manager, but also will receive props from another manager below
// because Playlist needs to be aware of currentTime on VideoPlayer
const PlaylistWithManager = (props) => {
  return (
    <Manager initialState={{ filterView: false }} render={(state, updateState) => (
      <Playlist {...state} {...props} updateState={updateState}/>
    )}/>
  )
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <Title>Playsity</Title>
        <Manager render={(state, updateState) => (
          <Fragment>
            <VideoPlayer updateState={updateState}/>
            <PlaylistWithManager {...state} />
          </Fragment>
        )}/>
        <Route path='/playsity/(add|edit)/:id?' component={ Actuator } exact />
      </Fragment>
    );
  }
}

export default App;