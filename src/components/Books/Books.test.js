// Books.test.js
import React, {useEffect, useState} from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {render, unmountComponentAtNode} from 'react-dom';

import Component from './Books';
import reducer from 'reducers';

describe('<Books /> unit test', () => {
  const getWrapper = (mockStore = createStore(reducer, { books: [] })) => mount(
    <Provider store={mockStore}>
      <Component/>
    </Provider>
  );

  it("Displays no books found if search comes up empty", () => {
    const mockStore = createStore(reducer, { books: [{
      id: 0,
      volumeInfo: {
        title: 'Kaplan Test',
        authors: ['Book Aurthor'],
        subtitle: 'some description',
        publishedDate: '06-12-2020',
        imageLinks: {}
      }
    }], search: 'science'});

    const wrapper = mount(<Provider store={mockStore}>
      <Component/>
    </Provider>);
    const text = wrapper.find("p").at(0).text();
    expect(text).toEqual("No books found");
  });

  it("App loads books", () => {
  const mockStore = createStore(reducer, { books: [{
    id: 0,
    volumeInfo: {
      title: 'Kaplan Test',
      authors: ['Book Aurthor'],
      subtitle: 'some description',
      publishedDate: '06-12-2020',
      imageLinks: {}
    }
  }], search: ''});
    const wrapper = mount(<Provider store={mockStore}>
      <Component/>
    </Provider>);
    const text = wrapper.find("h3").at(0).text();
    expect(text).toEqual("Kaplan Test");
  });

  it("App loads form if isAddingBook is true", () => {
  const mockStore = createStore(reducer, { books: [], search: '', isAddingBook: true});
    const wrapper = mount(<Provider store={mockStore}>
      <Component/>
    </Provider>);
    const text = wrapper.find("label").at(0).text();
    expect(text).toEqual("Title:");
  });

});
