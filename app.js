let numerosecreto = 0;
let intentos = 0;
let listanumerosorteados = [];
let numeromaximo = 10;

console.log(numerosecreto);
function asignarTextoElemento(elemento, texto){
    let elementohtml = document.querySelector(elemento);
    elementohtml.innerHTML = texto;
    return;

}
function verificarintento(){

   let numeroUser = parseInt(document.getElementById('valorUsuario').value);
   console.log(numeroUser == numerosecreto);
   if (numeroUser == numerosecreto){
    asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos >1 ? 'intentos' :'intento'}`);
    
    document.getElementById ('reiniciar').removeAttribute('disabled');
   }else{
        if(numeroUser > numerosecreto){
        asignarTextoElemento('p','El numero secreto es menor')
 }   else{
   
        asignarTextoElemento('p', 'El numero secreto es mayor');
    
    }
    intentos++
    limpiarcaja();
   }

}

function limpiarcaja(){

   let valorCaja = document.querySelector('#valorUsuario').value ='';

}



function generarnumero(){
   
    let numerogenerado = Math.floor(Math.random()*numeromaximo)+1;
    console.log(listanumerosorteados);
    //Si ya se sortearon todos los numeros posibles, que simplemente se salga
    if (listanumerosorteados.length == numeromaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    }else{
//Si el numero generado esta incluido en la lista

if(listanumerosorteados.includes(numerogenerado)){
      
    return generarnumero();
}else{
    listanumerosorteados.push(numerogenerado);
    return numerogenerado;
}
    }
}

function condicionesinicial(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeromaximo}`);
    numerosecreto = generarnumero();
    intentos = 1;
}

function reiniciarjuego(){
limpiarcaja();
condicionesinicial();
document.getElementById ('reiniciar').setAttribute('disabled', 'true');


}

condicionesinicial();