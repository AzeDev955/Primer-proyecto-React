import { Header } from "./components/Header";
import { Pokedex } from "./components/Pokedex";
import { useState } from "react";
import type { Pokemon } from "./types";
import { EquipoPokemon } from "./components/EquipoPokemon";
function App() {
  const [team, setTeam] = useState<Pokemon[]>([]);

  const addToTeam = (pokemon: Pokemon) => {
    if (team.length < 6) {
      setTeam([...team, pokemon]);
      console.log("fichado! " + pokemon);
    } else {
      alert("Ya tienes 6 pokemons en el equipo");
      return;
    }
  };
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <Header></Header>
      <EquipoPokemon equipo={team}></EquipoPokemon>
      <Pokedex onAdd={addToTeam}></Pokedex>
    </div>
  );
}

export default App;
