/*
* Archivo principal de JS
*/

var ittem=["","cabin","cake","circus",
"game", "safe", "submarine"];

for(var i=1;i<ittem.length;i++){
  var contenedor= document.getElementById("imagenes"); //
  var div= document.createElement("div");
  var img= document.createElement("img");
  var span= document.createElement("span");
  img.setAttribute("src","assets/images/portfolio/"+ ittem[i] +".png");
  img.setAttribute("alt",ittem[i]);
  img.setAttribute("class","imagen");

  span.setAttribute("class","icon-zoomin");
  img.classList.add("class","modal-img");
  div.setAttribute("class","div-modal");
  div.appendChild(img);
  div.appendChild(span);
  contenedor.appendChild(div);
}


var modal=document.getElementsByClassName("modal")[0];
var cerrar=document.getElementsByClassName("boton-cerrar")[0];
var contenedor=document.getElementById("imagenes");//contenedor de imagenes
var imagen=document.getElementById("imagen");//contenido del modal
contenedor.addEventListener('click',function (e) {
  if (e.target.tagName =="IMG"){
    modal.style.display="block";
    cerrar.style.display="inline-block";
    imagen.src=e.target.src;
  }
});

cerrar.addEventListener("click",function(){
  cerrar.style.display="none";
  modal.style.display="none";
});
