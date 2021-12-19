/* Desafio 3 - Área de Atuação IV - Programação
 *
 * Escreva um programa que lê 2 matrizes A e B, cada uma com 3 linhas
 * e 2 colunas. Construir uma matriz C de mesma dimensão (3x2) onde C
 * é formada pela soma dos elementos da matriz A com os elementos da
 * matriz B (exemplo: C[1][1] = A[1][1] + B[1][1]). Apresentar ao final
 * as 3 matrizes (A, B e C).
 */

const matrizA = genMatriz(3, 2)
const matrizB = genMatriz(3, 2)
const matrizC = genMatriz(3, 2, null)

for (let lin = 0; lin < matrizC.length; lin++) {
  for (let col = 0; col < matrizC[lin].length; col++) {
    matrizC[lin][col] = matrizA[lin][col] + matrizB[lin][col]
  }
}

console.log('Matriz A: ')
matrizA.map((item) => console.log(item))

console.log('\nMatriz B: ')
matrizB.map((item) => console.log(item))

console.log('\nMatriz C: ')
matrizC.map((item) => console.log(item))

function randNum() {
  return Math.floor(Math.random() * 10)
}

function genMatriz(lin, col, filler) {
  const tmp = []

  for (let i = 0; i < lin; i++) {
    tmp[i] = []
    for (let j = 0; j < col; j++) {
      tmp[i][j] = filler ? filler : randNum()
    }
  }

  return tmp
}
