addEventListener("DOMContentLoaded", (e) => {
    function deshabilitar (){
        contenedor.style.display = "inline-block";
        document.querySelector("#boton").disabled = true;
    }
    function pagar(checkboxData,select){
        let totalPagar = 0;
        checkboxData.forEach(ingre=>{
            ingre=="Pepinillos" ? totalPagar+=150: null;
            ingre=="Champiñones" ? totalPagar+=150: null;
            ingre=="Cebolla" ? totalPagar+=150: null;
        });
        switch(select){
            case "peque":
                totalPagar += 500;
                deshabilitar();
                return totalPagar;    
            case "medi":
                totalPagar += 1000;
                deshabilitar();
                return totalPagar;  

            case "gran":
                totalPagar += 2000;
                deshabilitar();
                return totalPagar;  

            case "":
                swal("Error", "Debes seleccionar una tamaño de pizza", "error");
                break
        }
    }
    let form = document.querySelector("#form");
    document.querySelector("#boton").disabled = false;
    let contenedor = document.querySelector("#contenedor");
    let resultado = document.querySelector("#resultado");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let checkbox = document.querySelectorAll("input[type='checkbox']");
        let checkboxData = [];
        checkbox.forEach(res =>(res.checked)? checkboxData.push(res.value):null);
        let select = document.querySelector("#select").value;
        let pagarTodo = pagar(checkboxData,select);
        resultado.insertAdjacentHTML("beforebegin",`<h3>El total a pagar es de ${pagarTodo} pesos</h3>`);
        form.reset();
    })
})
