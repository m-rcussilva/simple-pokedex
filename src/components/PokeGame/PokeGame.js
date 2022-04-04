import React, { Component } from "react";
import Pokedex from "../Pokedex/Pokedex";

class PokeGame extends Component {
    static defaultProps = {
        pokemon: [
            { id: 1, name: "Bulbasaur", type: "Grass", base_experience: 64 },
            { id: 2, name: "Ivysaur", type: "Grass", base_experience: 142 },
            { id: 3, name: "Venusaur", type: "Grass", base_experience: 263 },
            { id: 4, name: "Charmander", type: "Fire", base_experience: 62 },
            { id: 5, name: "Charmeleon", type: "Fire", base_experience: 142 },
            { id: 6, name: "Charizard", type: "Fire", base_experience: 267 },
            {
                id: 25,
                name: "Pikachu",
                type: "Electric",
                base_experience: 112,
            },
            {
                id: 26,
                name: "Raichu",
                type: "Electric",
                base_experience: 243,
            },
            { id: 93, name: "Haunter", type: "Poison", base_experience: 142 },
            { id: 94, name: "Gengar", type: "Poison", base_experience: 250 },
            {
                id: 143,
                name: "Snorlax",
                type: "Normal",
                base_experience: 189,
            },
        ],
    };

    render() {
        const handOne = [];
        const handTwo = [...this.props.pokemon];

        while (handOne.length < handTwo.length) {
            const randomIndex = Math.floor(Math.random() * handTwo.length);

            const randomPokemon = handTwo.splice(randomIndex, 1)[0];

            handOne.push(randomPokemon);
        }

        const exp1 = handOne.reduce(
            (exp, pokemon) => exp + pokemon.base_experience,
            0
        );

        const exp2 = handTwo.reduce(
            (exp, pokemon) => exp + pokemon.base_experience,
            0
        );

        return (
            <div className="pokegame-container">
                <Pokedex pokemon={handOne} exp={exp1} isWinner={exp1 > exp2} />
                <Pokedex pokemon={handTwo} exp={exp2} isWinner={exp2 > exp1} />
            </div>
        );
    }
}

export default PokeGame;
