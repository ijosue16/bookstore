import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import { displayBookAPI, removeBookAPI, addBookAPI } from '../fetchs/fetching';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const DISPLAY_BOOK = 'bookstore/books/DISPLAY_BOOK';
const initialState = [];

export const addBook = createAsyncThunk(ADD_BOOK, async (book) => {
  await addBookAPI(book);
  return book;
});

export const displayBook = createAsyncThunk(DISPLAY_BOOK, async () => {
  const bookArr = await displayBookAPI();
  const books = Object.keys(bookArr).map((id) => ({
    item_id: id,
    title: bookArr[id][0].title,
    author: bookArr[id][0].author,
    category: bookArr[id][0].category,
  }));
  return books;
});

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await removeBookAPI(id);
  return id;
});

const bookReducer = createReducer(initialState, ((builder) => {
  builder
    .addCase(addBook.fulfilled, ((state, action) => [...state, action.payload]))
    .addCase(displayBook.fulfilled, ((state, action) => action.payload))
    .addCase(removeBook.fulfilled, ((state, action) => [
      ...state.filter((storedbook) => storedbook.id !== action.payload),
    ]));
}));

export default bookReducer;
