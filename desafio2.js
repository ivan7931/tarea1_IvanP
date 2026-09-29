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