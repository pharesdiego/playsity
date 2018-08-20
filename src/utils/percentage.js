const percentage = (time, start, end) => {
  if(time < start) return 0;
  if(time > end) return 100;
  return ((time - start) * 100) / (end - start);
};

export default percentage;