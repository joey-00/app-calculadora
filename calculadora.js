const process = require('process');

const operaciones = require('./operaciones/index')

let operacion = process.argv[2];
let numeroA = +process.argv[3];
let numeroB = +process.argv[4];

let resultado = 0;

if(operacion === "sumar"){
    resultado = operaciones.sumar(numeroA, numeroB)
    return console.log('El resultado es' +' '+ resultado)
}else if(operacion === "restar"){
    resultado = operaciones.restar(numeroA, numeroB)
    return console.log('El resultado es' +' '+ resultado)
}else if(operacion === "multiplicar"){
    resultado = operaciones.multiplicar(numeroA, numeroB)
    return console.log('El resultado es' +' '+ resultado)
}else if(operacion === "dividir"){
    resultado = operaciones.dividir(numeroA, numeroB)
    return console.log('El resultado es' +' '+ resultado)
}else if(operacion === "porcentaje"){
    resultado = operaciones.porcentaje(numeroA, numeroB)
    return console.log('El resultado es' +' '+ resultado)
    // numeroA = numero - numeroB = porcentaje 
}else if(operacion === "raiz"){
    resultado = operaciones.raiz(numeroA)
    return console.log('El resultado es' +' '+ resultado)
}else{
    resultado ="oh no!... ha ocurrido un error, tomate tu tiempo en encontrarlo." 
    return console.log(resultado)
}
 
/*1- ¿Qué hubiese sucedido si, en vez de generar un archivo por cada operación
matemática, hubiésemos programado todo en un mismo archivo?
     Pienso que lleva al mismo resultado, pero nos daria un código más compacto y comodo 
     a la hora de tener que hacerlo mas complejo.  

2- ¿Por qué el mejor camino es generar distintos archivos y luego requerirlos en uno solo?
     Tener todo en un solo archivo nos daria la comodidad de tener todo a la vista. 
     por ejemplo, a la hora de buscar errores, nos ayuda que sea más corto.

3- ¿Será esta metodología de trabajo una constante de aquí en adelante?
     seria lo ideal, ya que es mas fácil de recordar los codigos más cortos o
     funciones mas interactivas.*/
