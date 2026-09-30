/**
 * Documentación
 * @author Natalia
 * Declaración de constantes para piezas de ajedrez.
 * @type {string} 5 constantes creadas con texto de tipo string con figuras de ajedrez unicode.
 */
const REY_BLANCO = "♔";
const DAMA_BLANCA = "♕";
const TORRE_BLANCA = "♖";
const CABALLO_BLANCO = "♘";
const PEON_NEGRO = "♟";

/**
 * Declaración de constantes para las casillas.
 * @const casillasTexto String con el número total de casillas.
 * @type {string}
 * @const totalCasillas Convertimos el string a un número y le asignamos el valor a esta variable.
 * @type {number}
 * @const casillasPorJugador Realizamos un cálculo u operación de las casillas que tiene cada jugador.
 * @type {number}
 */
const casillasTexto = "64";
const totalCasillas = Number(casillasTexto);
const casillasPorJugador = totalCasillas / 2;

/**
 * Imprimimos por consola utilizando Template Literals los datos declarados y calculados antes.
 */
console.log(`Tablero: ${totalCasillas} casillas (${casillasPorJugador} por bando).`);
console.log(`Piezas activas: Rey ${REY_BLANCO}, Dama ${DAMA_BLANCA}, Torre ${TORRE_BLANCA}, Caballo ${CABALLO_BLANCO} frente a Peón ${PEON_NEGRO}`);

/**
 * Creamos nuevas constantes de puntuaciones y variables para calcular los puntos totales de las Blancas y Negras.
 *
 * Hay 5 constantes iguales creadas.
 * @const PEON Constante con un valor numérico asignado que representa una puntuación.
 * @type {number}
 *
 * @var puntosBlancas Variable inicializada a 0 para llevar la cuenta de los puntos pertenecientes a las piezas Blancas.
 * @type {number}
 * @var puntosNegras Variable inicializada a 0 para llevar la cuenta de los puntos pertenecientes a las piezas Negras.
 * @type {number}
 */
const PEON = 1, CABALLO = 3, ALFIL = 3, TORRE = 5, DAMA = 9;
let puntosBlancas = 0;
let puntosNegras = 0;

/**
 * Operaciones para aumentar los puntos de las piezas Blancas y Negras según corresponda.
 * @type {number}
 */
puntosBlancas += DAMA;
puntosBlancas += PEON * 2;
puntosNegras += TORRE + CABALLO;

/**
 * @const ventaja Constante donde se guarda el número final del cálculo de la ventaja según los puntos de las piezas Blancas y las Negras.
 * @type {number}
 */
const ventaja = puntosBlancas - puntosNegras;

/**
 * Imprimimos por consola los resultados generados anteriormente.
 */
console.log(`Puntuacion Blancas: ${puntosBlancas} pts | Puntuacion negras: ${puntosNegras} pts`);
console.log(`Diferencia de ventaja material: ${ventaja} pts a favor de las Blancas.`);