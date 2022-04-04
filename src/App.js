import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import PokeGame from "./components/PokeGame/PokeGame";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <PokeGame />
            </div>
        );
    }
}

export default App;
