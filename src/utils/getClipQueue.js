const getClipQueue = (clips = [], currentClip) => {
  let index = clips.findIndex(clip => clip.id === currentClip);
  if(index === -1) return {};
  return {
    previous: index === 0 ? null : clips[index - 1],
    next: index === clips.length - 1 ? null : clips[index + 1]
  }
}

export default getClipQueue;