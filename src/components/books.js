import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './books.css';
import 'react-circular-progressbar/dist/styles.css';
import { useSelector, useDispatch } from 'react-redux';
import Book from './book';
import Form from './form';
import { displayBook } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayBook());
  }, [dispatch]);
  const books = useSelector(((state) => state.Bookz));
  return (
    <>
      <div className="Books-container p-5">

        <ul className="d-flex flex-column gap-2 justify-content-center align-content-center list-unstyled ">

          {books.map((book) => (

            <Book
              key={book.item_id}
              id={book.item_id}
              title={book.title}
              author={book.author}
              category={book.category}
            />
          ))}
        </ul>

        <Form />
      </div>

    </>
  );
};

export default Books;
