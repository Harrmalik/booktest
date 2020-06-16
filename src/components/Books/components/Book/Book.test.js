// AddBookForm.test.js
import React from 'react';
import { mount } from 'enzyme';

import Component from './Book';

describe('<Book /> unit test', () => {
  const book = {
    id: 0,
    volumeInfo: {
      title: 'Kaplan Test',
      authors: ['Book Aurthor'],
      subtitle: 'some description',
      publishedDate: '06-12-2020',
      imageLinks: {}
    }
  }

  const getWrapper = () => mount(
    <Component bookInfo={book} />
  );

  it('should display book card with correct info', () => {
    const wrapper = getWrapper();
    expect(wrapper.find('h3').at(0).text()).toEqual('Kaplan Test');
    expect(wrapper.find('p').at(0).text()).toEqual('Authors: Book Aurthor');
    expect(wrapper.find('p').at(1).text()).toEqual('Publisher: some description');
    expect(wrapper.find('p').at(2).text()).toEqual('Published Date: 06-12-2020');
    expect(wrapper.find('img').at(0).prop('src')).toEqual('https://upload.wikimedia.org/wikipedia/commons/f/f1/Frustrated_blue_textbook.jpg');
  });
});
