import * as React from 'react';

type FretboardProps = {
    message: string;
}; /* use `interface` if exporting so that consumers can extend */

// Easiest way to declare a Function Component; return type is inferred.
export default const Fretboard = ({ message }: FretboardProps) => <div>{message}</div>;