import React from 'react';
import styled from 'styled-components';
import Icon from './../Icon';

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: ${props => props.expand ? '2' : '1'};
`;

const Input = styled.input`
  color: white;
  &::placeholder {
    color: white;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 45px;
  margin-bottom: 10px;
  border-bottom: 2px solid white;
`;

const Bar = ({ filterView, updateState }) => {
  return (
    <Container>
      <Section>
        Your Playlist
      </Section>
      <Section expand={ filterView }>
        {
          filterView
            ? (
                <Input
                  placeholder='Filter by name or tags'
                  onInput={ (e) => updateState('filter', e.target.value)}
                  autoFocus
                />
              )
            : <Icon onClick={ () => updateState('filterView', !filterView) }>search</Icon>
        }
      </Section>
      <Section>
        {
          filterView
            ? (
                <Icon
                  onClick={() => {
                    updateState('filterView', !filterView)
                    updateState('filter', '')
                  }}>
                    cancel
                </Icon>
              )
            : null
        }
      </Section>
    </Container>
  )
}

export default Bar;