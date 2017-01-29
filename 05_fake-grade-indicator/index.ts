window.onload = ()=>{
    //referencio el element html "indicator"
    let indicador:HTMLElement = document.getElementById("indicador");

    setInterval(()=>{
        //genero el numero aleatorio
        let gradoAleatorio:number = Math.random() * 100;
        //Ingreso el nuevo valor en el elemento para mostrarlo
        indicador.innerHTML = gradoAleatorio.toString();
    }, 500);
};