import React from 'react';
import PropTypes from 'prop-types';
import './books.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.value = 64;
  }

  render() {
    const { title, author } = this.props;
    return (
      <div className="d-block d-lg-flex  mb-2 border border-1 p-3 single-book">
        <div className="flex-fill book-info ">
          <p className="m-0 p-0 fw-bold movie-type">action</p>
          <h4 className="m-0 p-0">{title}</h4>
          <h6 className="m-0 p-0 book-author">{author}</h6>
          <div className=" d-block d-md-flex gap-2 mt-2">
            <button type="button" className="border border-0 p-1 action-btns">comments</button>
            <div className="border border-1 d-none d-sm-block" />
            <button type="button" className="border border-0 p-1 action-btns">remove</button>
            <div className="border border-1 d-none d-sm-block" />
            <button type="button" className="border border-0 p-1 action-btns">edit</button>
            <div className="" />
          </div>
        </div>
        <div className="book-progress  d-block d-md-flex flex-fill justify-content-center">
          <div className="d-flex container m-0 p-0">
            <div className="mx-1">
              <CircularProgressbar className="circular" value={64} />
            </div>
            <div className="book-stats">
              <h3>64%</h3>
              <p>Completed</p>
            </div>
            <div className="border border-1 mx-5" />
            <div className="cuurent-chapter ">
              <h6>CURRENT CHAPTER</h6>
              <p>Chapter 17</p>
              <button type="button" className="border-0 mt-2 rounded p-2 update-btn px-4">UPDATE PROGRESS</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
