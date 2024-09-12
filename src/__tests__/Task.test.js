import "@testing-library/jest-dom"; // Import this at the top of your test file
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../components/App';

test("is removed from the list when the delete button is clicked", () => {
  render(<App />);

  const task = screen.getByText("Buy rice");
  const deleteButton = task.parentElement.querySelector("button");

  fireEvent.click(deleteButton);

  // Ensure the task is no longer in the document after deletion
  expect(screen.queryByText("Buy rice")).not.toBeInTheDocument();
});
