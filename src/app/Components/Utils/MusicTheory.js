export const Notes = [
  "A",
  "A#",
  "B",
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
];

export const PitchedNotes = [
  "A2",
  "A#2",
  "B2",
  "C2",
  "C#2",
  "D2",
  "D#2",
  "E2",
  "F2",
  "F#2",
  "G2",
  "G#2",
  "A3",
  "A#3",
  "B3",
  "C3",
  "C#3",
  "D3",
  "D#3",
  "E3",
  "F3",
  "F#3",
  "G3",
  "G#3",
  "A4",
  "A#4",
  "B4",
  "C4",
  "C#4",
  "D4",
  "D#4",
  "E4",
  "F4",
  "F#4",
  "G4",
  "G#4",
  "A5",
  "A#5",
  "B5",
  "C5",
  "C#5",
  "D5",
  "D#5",
  "E5",
  "F5",
  "F#5",
  "G5",
  "G#5",
  "A6",
  "A#6",
  "B6",
  "C6",
  "C#6",
  "D6",
  "D#6",
  "E6",
  "F6",
  "F#6",
  "G6",
  "G#6",
  "A7",
  "A#7",
  "B7",
  "C7",
  "C#7",
  "D7",
  "D#7",
  "E7",
  "F7",
  "F#7",
  "G7",
  "G#7",
];

export const Scales = {
  Fifths: [0, 7],
  "Pentatonic Minor": [0, 3, 5, 7, 10],
  "Pentatonic Major": [0, 2, 4, 7, 9],
  Ionian: [0, 2, 4, 5, 7, 9, 11],
  Dorian: [0, 2, 3, 5, 7, 9, 10],
  Phrygian: [0, 1, 3, 5, 7, 8, 10],
  Lydian: [0, 2, 4, 6, 7, 9, 11],
  Mixolydian: [0, 2, 4, 5, 7, 9, 10],
  Aeolian: [0, 2, 3, 5, 7, 8, 10],
  Locrian: [0, 1, 3, 5, 6, 8, 10],
};

export const Intervals = [
  "R",
  "m2",
  "M2",
  "m3",
  "M3",
  "P4",
  "TT",
  "P5",
  "m6",
  "M6",
  "m7",
  "M7",
];

export class Note {
  constructor(name, interval, active) {
    this.name = name;
    this.interval = interval;
    this.active = active;
  }
}

export const initSelectedIntervals = [
  { name: "A", active: true, interval: "R" },
  { name: "A#", active: false, interval: "m2" },
  { name: "B", active: true, interval: "M2" },
  { name: "C", active: false, interval: "m3" },
  { name: "C#", active: true, interval: "M3" },
  { name: "D", active: true, interval: "P4" },
  { name: "D#", active: false, interval: "TT" },
  { name: "E", active: true, interval: "P5" },
  { name: "F", active: false, interval: "m6" },
  { name: "F#", active: true, interval: "M6" },
  { name: "G", active: false, interval: "m7" },
  { name: "G#", active: true, interval: "M7" },
];

export function calculateSelectedIntervals(tonic, scale) {
  const selectedIntervals = [];
  const scaleNotes = Scales[scale];
  const tonicIndex = Notes.indexOf(tonic);
  const tonicNote = Notes[tonicIndex];
  const tonicPitch = PitchedNotes[tonicIndex];
  scale.forEach((intervalIndex) => {
    const interval = Intervals[intervalIndex];
    const note = Notes[(tonicIndex + intervalIndex) % 12];
    const intervalActive = true;
    selectedIntervals.push({
      name: note,
      interval: interval,
      active: intervalActive,
    });
  });
  return selectedIntervals;
}

//export default Notes; // = Scales;
//export default PitchedNotes;
//export default Scales;
//export default Intervals;
