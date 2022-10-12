addEventListener("DOMContentLoaded", (e) => {
    function deshabilitar (){
        contenedor.style.display = "inline-block";
        document.querySelector("#boton").disabled = true;
    }
    function revertir(numero) {
        const convertir = numero.toString().split("").reverse().join("");
        return Number(convertir);
    }
    let form = document.querySelector("#form");
    document.querySelector("#boton").disabled = false;
    let contenedor = document.querySelector("#contenedor");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let resultado = document.querySelector("#resultado");
        let numero =Number(document.querySelector("#numero").value);
        let convertido = revertir(numero);
        resultado.insertAdjacentHTML("beforeend",convertido)
        deshabilitar();
        form.reset();
    })
})
