let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){

    let sectionSeleccionarAtaque = document.getElementById("SeleccionarAtaque")
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById("Boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonLambida = document.getElementById('Boton-Lambida')
    botonLambida.addEventListener('click', ataqueLambida)
    let botonErizar = document.getElementById('Boton-Erizar')
    botonErizar.addEventListener('click', ataqueErizar)
    let botonColazo = document.getElementById('Boton-Colazo')
    botonColazo.addEventListener('click', ataqueColazo)
    let botonColazoYLambida = document.getElementById('Boton-Colazo-y-Lambida')
    botonColazoYLambida.addEventListener('click', ataqueColazoyLambida)
    let botonErizaryColazo = document.getElementById('Boton-Erizar-y-Colazo')
    botonErizaryColazo.addEventListener('click', ataqueErizarYColazo)
    let botonLambidayErizar = document.getElementById('Boton-Lambida-y-Erizar')
    botonLambidayErizar.addEventListener('click', ataqueLambidaYErizar)

    let botonReiniciar = document.getElementById('BotonReiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)

}

function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById("SelecionarMascota")
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById("SeleccionarAtaque")
    sectionSeleccionarAtaque.style.display = 'block'

    let inputSelene = document.getElementById('Selene')
    let inputCambur = document.getElementById('Cambur')
    let inputPana = document.getElementById('Pana')
    let inputTeo = document.getElementById('Teo')
    let inputOrion = document.getElementById('Orion')
    let inputBooba = document.getElementById('Booba')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputSelene.checked) {
        spanMascotaJugador.innerHTML = 'Selene'
    }   else if (inputCambur.checked){
        spanMascotaJugador.innerHTML = 'Cambur'
    }   else if (inputPana.checked) {
        spanMascotaJugador.innerHTML = 'Pana'
    }   else if (inputTeo.checked){
        spanMascotaJugador.innerHTML = 'Teo'
    }   else if (inputOrion.checked){
        spanMascotaJugador.innerHTML = 'Orion'
    }   else if (inputBooba.checked) {
        spanMascotaJugador.innerHTML = 'Booba'
    }   else {
        alert('Seleccina una mascosta!')
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    
    if (mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'Selene'
    } else if (mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Cambur'
    } else if (mascotaAleatorio == 3){
        spanMascotaEnemigo.innerHTML = 'Pana'
    } else if (mascotaAleatorio == 4){
        spanMascotaEnemigo.innerHTML = 'Teo'
    } else if (mascotaAleatorio == 5){
        spanMascotaEnemigo.innerHTML = 'Orion'
    } else if (mascotaAleatorio == 6){
        spanMascotaEnemigo.innerHTML = 'Booba'
    }

}


function ataqueLambida(){
    ataqueJugador = 'Lambida'
    ataqueAleatorioEnemigo()
}
function ataqueErizar(){
    ataqueJugador = 'Erizar'
    ataqueAleatorioEnemigo()
}
function ataqueColazo(){
    ataqueJugador = 'Colazo'
    ataqueAleatorioEnemigo()
}
function ataqueLambidaYErizar(){
    ataqueJugador = 'Lambida Y Erizar'
    ataqueAleatorioEnemigo()
}
function ataqueColazoyLambida(){
    ataqueJugador = 'Colazo Y Lambida'
    ataqueAleatorioEnemigo()
}
function ataqueErizarYColazo(){
    ataqueJugador = 'Erizar Y Colazo'
    ataqueAleatorioEnemigo()
}


function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,6)
    if (ataqueAleatorio == 1){
        ataqueEnemigo = 'Lambida'
    } else if (ataqueAleatorio == 2){
        ataqueEnemigo = 'Erizar'
    } else if (ataqueAleatorio == 3){
        ataqueEnemigo = 'Colazo'
    } else if (ataqueAleatorio == 4){
        ataqueEnemigo = 'Lambida Y Erizar'
    } else if (ataqueAleatorio == 5){
        ataqueEnemigo = 'Colazo Y Lambida'
    } else if (ataqueAleatorio == 6){
        ataqueEnemigo = 'Erizar Y Colazo'
    }

    combate()
}

function combate(){ 
    let spanVidasJugador = document.getElementById('vidasJugador')
    let spanVidasEnemigo = document.getElementById('vidasEnemigo')

    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE")
    } else if(ataqueJugador =='Lambida'&& ataqueEnemigo =='Erizar '){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador =='Erizar'&& ataqueEnemigo =='Colazo '){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador =='Colazo'&& ataqueEnemigo =='Lambida '){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador =='LambidaYErizar'&& ataqueEnemigo =='Colazo Y Lambida '){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador =='ColazoYLambida'&& ataqueEnemigo =='Erizar Y Colazo '){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador =='ErizarYColazo'&& ataqueEnemigo =='Lambida Y Erizar '){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}
function revisarVidas(){
    if (vidasEnemigo == 0) {
        crearMensajeFinal('Felicitciones! GANASTE 🥇')
    } else if (vidasJugador == 0){
        crearMensajeFinal('Lo siento, PERDISTE 😔 ')
    }
}

function crearMensaje(resultado){

    let seccionMensajes = document.getElementById('Mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + " " + resultado

    seccionMensajes.appendChild(parrafo)

}

function crearMensajeFinal(resultadoFinal){

    let seccionMensajes = document.getElementById('Mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    seccionMensajes.appendChild(parrafo)

    let botonLambida = document.getElementById('Boton-Lambida')
    botonLambida.disabled = true
    let botonErizar = document.getElementById('Boton-Erizar')
    botonErizar.disabled = true
    let botonColazo = document.getElementById('Boton-Colazo')
    botonColazo.disabled = true
    let botonColazoYLambida = document.getElementById('Boton-Colazo-y-Lambida')
    botonColazoYLambida.disabled = true
    let botonErizaryColazo = document.getElementById('Boton-Erizar-y-Colazo')
    botonErizaryColazo.disabled = true
    let botonLambidayErizar = document.getElementById('Boton-Lambida-y-Erizar')
    botonLambidayErizar.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}
function aleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
window.addEventListener('load', iniciarJuego)



