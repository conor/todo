import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import TaskForm from "@/components/task-form";
import App from "@/app";
import "@testing-library/jest-dom";

describe("TaskForm", () => {
  it("check if error message is thrown if no task is entered", async () => {
    render(<TaskForm />);
    
    const addTaskButton = screen.getByText("Add Task");

    await userEvent.click(addTaskButton);

    expect(await screen.findByText("String must contain at least 1 character(s)")).toBeInTheDocument();
  });

  it("check if task is added to the list", async () => {
    render(<App/>);
    const taskInput = screen.getByPlaceholderText("Add an item");
    const addTaskButton = screen.getByText("Add Task");
    

    await userEvent.type(taskInput, "Test task");
    await userEvent.click(addTaskButton);

    expect(await screen.findByText("Test task")).toBeInTheDocument();
  });
});
