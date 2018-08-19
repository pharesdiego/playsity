import React, { Fragment } from 'react';
import Playlist from './Playlist';
import Clips from './Clips';
import styled from 'styled-components';

const Layout = styled.div`
  flex: 1;
  padding: 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  height: 100%;
  box-shadow: 0px 0px 6px 1px #a9a9a9;
`;


const PlaylistBody = (props) => {
  return (
    <Layout>
      <Container>
        <Playlist.Bar {...props} />
        <Clips currentTime={ props.currentTime } search={props.search} />
        <Playlist.Controls/>
      </Container>
    </Layout>
  )
}

export default PlaylistBody;