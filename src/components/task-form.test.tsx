import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TaskForm from "./task-form";
import '@testing-library/jest-dom';

describe("task-form", () => {
  it("add to do button works", () => {
    render(<TaskForm />);

    const inputElement = screen.getByPlaceholderText('Add an item');
    const addTaskButton = screen.getByText("Add Task");

    fireEvent.change(inputElement, { target: { value: 'Do the washing!' } });
    fireEvent.click(addTaskButton);

    // const taskListItem = screen.getByText('Do the washing!');
    expect(screen.getByText('Do the washing!')).toBeInTheDocument();
  });
});
