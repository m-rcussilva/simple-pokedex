import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PokeGame from "./components/PokeGame/PokeGame";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <PokeGame />
                <Footer />
            </div>
        );
    }
}

export default App;
