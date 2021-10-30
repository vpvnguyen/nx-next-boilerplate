import axios from 'axios';

const api = axios.create({
  baseURL: 'https://swapi.dev/api',
});

const getPeople = async () => {
  try {
    const { data } = await api.get('/people');
    return data;
  } catch (error) {
    console.error('getPeople ERROR', error);
  }
};

const getPeopleById = async (id) => {
  try {
    const { data } = await api.get(`/people/${id}`);
    return data;
  } catch (error) {
    console.error('getPeopleById ERROR', error);
  }
};

const getPlanets = async () => {
  try {
    const { data } = await api.get(`/planets`);
    return data;
  } catch (error) {
    console.error('getPlanets ERROR', error);
  }
};

const getPlanetsById = async (id) => {
  try {
    const { data } = await api.get(`/planets/${id}`);
    return data;
  } catch (error) {
    console.error('getPlanetsById ERROR', error);
  }
};

export default {
  getPeople,
  getPeopleById,
  getPlanets,
  getPlanetsById,
};
