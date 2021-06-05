/*
var numero01 = document.getElementById("numero01");
var numero02 = document.getElementById("numero02");
var resultado = document.getElementById("resultado");

document.addEventListener("input", function calcula() {
  var soma = numero01.valueAsNumber + numero02.valueAsNumber;
  !isNaN(soma)
    ? (resultado.textContent = soma)
    : (resultado.textContent = "Vazio");
});

*/

/*
var fsList = document.querySelectorAll(".multiple-fields");
for (var i = 0; i < fsList.length; i++) {
  initMultipleFieldset(fsList[i]);
}

function initMultipleFieldset(fs) {
  var addHR = document.createElement("hr");
  fs.appendChild(addHR);

  var addButton = document.createElement("button");
  addButton.textContent = "Adicionar";
  addButton.type = "button";
  fs.appendChild(addButton);

  var firstInput = fs.querySelector("input");

  addButton.addEventListener("click", function () {
    var div = document.createElement("div");
    var newInput = document.createElement("input");
    newInput.name = firstInput.name;
    newInput.type = firstInput.type;
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.type = "button";
    div.appendChild(newInput);
    div.appendChild(deleteButton);

    deleteButton.addEventListener("click", function () {
      div.remove();
    });

    fs.insertBefore(div, addHR);
  });
}

*/

var caixa = document.getElementById("caixa");
var cx, cy;

function setPos(x, y) {
  //caixa.style = "top: " + y + "px; left: " + x + "px;";
  caixa.style.top = y + "px";
  caixa.style.left = x + "px";
}

caixa.addEventListener("mousedown", iniciaArrate);
document.addEventListener("mouseup", terminaArraste);

function iniciaArrate(evt) {
  //caixa.className = "arrastando";
  var cx = evt.clientX - pxParaNum(caixa.style.left);
  var cy = evt.clientY - pxParaNum(caixa.style.top);
  caixa.classList.add("arrastando");
  document.addEventListener("mousemove", arrasta);
};

function terminaArraste(evt) {
  //caixa.className = "";
  caixa.classList.remove("arrastando");
  document.removeEventListener("mousemove", arrasta);
};

function arrasta(evt) {
  var x = evt.clientX;
  var y = evt.clientY;
  setPos(x - cx, y - cy);
}

function pxParaNum(string) {
  return +string.replace("px", "");
}
