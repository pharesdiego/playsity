import playlistReducer from './../redux/reducers/playlistReducer';
import videoplayerReducer from './../redux/reducers/videoplayerReducer';
import initialState from './../redux/initialState';
import {
  VIDEO_URL_UPDATE,
  PLAYLIST_CLIP_CREATE,
  PLAYLIST_CLIP_EDIT,
  PLAYLIST_CURRENT_CLIP_UPDATE,
  PLAYLIST_CLIP_DELETE
} from './../redux/reducers/actions';

const { playlist, videoplayer } = initialState;

describe('>>> Playlist Reducers <<<', () => {
  it('PLAYLIST_CLIP_CREATE', () => {
    expect(
      playlistReducer(playlist, {
        type: PLAYLIST_CLIP_CREATE,
        TEST_ID: '1',
        name: 'Final Scene',
        start: '40',
        end: '52',
        tags: 'final, credits'
      })
    ).toMatchSnapshot();

    expect(
      playlistReducer(playlist, {
        type: PLAYLIST_CLIP_CREATE,
        TEST_ID: '1',
        name: '',
        start: '',
        end: '',
        tags: ''
      })
    ).toMatchSnapshot();

    expect(
      playlistReducer(playlist, {
        type: PLAYLIST_CLIP_CREATE,
        TEST_ID: '1',
        name: '',
        start: '10000000000',
        end: '100000000000',
        tags: ''
      })
    ).toMatchSnapshot();
  });

  it('PLAYLIST_CLIP_EDIT', () => {
    expect(
      playlistReducer(playlist, {
        type: PLAYLIST_CLIP_EDIT,
        id: 'a21e19da2dc',
        name: 'Intro Edited',
        start: '1',
        end: '12',
        tags: 'Snow, Walking, Mountains, Running'
      })
    ).toMatchSnapshot();

    expect(
      playlistReducer(playlist, {
        type: PLAYLIST_CLIP_EDIT,
        id: 'a21e19da2dc',
        name: 'Time Edited',
        start: '10000000',
        end: '120000000000',
        tags: 'Snow, Walking, Mountains, Running'
      })
    ).toMatchSnapshot();
  });

  it('PLAYLIST_CURRENT_CLIP_UPDATE', () => {
    expect(
      playlistReducer(playlist, {
        type: PLAYLIST_CURRENT_CLIP_UPDATE,
        id: '9ea3abcc842'
      })
    ).toMatchSnapshot();

    expect(
      playlistReducer(playlist, {
        type: PLAYLIST_CURRENT_CLIP_UPDATE,
        id: 'changed current clip'
      })
    ).toMatchSnapshot();
  });

  it('PLAYLIST_CLIP_DELETE', () => {
    expect(
      playlistReducer(playlist, {
        type: PLAYLIST_CLIP_DELETE,
        id: '9ea3abcc842'
      })
    ).toMatchSnapshot();
  })
});

describe('>>> Videoplayer Reducers <<<', () => {
  it('VIDEO_URL_UPDATE', () => {
    expect(
      videoplayerReducer(videoplayer, {
        type: VIDEO_URL_UPDATE,
        start: '0',
        end: '15'
      })
    ).toMatchSnapshot();
  });
});