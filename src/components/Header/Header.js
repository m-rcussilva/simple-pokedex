import React, { Component } from "react";
import PokemonLogo from "../../images/pokemon-logo.png";
import "./header.css";

class Header extends Component {
    render() {
        return (
            <div className="pokemon-container">
                <img
                    src={PokemonLogo}
                    alt="Pokémon logo"
                    className="pokemon-logo"
                />
            </div>
        );
    }
}

export default Header;
