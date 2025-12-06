import type { Pokemon } from "../types";
import "../App.css";
import { useState, useEffect } from "react";

const estiloBoton = {
  backgroundColor: "#D32F2F",
  color: "white",
  padding: "8px 16px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
  marginTop: "10px",
};

const capitalize = (s: string) => {
  if (!s) return s; // Si el nombre está vacío o es null, devuelve vacío.
  // Toma la primera letra, la pone en mayúscula, y le añade el resto del string.
  return s.charAt(0).toUpperCase() + s.slice(1);
};
interface PokedexProps {
  onAdd: (pokemon: Pokemon) => void;
}

export function Pokedex({ onAdd }: PokedexProps) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((response) => response.json())
      .then((data) => {
        const listaLimpia = data.results.map((pokemon: any, index: number) => ({
          id: index + 1,
          nombre: capitalize(pokemon.name),
          nivel: Math.floor(Math.random() * 100) + 1,
          vida: Math.floor(Math.random() * 500) + 1,
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
