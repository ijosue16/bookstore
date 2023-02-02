const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [
  {
    id: 1,
    title: 'Nothing to loose',
    author: 'Augusto braga',
  },
  {
    id: 2,
    title: 'When thing fall apart',
    author: 'Maria toney',
  },
  {
    id: 3,
    title: 'Le livre de la vie',
    author: 'Martin Gray',
  },
];

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});
export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state,
        { title: action.payload.title, author: action.payload.author, id: action.payload.id },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};
export default bookReducer;
