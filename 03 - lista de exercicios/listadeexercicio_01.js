const primeiraNota = 7;
const segundaNota = 5;
const terceiraNota = 2;

const media = primeiraNota + segundaNota + terceiraNota / 3;

function calcMedia() {
	const resultado = media;
	if (resultado < 5) {
		console.log("reprovado");
	} else if (resultado >= 5 && resultado < 7) {
		console.log("recuperação");
	} else {
		console.log("aprovado");
	}
}

console.log(calcMedia());
