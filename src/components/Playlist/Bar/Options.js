import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import Icon from '../../Icon';

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: ${props => props.expand ? '2' : '1'};
`;

const Input = styled.input`
  color: white;
`;

const Options = (props) => {
  const { toggleSearchView, searchView, updateSearch } = props;
  return (
    <Fragment>
      <Section>
        Your Playlist
      </Section>
      <Section expand={ searchView }>
        {
          searchView
            ? <Input type='text' placeholder='Filter by name or tags' onInput={e => updateSearch(e.target.value)}/>
            : <Icon onClick={ toggleSearchView }>search</Icon>
        }
      </Section>
      <Section>
        {
          searchView
            ? <Icon onClick={ () => { toggleSearchView(); updateSearch(''); } }>cancel</Icon>
            : null
        }
      </Section>
    </Fragment>
  )
}

export default Options;