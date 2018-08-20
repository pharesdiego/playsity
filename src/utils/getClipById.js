const getClipById = (clips = [], id = false) => {
  if(!id) return {};
  let clip = clips.find(clip => clip.id === id);
  return clip || {};
}

export default getClipById;