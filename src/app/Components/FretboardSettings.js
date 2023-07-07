// This component is used to input and display the fretboard settings.

import React from "react";
import { useState } from "react";
import { useActiveIntervals } from "./Store/ActiveIntervalsContext";
import { useTonic } from "./Store/TonicContext";
import { useNumberOfFrets } from "./Store/NumberOfFretsContext";
import { useTuning } from "./Store/TuningContext";
import { useLeftHanded } from "./Store/LeftHandedContext";
import { useFretWidths } from "./Store/FretWidthsContext";
