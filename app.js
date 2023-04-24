const SALIR = 'S'
const SUMAR = '+'
const RESTAR = '-'
const DIVIDIR = '/'
const MULTIPLICAR = '*'

let resultado;
let operacion;

do {
    alert('Bienvendios a la calculadora de Efrain')
    operacion = prompt('Favor de Ingresar El Tipo De Operacion o S para Salir')

    if(operacion != SALIR) {
        let valor1 = Number(prompt('Ingrese el Primer Valor de La Operacion'));
        let valor2= Number(prompt('Ingrese el Segundo Valor de La Operacion'));

        switch (operacion){
            case SUMAR:
                resultado = valor1 + valor2 
                break;

            case RESTAR:
                resultado = valor1 - valor2
                break;

            case DIVIDIR:
                resultado = valor1 / valor2;
                break;

            case MULTIPLICAR:
                resultado = valor1 * valor2;
            
            default:
                resultado = NaN 
                console.log('Favor Ingrese un Valor Correcto y Vuelva a Intentar')

        }

        console.log ('El Resultado De La Operacion es' + resultado)
        nuevaoperacion = prompt('Desea Hacer Otra Operacion?')
    }
} while(nuevaoperacion =='si');{

}