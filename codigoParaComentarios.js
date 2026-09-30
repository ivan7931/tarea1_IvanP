/**
 * Documentación
 * @author Natalia (documentación)
 * @author Iván (código)
 * Declaración de constantes para piezas de ajedrez.
 * @type {string} 5 constantes creadas con texto de tipo string con figuras de ajedrez Unicode.
 */
const REY_BLANCO = "♔";
const DAMA_BLANCA = "♕";
const TORRE_BLANCA = "♖";
const CABALLO_BLANCO = "♘";
const PEON_NEGRO = "♟";

/**
 * Declaración de constantes para las casillas.
 * @type {string} casillasTexto contiene el número total de casillas en formato texto.
 * @type {number} totalCasillas convierte el string anterior a un número.
 * @type {number} casillasPorJugador realiza una operación para calcular las casillas que tiene cada jugador.
 */
const casillasTexto = "64";
const totalCasillas = Number(casillasTexto);
const casillasPorJugador = totalCasillas / 2;

/**
 * Imprimimos por consola utilizando Template Literals los datos declarados y calculados anteriormente.
 */
console.log(`Tablero: ${totalCasillas} casillas (${casillasPorJugador} por bando).`);
console.log(`Piezas activas: Rey ${REY_BLANCO}, Dama ${DAMA_BLANCA}, Torre ${TORRE_BLANCA}, Caballo ${CABALLO_BLANCO} frente a Peón ${PEON_NEGRO}`);

/**
 * Creamos nuevas constantes de puntuaciones y variables para calcular los puntos totales de las Blancas y Negras.
 *
 * Hay 5 constantes iguales creadas.
 * @type {number} Constantes con un valor numérico asignado que representa la puntuación de cada pieza.
 *
 * @var puntosBlancas Variable inicializada a 0 para llevar la cuenta de los puntos pertenecientes a las piezas Blancas.
 * @type {number}
 *
 * @var puntosNegras Variable inicializada a 0 para llevar la cuenta de los puntos pertenecientes a las piezas Negras.
 * @type {number}
 */
const PEON = 1, CABALLO = 3, ALFIL = 3, TORRE = 5, DAMA = 9;
let puntosBlancas = 0;
let puntosNegras = 0;

/**
 * Operaciones para aumentar los puntos de las piezas Blancas y Negras según corresponda.
 * Sumamos los puntos de la dama y de dos peones para las Blancas,
 * y los puntos de una torre y un caballo para las Negras.
 */
puntosBlancas += DAMA;
puntosBlancas += PEON * 2;
puntosNegras += TORRE + CABALLO;

/**
 * @type {number} ventaja es una constante donde se guarda el número final del cálculo de la ventaja según los puntos de las piezas Blancas y Negras.
 */
const ventaja = puntosBlancas - puntosNegras;

/**
 * Imprimimos por consola los resultados generados anteriormente.
 */
console.log(`Puntuacion Blancas: ${puntosBlancas} pts | Puntuacion negras: ${puntosNegras} pts`);
console.log(`Diferencia de ventaja material: ${ventaja} pts a favor de las Blancas.`);