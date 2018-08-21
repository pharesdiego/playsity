import { VIDEO_URL_UPDATE } from './actions';

import initialState from './../initialState';
import rangeValidator from './../../utils/rangeValidator';

const appState = (JSON.parse(window.localStorage.getItem('PLAYSITY_STORE')) || initialState).videoplayer;

const playlistReducer = (state = appState, action) => {
  switch(action.type) {
    case VIDEO_URL_UPDATE: 
      return {
        ...state,
        url: '/playsity/video.mp4#t=' + rangeValidator(action.start, action.end)
      }
    default:
      return state;
  }
}

export default playlistReducer;