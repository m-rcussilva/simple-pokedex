import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <div className="container-footer">
                <a
                    className="github-link"
                    href="https://github.com/m-rcussilva/simple-pokedex"
                >
                    Github
                </a>
            </div>
        );
    }
}

export default Footer;
