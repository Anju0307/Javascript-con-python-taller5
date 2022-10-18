addEventListener("DOMContentLoaded", (e) => {
    function habilitar (){
        document.querySelector("#contenedor").style.display = "inline-block";
        document.querySelector("#botonCalcular").disabled = true;
    }
    document.querySelector("#botonCalcular").disabled = false
    let form =document.querySelector("#form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let anterior = document.querySelector("#anterior").value;
        let nuevo = document.querySelector("#nuevo").value;
        anterior > nuevo ?
            document.querySelector("#resultado").insertAdjacentHTML("beforeend","BAJO"):
            anterior < nuevo ?
                document.querySelector("#resultado").insertAdjacentHTML("beforeend","SUBIO"):
                    document.querySelector("#resultado").insertAdjacentHTML("beforeend","ESTABLE") 

        habilitar();
        form.reset();
    })
})