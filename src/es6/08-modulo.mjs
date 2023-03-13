// para evitar errores con un modulo y su exportacion e importacion nombra los archivos con .mjs

import hello from "./modulo.mjs";

hello();

// solucion 

import { getData} from './modulo.mjs';
export async function solution() {
  return await getData();
}