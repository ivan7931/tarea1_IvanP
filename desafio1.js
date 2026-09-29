/* 1. Declara constantes con los valores de las piezas: PEON=1, CABALLO=3, ALFIL=3, TORRE=5, DAMA=9.
2. Declara variables para acumular los puntos de las Blancas y de las Negras inicializadas a 0.
3. Simula una secuencia de 4 capturas acumulando los puntos con asignación compuesta (+=).
4. Dado un número de jugada actual (ej. let jugada = 15;), calcula con el operador módulo (%) de quién es
el turno.
5. Muestra en la consola el informe completo utilizando exclusivamente Template Literals y comprueba los
tipos de datos con typeof */

const peon = 1;
const caballo = 3;
const alfil = 3;
const torre = 5;
const dama = 9;

let puntosBlancas = 0;
let puntosNegras = 0;

puntosBlancas += peon;
puntosNegras += caballo;
puntosBlancas += dama;
puntosNegras += alfil;

let Njugada = 15
const turnoBlancas = Njugada % 2 !== 0;
const colorTurno = turnoBlancas ? "Blancas ♔" : "Negras ♚";
const ventaja = puntosBlancas - puntosNegras;

console.log(`Puntuacion Blancas: ${puntosBlancas} pts | Puntuacion Negras: ${puntosNegras} pts`);
console.log(`Ventaja material: ${ventaja} pts`);
console.log(`Estado de turno: Jugada ${Njugada} (Mueven ${colorTurno} )`)
console.log(`Tipo de puntosBlancas: ${typeof puntosBlancas}`);
console.log(`Tipo de jugada: ${typeof Njugada}`);
console.log(`Tipo de turnoBlancas: ${typeof turnoBlancas}`);
console.log(`Tipo de colorTurno: ${typeof colorTurno}`);