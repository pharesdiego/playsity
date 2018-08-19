import store from './../../store';
import {
  VIDEO_URL_UPDATE,
  PLAYLIST_CLIP_CREATE,
  PLAYLIST_CLIP_EDIT,
  PLAYLIST_CURRENT_CLIP_UPDATE,
  PLAYLIST_CLIP_DELETE
} from './../reducers/actions';

export const boundedVideoUrlUpdate = (url) => {
  store.dispatch({
    type: VIDEO_URL_UPDATE,
    url
  })
};

export const boundedPlaylistClipCreate = ({ name, start, end, tags }) => {
  store.dispatch({
    type: PLAYLIST_CLIP_CREATE,
    start: start,
    end: end,
    name,
    tags
  })
};

export const boundedPlaylistClipDelete = (id) => {
  store.dispatch({
    type: PLAYLIST_CLIP_DELETE,
    id
  })
};

export const boundedPlaylistClipEdit = ({ id, name, start, end, tags}) => {
  store.dispatch({
    type: PLAYLIST_CLIP_EDIT,
    id,
    name,
    start,
    end,
    tags
  })
}