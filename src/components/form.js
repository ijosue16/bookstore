import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './books.css';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();
  const categoryInput = useRef();

  const handleAddingBook = (e) => {
    e.preventDefault();
    const category = categoryInput.current.value;

    const book = {
      item_id: nanoid(),
      title,
      author,
      category,
    };

    setTitle('');
    setAuthor('');
    dispatch(addBook(book));
  };
  // changing title
  const handleTitleChange = (e) => (setTitle(e.target.value));

  // changing author
  const handleAuthorChange = (e) => (
    setAuthor(e.target.value));

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
            placeholder="Book title "
            className="Book-title"
            onChange={handleTitleChange}
          />
          <input
            placeholder="Add Author "
            className="Book-title"
            onChange={handleAuthorChange}
          />
          <select className="dropdown px-2" ref={categoryInput} defaultValue="categories">
            <option value="action">action</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Economy">Economy</option>
          </select>
          <button type="submit" className="primary-button-big border-0 rounded p-2 py-1 add-btn">ADD BOOK</button>
        </form>
      </section>
    </>
  );
};
export default Form;
