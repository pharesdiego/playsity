const initialState = {
  videoplayer: {
    url: '/video.mp4'
  },
  playlist: {
    clips: [
      {
        id: null,
        name: 'Full Video',
        start: '0',
        end: '0',
        tags: ''
      }
    ],
    currentClip: null
  }
};

export default initialState;