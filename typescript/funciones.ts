function sumar(a: number, b: number): number {
    return a + b;
}
const resultado = sumar(11, 13);
//console.log(resultado);

//function Arrow functions

const sumarArrow = (a: number, b: number): number => {

    return a + b;
}
const multiplicar = (a1: number, b2: number, base: number): number => {

    return a1 * b2 * base;
}
console.log("estamos multiplicando ");
console.log(multiplicar(5,5,3));
