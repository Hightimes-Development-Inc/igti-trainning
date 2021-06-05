let a = 1;
const b = 1;
a = 2;
//b = 2;

function teste() {
  for (var i = 0; i < 5; i++) {
    //fazer algo
  }
  for (let j = 0; j < 5; j++) {
    //fazer algo
    console.log("j: " + j);
  }
  console.log("i: " + i);
  //console.log("j: " + j);
}
teste();

// Atribuições via desestruturação

let primos = [2, 3, 5, 7, 11, 13];

let curso = {
  nome: "Bootcamp Node.JS",
  modulos: 5,
  presencial: false,
  turma: 01,
};

let [p1, p2, ...resto] = primos;
console.log(resto);

let { nome: nomeCurso, turma, ...outrosCampos } = curso;
console.log(nomeCurso);
console.log(turma);
console.log(outrosCampos);

let primos02 = [...primos, 17];
let primos03 = [1, ...primos, 17];

let curso02 = {
  ...curso,
  descricao: "Texto",
  status: "Ativo",
};
let curso03 = {
  ...curso,
};

//Template Literals
let num01 = 3;
let num02 = 2;
let soma = num01 + num02;

console.log(num01 + " + " + num02 + " = " + soma);
console.log(`${num01} + ${num02} = ${soma}`);
console.log(`${num01} + ${num02} = ${num01 + num02}`);

//Arrow Functions
function soma(a, b) {
  return a + b;
}
var somaV2 = (a, b) => a + b;

function Retangulo(altura, largura) {
  this.altura = altura;
  this.largura = largura;
  this.area = function () {
    return this.altura * this.largura;
  };
}

function RetanguloV2(altura, largura) {
  this.altura = altura;
  this.largura = largura;
  this.area = () => this.altura * this.largura;
}

var imprimeMensagem = (m) => console.log(m);
var imprimeMensagemV2 = (m) => console.log(m);
