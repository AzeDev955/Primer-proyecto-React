import type { Pokemon } from "../types";

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
      {pokemons.map((pokemon) => (
        <div
          key={pokemon.id}
          style={{ border: "1px solid black", padding: "10px", margin: "10px" }}
        >
          <h3>Nombre: {pokemon.nombre}</h3>
          <h3>Nivel: {pokemon.nivel}</h3>
          <h3>Vida: {pokemon.vida}</h3>
          <button onClick={() => onAdd(pokemon)}>Sacar pokemon</button>
        </div>
      ))}
    </div>
  );
}
