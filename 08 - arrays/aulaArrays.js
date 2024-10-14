// push adiciona
// pop remove o ultimo
// shift remove o primeiro

const alunos = ['piu', 'zico', 'rolin'];

//array completo
console.log(alunos);

//pelo indice
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

//adicionar no array
alunos.push('robue')
console.log(alunos);
//ou
alunos[4] = 'lin' // escolhe o indice (pode subistituir )
console.log(alunos);


// começando com array vazio
const members = []

members.push('altair') 
members.push('ezio')
members.push({
  name:'shao jun',
  age: 21,                    // pode ser qualquer tipo de dado
  country: 'china'
})

console.log(members);


members.pop()  // remove o ultimo 
console.log(members);

members.shift()  // remove o primeiro
console.log(members);


// apagar posição especifica

