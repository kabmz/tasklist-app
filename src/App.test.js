import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component with "ToDoList" heading', () => {
  render(<App />);
  
  // Assuming your App component renders a heading with the text "ToDoList"
  const headingElement = screen.getByText(/ToDoList/i);
  expect(headingElement).toBeInTheDocument();
});

