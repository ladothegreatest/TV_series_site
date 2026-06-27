import MovieCard from './MovieCard.jsx';

export default function MovieGrid({ movies }) {
  if (movies.length === 0) {
    return <p className="empty-message">No TV series found.</p>;
  }

  return (
    <section className="movie-grid" aria-label="TV Series list">
      {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </section>
  );
}
