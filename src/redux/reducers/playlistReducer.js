import {
  PLAYLIST_CLIP_CREATE,
  PLAYLIST_CLIP_EDIT,
  PLAYLIST_CURRENT_CLIP_UPDATE,
  PLAYLIST_CLIP_DELETE
} from './actions';

import initialState from './../initialState';
import key from './../../utils/key';
import rangeValidator from './../../utils/rangeValidator';

const appState = (JSON.parse(window.localStorage.getItem('PLAYSITY_STORE')) || initialState).playlist;

const playlistReducer = (state = appState, action) => {
  switch(action.type) {
    case PLAYLIST_CLIP_CREATE:
      let { start, end, name, tags, TEST_ID } = action;
      let id = TEST_ID || key();
      let [min, max] = rangeValidator(+start, +end);
      return {
        ...state,
        clips: [
          ...state.clips, 
          {
            id,
            name: name || id,
            start: (min+''),
            end: (max+''),
            tags: tags || ''
          }
        ]
      }
    case PLAYLIST_CLIP_EDIT:
      return {
        ...state,
        clips: [
          ...editClip(state, action)
        ]
      }
    case PLAYLIST_CLIP_DELETE:
      return {
        ...state,
        clips: [
          ...state.clips.filter(clip => action.id !== clip.id)
        ]
      }

    case PLAYLIST_CURRENT_CLIP_UPDATE:
      return {
        ...state,
        currentClip: action.id
      }
    default:
      return state;
  }
}

const editClip = (state, { id, name, start, end, tags }) => {
  let [min, max] = rangeValidator(+start, +end);
  return state
          .clips
          .map(clip => clip.id === id ? (
            {
              id, 
              name: name || id, 
              start: (min+''), 
              end: (max+''), 
              tags 
            }
          ) : clip);
}

export default playlistReducer;