window.onload = ()=>{
    //referencio el element html "indicator"
    let indicator:HTMLElement = document.getElementById("indicator");

    setInterval(()=>{
        //genero el numero aleatorio
        let randomNumber:number = Math.random() * 100;
        //Ingreso el nuevo valor en el elemento para mostrarlo
        indicator.innerHTML = randomNumber.toString();
    }, 500);
};