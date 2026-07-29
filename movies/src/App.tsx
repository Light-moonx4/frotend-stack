import MovieCard from './componentes/MovieCard'
import movies from './data/movies'

import './App.css'

function App() {
  return (
    <div className="grid grid-cols-4 gap-4   h-screen overflow-y-auto p-4">
      {
        movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      }
    </div>
    
  )
}
export default App
