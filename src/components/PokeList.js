import React from 'react';
import Pokecell from './Pokecell'
import { pokeClasses } from './pokeClasses'
import './styles/PokeList.css';
import { render } from '@testing-library/react';

const PokeList = ({ handleOnClick}) => {
    const cells = pokeClasses.map(pokeClass => {
    return (
        <Pokecell
            key={pokeClass.id}
            pokeClass={pokeClass}
            handleOnClick={handleOnClick}
            />
    );
    });

    return (
        <section className="poke-list">
            { cells }
        </section>
    );
    };

    export default PokeList;