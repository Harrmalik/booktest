// SearchBar.test.js
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Component from './SearchBar';
import reducer from 'reducers';
import { searchBooks } from 'actions';


describe('<SearchBar /> unit test', () => {
  const mockStore = createStore(reducer, { search: '' });
  mockStore.dispatch = jest.fn();
  const getWrapper = () => mount(
    <Provider store={mockStore}>
      <Component/>
    </Provider>
  );

  it('should dispatch the search correct value on input change', () => {
    const wrapper = getWrapper();
    wrapper.find('input').simulate('change', { target: { value: 'prep' } })
    expect(mockStore.dispatch).toHaveBeenCalledWith(searchBooks('prep'));
  });
});
