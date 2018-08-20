import React from 'react';
import styled from 'styled-components';
import Clip from './Playlist/Clip';
import { connect } from 'react-redux';
import applyFilter from './../utils/applyFilter';
import { withRouter } from 'react-router-dom';
import {
  boundedPlaylistClipDelete,
  boundedVideoUrlUpdate as urlUpdate,
  boundedPlaylistCurrentClipUpdate as clipUpdate
} from './../redux/boundedActions';

const Container = styled.div`
  overflow: scroll;
  overflow-x: hidden;
  flex: 1;
  padding: 5px 10px;
`;

const Clips = (props) => {
  const { currentTime, playlist, filter, history } = props;

  // if there is any filter then filter the clips based on it
  const clips = filter ? applyFilter(playlist.clips, filter) : playlist.clips;

  // create Clip components with clips data
  const [FullClip, ...restOfClips] = clips
                                      .map(clip => <Clip 
                                                      {...clip} 
                                                      time={currentTime} 
                                                      key={clip.id}
                                                      onPlay={() => {
                                                        urlUpdate(clip.start, clip.end);
                                                        clipUpdate(clip.id);
                                                      }}
                                                      onDelete={() => boundedPlaylistClipDelete(clip.id)}
                                                      onEdit={() => history.push('/playsity/edit/' + clip.id)}
                                                      isPlaying={playlist.currentClip === clip.id}
                                                    />);

  return (
    <Container>
      { FullClip }
      { restOfClips }
    </Container>
  )
}

const mapStateToProps = ({ playlist }) => ({
  playlist
});

export default connect(mapStateToProps)(withRouter(Clips));
export { Clips };