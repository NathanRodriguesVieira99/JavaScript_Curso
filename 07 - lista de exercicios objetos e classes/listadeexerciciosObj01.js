class Carro {
	marca;
	cor;
	litrosPorKM;

	constructor(marca, cor, gastoMedioPorKM) {
		this.marca = marca;
		this.cor = cor;
		this.gastoMedioPorKM = gastoMedioPorKM;
	}
	calcularGastoDePercurso(distanciaEmKM, precoCombustivel) {
		return distanciaEmKM * this.gastoMedioPorKM * precoCombustivel;
	}
}
const lancer = new Carro("mitsubish", "azul", 1 / 7, 2);
console.log(lancer);
console.log(lancer.calcularGastoDePercurso(70, 5));

const uno = new Carro("Fiat", "prata", 1 / 12);
console.log(uno);
console.log(uno.calcularGastoDePercurso(70, 5));

const palio = new Carro("fiat", "preto", 1 / 10);
console.log(palio);
console.log(palio.calcularGastoDePercurso(70, 5));
