import { elements } from "chart.js";
import { useState, useEffect } from "react";
import InfiniteScroll from 'react-infinite-scroller';

import Cards from "../components/Cards";
import GraBar from "../components/graphics/GraBar";
import GraDoughnut from "../components/graphics/GraDoughnut";

import './Painel.css';

const typePokemon = import.meta.env.VITE_PAISES_API_POKEMON_TYPE

const AllPokemons = import.meta.env.VITE_PAISES_API_ALL_POKEMONS

const Painel = () => {

  const [type, setType] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  const [listPokemons, setListPokemons] = useState([]);

  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const  [userData, setUserData] = useState({});

  useEffect(() => {

    const generateColor = () => {
      return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    }
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
    
      const dados = {
        labels: type.map((dados) => dados.name),
        datasets: [{
          label: 'Total de pokemons',
          data: pokemons.map((arry) => arry.pokemon.length),
          backgroundColor: pokemonTypes.map((arr) => arr.color),
        }],
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false
            }
          }
        }
      };

      setUserData(dados);

      setTimeout(() => {
        setIsDataLoaded(true);
    }, 3000);
    

  }, [pokemons, type]);

  const getType = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setType(data.results);

    const pokemonsPromises = data.results.map((element) => {
      return fetch(element.url).then(res => res.json());
    });

    return Promise.all(pokemonsPromises);
  }

  const getPokemons = async(url) =>{
    const res = await fetch(url);
    const data = await res.json();

    const pokemonsPromises = data.results.map(pokemon => {
      return fetch(pokemon.url).then(res => res.json());
    });
    return Promise.all(pokemonsPromises);
  }


  useEffect(() => {
    const typePokemonURL = `${typePokemon}`

    const AllPokemonsURL = `${AllPokemons}?limit=1279`;

    getType(typePokemonURL).then(data => {
        setPokemons(data);
    })

    getPokemons(AllPokemonsURL).then(data => {
      setListPokemons(data);
    })

  }, []);

  return (

    <div className="panel">

      <div className="panel-introdution flex">

        <div className="panel-introdution-title border-principal">
        <h2>Ola, bem vindo Samuel !</h2>
            <p>Fusce sollicitudin, dolor id pulvinar tempus, dolor sapien tincidunt risus, at vulputate lacus leo non augue. Cras placerat vel lacus id rutrum. Quisque feugiat dui at fermentum rutrum. Proin non orci feugiat, rutrum augue at, tempus nibh. Duis sapien nisi, viverra non luctus non, euismod id ipsum. Mauris hendrerit metus nec dolor egestas, vel gravida ex fermentum. Suspendisse nec ex quis erat laoreet ultrices. Integer eu tellus ut massa interdum congue eu ac nisi. Phasellus non lectus vel neque gravida tristique. Sed tristique nisl in porttitor auctor.</p>
        </div>

        <div className="panel-introdution-data border-principal">
            <h2>Ultima visita a:</h2>
            <h2>5 dias</h2>
        </div>

      </div>

      <div className="panel-dashboard border-principal">

        <h2>Tipos de pokemons</h2>

        <div className="grafics flex">
        { isDataLoaded 
        ? <GraDoughnut data={userData}/>
        : <div className="loading">Loading...</div>
        }

        { isDataLoaded 
        ? <GraBar data={userData}/>
        : <div className="loading">Loading...</div>
        }
        </div>

      </div>

      <div className="component-list border-principal container">

      <h2>Pokedex</h2>

        <InfiniteScroll 
        pageStart={0}
        loadMore={getPokemons()}
        hasMore={true}
        loader={<div className="loading">Loading...</div>}
        >

        <div className="flex list-pokemons">

          {
            listPokemons.map((poke) => (
              <Cards key={poke.id} poke={poke}/>
            ))
          }

        </div>
        </InfiniteScroll>

      </div>

    </div>
  )
}

export default Painel