import React from 'react'

export default function SpeciesCard(props){

    const { name, classification, eye_colors, hair_colors, movie_titles, image } = props.species

    return(
        <li className='species-card'>
            <h3>Name: {name}</h3>
            <p>Classification: {classification}</p>
            <p>Eye Colors: {eye_colors}</p>
            <p>Hair Colors: {hair_colors}</p>
            <p>Movies: {movie_titles}</p>
            <img className='species-image' src={image} alt=''/>
        </li>
    )
}