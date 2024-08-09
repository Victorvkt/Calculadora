const spanResultado = document.getElementById("resultado");
let resultado = "0";

function atualizar(){
    spanResultado.innerHTML = resultado;
    
    while (spanResultado.innerHTML.length > 20) {
        spanResultado.innerHTML = spanResultado.innerHTML.slice(0, -1);
        resultado = resultado.slice(0, -1);
    }
}

function clean(){
    resultado = "0"
    atualizar();
}

function input(caracter){

    const operadores = ["+", "-", "/", "*", "."];

    if (operadores.includes(caracter)){
        var ultimoCaracter = resultado[resultado.length - 1];

        if(operadores.includes(ultimoCaracter)){
            //nada acontece
        } else {
            resultado += caracter;
            atualizar()
        }

        return;
    }
    
    if (spanResultado.innerHTML == "0"){
        spanResultado.innerHTML = "";
        resultado = "";
    }

    resultado += caracter;
    atualizar();
}


function backspace(){
    if (spanResultado.innerHTML.length == 1){
        spanResultado.innerHTML = "0";
        resultado = "0";
        return;
    }

    resultado = resultado.slice(0, -1)
    atualizar();
}

function calcular(){
    resultado = eval(resultado);
    atualizar();
}