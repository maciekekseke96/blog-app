import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const getPosts = async () => {
  const data = await api.get(`/posts`).then((resp) => resp.data);
  return data;
};

export const getComments = async (id) => {
  const data = await api.get(`/posts/${id}/comments`).then((resp) => resp.data);
  return data;
};
