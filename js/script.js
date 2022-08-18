// recuperamos la informacion de las etiquetas de html
var btnEncriptar = document.querySelector(".btnEncriptar");
var btnDesencriptar = document.querySelector(".btnDesencriptar");
var texto = document.querySelector(".texto");
var textoEncriptado = document.querySelector(".textoEncriptado");
var btnCopiar = document.querySelector(".btnCopiar");

texto.focus();


// Accion del boton al momento de dar click
btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desenciptar;
btnCopiar.onclick = copiar


//funcion desenciptar
function encriptar(){
  //recuperamos el texto ingresado
  var mensaje = texto.value;
  if(validarTexto(mensaje) == true)
  {
    var mensajeEncriptado = mensaje.replace(/e/gim, "enter")
    .replace(/i/gim, "imes")
    .replace(/a/gim, "ai")
    .replace(/o/gim, "ober")
    .replace(/u/gim, "ufat");
    //ocultamos la imagen y elemntos
    ocultar();
    //mostramos el mensaje encriptado
    textoEncriptado.innerHTML = mensajeEncriptado;
  }else if(validarTexto(mensaje)!= "vacio")
  {
    alert("Debe de ingresar solamente minusculas y sin acentos")
  }
 
}

//funcion desencriptar
function desenciptar()
{
    //recuperamos el texto ingresado
    var mensaje = texto.value;
    if(validarTexto(mensaje) == true)
    {
        var mensajeEncriptado = mensaje.replace(/enter/gim, "e")
                                        .replace(/imes/gim, "i")
                                        .replace(/ai/gim, "a")
                                        .replace(/ober/gim, "o")
                                        .replace(/ufat/gim, "u");
      
        //ocultamos la imagen y elemntos
        ocultar();
        //mostramos el mensaje encriptado
        textoEncriptado.innerHTML = mensajeEncriptado;
      }else if(validarTexto(mensaje)!= "vacio")
      {
        alert("Debe de ingresar solamente minusculas y sin acentos")
      }
}

//funcion para ocultar y mostrar elementos
function ocultar()
{
  document.getElementById("imagenMuñeco").style.display = "none";
  document.getElementById("alertaMensaje").style.display = "none";
  document.getElementById("alertaParrafo").style.display = "none";
}


//funcion para validar minisculas y sin acentos
function validarTexto(txt){
  if(txt == "")
  {
    return("vacio")
  }else{
    //expresion regula que solo acepta una o mas minusculas
    return(/^[a-z ñ ]+$/.test(txt))
  }
  
}

//funcion copiar
function copiar(){
  navigator.clipboard.writeText(textoEncriptado.innerHTML);
  textoEncriptado.innerHTML = "";
  texto.value = "";
  texto.focus();
  
}