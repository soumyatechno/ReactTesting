import { Application } from "./application";
import { render , screen } from '@testing-library/react';

describe("Application",()=>{
  test("render correctly",()=>{
    render(<Application/>)
    const headerElement = screen.getByRole("heading",{level:1});
    expect(headerElement).toBeInTheDocument();
    const subElement = screen.getByRole("heading",{level:2});
    expect(subElement).toBeInTheDocument();
    const paragraphElement = screen.getByText("All field are mendatory!");
    expect(paragraphElement).toBeInTheDocument();
    const nameElement1 = screen.getByRole("textbox",{name: "Name"});
    expect(nameElement1).toBeInTheDocument();
    const nameElment2 = screen.getByLabelText("Name",{
      selector: "input"
    });
    const imageElement = screen.getByAltText("a person with laptop")
    expect(imageElement).toBeInTheDocument();
    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();
    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();

    expect(nameElment2).toBeInTheDocument();
    const nameElment3 = screen.getByPlaceholderText("Fullname");
    expect(nameElment3).toBeInTheDocument();
    const nameElment4 = screen.getByDisplayValue("Soumya");
    expect(nameElment4).toBeInTheDocument();
    const bioElement = screen.getByRole("textbox",{name:"Bio"})
    expect(bioElement).toBeInTheDocument();
    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();
    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  })
})