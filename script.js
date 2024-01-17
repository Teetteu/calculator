let display = document.getElementById('display')
let btnx = document.getElementById('x')

function botao(value) {
    display.value += value
}

function botaoclear(value) {
    display.value = ''
    
}

function botaoresultado(value) {
    display.value = eval(display.value)
    
}



