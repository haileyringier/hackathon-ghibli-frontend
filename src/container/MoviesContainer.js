import React from 'react'
import MovieCard from '../components/MovieCard.js'

export default function MoviesContainer(props) {

    const showMovies = () => props.movies.map(movie => <MovieCard movie={movie} species={props.species} showFiltered={props.showFiltered}/>)
    
    return(
        <ul className='movie-container'>
            {showMovies()}
        </ul>
    )
}