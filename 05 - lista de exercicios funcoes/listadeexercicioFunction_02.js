function verifyAge() {
	const idade = 18;
	if (idade === 0) {
		return console.log("informe uma idade válida 😒");
	}
	if (idade < 18) {
		return console.log(`menor de idade, pois sua idade é: ${idade}`);
	}
	if (idade >= 18) {
		return console.log(`maior de idade, pois sua idade é: ${idade}`);
	}
	return console.log("informe sua idade");
}
/////////////////////////////////////
verifyAge();
function verifyAge2() {
	const idade = Number(prompt("informe sua idade"));
	if (idade === 0) {
		return alert("informe uma idade válida");
	}
	if (idade < 18) {
		return alert(`menor de idade, pois sua idade é: ${idade}`);
	}
	if (idade >= 18) {
		return alert(`maior de idade, pois sua idade é: ${idade}`);
	}
	return alert("informe sua idade");
}

verifyAge2();
