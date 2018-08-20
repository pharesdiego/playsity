import React from 'react';
import Manager from './../components/Manager';

const Mock = (props) => {
  return (
    <button {...props} />
  )
}

const MockWithManager = (props) => {
  return (
    <Manager initialState={{passing: 'false'}} render={(state, updateState) => (
      <Mock {...state} onClick={() => updateState('passing', 'true')} />
    )}/>
  )
}

let wrapper;

describe('>>> <Manager> <<<', () => {
  beforeEach(() => {
    wrapper = mount(<MockWithManager/>);
  });

  it('Must render', () => {
    expect(wrapper).toBeDefined();
  });

  it('Must update state with updateState function and send it to child(s)', () => {
    wrapper.find('button').simulate('click');
    expect(toJSON(wrapper)).toMatchSnapshot();
    expect(wrapper.find('button').props().passing).toBe('true');
  });
});
