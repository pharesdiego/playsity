import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0.8;
`;

const Video = styled.video`
  width: 100%;
  max-width: 500px;
  height: 100%;
  max-height: 400px;
  background-color: black;
`;

class VideoPlayer extends Component {
  shouldComponentUpdate() {
    return true;
  }
  
  state = {
    currentTime: 0
  }

  handleTimeUpdate = (event) => {
    this.setState({
      currentTime: +event.target.currentTime.toFixed(1)
    });
  }

  render() {
    const { render, videoplayer, url } = this.props;
    return(
      <Fragment>
        <Layout>
          <Video
            src={ videoplayer.url || url }
            type='video/mp4'
            onTimeUpdate={ this.handleTimeUpdate }
            controls
            autoPlay
            muted
          />
        </Layout>
        { render ? render(this.state.currentTime) : null }
      </Fragment>
    )
  }
}

const mapStateToProps = ({ videoplayer }) => ({
  videoplayer
});

export default connect(mapStateToProps)(VideoPlayer);
export { VideoPlayer };