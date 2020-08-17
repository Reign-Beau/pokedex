import React from 'react'
import PokeList from "./PokeList";
import './styles/Pokecell.css'
import sprites from "../assets/sprites/sprites.png"

const Pokecell = ({ pokeClass, handleOnClick }) => {
    const { id, backgroundPosition } = pokeClass;
    const style = { backgroundImage: `url(${sprites})`,
        backgroundPosition };

    return <button onClick={ () => handleOnClick(id) } style={style} className="poke-cell"></button>
};

export default Pokecell;