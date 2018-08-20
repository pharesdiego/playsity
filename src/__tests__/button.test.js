import React from 'react';
import Button from './../components/Button';

const wrapper = mount(<Button color="white" bg="black"/>);
describe('>>> <Button> <<<', () => {
  it('Must render', () => {
    expect(wrapper).toBeDefined();
  });

  it('Must render properly with passed props', () => {
    expect(wrapper.find('Button').props()).toMatchSnapshot();
  });
});