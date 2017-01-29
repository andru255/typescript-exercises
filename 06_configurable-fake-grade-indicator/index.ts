window.onload = ()=>{
    //referencio el element html "indicator"
    let txtMin:HTMLInputElement = <HTMLInputElement>document.getElementById("min");
    let txtMax:HTMLInputElement = <HTMLInputElement>document.getElementById("max");

    let indicador:HTMLElement = document.getElementById("indicador");
    let btnActualizar:HTMLElement = document.getElementById("actualizar");

    let rangoMinimo:number = parseInt(txtMin.value);
    let rangoMaximo:number = parseInt(txtMax.value);
    let factorAleatorio: number = 100;
    let gradoAleatorio:number = 0;

    btnActualizar.addEventListener("click", function(){
        let rangoMinimo:number = parseInt(txtMin.value);
        let rangoMaximo:number = parseInt(txtMax.value);
        factorAleatorio = (rangoMinimo - rangoMaximo) + rangoMaximo;
    }, false);

    setInterval(()=>{
        //Ingreso el nuevo valor en el elemento para mostrarlo
        gradoAleatorio = Math.random() * factorAleatorio;
        indicador.innerHTML = gradoAleatorio.toString();
    }, 500);
};