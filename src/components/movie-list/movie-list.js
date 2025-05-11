import './movie-list.css'
import MovieListItem from '../movie-list-item/movie-list-item'

const MovieList = () => {
  return (
    <div className="movie-list">
      <MovieListItem name = "Shaytanat" viewers ={959} />
      <MovieListItem name = "Osmondagi Bolalar" viewers ={758}/>
      <MovieListItem name = "Jaloliddin" viewers ={853}/>
    </div>
  )
}

export default MovieList