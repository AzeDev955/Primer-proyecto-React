import type { Pokemon } from "../types";

interface EquipoPokemonProps {
  equipo: Pokemon[];
}
export function EquipoPokemon({ equipo }: EquipoPokemonProps) {
  return (
    <div>
      <h3>Mi equipo</h3>
      <div style={{ display: "flex", gap: "10px" }}>
        {equipo.map((pokemon) => (
          <div key={pokemon.id}>
            <h3>{pokemon.nombre}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
