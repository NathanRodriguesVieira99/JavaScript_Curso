//objeto literal
const nathan = {
	nome: "Nathan Vieira",
	idade: 18,
	descrever: function () {
		console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);
	},
};
nathan.descrever();

console.log(nathan.nome);
console.log(nathan.idade);
console.log(nathan);

// incrementar o objeto dinamicamente
nathan.altura = 1.67;
console.log(nathan);
