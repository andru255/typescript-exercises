let numeroAleatorio:number = Math.random() * ( 1  - 20) + 20;
let numeroAEvaluar:number = parseInt(numeroAleatorio.toString());
let esAprobado:boolean = false;

if(numeroAEvaluar > 10){
    esAprobado = true;
} else {
    esAprobado = false;
}

console.log("número generado:", numeroAEvaluar);

if(esAprobado){
    console.log("Aprobado");
} else {
    console.log("Desaprobado");
}
