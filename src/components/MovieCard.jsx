import { BookmarkIcon, CategoryTvIcon } from './Icons.jsx';
import { useMovies } from '../context/MovieContext.jsx';

export default function MovieCard({ movie }) {
  const { toggleBookmark } = useMovies();
  const image =
    movie.thumbnail?.regular?.large ??
    movie.thumbnail?.regular?.medium ??
    movie.thumbnail?.regular?.small;

  return (
    <article className="movie-card">
      <div className="poster-wrapper">
        <img className="poster" src={image} alt={movie.title} loading="lazy" />

        <button
          className={`bookmark-button ${movie.isBookmarked ? 'bookmarked' : ''}`}
          type="button"
          aria-label={`${movie.isBookmarked ? 'Remove' : 'Save'} ${movie.title}`}
          onClick={() => toggleBookmark(movie.title)}
        >
          <BookmarkIcon filled={movie.isBookmarked} />
        </button>
      </div>

      <div className="movie-meta" aria-label={`${movie.year}, ${movie.category}, ${movie.rating}`}>
        <span>{movie.year}</span>
        <span className="dot" aria-hidden="true" />
        <span className="category">
          <CategoryTvIcon />
          {movie.category}
        </span>
        <span className="dot" aria-hidden="true" />
        <span>{movie.rating}</span>
      </div>

      <h2 className="movie-title">{movie.title}</h2>
    </article>
  );
}
