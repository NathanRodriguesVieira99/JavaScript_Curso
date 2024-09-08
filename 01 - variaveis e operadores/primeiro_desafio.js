const precoCombustivel = 5.79;
const gastoMedio = 10;
const distancia = 100;



const LitrosConsumidos = distancia / gastoMedio;
const valorGasto = LitrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));



