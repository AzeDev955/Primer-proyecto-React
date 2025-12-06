import type { Pokemon } from "../types";
import "../App.css";
const pokemons: Pokemon[] = [
  {
    id: 1,
    nombre: "Bulbasaur",
    nivel: 12,
    vida: 100,
  },
  {
    id: 2,
    nombre: "Charmander",
    nivel: 20,
    vida: 374,
  },
  {
    id: 3,
    nombre: "Squirtle",
    nivel: 80,
    vida: 1000,
  },
];
interface PokedexProps {
  onAdd: (pokemon: Pokemon) => void; // Recibe una función que no devuelve nada
}

export function Pokedex({ onAdd }: PokedexProps) {
  return (
    <div>
      <h2>Pokedex</h2>
      {pokemons.map((pokemon, index) => (
        <div key={pokemon.id} className="tarjeta-pokemon">
          <h1>{index + 1}</h1>
          <h3>Nombre: {pokemon.nombre}</h3>
          <h3>Nivel: {pokemon.nivel}</h3>
          <h3>Vida: {pokemon.vida}</h3>
          <button onClick={() => onAdd(pokemon)}>Sacar pokemon</button>
        </div>
      ))}
    </div>
  );
}
