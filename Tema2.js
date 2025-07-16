// Ex1. Crie um programa com duas variáveis (199,3 e 120) e realize a soma de ambas.

var x = 199.3
var y = 120

function soma(a,b){
    let resulado;
    resultado = a + b;
    return resultado;
}

soma (x, y);
console.log(soma(x, y));

// Ex2

let vetor = [0, 1, 2 , 3, 4, 5, 6, 7, 8, 9];

console.log(media(vetor));

function media(vet){
    var soma1 = 0;
        for (i = 0; i < vet.length; i++);
        soma1 = soma1 + vet[i];
        return soma1 / vet.length;
}


//Ex3. Pegues os mesmos 10 números do exercicio anterior e mostre no console apenas os números primos.

function primos(a){
    for (i = 0; i <= 10; i++);
    let n = a[i];
    let primo = true;
        if (n % 1 > 0 && n % n > 0){
        primo = false;
        }
    if (primo) {
        console.log (n + "É um número primo");
    }
}

primos(vetor);

// Ex4. Crie um jogo de par ou impar

var jogador1 = 2;
var jogador2 = 1;

function jogo(a,b){
    let resultado;
    resultado = a + b;
    if (resultado % 2 === 0){
        return "Vitoria Par"
    }
        else (resultado % 3 != 0);
            return "Vitoria Impar"   
}

jogo(jogador1, jogador2);
console.log(jogo(jogador1, jogador2));

// Ex5. Fibonacci

console.log(Fibonacci(10))

function Fibonacci(n)
{
  var x = 0
  var y = 1
  var resultado = 0
  if(n===3){
    resultado = 1
  }
  else{
    for(i=1; i<n; i++)
    {
      resultado = x + y
      x = y
     y = resultado
    }
  }
  return resultado
}



