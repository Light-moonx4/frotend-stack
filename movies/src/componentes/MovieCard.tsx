
interface Movie {
  id: number;
  title: string;
  director: string;
  year: number;
  genre: string;
  duration: number;
  description: string;
  rating: number;
  image: string;
}

function MovieCard({ movie }: { movie: Movie }) {
  return (
    <article className="flex flex-col bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-200">
      <div className="relative shrink-0">
        <img
          className="w-full h-56 object-cover"
          src={movie.image}
          alt={movie.title}
        />

        <span className="absolute top-2 right-2 bg-yellow-500 text-neutral-950 px-2 py-1 rounded-full text-sm font-bold shadow">
          ⭐ {movie.rating}
        </span>

        <span className="absolute top-2 left-2 bg-neutral-950/80 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur">
          {movie.genre}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-4">
        <header className="mb-2">
          <h2 className="text-lg font-bold text-white leading-snug">
            {movie.title}
          </h2>
          <span className="text-neutral-400 text-sm">
            {movie.year} · {movie.duration} min
          </span>
        </header>

        <p className="text-neutral-400 text-sm mb-3">
          <span className="text-neutral-300 font-semibold">Director:</span> {movie.director}
        </p>

        <p className="text-neutral-400 text-sm mb-4 flex-1">
          {movie.description}
        </p>

        <button
          type="button"
          className="mt-auto w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Ver detalles
        </button>
      </div>
    </article>
  );
}

export default MovieCard;
