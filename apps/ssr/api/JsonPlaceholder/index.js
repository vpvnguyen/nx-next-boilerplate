import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

const getPosts = async () => {
  try {
    const { data } = await api.get('/posts');
    return data;
  } catch (error) {
    console.error('getPosts ERROR', error);
  }
};

const createPost = async ({ title, body, userId }) => {
  try {
    const { data } = await api.post('/posts', {
      title: title || 'foo',
      body: body || 'bar',
      userId: userId || 1,
    });
    return data;
  } catch (error) {
    console.error('getPosts ERROR', error);
  }
};

export default {
  getPosts,
  createPost,
};
