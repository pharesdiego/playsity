import React from 'react';
import styled from 'styled-components';
import Playlist from './Playlist';
import { connect } from 'react-redux';
import applyFilter from './../utils/applyFilter';

const Container = styled.div`
  overflow: scroll;
  overflow-x: hidden;
  flex: 1;
`;

const Clips = (props) => {
  const { currentTime, playlist, search } = props;

  // if there is any search we need to filter the clips based on this
  const clips = search ? applyFilter(playlist.clips, search) : playlist.clips;

  // create Playlist.Clip components with clips data
  const [FullClip, ...restOfClips] = clips.map(clip => <Playlist.Clip {...clip} time={currentTime} key={clip.id}/>);

  return (
    <Container>
      { FullClip && React.cloneElement(FullClip, { fullclip: true })}
      { restOfClips }
    </Container>
  )
}

const mapStateToProps = ({ playlist }) => ({
  playlist
});

export default connect(mapStateToProps)(Clips);
export { Clips };