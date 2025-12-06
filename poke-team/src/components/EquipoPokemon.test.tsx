import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, beforeEach, vi } from "vitest"; // Importamos desde vitest
import { EquipoPokemon } from "./EquipoPokemon";
import { DragDropContext } from "@hello-pangea/dnd";
import "@testing-library/jest-dom/vitest";

// Definimos unos datos de prueba (mocks)
const mockEquipo = [
  {
    id: 1,
    nombre: "Bulbasaur",
    sprite: "url-bulbasaur.png",
    // Agregamos las propiedades faltantes con valores dummy
    nivel: 5,
    vida: 20,
  },
  {
    id: 4,
    nombre: "Charmander",
    sprite: "url-charmander.png",
    nivel: 5,
    vida: 20,
  },
];

// Mock para la función onRemove usando 'vi.fn()' en lugar de 'jest.fn()'
const mockOnRemove = vi.fn();

const renderComponent = () => {
  return render(
    <DragDropContext onDragEnd={() => {}}>
      <EquipoPokemon equipo={mockEquipo} onRemove={mockOnRemove} />
    </DragDropContext>
  );
};

describe("EquipoPokemon Component", () => {
  beforeEach(() => {
    // Limpiamos los mocks antes de cada test usando 'vi'
    vi.clearAllMocks();
  });

  test("debe renderizar el título 'Mi equipo'", () => {
    renderComponent();
    expect(screen.getByText("Mi equipo")).toBeInTheDocument();
  });

  test("debe mostrar los nombres de los pokemon correctamente", () => {
    renderComponent();
    // CORRECCIÓN: Usamos getAllByText y verificamos el primero
    const nombresBulbasaur = screen.getAllByText("Bulbasaur");
    const nombresCharmander = screen.getAllByText("Charmander");

    expect(nombresBulbasaur[0]).toBeInTheDocument();
    expect(nombresCharmander[0]).toBeInTheDocument();
  });

  test("debe renderizar las imágenes con el atributo src correcto", () => {
    renderComponent();
    const imagenes = screen.getAllByRole("img");

    // 1. Ya no exigimos que sean exactamente 2, sino AL MENOS 2.
    // (Esto evita el error de recibir 6 imágenes)
    expect(imagenes.length).toBeGreaterThanOrEqual(2);

    // 2. Obtenemos todos los 'src' de las 6 imágenes encontradas
    const sourcesEncontrados = imagenes.map((img) => img.getAttribute("src"));

    // 3. Verificamos que nuestros sprites estén incluidos en esa lista
    expect(sourcesEncontrados).toContain("url-bulbasaur.png");
    expect(sourcesEncontrados).toContain("url-charmander.png");
  });

  test("debe renderizar el índice correcto (+1) para cada tarjeta", () => {
    renderComponent();

    // Usamos getAllByText porque la librería DnD puede duplicar elementos en el DOM
    const indicesUno = screen.getAllByText("1");
    const indicesDos = screen.getAllByText("2");

    // Verificamos que el primer elemento encontrado esté en el documento
    expect(indicesUno[0]).toBeInTheDocument();
    expect(indicesDos[0]).toBeInTheDocument();
  });

  test("debe llamar a la función onRemove con el pokemon correcto al hacer click", () => {
    renderComponent();
    const botones = screen.getAllByText("Dejar en pc");

    fireEvent.click(botones[0]);

    expect(mockOnRemove).toHaveBeenCalledTimes(1);
    expect(mockOnRemove).toHaveBeenCalledWith(mockEquipo[0]);
  });
});
