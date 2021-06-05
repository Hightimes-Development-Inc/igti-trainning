// 1 - for ... of
for (let item of titulos) {
  //console.log(`${item.campeonato} em ${item.ano}`);
}

// 2 - forEach
titulos.forEach((item, index) => {
  //console.log(`${index + 1}: ${item.campeonato} em ${item.ano}`);
});

// 3 - map
let novoArray = titulos.map((item) => item.campeonato + " (" + item.ano + ")");
//console.log(novoArray);

// 4 - filter
let arrayFiltrado = titulos.filter((item) => item.campeonato == "Brasileiro");
//console.log(arrayFiltrado);

// 3/4 - filter com map
let novoArrayFiltrador = titulos
  .filter((item) => item.ano == 2005)
  .map((item) => item.campeonato + " (" + item.ano + ")");
//console.log(novoArrayFiltrador);

// 5 - find
let primeiroEncotrado = titulos.find((item) => item.ano == 1985);
//console.log(primeiroEncotrado);

// 6 - sort
let titulosOrdenado = titulos.sort((item01, item02) => {
  if (item01.ano < item02.ano) {
    return -1;
  } else if (item01.ano > item02.ano) {
    //
    return 1;
  } else {
    return 0;
  }
});
