addEventListener("DOMContentLoaded", (e) => {
    let suma = 0,des;
    let form = document.querySelector("#form");
    document.querySelector("#numero1").readOnly = false;
    document.querySelector("#boton").disabled = false;
    let contenedor = document.querySelector("#contenedor");
    let resultado = document.querySelector("#resultado");
    let deshabilitar = () => {
        contenedor.style.display = "inline-block";
        document.querySelector("#numero1").readOnly = true;
        document.querySelector("#boton").disabled = true;
    }
    let descuento = () => {
        (suma>10000)
            ? (des =suma-(suma*0.10))
            (resultado.insertAdjacentHTML("beforebegin", `<h2>Se le aplica un descuento del 10% y el total a pagar es de: ${des}<h2/>`))
            : (resultado.insertAdjacentHTML("beforebegin", `<h2>${suma}<h2/>`));

    }
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let num1 = parseInt(document.querySelector("#numero1").value);
        form.reset();
        (num1 > 0)
            ? (suma += num1)
            : (num1 < 0) ?
                (alert("No puedes ingresar un numero menor"))
                : (deshabilitar())
                    (descuento());
    })
})
