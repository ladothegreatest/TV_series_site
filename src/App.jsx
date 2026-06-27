import Sidebar from './components/Sidebar.jsx';
import SearchBar from './components/SearchBar.jsx';
import MovieGrid from './components/MovieGrid.jsx';
import { useMovies } from './context/MovieContext.jsx';

export default function App() {
  const { movies, searchTerm, isLoading, error } = useMovies();

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const tvSeries = movies
    .filter((movie) => movie.category === 'TV Series')
    .filter((movie) => movie.title.toLowerCase().includes(normalizedSearch));

  return (
    <div className="app-shell">
      <Sidebar />

      <main className="page-content">
        <SearchBar />

        <h1 className="page-title">TV Series</h1>

        {isLoading && <p className="status-message">Loading TV series...</p>}
        {error && <p className="status-message error">{error}</p>}
        {!isLoading && !error && <MovieGrid movies={tvSeries} />}
      </main>
    </div>
  );
}
