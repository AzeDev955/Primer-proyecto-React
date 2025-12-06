import type { Pokemon } from "../types";
import "../App.css";
import { useState, useEffect } from "react";

const estiloBoton = {
  backgroundColor: "#D32F2F", // Un rojo profundo y sólido
  color: "white",
  padding: "8px 16px", // Espacio interno
  borderRadius: "5px", // Esquinas redondeadas
  border: "none", // Quitamos el borde gris por defecto
  cursor: "pointer", // Indicamos que es clickable
  fontWeight: "bold", // Texto en negrita para mejor lectura
  marginTop: "10px", // Separación de los datos de Vida
};
interface PokedexProps {
  onAdd: (pokemon: Pokemon) => void; // Recibe una función que no devuelve nada
}

export function Pokedex({ onAdd }: PokedexProps) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100") // 1. Llamamos a la API
      .then((response) => response.json()) // 2. Convertimos la respuesta a JSON
      .then((data) => {
        // 3. Aquí tenemos los datos

        // data.results es la lista cruda de la API. Vamos a limpiarla:
        const listaLimpia = data.results.map((pokemon: any, index: number) => ({
          id: index + 1,
          nombre: pokemon.name,
          nivel: Math.floor(Math.random() * 100) + 1, // Generamos nivel al azar
          vida: Math.floor(Math.random() * 500) + 1, // Generamos vida al azar
          sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`,
        }));
        setPokemons(listaLimpia);
      });
  }, []);
  return (
    <div>
      <h2>Pokedex</h2>
      {pokemons.map((pokemon, index) => (
        <div
          key={pokemon.id}
          className="tarjeta-pokemon"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>{index + 1}</h1>
          <img src={pokemon.sprite} alt="" />
          <h3>Nombre: {pokemon.nombre}</h3>
          <h3>Nivel: {pokemon.nivel}</h3>
          <h3>Vida: {pokemon.vida}</h3>
          <button onClick={() => onAdd(pokemon)} style={estiloBoton}>
            Sacar pokemon
          </button>
        </div>
      ))}
    </div>
  );
}
