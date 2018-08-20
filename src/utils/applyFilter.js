const applyFilter = (clips = [], filter = '') => {
  if(!filter) return clips;
  filter = filter.toLowerCase().trim();
  return clips
          .filter(clip =>
                    clip.name.toLowerCase().includes(filter) || 
                    clip.tags.split(',').some(tag => tag.toLowerCase().includes(filter))
                  );
}

export default applyFilter;