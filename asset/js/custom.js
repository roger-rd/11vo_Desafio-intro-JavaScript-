let cantidad = document.querySelector('#cantidad');
let color = document.querySelector('#color');
let precio = 600000;
let btnTotal = document.querySelector('#btnTotal');
let resultadoTotal =document.querySelector('#resultadoTotal')
let resultadoCantidad =document.querySelector('#resultadoCantidad')
let ResultadoColor =document.querySelector('#resultadoColor')


btnTotal.addEventListener('click', () => {
    let valorCliente = cantidad.value
    resultadoTotal.textContent = cantidad.value * precio;

    let totalCantidad =cantidad.value
    resultadoCantidad.textContent =  cantidad.value;

     resultadoColor.style.backgroundColor = color.value;   
    
    
})




