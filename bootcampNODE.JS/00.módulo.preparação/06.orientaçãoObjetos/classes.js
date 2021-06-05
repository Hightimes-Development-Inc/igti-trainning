class Retangulo {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }

  area() {
    return this.altura * this.largura;
  }

  imprimeNome() {
    console.log("Retângulo");
  }
}

class Quadrado extends Retangulo {
  constructor(dimensao) {
    super(dimensao, dimensao);
  }

  imprimeNome() {
    console.log("Quadrado");
  }
}

var r1 = new Retangulo(3, 8);
var r2 = new Retangulo(4, 7);
var q1 = new Quadrado(8);
var q2 = new Quadrado(7);
