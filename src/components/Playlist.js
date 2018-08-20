import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Bar from './Playlist/Bar';
import Controls from './Playlist/Controls';
import Clips from './Clips';
import { Flex } from './Styles';
import getClipQueue from './../utils/getClipQueue';
import {
  boundedVideoUrlUpdate as videoUrl,
  boundedPlaylistCurrentClipUpdate as clipUpdate,
} from './../redux/boundedActions';

const Layout = Flex.extend`
  flex: 1;
  padding: 10px 0px;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  height: 100%;
  box-shadow: 0px 0px 15px 1px rgba(43,43,43,0.4);
  background-color: rgba(255, 255, 255, 0.18);
  color: white;
  border-radius: 2px;
  & > div {
    padding: 0px 10px;
  }
`;

const Playlist = (props) => {
  const { updateState, filterView, filter, currentTime, playlist } = props;
  const queue = getClipQueue(playlist.clips, playlist.currentClip);
  return (
    <Layout>
      <Container>
        <Bar updateState={updateState} filterView={filterView}/>
        <Clips currentTime={currentTime} filter={filter} playlist={playlist} />
        <Controls
          onNext={() => {
            if(queue.next) {
              videoUrl(queue.next.start, queue.next.end)
              clipUpdate(queue.next.id)
            }
          }}
          onPrevious={() => {
            if(queue.previous) {
              videoUrl(queue.previous.start, queue.previous.end)
              clipUpdate(queue.previous.id)
            }
          }}
          queue={queue}
        />
      </Container>
    </Layout>
  )
}

const mapStateToProps = ({ playlist }) => ({
  playlist
});

export default connect(mapStateToProps)(Playlist);