import React from 'react'
import SpeciesCard from '../components/SpeciesCard.js'

export default function SpeciesContainer(props) {

    const showSpecies = () => props.species.map(species => <SpeciesCard species={species}/>)
    
    return(
        <ul className='species-container'>
            {showSpecies()}
        </ul>
    )
}