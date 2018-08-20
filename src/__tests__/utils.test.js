import applyFilter from './../utils/applyFilter';
import getClipById from './../utils/getClipById';
import getClipQueue from './../utils/getClipQueue';
import percentage from './../utils/percentage';
import initialState from './../redux/initialState';

const clips = initialState.playlist.clips;

describe('>>> Utils Tests <<<', () => {
  it('applyFilter', () => {
    expect(applyFilter()).toEqual([]);
    expect(applyFilter([])).toEqual([]);
    expect(applyFilter(clips, '|@!&^.,ñ')).toEqual([]);
    expect(applyFilter(clips)).toMatchSnapshot();
    expect(applyFilter(clips, 'intro')).toMatchSnapshot();
    expect(applyFilter(clips, 'quest')).toMatchSnapshot();
  });

  it('getClipById', () => {
    expect(getClipById()).toEqual({});
    expect(getClipById(clips)).toEqual({});
    expect(getClipById(clips, '?.@!!@#$%!@#:')).toEqual({});
    expect(getClipById(clips, 'a21e19da2dc')).toMatchSnapshot();
    expect(getClipById(clips, '9ea3abcc842')).toMatchSnapshot();
  });

  it('getClipQueue', () => {
    expect(getClipQueue()).toEqual({});
    expect(getClipQueue(clips)).toEqual({});
    expect(getClipQueue(clips, null)).toMatchSnapshot();
    expect(getClipQueue(clips, 'a21e19da2dc')).toMatchSnapshot();
    expect(getClipQueue(clips, '9ea3abcc842')).toMatchSnapshot();
  });

  it('percentage', () => {
    expect(percentage(10, 10, 30)).toBe(0);
    expect(percentage(-10, 10, 30)).toBe(0);
    expect(percentage(20, 0, 40)).toBe(50);
    expect(percentage(10, 0, 100)).toBe(10);
    expect(percentage(30, 0, 100)).toBe(30);
    expect(percentage(44, 0, 100)).toBe(44);
    expect(percentage(60, 0, 100)).toBe(60);
    expect(percentage(70, 0, 100)).toBe(70);
    expect(percentage(700, 0, 100)).toBe(100);
  });
});