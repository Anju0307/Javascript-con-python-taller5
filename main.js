addEventListener("DOMContentLoaded", (e) => {
    function habilitar (){
        document.querySelector("#contenedor").style.display = "inline-block";
        document.querySelector("#botonEnviar").disabled = true;
        document.querySelector("#botonCalcular").disabled = true;
    }
    let edad = 0,con=0,tenis=0,rugby=0,voley=0,hockey=0,futbol=0;
    function contar(deporte){
        if(deporte=="tenis"){
            tenis++;
        } else if(deporte=="rugby"){
            rugby++;
        } else if(deporte=="voley"){
            voley++;
        } else if (deporte=="hockey"){
            hockey++;
        } else{
            futbol++;
        }
    }
    document.querySelector("#botonEnviar").disabled = false;
    document.querySelector("#botonCalcular").disabled = false
    let form =document.querySelector("#form");
    let botonEnviar = document.querySelector("#botonEnviar");
    botonEnviar.addEventListener("click",(e)=>{
        e.preventDefault();
        edad += parseInt(document.querySelector("#edad").value);
        contar(document.querySelector("#deporte").value);
        con++;
        form.reset();
    })
    let botonCalcular = document.querySelector("#botonCalcular");
    botonCalcular.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#resultadoSociosTenis").insertAdjacentHTML("afterbegin","La cantidad de socios que juegan tenis son "+tenis);
        document.querySelector("#resultadoSociosRugby").insertAdjacentHTML("afterbegin","La cantidad de socios que juegan rugby son "+rugby);
        document.querySelector("#resultadoSociosVoley").insertAdjacentHTML("afterbegin","La cantidad de socios que juegan voley son "+voley);
        document.querySelector("#resultadoSociosHockey").insertAdjacentHTML("afterbegin","La cantidad de socios que juegan hockey son "+hockey);
        document.querySelector("#resultadoSociosFutbol").insertAdjacentHTML("afterbegin","La cantidad de socios que juegan futbol son "+futbol);
        document.querySelector("#resultadoEdad").insertAdjacentHTML("afterbegin",edad/con);
        habilitar();
        form.reset();
    })
})