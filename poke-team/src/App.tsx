import { Header } from "./components/Header";
import { Pokedex } from "./components/Pokedex";
import { useState } from "react";
import type { Pokemon } from "./types";
import { EquipoPokemon } from "./components/EquipoPokemon";
import { DragDropContext } from "@hello-pangea/dnd";
import type { DropResult } from "@hello-pangea/dnd";
import "./App.css";

function App() {
  const [team, setTeam] = useState<Pokemon[]>([]);

  const addToTeam = (pokemon: Pokemon) => {
    const enEquipo = team.some((p) => p.id === pokemon.id);
    if (enEquipo) {
      alert("Ya tienes este pokemon en el equipo");
      return;
    }
    if (team.length < 6) {
      setTeam([...team, pokemon]);
      console.log("fichado! " + pokemon.nombre);
    } else {
      alert("Ya tienes 6 pokemons en el equipo");
      return;
    }
  };

  const removeFromTeam = (pokemon: Pokemon) => {
    if (team.length > 0) {
      const nuevoEquipo = team.filter((p) => p.id !== pokemon.id);
      setTeam(nuevoEquipo);
    } else {
      alert("No tienes pokamions");
    }
  };
  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const items = Array.from(team);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTeam(items);
  };
  return (
    <div className="contenedor-principal">
      <Header></Header>
      <div className="tablero-juego">
        <div className="columna">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <EquipoPokemon
              equipo={team}
              onRemove={removeFromTeam}
            ></EquipoPokemon>
          </DragDropContext>
        </div>
        <div className="columna">
          <Pokedex onAdd={addToTeam}></Pokedex>
        </div>
      </div>
    </div>
  );
}

export default App;
