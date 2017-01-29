var numeroAleatorio = Math.random() * (1 - 20) + 20;
var numeroAEvaluar = parseInt(numeroAleatorio.toString());
var esAprobado = false;
if (numeroAEvaluar > 10) {
    esAprobado = true;
}
else {
    esAprobado = false;
}
console.log("número generado:", numeroAEvaluar);
if (esAprobado) {
    console.log("Aprobado");
}
else {
    console.log("Desaprobado");
}
