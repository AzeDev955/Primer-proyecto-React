import banner from "../assets/pokebanner.png";

export function Header() {
  return (
    <header
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "20vh",
        marginBottom: "5vh",
      }}
    >
      <h1>Tu equipo Pokemon</h1>
    </header>
  );
}
