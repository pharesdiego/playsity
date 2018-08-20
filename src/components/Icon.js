import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.div`
  cursor: pointer;
  transition: all 0.2s;
  & > i {
    vertical-align: middle;
    display: inherit;
  }
`;

const Icon = ({ children, size = '24px', ...rest }) => (
  <IconWrapper {...rest}>
    <i className='material-icons' style={{fontSize: size}}>{ children }</i>
  </IconWrapper>
);

export default Icon;