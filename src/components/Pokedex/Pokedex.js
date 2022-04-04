import React, { Component } from "react";
import Pokecard from "../Pokecard/Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
    render() {
        const getPokemons = this.props.pokemon.map((p, index) => {
            return (
                <div key={index}>
                    <Pokecard
                        id={p.id}
                        name={p.name}
                        type={p.type}
                        exp={p.base_experience}
                    />
                </div>
            );
        });

        let whoWon;
        if (this.props.isWinner) {
            whoWon = (
                <div className="pokedex-text-container">
                    <p className="the-winner pokedex-para">Winner! 🎉</p>
                </div>
            );
        } else {
            whoWon = (
                <div className="pokedex-text-container">
                    <p className="the-loser">Loser! 🙁</p>
                </div>
            );
        }

        return (
            <div>
                <div className="pokedex-text-container">
                    <h1 className="pokedex-title">Pokedex</h1>
                </div>

                <div className="pokedex-text-container">
                    <p className="pokedex-para">
                        Total experience: {this.props.exp}
                    </p>
                </div>

                {whoWon}

                <div className="pokedex-container">{getPokemons}</div>
            </div>
        );
    }
}

export default Pokedex;
