import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 40px;
  margin-bottom: 5px;
`;

const Controls = (props) => {
  return (
    <Container>
      <Link to='/add'> New Clip </Link>
    </Container>
  )
}

export default Controls;