
let igual_proceso = 0
let resultado_anterior = 0

// seleccionamos todos los botones
const boton_input = document.querySelectorAll('.input-button')

// seleccionamos los botonoes especiales
const input = document.querySelector('#input')
const igual = document.querySelector('#igual')
const borrar = document.querySelector('#borrar')
const limpiar = document.querySelector('#limpiar')


window.addEventListener('load', () => {
    input.value = ''
})

boton_input.forEach( boton => {
    boton.addEventListener('click', () => {
        if(igual_proceso === 1 ) {
            input.value = ''
            igual_proceso = 0
        }
        input.value += boton.value
        input.scrollLeft = input.scrollWidth
    })
})

igual.addEventListener('click', () => {
    igual_proceso = 1
    const input_valor = input.value
    try {
        let respuesta = eval(input_valor)
        console.log(`El valor de ${respuesta}`)
        resultado_anterior = respuesta
       // alert(`${respuesta} es el resultado`)
        Number.isInteger(respuesta) ? input.value = respuesta : input.value = respuesta.toFixed(4)
    }
    catch (error){
        alert(`No se puede evaluar: ${error} No es posible hacer la aperacion`)
    }
})

borrar.addEventListener('click', () => {
    input.value = input.value.slice(0, -1)
})

limpiar.addEventListener('click', () => {
    input.value = ''
    igual_proceso = 0
})

document.addEventListener('keydown', e => {
    const teclaPresionada = e.key;
    const numerosPermitidos = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '/', '*', 'Enter', 'Backspace', 'h', 'H'];

    if (numerosPermitidos.includes(teclaPresionada)) {
        if (teclaPresionada === 'Backspace') {
            input.value = input.value.slice(0, -1)
        } else if (teclaPresionada === 'Enter') {
            igual.click()
        } else if (teclaPresionada === 'h' || teclaPresionada ==='H') {
            historial.click()
        }else {
            if (igual_proceso === 1) {
                input.value = ''
                igual_proceso = 0
            }
            input.value += teclaPresionada
            input.scrollLeft = input.scrollWidth
        }
    }
})

// Mostrar el resultado anterior en el campo de entrada
const historial = document.querySelector('.historial');
historial.addEventListener('click', () => {
    input.value = resultado_anterior
});