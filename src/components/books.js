import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './books.css';
import 'react-circular-progressbar/dist/styles.css';
import { useSelector } from 'react-redux';
import Book from './book';
import Form from './form';

const Books = () => {
  const books = useSelector((state) => state.Bookz);
  return (
    <>
      <div className="Books-container p-5">
        <div className="m-0 p-0">
          <div className="d-flex flex-column gap-2 justify-content-center align-content-center  ">

            {books.map((book) => (

              <Book
                Key={book.id}
                title={book.title}
                author={book.author}
                id={book.id}
              />
            ))}
          </div>
        </div>
        <Form />
      </div>

    </>
  );
};

export default Books;
