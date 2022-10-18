addEventListener("DOMContentLoaded", (e) => {
    function habilitar (){
        document.querySelector("#contenedor").style.display = "inline-block";
        document.querySelector("#botonCalcular").disabled = true;
    }
    document.querySelector("#botonCalcular").disabled = false
    let form =document.querySelector("#form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let nombre = document.querySelector("#nombre").value;
        let veces =parseInt(document.querySelector("#veces").value);
        let conectados =parseInt(document.querySelector("#conectados").value);
        let extra =parseInt(document.querySelector("#extra").value) ;
        let sacrificios =parseInt(document.querySelector("#sacrificios").value) ;
        let recibidas =parseInt(document.querySelector("#recibidas").value) ;
        document.querySelector("#titRes").insertAdjacentHTML("beforeend", nombre)
        document.querySelector("#resultado").insertAdjacentHTML("beforeend",((conectados+extra)/((veces-sacrificios-recibidas)*1000)));
        habilitar();
        form.reset();
    })
})