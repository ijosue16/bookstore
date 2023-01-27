import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './books.css';
import 'react-circular-progressbar/dist/styles.css';
import Book from './book';
import Form from './form';

const Books = () => (
  <>
    <div className="Books-container p-5">
      <div className="m-0 p-0">
        <div className="d-flex flex-column gap-2 justify-content-center align-content-center  ">

          <Book title="Hunger games" author="suzanne collins" />
          <Book title="Dune" author="Frank Herbert" />

        </div>
      </div>
      <Form />
    </div>

  </>
);

export default Books;
