const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const DISPLAY_BOOK = 'bookstore/books/DISPLAY_BOOK';
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const ID = '8yyptBp9LHyKyBQy8Pnz';
const initialState = [];

const displayBookAPI = async () => {
  const resp = await fetch(`${URL}/${ID}/books`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const bookArr = await resp.json();
  const books = Object.keys(bookArr).map((id) => ({
    item_id: id,
    title: bookArr[id][0].title,
    author: bookArr[id][0].author,
    category: bookArr[id][0].category,
  }));
  return books;
};

export const displayBook = () => (async (dispatch) => {
  const books = await displayBookAPI();
  dispatch({ type: DISPLAY_BOOK, payload: books });
});

export const addBook = (book) => async (dispatch) => {
  await fetch(`${URL}/${ID}/books`, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then(() => dispatch({ type: ADD_BOOK, payload: book }));
};

export const removeBook = (id) => async (dispatch) => {
  await fetch(`${URL}/${ID}/books/${id}/`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  })
    .then(() => dispatch({ type: REMOVE_BOOK, payload: id }));
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload,
      ];
    case DISPLAY_BOOK:
      return action.payload;

    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.payload)];

    default:
      return state;
  }
};
export default bookReducer;
