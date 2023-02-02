import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { checkstatus } from '../redux/categories/categories';

const Category = () => {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.Categories);

  const handleCheckstatus = () => {
    dispatch(checkstatus());
  };
  return (
    <div className="py-3 text-center">
      <button
        type="button"
        className="btn text-black bg-primary"
        onClick={handleCheckstatus}
      >
        CHECK STATUS
      </button>
      <h2>{status}</h2>
    </div>
  );
};

export default Category;
