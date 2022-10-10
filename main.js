addEventListener("DOMContentLoaded", (e) => {
    let form = document.querySelector("#form");
    document.querySelector("#numero1").readOnly = false;
    document.querySelector("#numero2").readOnly = false;
    document.querySelector("#boton").disabled = false;
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let num1 = parseInt(document.querySelector("#numero1").value);
        let num2 = parseInt(document.querySelector("#numero2").value);
        let suma = num1 + num2;
        let resultado = document.querySelector("#resultado");
        resultado.insertAdjacentHTML("beforebegin", `<h2>${suma}<h2/>`);
        let contenedor = document.querySelector("#contenedor").style.display = 'inline-block';
        document.querySelector("#numero1").readOnly = true;
        document.querySelector("#numero2").readOnly = true;
        document.querySelector("#boton").disabled = true;
        document.querySelector("#boton").style.cursor ="not-allowed";
        form.reset();
        contenedor.addEventListener("submit", (e) => {
            contenedor == true ? contenedor.style.display = 'none' : contenedor.style.display = 'inline-block';
            document.querySelector("#numero1").readOnly = false;
            document.querySelector("#numero2").readOnly = false;
            document.querySelector("#boton").disabled = false;
        })
    })
})
