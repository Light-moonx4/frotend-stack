
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
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={movie.image}
          alt={movie.title}
        />

        <span className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
          ⭐ {movie.rating}
        </span>
      </div>

      <div className="p-4">
        <header className="mb-2">
          <h2 className="text-xl font-bold mb-1">
            {movie.title}
          </h2>

          <span className=" text-gray-600 text-sm">
            {movie.year}
          </span>
        </header>

        <div className="text-gray-700 mb-4">
          <p>
            <strong>Género:</strong> {movie.genre}
          </p>

          <p>
            <strong>Director:</strong> {movie.director}
          </p>

          <p>
            <strong>Duración:</strong> {movie.duration} minutos
          </p>
        </div>

        <p className="text-gray-600 mb-4">
          {movie.description}
        </p>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"

          type="button"
        >
          Ver detalles
        </button>
      </div>
    </article>
  );
}

export default MovieCard;