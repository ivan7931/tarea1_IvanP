const REY_BLANCO = "♔";
const DAMA_BLANCA = "♕";
const TORRE_BLANCA = "♖";
const CABALLO_BLANCO = "♘";
const PEON_NEGRO = "♟";

const casillasTexto = "64";
const totalCasillas = Number(casillasTexto);
const casillasPorJugador = totalCasillas / 2;

console.log(`Tablero: ${totalCasillas} casillas (${casillasPorJugador} por bando).`);
console.log(`Piezas activas: Rey ${REY_BLANCO}, Dama ${DAMA_BLANCA}, Torre ${TORRE_BLANCA}, Caballo ${CABALLO_BLANCO} frente a Peón ${PEON_NEGRO}`);


const PEON = 1, CABALLO = 3, ALFIL = 3, TORRE = 5, DAMA = 9;
let puntosBlancas = 0;
let puntosNegras = 0;

puntosBlancas += DAMA;
puntosBlancas += PEON * 2;
puntosNegras += TORRE + CABALLO;

const ventaja = puntosBlancas - puntosNegras;
console.log(`Puntuacion Blancas: ${puntosBlancas} pts | Puntuacion negras: ${puntosNegras} pts`);
console.log(`Diferencia de ventaja material: ${ventaja} pts a favor de las Blancas.`);