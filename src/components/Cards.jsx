
import { useState } from 'react';
import styles from './Cards.module.css';

const pokemonTypes = [
  { type: "normal", color: "#a4acaf" },
  { type: "fighting", color: "#d56723" },
  { type: "flying", color: "#bdb9b8" },
  { type: "poison", color: "purple" },
  { type: "ground", color: "#a38c21" },
  { type: "rock", color: "black" },
  { type: "bug", color: "green" },
  { type: "ghost", color: "#7b62a3" },
  { type: "steel", color: "gray" },
  { type: "fire", color: "#fd7d24" },
  { type: "water", color: "blue" },
  { type: "grass", color: "green" },
  { type: "electric", color: "#eed535" },
  { type: "psychic", color: "purple" },
  { type: "ice", color: "#4592c4" },
  { type: "dragon", color: "blue" },
  { type: "dark", color: "black" },
  { type: "fairy", color: "pink" }
];

const Cards = ({poke}) => {



  return (
    <div className={styles.card_single}>
        <img src={poke.sprites.other.dream_world.front_default} alt="" />

        <h2>{poke.name}</h2>

        <div className={styles.abilidade_type}>

        {poke.types.map((pokeType) => {
          const foundType = pokemonTypes.find((type) => type.type === pokeType.type.name);

          const backgroundColor = foundType ? foundType.color : "black";

          return <p 
          key={pokeType.type.name} 
          style={{ backgroundColor: backgroundColor }}>{pokeType.type.name}</p>;
        })}

        </div>
    </div>
  )
}

export default Cards