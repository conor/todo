import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "@/app";

describe("app component", () => {
  it("renders to do list to screen ", () => {
    render(<App />);

    expect(screen.getByText("To do list")).toBeInTheDocument();
  });
});