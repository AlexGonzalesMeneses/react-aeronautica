const url = 'http://127.0.0.1:5000/api/items';

export const fetchAlbum = async () => {
  const data = await fetch(url);
  const json = await data.json();
  return json;
};

export const fetchAlbumById = async (id) => {
  const data = await fetch(`${url}/${id}`);
  const json = await data.json();
  return json;
};

export const postAlbum = async (data) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();
  return json;
};

export const deleteAlbum = async (id) => {
  const response = await fetch(`${url}/${id}`, {
    method: 'DELETE',
    'content-type': 'application/json',
  });
  const json = await response.json();
  return json;
};
