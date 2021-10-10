function resultadoFormula() {
  var valorMontanteElemento = document.getElementById("valorMontante");
  var valorMontante = valorMontanteElemento.value;

  var valorMensalElemento = document.getElementById("valorMensal");
  var valorMensal = valorMensalElemento.value;

  var valorJurosElemento = document.getElementById("valorJuros");
  var valorJuros = valorJurosElemento.value;
  var valorJuros1 = parseFloat(valorJuros.replace(",", "."));
  var valorJuros1 = valorJuros1 / 100;
  console.log(valorJuros1);

  var valorTempoElemento = document.getElementById("valorTempo");
  var valorTempo = valorTempoElemento.value;

  // Formula pra calculo do VF => F = P.(1+i)n + M.[(1+i)n - 1]/i//

  // Cálculo P.(1+i)n //
  var vPresente = parseFloat(1) + parseFloat(valorJuros1);
  var potencia = Math.pow(vPresente, parseFloat(valorTempo));
  var vPresenteFinal = parseFloat(valorMontante) * potencia;

  //Calculo Pagemento Mensal => M.[(1+i)n - 1]/i
  var potenciaNegativa = potencia - parseFloat(1);
  var divJuros = potenciaNegativa / parseFloat(valorJuros1);
  var invMensal = parseFloat(valorMensal) * divJuros;

  //final da formula//

  var valorInvestido = vPresenteFinal + invMensal;
  var valorInvestido = valorInvestido.toFixed(2);
  var valorInvestido = valorInvestido.replace(".", ",");

  var elementoResultado = document.getElementById("resultado");
  var text1 = "Em ";
  var text2 = " meses ";
  var text3 = "você terá o total de R$: ";
  var resultado = text1 + valorTempo + text2 + text3 + valorInvestido;
  elementoResultado.innerHTML = resultado;
}

// para a próxima versão
//if (valorMontante < 0 || valorMensal < 0 || valorTempo < 0) {
//var elementoResultado = document.getElementById("resultado");
//var resultado = "Valores Inválidos. Insira valor maior ou igual O";
//elementoResultado.innerHTML = resultado;
//}
//if (valorJuros1 <= 0) {
//var resultado = "A taxa de juros não poderá ser menor ou igual a zero";
//elementoResultado.innerHTML = resultado;
//} else {
// resultadoFormula()
//};