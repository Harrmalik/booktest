// AddBookForm.test.js
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Component from './AddBookForm';
import reducer from 'reducers';
import { bookAdded, addingBook } from 'actions';


describe('<AddBookForm /> unit test', () => {
  const mockStore = createStore(reducer, { books: [], isAddingBook: true });
  mockStore.dispatch = jest.fn();
  const getWrapper = () => mount(
    <Provider store={mockStore}>
      <Component/>
    </Provider>
  );

  it('should dispatch book added with inputs from form', () => {
    const wrapper = getWrapper();
    wrapper.find('input').at(0).simulate('change', { target: { name: "title", value: 'Kaplan Test' } })
    wrapper.find('input').at(1).simulate('change', { target: { name: "authors", value: 'Book Aurthor' } })
    wrapper.find('input').at(2).simulate('change', { target: { name: "subtitle", value: 'some description' } })
    wrapper.find('input').at(3).simulate('change', { target: { name: "publishedDate", value: '06-12-2020' } })
    wrapper.find('button').at(0).simulate('click');
    expect(mockStore.dispatch).toHaveBeenCalledWith(bookAdded({
      id: 0,
      volumeInfo: {
        title: 'Kaplan Test',
        authors: ['Book Aurthor'],
        subtitle: 'some description',
        publishedDate: '06-12-2020',
        imageLinks: {}
      }
    }));
  });

  it('should dispatch the adding book is false on cancel', () => {
    const wrapper = getWrapper();
    wrapper.find('button').at(1).simulate('click');
    expect(mockStore.dispatch).toHaveBeenCalledWith(addingBook(false));
  });
});
