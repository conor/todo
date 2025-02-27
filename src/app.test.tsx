import { render, screen } from "@testing-library/react";

import { describe, it, expect } from "vitest";
import '@testing-library/jest-dom'
import App from "./app";

describe("TaskForm", () => {
  it("check if error message is thrown if no task is entered",() => {
    render(<App/>);
    
    expect(screen.getByText('Todo list')).toBeInTheDocument();

  });
});
