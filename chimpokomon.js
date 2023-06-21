//Variable global

let ataque_jugador
let ataque_enemigo

let vidas_jugador = 3
let vidas_enemigo = 3
let resultado

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
       }

function convertnumbertoword(number, valores){
   if (number ==1){
       return number = valores[1]
   }else if(number == 2){
           return number = valores[2]
   }else{
       return number = valores[3]
   }
}

function seleccionar_mascota(){
    let respuestaA = document.getElementById('Volvasour')
    let respuestaB = document.getElementById('Onix')
    let respuestaC = document.getElementById('Ponyta')
    let spanMascota_jugador = document.getElementById('mascota-jugador')
    let spanMascota_enemigo = document.getElementById('mascota-enemigo')

    let spanVidas_jugador = document.getElementById('vidas-jugador')
    spanVidas_jugador.innerHTML = vidas_jugador
    let spanVidas_enemigo = document.getElementById('vidas-enemigo')
    spanVidas_enemigo.innerHTML = vidas_enemigo

    
    
    // SELECCIONAR MASCOTA 
    let mascota
    if (respuestaA.checked) {
         mascota = "Volvasour"
     } else if (respuestaB.checked) {
         mascota = "Onix"
     } else if (respuestaC.checked){
         mascota = "Ponyta"
     }
     else alert("selecciona una mascota")

    // MANIPULACIÓN DEL DOM
    // document.getElementById('id').innerHTML arroja el valor que hay adentro de los span
    // document.getElementById('id').innerHTML = '-' cambia en el HTML lo que está adentro del span

     spanMascota_jugador.innerHTML = mascota

     spanMascota_enemigo.innerHTML = convertnumbertoword(randomNumber(1,3),["Volvasour","Onix","Ponyta"])
}

//para descomentar usar ctrl + K + U

//Método Document.createElement(): permite crear nuevos elementos en js

function combateFAT(vidasJugador, vidasEnemigo){

    let resultadoCombate
    //while(vidas_jugador!=0 && vidas_enemigo!=0){

        let pc = ataque_enemigo
        let jugador = ataque_jugador

        // COMBATE //
        if ((pc == 'Fuego' && jugador == 'Tierra') || (pc == 'Tierra' && jugador == 'Agua') || (pc == 'Agua' && jugador == 'Fuego')){
            vidasJugador -=1
            resultadoCombate = 'PERDISTE'
        }
        else if(pc == jugador){
            resultadoCombate = 'EMPATASTE'
        }else{
            vidasEnemigo -=1
            resultadoCombate = 'GANASTE'
            }

            salida = [vidasJugador,vidasEnemigo,resultadoCombate]

            return(salida)             
}

function crearMensaje(){

    if(vidas_jugador==0){
        alert("Ya no tienes vidas, reinicia el juego")
    }
    else if(vidas_enemigo==0){
        alert("Tu enemigo ya no tiene vidas, GANASTE EL TORNEO. Reinicia el juego para juagr de nuevo")
    }
    else{
        let sectionMensajes = document.getElementById('mensajes')
        let parrafo = document.createElement('p')
        resultado = combateFAT(vidas_jugador, vidas_enemigo)[2]
        parrafo.innerHTML = 'Tu mascota atacó con ' + ataque_jugador + ', la mascota del enemigo atacó con ' + ataque_enemigo + " " + resultado
        sectionMensajes.appendChild(parrafo)
    }

    // let sectionSelectAtaque = document.getElementById('seleccionar-ataque')
    // let parrafoVidasJugador = document.createElement('p')
    // vidas_jugador = combateFAT(vidas_jugador, vidas_enemigo)[0]
    // parrafoVidasJugador.innerHTML = 'Tu mascota tiene ' + vidas_jugador + " vidas"
    // sectionSelectAtaque.appendChild(parrafoVidasJugador)

    // let sectionSelectAtaquedos = document.getElementById('seleccionar-ataque')
    // let parrafoVidasEnemigo = document.createElement('p')
    // vidas_enemigo = combateFAT(vidas_jugador, vidas_enemigo)[1]
    // parrafoVidasEnemigo.innerHTML = 'La mascota de tu enemigo tiene ' + vidas_enemigo + " vidas"
    // sectionSelectAtaquedos.appendChild(parrafoVidasEnemigo)
}

//Método appendChild: toma elementos creados en js para insertarlos en el HTML

// Funciones de ataques del jugador

function ataqueEnemigo(){
    ataque_enemigo = convertnumbertoword(randomNumber(1,3),["Fuego","Agua","Tierra"])  
    crearMensaje()  

    let spanVidas_jugador = document.getElementById('vidas-jugador')
    let spanVidas_enemigo = document.getElementById('vidas-enemigo')

    vidas_jugador = combateFAT(vidas_jugador, vidas_enemigo)[0]
    spanVidas_jugador.innerHTML = vidas_jugador

    vidas_enemigo = combateFAT(vidas_jugador, vidas_enemigo)[1]
    spanVidas_enemigo.innerHTML = vidas_enemigo
}

function ataqueFuego(){
    ataque_jugador = 'Fuego'
    ataqueEnemigo()
}

function ataqueAgua(){
    ataque_jugador = 'Agua'
    ataqueEnemigo()
}

function ataqueTierra(){
    ataque_jugador = 'Tierra'
    ataqueEnemigo()
}


// document con modo click, requiere que el html o al menos el fragmento del botón ya se haya leído

function iniciar_juego(){
    let boton_mascota = document.getElementById('boton-mascota')
    boton_mascota.addEventListener('click', seleccionar_mascota)

    
        let botonFuego = document.getElementById('boton-fuego')
        botonFuego.addEventListener('click', ataqueFuego)
        let botonAgua = document.getElementById('boton-agua')
        botonAgua.addEventListener('click', ataqueAgua)
        let botonTierra = document.getElementById('boton-tierra')
        botonTierra.addEventListener('click', ataqueTierra)
}



// window con modo load, no importa dónde esté el archivo html sino que lo lee cuando se cargue el html/navegador
window.addEventListener('load', iniciar_juego)

// MANIPULACIÓN DEL DOM
// document.getElementById('id').innerHTML arroja el valor que hay adentro de los span
// document.getElementById('id').innerHTML = '-' cambia en el HTML lo que está adentro del span

