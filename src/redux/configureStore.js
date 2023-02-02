import { combineReducers, configureStore } from '@reduxjs/toolkit';

import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  Bookz: bookReducer,
  Categories: categoriesReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
