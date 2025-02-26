import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import TaskForm from "./task-form";
import "@testing-library/jest-dom";

describe("TaskForm", () => {
  it("check if error message is thrown if no task is entered", async () => {
    render(<TaskForm />);
  
    const addTaskButton = screen.getByText("Add Task");

    await userEvent.click(addTaskButton);

    expect(await screen.findByText("String must contain at least 1 character(s)")).toBeInTheDocument();
  });
});
