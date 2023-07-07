import { render, screen } from "@testing-library/react";
import Home from "./app/page";
import Fretboard from "./app/Components/Fretboard";
import String from "./app/Components/String";
import Fret from "./app/Components/Fret";

// write a test for the home page
describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);
    //

    // const heading = screen.getByRole('heading', {
    //     name: /welcome to next\.js!/i,
    // })
    //
    // expect(heading).toBeInTheDocument()
  });
});

// write a test for the fretboard component
describe("Fretboard", () => {
  it("renders a fretboard", () => {
    render(<Fretboard />);

    // const heading = screen.getByRole('heading', {
    //     name: /welcome to next\.js!/i,
    // })
    //
    // expect(heading).toBeInTheDocument()
  });
});

// write a test for the string component
describe("String", () => {
  it("renders a string", () => {
    render(<String />);

    // const heading = screen.getByRole('heading', {
    //     name: /welcome to next\.js!/i,
    // })
    //
    // expect(heading).toBeInTheDocument()
  });
});

// write a test for the fret component
describe("Fret", () => {
  it("renders a fret", () => {
    render(<Fret />);

    // const heading = screen.getByRole('heading', {
    //     name: /welcome to next\.js!/i,
    // })
    //
    // expect(heading).toBeInTheDocument()
  });
});
