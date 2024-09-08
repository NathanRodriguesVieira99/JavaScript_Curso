//classe
class pessoa {
	nome;
	idade;

	descrever() {
		console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);
	}
}

//instancia
const nathan = new pessoa();
nathan.nome = "nathan R";
nathan.idade = 18;

console.log(nathan);

const zeDoCaixao = new pessoa();
zeDoCaixao.nome = "Zé do Caixão";
zeDoCaixao.idade = 40;

console.log(zeDoCaixao);

//classe
class arma {
	nome;
	ano;
	descricao;
}

const Fal = new arma();

Fal.nome = "FAL";
Fal.ano = 1990;
Fal.descricao = "lorem ipsun dolor";

console.log(Fal);

const ak = new arma();

ak.nome = "AK 47";
ak.ano = 1947;
ak.descricao = "lorem ipsun dolor";

console.log(ak);
