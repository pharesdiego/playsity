import { combineReducers } from 'redux';
import playlist from './playlistReducer';
import videoplayer from './videoplayerReducer';

export default combineReducers({
  playlist,
  videoplayer
});