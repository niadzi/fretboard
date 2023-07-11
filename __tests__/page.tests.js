import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ScaleProvider, useScale } from "./ScaleContext";
import { FretBoard, GuitarString, Fret } from "./Fretboard";

// Mock the ScaleProvider
jest.mock("./ScaleContext", () => ({
  useScale: jest.fn(),
  ScaleProvider: jest.fn(({ children }) => children),
}));

test("renders fretboard", () => {
  const { getByTestId } = render(<FretBoard />);
  const fretboardElement = getByTestId("fretboard");
  expect(fretboardElement).toBeInTheDocument();
});

test("displays correct note on GuitarString", () => {
  const note = "C";
  const { getByText } = render(
    <ScaleProvider>
      <GuitarString note={note} />
    </ScaleProvider>,
  );

  const noteElement = getByText(note);
  expect(noteElement).toBeInTheDocument();
});

test("displays correct note on Fret", () => {
  const note = "C";
  const { getByText } = render(
    <ScaleProvider>
      <Fret note={note} />
    </ScaleProvider>,
  );

  const noteElement = getByText(note);
  expect(noteElement).toBeInTheDocument();
});

test("updates root note when Fret is clicked", () => {
  const note = "C";
  const { getByText } = render(
    <ScaleProvider>
      <Fret note={note} />
    </ScaleProvider>,
  );

  const fretElement = getByText(note);
  fireEvent.click(fretElement);

  // We'll assume that useScale().rootNote gives us the current root note
  const { rootNote } = useScale();
  expect(rootNote).toBe(note);
});
