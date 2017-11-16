import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { render } from 'enzyme';
import { mount } from 'enzyme';
import sinon from 'sinon';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import TodoItems from './TodoItems';

describe('<TodoList />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TodoList />, div);
  });

  it('recognize functions', () => {
   const addItem = sinon.stub(TodoList.prototype, 'addItem').returns(true);
  //
  //  const wrapper = mount(<TodoList />);
  //   wrapper.find('button').simulate('click');
  //   expect(addItem.called).to.be.true;
  //   addItem.restore();
  });

});
describe('<TodoItems />', () => {


});
