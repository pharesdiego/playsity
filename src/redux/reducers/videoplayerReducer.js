import {
  VIDEO_URL_UPDATE
} from './actions';

import initialState from './../initialState';

const appState = (JSON.parse(window.localStorage.getItem('store')) || initialState).videoplayer;

const playlistReducer = (state = appState, action) => {
  switch(action.type) {
    case VIDEO_URL_UPDATE: 
      return {
        ...state,
        url: action.url
      }
    default:
      return state;
  }
}

export default playlistReducer;