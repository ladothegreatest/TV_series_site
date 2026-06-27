import { SearchIcon } from './Icons.jsx';
import { useMovies } from '../context/MovieContext.jsx';

export default function SearchBar() {
  const { searchTerm, setSearchTerm } = useMovies();

  return (
    <label className="search-bar">
      <SearchIcon />
      <input
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        type="text"
        placeholder="Search for TV series"
        aria-label="Search for TV series"
      />
    </label>
  );
}
