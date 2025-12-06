import type { Pokemon } from "../types";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import "../App.css";

interface EquipoPokemonProps {
  equipo: Pokemon[];
  onRemove: (pokemon: Pokemon) => void;
}
export function EquipoPokemon({ equipo, onRemove }: EquipoPokemonProps) {
  return (
    <div>
      <h3>Mi equipo</h3>
      <Droppable droppableId="mi-equipo" direction="horizontal">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{ display: "flex", gap: "10px" }}
          >
            {equipo.map((pokemon, index) => (
              <Draggable
                key={pokemon.id}
                draggableId={pokemon.id.toString()}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="tarjeta-pokemon"
                  >
                    <h1>{index + 1}</h1>
                    <img src={pokemon.sprite} alt={pokemon.nombre} />
                    <h3>{pokemon.nombre}</h3>
                    <button onClick={() => onRemove(pokemon)}>
                      Dejar en pc
                    </button>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
