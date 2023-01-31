import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './books.css';

const Form = () => (
  <>
    <div className="border border-1 my-4" />
    <section>
      <h3>Add new book</h3>
      <form className=" d-block d-md-flex gap-5 container-fluid m-0 p-0">
        <input placeholder="Book title " className="Book-title" />
        <input placeholder="Add Author " className="Book-title" />
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
export default Form;
