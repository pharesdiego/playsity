import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Bar from './Playlist/Bar';
import Clip from './Playlist/Clip';
import Controls from './Playlist/Controls';
import Manager from './Manager';

class Playlist extends Component {
  state = {
    search: '',
    searchView: false,
  }

  static Bar = Bar;
  static Clip = Clip;
  static Controls = Controls;

  toggleSearchView = () => {
    this.setState({
      searchView: !this.state.searchView
    })
  }

  updateSearch = (value) => {
    this.setState({
      search: value
    })
  }

  render() {
    return this.props.render(this.state, {
            toggleSearchView: this.toggleSearchView,
            updateSearch: this.updateSearch
          })
  }
}

const PlaylistWithManager = (props) => {
  return (
    <Manager render={(state, onInput) => (
      <Playlist {...state} onInput={onInput}/>
    )} />
  )
}

const mapStateToProps = ({ playlist }) => ({
  playlist
});

export default connect(mapStateToProps)(Playlist);
export { PlaylistWithManager };