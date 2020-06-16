// AddBookButton.test.js
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Component from './AddBookButton';
import reducer from 'reducers';
import { addingBook } from 'actions';


describe('<AddBookButton /> unit test', () => {
  const mockStore = createStore(reducer, { isAddingBook: false });
  mockStore.dispatch = jest.fn();
  const getWrapper = () => mount(
    <Provider store={mockStore}>
      <Component/>
    </Provider>
  );

  it('should dispatch the correct action on button click', () => {
    const wrapper = getWrapper();
    wrapper.find('button').simulate('click');
    expect(mockStore.dispatch).toHaveBeenCalledWith(addingBook(true));
  });
});
