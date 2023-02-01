import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './books.css';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addBook } from '../redux/books/books';

const Form = () => {
  // const [title, setTitle] = useState('');
  // const [author, setAuthor] = useState('');

  const dispatch = useDispatch();
  const titleInput = useRef();
  const authorInput = useRef();

  const handleAddingBook = (e) => {
    e.preventDefault();
    const title = titleInput.current.value;
    const author = authorInput.current.value;
    if (title && author) {
      const book = {
        id: nanoid(),
        title,
        author,
      };
      dispatch(addBook(book));
    }
    titleInput.current.value = '';
    authorInput.current.value = '';
  };

  // changing title
  // const handleTitleChange = (e) => (setTitle(e.target.value));

  // changing author
  // const handleAuthorChange = (e) => {
  //   setAuthor(e.target.value);
  // };
  return (
    <>
      <div className="border border-1 my-4" />
      <section>
        <h3>Add new book</h3>
        <form
          className=" d-block d-md-flex gap-5 container-fluid m-0 p-0 pb-4"
          onSubmit={handleAddingBook}
        >
          <input
            ref={titleInput}
            placeholder="Book title "
            className="Book-title"
            // onChange={handleTitleChange}
          />
          <input
            ref={authorInput}
            placeholder="Add Author "
            className="Book-title"
            // onChange={handleAuthorChange}
          />
          <select className="dropdown">
            <option value="action">action</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Economy">Economy</option>
          </select>
          <button type="submit" className="primary-button-big border-0 rounded p-2 add-btn">ADD BOOK</button>
        </form>
      </section>
    </>
  );
};
export default Form;
