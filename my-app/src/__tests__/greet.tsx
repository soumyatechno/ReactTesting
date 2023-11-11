import { render, screen } from '@testing-library/react';
import { Greet } from '../components/greet/greet';

describe("Greet Component", ()=>{
  fit("rendered", ()=> {
    render(<Greet />);
    const greetingElement = screen.getByText("Hello");
    expect(greetingElement).toBeInTheDocument();
    })
  
});

describe("Nested Component", ()=>  {test(" name is rendered", ()=> {
  render(<Greet name="Soumya"/>);
  const greetingElement = screen.getByText("Hello Soumya");
  expect(greetingElement).toBeInTheDocument();
  })}
)
