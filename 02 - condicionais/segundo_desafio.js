const precoEtanol = 5.79;
const precoGasolina = 6.66;
const gastoMedio = 10;
const distancia = 100;
const tipoCombustivel = 'Gasolina';

const LitrosConsumidos = distancia / gastoMedio;
if (tipoCombustivel === 'Etanol') {
    const valorGasto = LitrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = LitrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}






