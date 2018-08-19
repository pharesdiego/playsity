import React, { Component } from 'react';
import styled from 'styled-components';
import Options from './Bar/Options';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 45px;
  background-color: black;
  color: white;
  padding: 0px 10px;
`;

const Bar = ({ searchView, toggleSearchView, updateSearch }) => {
  return (
    <Container>
      <Options
        toggleSearchView={toggleSearchView}
        searchView={searchView}
        updateSearch={updateSearch}
      />
    </Container>
  )
}

export default Bar;