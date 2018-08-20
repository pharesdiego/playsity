import React from 'react';
import { Flex } from './Styles';

const Container = Flex.withComponent('button').extend`
  width: auto;
  height: auto;
  color: ${props => props.color || 'grey'};
  padding: 10px 20px;
  box-shadow: 0px 0px 10px 2px rgba(62, 62, 62, 0.30);
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.26);
  background-color: ${props => props.bg || 'transparent'};
`;

const Button = ({ children, color, bg, ...rest}) => {
  return (
    <Container color={color} bg={bg} {...rest}>
      { children }
    </Container>
  )
}

export default Button;