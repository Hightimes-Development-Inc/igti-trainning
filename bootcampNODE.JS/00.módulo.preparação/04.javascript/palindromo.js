function palindromo(texto) {
  if (texto.length <= 1) {
    console.log(texto + " é Palíndromo!");
  } else {
    for (
      var inicio = 0, fim = texto.length - 1;
      inicio < fim;
      inicio++, fim--
    ) {
      if (texto.charAt(inicio) != texto.charAt(fim)) {
        console.log(texto + " não é Palíndromo!");
        return;
      }
    }
    console.log(texto + "  é Palíndromo!");
  }
}
palindromo("abccba");
palindromo("bola");
palindromo("arroba");
palindromo("arara");
palindromo("x");
palindromo("");
