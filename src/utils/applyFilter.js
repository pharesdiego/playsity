const applyFilter = (clips, word) => {
  return clips
          .filter(clip =>
                    clip.name.includes(word) || 
                    clip.tags.split(',').some(tag => tag.includes(word))
                  );
}

export default applyFilter;