import store from './../../store';
import {
  VIDEO_URL_UPDATE,
  PLAYLIST_CLIP_CREATE,
  PLAYLIST_CLIP_EDIT,
  PLAYLIST_CURRENT_CLIP_UPDATE,
  PLAYLIST_CLIP_DELETE
} from './../reducers/actions';

export const boundedVideoUrlUpdate = (start, end) => {
  store.dispatch({
    type: VIDEO_URL_UPDATE,
    start,
    end
  })
};

export const boundedPlaylistClipCreate = ({ name, start, end, tags }) => {
  store.dispatch({
    type: PLAYLIST_CLIP_CREATE,
    start: start,
    end: end,
    name: name.trim(),
    tags: tags.trim()
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
    tags: tags.trim(),
    name: name.trim(),
    id,
    start,
    end
  })
}

export const boundedPlaylistCurrentClipUpdate = (id) => {
  store.dispatch({
    type: PLAYLIST_CURRENT_CLIP_UPDATE,
    id
  })
}