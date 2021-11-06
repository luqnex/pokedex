import React, { useEffect, useState } from 'react';
import { api } from './service/api';

type Pokemons = {
  name: string;
  url: string;
}

function App() {
  const [pokemons, setPokemons] = useState<Pokemons[]>([])
  
  useEffect(() => {
    api.get('/pokemon')
    .then((response) => setPokemons(response.data.results))
    .catch((err) => {
      console.log(err)
    })
  }, [])
  
  console.log(pokemons)
  return (
    <div>
      {
        pokemons.map(pokemon => {
          return (
            <div key={pokemon.name}>
              <p>{ pokemon.name }</p>
              <p>{ pokemon.url }</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
