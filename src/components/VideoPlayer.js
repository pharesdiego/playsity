import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Flex } from './Styles';

const Layout = Flex.extend`
  flex: 0.75;
  @media (max-height: 340px) {
    display: none;
  }
`;

const Video = styled.video`
  width: 100%;
  max-width: 500px;
  height: 100%;
  max-height: 400px;
  background-color: black;
  box-shadow: 0px 0px 15px 1px rgba(43,43,43,0.4);
`;

const VideoPlayer = (props) => {
  const { videoplayer, url, updateState } = props;
  return (
    <Layout>
      <Video
        src={ videoplayer.url || url }
        type='video/mp4'
        onTimeUpdate={ (e) => updateState('currentTime', parseInt(e.target.currentTime, 10)) }
        controls
        autoPlay
      />
    </Layout>
  )
}

const mapStateToProps = ({ videoplayer }) => ({
  videoplayer
});

export default connect(mapStateToProps)(VideoPlayer);
export { VideoPlayer };