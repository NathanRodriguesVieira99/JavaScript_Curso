class Pessoa {
	nome;
	peso;
	altura;

	constructor(nome, peso, altura) {
		this.nome = nome;
		this.peso = peso;
		this.altura = altura;
	}
	calcularImc() {
		return this.peso / Math.pow(this.altura, 2); // Eleva ao quadrado
	}

	classificarImc() {
		const imc = this.calcularImc();
		if (imc < 18.5) {
			return "Abaixo do peso";
		} else if (imc >= 18.5 && imc < 25) {
			return "Peso normal";
		} else if (imc >= 25 && imc < 30) {
			return "Acima do peso";
		} else if (imc >= 30 && imc < 40) {
			return "Obeso";
		} else {
			return "Obesidade grave";
		}
	}
}

const jose = new Pessoa("josé", 70, 1.75);
console.log(jose);
console.log(jose.calcularImc());
console.log(jose.classificarImc());

const nathan = new Pessoa("nathan", 49, 1.67);
console.log(nathan);
console.log(nathan.calcularImc());
console.log(nathan.classificarImc());
