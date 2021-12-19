/* Desafio 2 -  Área de Atuação IV - Programação
 *
 * Escreva um programa que, dada uma matrix 3x3, armazena em cada posição
 * da matriz, a soma dos valores da linha e coluna que definem a posição.
 * Por exemplo, na posição [1][2] você deverá armazenar o valor 1+2 = 3 e
 * assim por diante. Imprima a matriz na tela.
 *
 */

const matriz = genMatriz(3, 3)

for (let lin = 0; lin < matriz.length; lin++) {
  for (let col = 0; col < matriz[lin].length; col++) {
    matriz[lin][col] = lin + col
  }
  console.log(matriz[lin])
}

// Visualização com table Node >= 10.x
// console.table(matriz)

// Gera tipo [new Array(3), new Array(3), new Array(3)]
function genMatriz(lin, col) {
  const tmp = []

  for (let i = 0; i < lin; i++) {
    tmp[i] = []
    for (let j = 0; j < col; j++) {
      tmp[i][j] = null
    }
  }

  return tmp
}
