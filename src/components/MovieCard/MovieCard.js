export default function MovieCard({ movie }) {
  const { backdrop_path, title, overview, genres, vote_average } = movie;
  const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
  console.log(movie);
  return (
    <>
      <img
        src={backdrop_path ? `${POSTER_URL}/${backdrop_path}` : 'notFoundImg'}
        alt={title}
      />
      <p>User score: {vote_average}</p>
      <h3>Overview:</h3>
      <p> {overview}</p>
      <h3> Gentres:</h3>
      <ul>
        {genres && genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
      </ul>
    </>
  );
}
