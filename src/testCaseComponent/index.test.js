import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme/build';
import React from 'react';
import TestCaseComponent from '.';

export const findElement = (wrapper, searchedId) =>
  wrapper.findWhere((node) => node.prop('testID') === searchedId);
const defaultText = 'New';
describe('Test case component', () => {
  const wrapper = shallow(<TestCaseComponent textElement={defaultText} />);
  //   console.log(toJson(wrapper));
  it('should mount successfully', () => {
    expect(wrapper).toBeTruthy();
  });
  it('should check Text availble', () => {
    const textBox = findElement(wrapper, 'TestCase_Text');
    // console.log(toJson(textBox));
    console.log('Viewed Text', textBox.props().children);
    expect(textBox.props().children).toEqual(defaultText);
  });
});
