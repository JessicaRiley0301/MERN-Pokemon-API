

import React, {useState} from 'react';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);

  //fetch method
  const fetchPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
    .then(response => response.json())
    .then(response => {
      console.log(response.results)
      setPokemon(response.results)
    }) 
    .catch(err => {
        console.log(err);
    })
  }

  //axios
  const axiosPokemons = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
    .then(response => {
      console.log(response.data.results)
      setPokemon(response.data.results)
    })
    .catch(err => console.log(err))
  }
  return (

    <div className="App">
      <h1>Pokemon Api</h1>
      <button onClick={fetchPokemons}>Fetch Pokemon</button>
      <button onClick={axiosPokemons}>Axios Pokemon</button>
      <hr/>
      {pokemon.map((pokemon,i) => 
        <ul>
          <li key={i}>{pokemon.name}</li>
        </ul>
        )
      }
    </div>
  );
}

export default App;
