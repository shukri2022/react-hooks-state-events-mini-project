import '@testing-library/jest-dom'; // For matchers like `toBeInTheDocument`
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../components/App';

test('adds a new item to the list when the form is submitted', () => {
  render(<App />);

  const input = screen.getByPlaceholderText('New task details');
  const select = screen.getByDisplayValue('Work'); // "Work" is the default selected value

  // Simulate user input
  fireEvent.change(input, { target: { value: 'Pass the tests' } });
  fireEvent.change(select, { target: { value: 'Code' } });

  // Submit the form
  fireEvent.click(screen.getByText('Add task'));

  // Verify that the task is now in the document with the correct category
  expect(screen.getByText('Pass the tests')).toBeInTheDocument();

  // Find the task category by looking for the span containing 'Code' within the task
  const taskCategory = screen.getAllByText('Code').find((el) => el.tagName === 'SPAN');
  expect(taskCategory).toBeInTheDocument(); // Ensure it’s correctly in the document
});

