import { createInterface } from 'readline/promises';

export const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});