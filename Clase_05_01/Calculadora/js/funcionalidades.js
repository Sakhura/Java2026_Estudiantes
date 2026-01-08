//variables globales
let pantallaValor = '0';
let operador = null;
let valorAnterior = null;
let reiniciarPantalla = false;

//obtener elementos de pantalla
const pantalla= document.getElementById('pantalla');

//actualizar panrtalla
function actualizarPantalla() {
    pantalla.textContent = pantallaValor;
    
}
//funcion agregar numeros
function agregarNumero(numero) {
    if (reiniciarPantalla) {
        pantallaValor = numero;
        reiniciarPantalla = false;
        
    }else{
        if (pantallaValor === '0' && numero !== '.') {
            pantallaValor = numero;            
        }else{
            if(numero === '.' && pantallaValor.includes('.')) {
                return
        }
        pantallaValor += numero;
    }
    
}
    actualizarPantalla();
}


//funciones de operaciones
function agregarOperador(operador) {

    if(valorAnterior !== null && operadorActual !== null && !reiniciarPantalla) {
        calcular();
}

    valorAnterior = parseFloat(pantallaValor);
    operadorActual = operador;
    reiniciarPantalla = true;
}

//resultados
function calcular() {
    if (operadorActual === null || reiniciarPantalla) {
        return;
    }
    const valorActual = parseFloat(pantallaValor);
    let resultado;

    switch (operadorActual) {
        case '+':
            resultado = valorAnterior + valorActual;
            break;
        case '-':
            resultado = valorAnterior - valorActual;
            break;
        case '*':
            resultado = valorAnterior * valorActual;
            break;
        case '/':
            if (valorActual === 0) {
                alert("Error: División por cero");
                return;
            }
                resultado = valorAnterior / valorActual;
            break;
            default:
                return;
    }
    pantallaValor = resultado.toString();
    operadorActual = null;
    valorAnterior = null;
    reiniciarPantalla = true;
    actualizarPantalla();
}

function limpiar(){
    pantallaValor = '0';
    operadorActual = null;
    valorAnterior = null;
    reiniciarPantalla = false;
    actualizarPantalla();
}

function borrar(){
    if (pantallaValor.length > 1) {
        pantallaValor = pantallaValor.slice(0, -1);
    } else {
        pantallaValor = '0';
    }   

    actualizarPantalla();
}


//soporte de teclado
window.addEventListener('keydown', function(event) {
    if (event.key >=0 && event.key <=9 || event.key === '.') {
        agregarNumero(event.key);
    }
    if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
        agregarOperador(event.key);
    }
    if (event.key === 'Enter' || event.key === '=') {
        calcular();
    }
    if (event.key === 'Escape') {
        limpiar();
    }
    if (event.key === 'Backspace') {
        borrar();
    }

});