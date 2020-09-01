import React from 'react';
import './App.css';
import MoviesContainer from './container/MoviesContainer.js'
import SpeciesContianer from './container/SpeciesContainer.js'
// import { Route, Link, Switch, Redirect } from 'react-router-dom'


const speciesUrl = 'http://localhost:3000/species'
const moviesUrl = 'http://localhost:3000/movies'

export default class App extends React.Component {
  
  state = {
    species: [],
    filteredSpecies: [],
    movies: []
  }

  componentDidMount(){
    fetch(moviesUrl)
      .then(response => response.json())
      .then(response => this.setState({
        movies: response
      }))
    fetch(speciesUrl)
      .then(response => response.json())
      .then(response => this.setState({
        species: response
      }))
  }
  showFiltered = (species) => {
    this.setState({
      filteredSpecies: species
    })
  }

  render() {
  return (
    <body className="app">
      <div className="top">
        <h1 className="title-page">Studio Ghibli Animations</h1>
        <h2 className="definition">:the state of being full of life or vigor; liveliness</h2>
      </div>
      <h2>Movies</h2>
      <MoviesContainer movies={this.state.movies} species={this.state.species} showFiltered={this.showFiltered}/>
      <h2>Species</h2>
      <SpeciesContianer species={this.state.filteredSpecies}/>
    
    </body>
  );
}
}

