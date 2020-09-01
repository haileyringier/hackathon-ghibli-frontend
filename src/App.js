import React from 'react';
import './App.css';


const baseUrl = 'http://localhost:3000/species'
export default class App extends React.Component {
  

  state = {
    species = []
  }

  componentDidMount(){
    fetch(baseUrl)
  }

  render() {
  return (
    <div className="App">
      
    </div>
  );
}
}

export default App;
