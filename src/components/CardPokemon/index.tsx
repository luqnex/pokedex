import React from "react";

import { 
    Card,
} from './styled'

type Pokemons = {
    name: string;
    url: string;
};

export function CardPokemon({ name, url }: Pokemons) {
    const pokemonIndex = url.split('/')[url.split('/').length - 2]
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonIndex}.svg`
    const dataPokemon = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`

    return (
        <Card>
            <img src={imageUrl} alt="" />
            <p>{ name }</p>
        </Card>
    )
}