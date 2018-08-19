import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import VideoPlayer from './components/VideoPlayer';
import Playlist from './components/Playlist';
import PlaylistBody from './components/PlaylistBody';
import Actuator from './components/Actuator';

const Title = styled.div`
  width: 100%;
  padding: 5px 0px;
  color: white;
  font-family: 'Pacifico';
  text-align: center;
  font-size: calc(5vh + 8px);
`;

class App extends Component {
  render() {
    return (
      <Fragment>
        <Title>Playsity</Title>
        <VideoPlayer render={(currentTime) => (
          <Playlist render={(state, handlers) => (
            <PlaylistBody currentTime={ currentTime } {...state} {...handlers} />
          )}/>
        )}/>
        <Route path='/(add|edit)/:id?' component={ Actuator } exact />
      </Fragment>
    );
  }
}

export default App;