import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header", () => {
  test("debe mostrar el titulo principal", () => {
    const { container } = render(<Header></Header>);
    screen.debug();
    const h1 = container.querySelector("h1");
    expect(h1?.innerHTML).toContain("Tu equipo Pokemon");
  });
});
