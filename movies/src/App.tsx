import MovieCard from './componentes/MovieCard'
import movies from './data/movies'

import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <header className="px-6 py-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Películas
        </h1>
        <p className="text-neutral-400 mt-2 text-sm sm:text-base">
          Explora {movies.length} películas y sus detalles
        </p>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 sm:p-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </main>
    </div>
  )
}
export default App
