import {
  PLAYLIST_CLIP_CREATE,
  PLAYLIST_CLIP_EDIT,
  PLAYLIST_CURRENT_CLIP_UPDATE,
  PLAYLIST_CLIP_DELETE
} from './actions';

import initialState from './../initialState';
import key from './../../utils/key';

const appState = (JSON.parse(window.localStorage.getItem('store')) || initialState).playlist;

const playlistReducer = (state = appState, action) => {
  switch(action.type) {
    case PLAYLIST_CLIP_CREATE:
      return {
        ...state,
        clips: [
          ...state.clips, 
          {
            id: key(),
            name: action.name,
            start: action.start,
            end: action.end,
            tags: action.tags
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
    default:
      return state;
  }
}

const editClip = (state, { id, name, start, end, tags }) => {
  return state
          .clips
          .map(clip => clip.id === id ? { id, name, start, end, tags } : clip);
}

export default playlistReducer;