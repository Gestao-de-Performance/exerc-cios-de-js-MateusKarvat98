// Exercício 1 - Crie um programa que possua duas variáveis com valores numéricos e realize a soma de ambas.
var x = 1;
var y = 2;
var soma = x + y;
console.log("O resultado é", soma);

//Ex2. Crie um vetor contendo 10 números e faça a média de todos os valores

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let soma1 = 0;
for (let i = 0; i < 10; i++){
    soma1 = soma1 + numeros[i];
}

let media = soma1 / 10;
console.log(media);

// Ex3. Pegue os mesmos 10 números do ex. anterior e mos no console apenas os números primos

for (let i = 0; i < 10; i++) {
  let n = numeros[i];
  let primo = true;

  if (n < 2) {
    primo = false;
  } else {
    for (let j = 2; j <= Math.sqrt(n); j++) {
      if (n % j === 0) {
        primo = false;
        break;
      }
    }
  }
  if (primo) {
    console.log(n + " é primo");
  }
}
