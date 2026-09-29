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
