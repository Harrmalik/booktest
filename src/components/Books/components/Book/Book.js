import React from 'react';

function Book(props) {
  const {volumeInfo} = props.bookInfo;


  return (
    <section className="book">
      <img src={volumeInfo.imageLinks.thumbnail ? volumeInfo.imageLinks.thumbnail : "https://upload.wikimedia.org/wikipedia/commons/f/f1/Frustrated_blue_textbook.jpg"} alt={volumeInfo.title}/>

      <section>
        <h3>{volumeInfo.title}</h3>
        <p>Authors: {volumeInfo.authors.join(' ')}</p>
        <p>Publisher: {volumeInfo.subtitle}</p>
        <p>Published Date: {volumeInfo.publishedDate}</p>
      </section>
    </section>
  );
}

export default Book;
