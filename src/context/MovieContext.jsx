import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getMovies } from '../api/movieApi.jsx';

const MovieContext = createContext(null);
const STORAGE_KEY = 'bookmarkedMovieTitles';

function readSavedTitles() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
  } catch {
    return [];
  }
}

function saveTitles(titles) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(titles));
}

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadMovies() {
      try {
        const apiMovies = await getMovies();
        const savedTitles = readSavedTitles();

        const preparedMovies = apiMovies.map((movie) => ({
          ...movie,
          isBookmarked: savedTitles.includes(movie.title),
        }));

        if (isMounted) {
          setMovies(preparedMovies);
        }
      } catch (err) {
        if (isMounted) {
          setError('Movies could not be loaded. Please try again later.');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadMovies();

    return () => {
      isMounted = false;
    };
  }, []);

  function toggleBookmark(title) {
    setMovies((currentMovies) => {
      const updatedMovies = currentMovies.map((movie) =>
        movie.title === title
          ? { ...movie, isBookmarked: !movie.isBookmarked }
          : movie
      );

      const savedTitles = updatedMovies
        .filter((movie) => movie.isBookmarked)
        .map((movie) => movie.title);

      saveTitles(savedTitles);
      return updatedMovies;
    });
  }

  const value = useMemo(
    () => ({
      movies,
      searchTerm,
      setSearchTerm,
      isLoading,
      error,
      toggleBookmark,
    }),
    [movies, searchTerm, isLoading, error]
  );

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
}

export function useMovies() {
  const context = useContext(MovieContext);

  if (!context) {
    throw new Error('useMovies must be used inside MovieProvider');
  }

  return context;
}
