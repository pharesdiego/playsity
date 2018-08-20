import React from 'react';
import { Link } from 'react-router-dom';
import { Flex } from './../Styles';
import Icon from './../Icon';
import Button from './../Button';

const Container = Flex.extend`
  width: 100%;
  height: 60px;
  justify-content: space-around;
`;

const Controls = (props) => {
  let { queue, onPrevious, onNext } = props;
  let deactivated = {
    opacity: '0.5',
    pointerEvents: 'none'
  }
  return (
    <Container>
      <Icon
        size='32px' 
        onClick={onPrevious}
        style={queue.previous ? null : deactivated}>
        skip_previous
      </Icon>
      <Link to='/playsity/add'>
        <Button color='white'>New Clip</Button>
      </Link>
      <Icon
        size='32px'
        onClick={onNext}
        style={queue.next ? null : deactivated}>
        skip_next
      </Icon>
    </Container>
  )
}

export default Controls;