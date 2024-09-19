let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contrasena = document.getElementById("contrasena");
let botonLimpiar = document.getElementById("limpiar");

let color1Button = document.getElementById("color1");
let color2Button = document.getElementById("color2");

let textoDebil = document.getElementById("parrafo2");
let textoFuerte = document.getElementById("parrafo1");

let valido = true;


const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

const caracteresMayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const caracteresMinus = "abcdefghijklmnopqrstuvwxyz";

const caracteresNum = "0123456789";

const caracteresEsp = "!@#$%^&*()";

function generar(){

    let numeroDigitado = parseInt(cantidad.value);

    if(numeroDigitado < 8) {
        alert("La cantidad tiene que ser mayor a 8");
        contrasena.value = "";

    }else{

        let password = "";


        for (let i = 0; i < numeroDigitado; i++) {

            let caracterAleatorio = cadenaCaracteres [Math.floor(Math.random() * cadenaCaracteres.length)]; 
        
            console.log(caracterAleatorio);

            password += caracterAleatorio;

            console.log(password)
        
        }
    

    console.log(password);
    
    contrasena.value = password;

    contrasenaFuerte(password);

    }
}

function contrasenaFuerte(password){
    
    let verdaderoMayuscula = false;
    let verdaderoMinuscula = false;
    let verdaderoCaracteres = false;
    let verdaderoNumeros = false;

    for(let i = 0; i < password.length; i++){

        for (let j = 0; j < caracteresMayus.length; j++){

            if(password[i] == caracteresMayus[j]){
                verdaderoMayuscula = true;
            }


        }

    }

    for(let i = 0; i < password.length; i++){

        for (let j = 0; j < caracteresMinus.length; j++){

            if(password[i] == caracteresMinus[j]){
                verdaderoMinuscula = true;
            }


        }

    }

    for(let i = 0; i < password.length; i++){

        for (let j = 0; j < caracteresNum.length; j++){

            if(password[i] == caracteresNum[j]){
                verdaderoCaracteres = true;
            }


        }

    }


    for(let i = 0; i < password.length; i++){

        for (let j = 0; j < caracteresEsp.length; j++){

            if(password[i] == caracteresEsp[j]){
                verdaderoNumeros = true;
            }


        }

    }



    if(verdaderoMayuscula && verdaderoMinuscula && verdaderoCaracteres && verdaderoNumeros) {
        console.log("aqui hay almenos una uno de los caracteres para contrasena fuerte");
        valido = true;

        colorearBotones(valido);
        mostrarTexto(valido)
        console.log(valido);

    }else{
        valido = false;
        colorearBotones(valido);
        mostrarTexto(valido)
    }



}

function limpiar(){
    contrasena.value = "";
    cantidad.value = "";
    color1Button.classList.remove("active");
    color2Button.classList.remove("active");
    textoDebil.classList.remove("visible");
    textoFuerte.classList.remove("visible");
}



function colorearBotones(){
    color1Button.classList.remove("active");
    color2Button.classList.remove("active");


    if(valido ){

        color2Button.classList.toggle("active");

        color1Button.classList.remove("active");

    }else{
        color2Button.classList.remove("active");

        
        color1Button.classList.toggle("active");

    }
   

    console.log(valido);
}




function mostrarTexto(valido){

    textoDebil.classList.remove("visible");
    textoFuerte.classList.remove("visible");


    if(valido ){

        textoFuerte.classList.toggle("visible");

        textoDebil.classList.remove("visible");

    }else{
        textoFuerte.classList.remove("visible");

        
        textoDebil.classList.toggle("visible");

    }



}


