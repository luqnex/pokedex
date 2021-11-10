import React, { useEffect, useState } from "react";
import { CardPokemon } from "../../components/CardPokemon/index";
import { api } from "../../service/api";

import { 
  Container,
  Content,
} from './styled'

type Pokemons = {
  name: string;
  url: string;
};

type LoadMore = {
  next: string;
}

export function Home() {
  const [pokemons, setPokemons] = useState<Pokemons[]>([]);
  const [loadMore, setLoadMore] = useState<LoadMore[]>([])
  // const [pokemon, setPokemon] = useState([]);

  useEffect( () => {
    api
      .get("/pokemon/?offset=0&limit=20")
      .then((response) => setPokemons(response.data.results))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Set Load More
  useEffect(() => {
    api
      .get("/pokemon/?offset=0&limit=20")
      .then((response) => setLoadMore(response.data.next))
      .catch((err) => {
        console.log(err);
      });
  }, [])

  const loadMorePokemons = () => {
      console.log(loadMore)
  }

  // useEffect(() => {
  //   // Pega a imagem dos pokemons
  //   pokemons.map(async (pokemon) => {
  //     return await api
  //       .get(`/pokemon/${pokemon.name}?offset=20&limit=20`)
  //       .then((response) => setPokemon(response.data.sprites.other.dream_world.front_default))
  //       .catch((err) => {
  //         console.log(err);
  //       });

  //       //response.data.sprites.other.dream_world.front_default
  //   });
  // }, [pokemons]);

  return (
    <Container>
      <Content>
        {
          pokemons.map(pokemon => {
            return (
              <CardPokemon
                key={ pokemon.name } 
                name={ pokemon.name } 
                url={ pokemon.url }
              />
            )
          })
        }

        <button onClick={loadMorePokemons}>Next</button>
      </Content>
    </Container>
  );
}
