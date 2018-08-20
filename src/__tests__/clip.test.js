import React from 'react';
import Clip from './../components/Playlist/Clip';
import Manager from './../components/Manager';

const ClipWithManager = (props) => {
  return (
    <Manager
      initialState={{data: {time: '0', isPlaying: false, name: 'test', start: '0', end: '15', tags: 'testing, tag'}}}
      render={(state, updateState) => (
        <Clip
          onPlay={() => updateState('data', {...state.data, isPlaying: true})}
          onEdit={() => updateState('data', {...state.data, name: 'edited name', start: '3', end: '20', tags: 'testing, edited'})}
          {...state.data}
        />
      )}
    />
  )
}

let wrapper;

describe('>>> Clip <<<', () => {
  beforeEach(() => {
    wrapper = mount(<ClipWithManager/>);
  });

  it('Must render', () => {
    expect(wrapper).toBeDefined();
  });

  test('onClick handler must work and update isPlaying state to true', () => {
    wrapper.find('Icon').at(1).simulate('click');
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  test('onEdit handler must work and edit state', () => {
    wrapper.find('Icon').at(2).simulate('click');
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});