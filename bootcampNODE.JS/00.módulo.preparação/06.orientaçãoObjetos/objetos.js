function Retangulo(altura, largura) {
  this.altura = altura;
  this.largura = largura;
  this.area = function () {
    return this.altura * this.largura;
  };
}

var r1 = Retangulo(3, 4);
var r2 = Retangulo(7, 2);

function RetanguloV2(altura, largura) {
  this.altura = altura;
  this.largura = largura;
}

RetanguloV2.prototype.area = function () {
  return this.altura * this.largura;
};

var r3 = RetanguloV2(3, 4);
var r4 = RetanguloV2(7, 2);
