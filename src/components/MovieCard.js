import React from 'react'
// import SpeciesCard from './SpeciesCard'

export default class MovieCard extends React.Component {

    
    handleEvent = (event) => {
        const species = this.props.species
        let name = this.props.movie.name
        console.log(name)
        let filtered = species.filter(species => species.movie_titles.includes(name))
        console.log(filtered)
        this.props.showFiltered(filtered)
    }

    
    render(){
    return(
        <li className='movie-card' onClick={this.handleEvent}>
            <h2>{this.props.movie.name}</h2>
            <img 
                className='movie-image' 
                src={this.props.movie.image} alt=""
                />
        </li>
    )
    }
}