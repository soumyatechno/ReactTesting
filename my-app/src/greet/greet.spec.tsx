import { render, screen } from '@testing-library/react';
import { Greet } from '../components/greet/greet';

describe("Greet Component", ()=>{
  xit("rendered", ()=> {
    render(<Greet />);
    const greetingElement = screen.getByText("Hello");
    expect(greetingElement).toBeInTheDocument();
    })
  
});

describe("Nested Component", ()=>  {
  xit(" name is rendered", ()=> {
  render(<Greet name="Soumya"/>);
  const greetingElement = screen.getByText("Hello Soumya");
  expect(greetingElement).toBeInTheDocument();
  })}
)
