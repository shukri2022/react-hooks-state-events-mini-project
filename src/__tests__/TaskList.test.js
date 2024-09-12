import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TaskList from "../components/TaskList";
import { TASK_DATA } from "../data";

test("displays all items when initially rendered", () => {
  render(<TaskList tasks={TASK_DATA} />);

  const tasks = screen.getAllByRole("listitem");
  expect(tasks).toHaveLength(TASK_DATA.length);
});
