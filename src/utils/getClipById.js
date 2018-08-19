const getClipById = (playlist, id) => {
  return id ? playlist.clips.find(clip => clip.id === id) : {};
}

export default getClipById;