const initialState = {
  videoplayer: {
    url: '/playsity/video.mp4'
  },
  playlist: {
    clips: [
      {
        id: null,
        name: 'Full Video',
        start: '0',
        end: '52',
        tags: ''
      },
      {
        id: 'a21e19da2dc',
        name: 'Intro',
        start: '0',
        end: '11',
        tags: 'Snow, Walking, Mountains'
      },
      {
        id: '9ea3abcc842',
        name: 'A dangerous quest',
        start: '35',
        end: '45',
        tags: ''
      }
    ],
    currentClip: null
  }
};

export default initialState;