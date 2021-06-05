var mensagem = "Hello World!";
//alert(mensagem);
console.log(mensagem);

//Objetos

var aluno01 = {
  matricula: "960105",
  nome: "Fernando Aquilini",
  curso: "BCC",
  ativo: true,
};

console.log(aluno01.nome);

aluno01.dataNascimento = "24/03/1977";
console.log(aluno01.dataNascimento);

delete aluno01.dataNascimento;

var x;
var y = null;

//Arrays

var alunos = [];
var frutas = ["Banana", "Laranja", "Maçã"];
frutas.push("Abacaxi");
console.log(frutas);

var primitivo01 = 1;
var primitivo02 = primitivo01; //Copia o valor
primitivo02 = 2;

console.log(primitivo01); //Imprime 01
console.log(primitivo02); //Imprime 02

var objeto01 = { x: 1 };
var objeto02 = objeto01; //Copia a referência
objeto02.x = 2;

console.log(objeto01.x); //Imprime 01
console.log(objeto02.x); //Imprime 02

//Operadores

//Funcções

imprimeOla();
function imprimeOla() {
  console.log("Olá!");
}
imprimeOla();

function soma(op1, op2) {
  return op1 + op2;
}

var resultado = soma(3, 9);
console.log(resultado);

var texto = "Bem vindo ";
function novoOla() {
  var nome = "Fernando!";
  console.log(texto);
  console.log(nome);
}

function novoOla02() {
  console.log(texto);
  //    console.log(nome); vai dar erro, a mesma coisa com funções, só funciona dentro do escopo;
}

// Comandos de decisão...

function maior2Fatores(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

function maior3Fatores(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > c && b > a) {
    return b;
  } else {
    return c;
  }
}
//Função ternária Reduzida
function maior2Ternaria(a, b) {
  return a > b ? a : b;
  /*  ou usa assim
    var r = (a > b) ? a : b;
    return r;
*/
}
function maior3Ternaria(a, b, c) {
  var r = a > b && a > c ? a : b > c && b > a ? b : c;
  return r;
}

function formataMes(mes) {
  switch (mes) {
    case 1:
      return "Janeiro";
    case 2:
      return "Fevereiro";
    case 3:
      return "Março";
    case 4:
      return "Abril";
    case 5:
      return "Maio";
    case 6:
      return "Junho";
    case 7:
      return "Julho";
    case 8:
      return "Agosto";
    case 9:
      return "Setembro";
    case 10:
      return "Outubro";
    case 11:
      return "Novembro";
    case 12:
      return "Dezembro";
    default:
      console.log("Não entendi...");
      break;
  }
}

// Estruturas de repetição

// Com o While
var contadorWhile = 1;
while (contadorWhile <= 5) {
  console.log(contadorWhile);
  contadorWhile++;
}

// Com o Do While
var contadorDoWhile = 1;
do {
  console.log(contadorDoWhile);
  contadorWhile++;
} while (contadorDoWhile <= 5);

//Com o For
for (contadorFor = 1; contadorFor <= 5; contadorFor++) {
  console.log(contadorFor);
  //break; se tiver decisão... Encerra
  //continue; se tiver decisão... Termina a repetição ativa e pula para a próxima
}
