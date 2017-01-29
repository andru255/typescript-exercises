window.onload = function () {
    //referencio el element html "indicator"
    var indicator = document.getElementById("indicator");
    setInterval(function () {
        //genero el numero aleatorio
        var randomNumber = Math.random() * 100;
        //Ingreso el nuevo valor en el elemento para mostrarlo
        indicator.innerHTML = randomNumber.toString();
    }, 500);
};
