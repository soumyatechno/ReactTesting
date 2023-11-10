import { render, screen } from '@testing-library/react';
import { Greet } from './greet';
test("greeting us rendered", ()=> {
render(<Greet />);
const greetingElement = screen.getByText("Hello");
expect(greetingElement).toBeInTheDocument();
})

test("custom grteeting is rendered", ()=> {
  render(<Greet name="Soumya"/>);
  const greetingElement = screen.getByText("Hello Soumya");
  expect(greetingElement).toBeInTheDocument();
  })