const notas = [];

notas.push(5)
notas.push(10)
notas.push(10)
 notas.push(2)
 notas.push(5)
 notas.push(8)


let soma = 0;

for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];
  soma = soma + nota
  
}

const media = soma / notas.length;

console.log(` total de notas: ${notas.length}`);// mostrando quantas notas a pessoa tem
console.log(`soma total das notas: ${soma}`);// mostrando o resultado da soma das notas
console.log(`a media das notas: ${media.toFixed(1)}`);// mostrando a média






// for 

const nome = 'young plague';

for (let i = 0; i < nome.length; i++) {
  const letra = nome[i];
  // console.log(letra);
}


const nomeTwo = 'young christ';

for (let i = 0 ; i < nomeTwo.length; i++){
  const letraTwo = nomeTwo[i];
  // console.log(letraTwo);
  
}
