import axios from 'axios';

const API_URL =
  'https://raw.githubusercontent.com/lomsadze123/movie-api/refs/heads/main/data.json';

export async function getMovies() {
  const response = await axios.get(API_URL);
  return response.data;
}
