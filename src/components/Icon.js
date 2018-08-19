import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.div`
  cursor: pointer;
  vertical-align: middle;
  display: inherit;
`;

const Icon = ({ children , ...rest }) => (
  <IconWrapper {...rest}>
    <i className='material-icons'>{ children }</i>
  </IconWrapper>
);

export default Icon;