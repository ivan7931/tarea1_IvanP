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

/*Desafío 2: Árbitro de Reglas Especiales y Coronación (3.5 Puntos)
Escenario: En tu archivo desafio2.js, programa el motor de toma de decisiones para validar reglas de
juego:
1. Evaluación de Enroque (if / else combinados): Declara las booleanas reyMovido, torreMovida y
enJaque. Un enroque solo es legal si el rey no se ha movido (!reyMovido), la torre tampoco (!torreMovida) y
no hay jaque (!enJaque).
2. Comportamiento por Pieza (switch): Dado el nombre de una pieza ('torre', 'caballo', 'peon', etc.),
imprime su rango de movimiento. Incluye obligatoriamente la sección default para manejar casillas vacías
o entradas inválidas.
3. Promoción de Peón (Operador Ternario): Dada la fila de destino de un peón (1 a 8), utiliza un
operador ternario para asignar la figura promocionada: si llega a la fila 8 (o fila 1 en negras) se transforma
en Dama ('♛' / '♕'), en caso contrario sigue siendo Peón.*/

const reyMovido = false;
const torreMovida = false;
const enJaque = false;

if (!reyMovido && !torreMovida && !enJaque) {
    console.log("Enroque: LEGAL");
} else if(enJaque) {
    console.log("Enroque: ILEGAL (El rey se encuentra en jaque)");
} else if (reyMovido) {
    console.log("Enroque: ILEGAL (El rey ya se ha movido)");
} else {
    console.log("Enroque: ILEGAL (La torre ya se ha movido)");
}

const pieza = "caballo";

switch(pieza) {
    case "torre":
        console.log("Torre: se puede mover en linea recta, horizontal o vertical, todas las casillas que quiera.");
        break;
    case "alfil":
        console.log("Alfil: se puede mover en diagonal, todas las casillas que quiera.");
        break;
    case "caballo":
        console.log("Caballo: se puede mover en L (2 casillas + 1 perpendicular) y puede saltar piezas.");
        break;
    case "dama":
        console.log("Dama: se puede mover como torre y alfil combinados.");
        break;
    case "rey":
        console.log("Rey: se puede mover 1 casilla en cualquier dirección.");
        break;
    case "peon":
        console.log("Peón: avanza 1 casilla (2 en su primer movimiento) y captura en diagonal.");
        break;
    default:
        console.log("Casilla vacía o pieza no válida.");
}

const colorPeon = "blancas";
const filaDestino = 8;

const llegaAlFinal = colorPeon === "blancas" ? filaDestino === 8 : filaDestino === 1;
const simboloDama = colorPeon === "blancas" ? "♕" : "♛";
const figura = llegaAlFinal ? simboloDama : "Peón";

console.log(`Peon ${colorPeon} en fila ${filaDestino} -> ${figura} `);

/*
Desafío 3: Generador Algorítmico y Buscador de Casillas 8x8 (3.5
Puntos)
Escenario: En tu archivo desafio3.js, implementa la iteración bidimensional del tablero:
1. Mediante dos bucles for anidados (filas de 8 a 1 y columnas de 'a' a 'h'), genera las 64 coordenadas
algebraicas.
2. Utiliza la fórmula de paridad (fila + colIndex) % 2 === 0 para determinar si la casilla es clara u oscura.
3. Almacena en un array las jugadas de una partida. Usa un bucle for...of para recorrerlo, saltando
comentarios con continue e interrumpiendo el recorrido con break cuando detectes la jugada final de jaque
mate ('#').
 */
const columnas = "abcdefgh";
const casillas = [];
let totalClaras = 0;
let totalOscuras = 0;

for (let fila = 8; fila >= 1; fila--){
    let lineaTablero = `${fila} | `;

    for (let colIndex = 0; colIndex < 8; colIndex++){
        const coordenada = `${columnas[colIndex]}${fila}`;
        casillas.push(coordenada);
        const esClara = (fila + colIndex) % 2 === 0;
        if (esClara){
            totalClaras++;
        } else {
            totalOscuras++;
        }
        lineaTablero = `${coordenada}${esClara ? " □" : " ■"}`;
    }
    console.log(lineaTablero);
}

console.log(`Casillas generadas: ${casillas.length} (${totalClaras} claras, ${totalOscuras} oscuras)`);
const partida = [
    "1. f3",
    "e5",
    "{Las blancas debilitan el flanco de su rey}",
    "2. g4",
    "Dh4#",
    "{Mate del loco: la partida termina aquí}",
    "3. Rg1",
];

let numeroJugada = 0;

for (const jugada of partida) {
    if (jugada.startsWith("{")) {
        console.log(`(comentario omitido: ${jugada})`);
        continue;
    }

    numeroJugada++;
    console.log(`Jugada ${numeroJugada}: ${jugada}`);

    if (jugada.includes("#")) {
        console.log("¡Jaque mate detectado! Fin de la partida.");
        break;
    }
}