import React, { Component } from "react";
import { BASE_URL } from "../../constants/urls";
import "./Pokecard.css";

const padToThree = (number) =>
    number <= 999 ? `00${number}`.slice(-3) : number;

class Pokecard extends Component {
    render() {
        const { id, name, type, exp } = this.props;

        const imgSrc = `${BASE_URL}${padToThree(id)}.png`;

        return (
            <div>
                <div className="pokecard">
                    <img src={imgSrc} alt={name} className="pokecard-img" />

                    <div className="specifications">
                        <h3 className="pokecard-name">{name}</h3>
                        <p className="pokecard-desc">
                            <b>Type:</b> {type}
                        </p>
                        <p className="pokecard-desc">
                            <b>Exp:</b> {exp}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pokecard;
