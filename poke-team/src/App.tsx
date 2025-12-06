import { Header } from "./components/Header";
import { Pokedex } from "./components/Pokedex";
function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <Header></Header>
      <Pokedex></Pokedex>
    </div>
  );
}

export default App;
