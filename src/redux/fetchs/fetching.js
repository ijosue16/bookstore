const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const ID = '8yyptBp9LHyKyBQy8Pnz';

export const displayBookAPI = async () => {
  const resp = await fetch(`${URL}/${ID}/books`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await resp.json();
  return data;
};

export const addBookAPI = async (book) => {
  const resp = await fetch(`${URL}/${ID}/books`, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json',
    },
  });
  const data = await resp.text();
  return data;
};

export const removeBookAPI = async (id) => {
  const resp = await fetch(`${URL}/${ID}/books/${id}/`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  const data = await resp.text();
  return data;
};
