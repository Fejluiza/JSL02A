/*Ler dois valores numéricos inteiros e apresentar o resultado da diferença do maior pelo menor valor. */

var valor  = parseInt(prompt("Digite um valor"))
var valor1  = parseInt(prompt("Digite outro valor"))

var diferenca = valor - valor1

if (valor1 > valor){
    diferenca = valor1 - valor
}
else
if(valor > valor1){
    diferença = valor - valor1
}

alert("O resultado da diferença entre o maior valor para o menor é: R$"+diferenca)