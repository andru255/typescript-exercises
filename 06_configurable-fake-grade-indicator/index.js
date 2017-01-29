window.onload = function () {
    //referencio el element html "indicator"
    var txtMin = document.getElementById("min");
    var txtMax = document.getElementById("max");
    var indicador = document.getElementById("indicador");
    var btnActualizar = document.getElementById("actualizar");
    var rangoMinimo = parseInt(txtMin.value);
    var rangoMaximo = parseInt(txtMax.value);
    var factorAleatorio = 100;
    var gradoAleatorio = 0;
    btnActualizar.addEventListener("click", function () {
        var rangoMinimo = parseInt(txtMin.value);
        var rangoMaximo = parseInt(txtMax.value);
        factorAleatorio = (rangoMinimo - rangoMaximo) + rangoMaximo;
    }, false);
    setInterval(function () {
        //Ingreso el nuevo valor en el elemento para mostrarlo
        gradoAleatorio = Math.random() * factorAleatorio;
        indicador.innerHTML = gradoAleatorio.toString();
    }, 500);
};
