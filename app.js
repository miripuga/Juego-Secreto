let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados =[];
let numeroMaximo=10

function asignarTextoHTML (elemento, texto){
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario == numeroSecreto) {
        asignarTextoHTML('p', `Acertaste el numero en ${intentos} ${(intentos==1)? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario>numeroSecreto) {
            asignarTextoHTML('p', 'El numero secreto es menor');
        } else {
            asignarTextoHTML('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor (Math.random ()*numeroMaximo)+1;

    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);

    if(listaNumerosSorteados.length==numeroMaximo){
      asignarTextoHTML('p', 'Ya se sortearon todos los numeros posibles');  
    } else{
    //si el numero generado esta en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }       
}

function condicionesIniciales() {
 asignarTextoHTML('h1', 'Juego del numero secreto');
asignarTextoHTML('p', `Elige un numero del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();