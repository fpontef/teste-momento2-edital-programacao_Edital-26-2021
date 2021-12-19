/* Desafio 1 - Área de Atuação IV - Programação
 *
 * Faça um programa que preencha um vetor com 6 valores distintos
 * digitados pelo usuário. Em seguida, exiba o maior e o menor valor do
 * vetor, indicando em qual posição eles se encontram. Depois, imprima os
 * itens no vetor em ordem crescente.
 */

/*
 * Para resolução do desafio, segui usando uma metodologia bubble sort sem swap.
 * - Requisito: nodejs para uso do readline
 */

const readline = require('readline')
const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const vetor = []
let maxNum = 0
let minNum = 0

main()

async function main() {
  let count = 0

  while (true) {
    if (count === 5) break

    const input = await ask(`Digite o ${count + 1}o número: `)
    const value = parseInt(input)

    if (isNaN(value)) {
      console.log('Por favor informar somente números.')
      continue
    }

    if (vetor.indexOf(value) !== -1) {
      console.log('Ops, por favor informar um valor diferente.')
      continue
    }

    vetor[count] = value

    if (count == 0) maxNum = minNum = vetor[count]
    if (vetor[count] > maxNum) maxNum = vetor[count]
    if (vetor[count] < minNum) minNum = vetor[count]

    count++
  }

  console.log(`Vetor original: ${vetor}`)
  console.log(`Maior posição/item: ${vetor.indexOf(maxNum)}/${maxNum}`)
  console.log(`Menor posição/item ${vetor.indexOf(minNum)}/${minNum}`)
  console.log(`Vetor ordenado: ${sort(vetor)}`)

  process.exit()
}

function ask(questionText) {
  return new Promise((resolve) => {
    readlineInterface.question(questionText, (input) => resolve(input))
  })
}

function sort(vet = []) {
  for (let last = vet.length - 1; last > 0; last--) {
    for (let i = 0; i < last; i++) {
      if (vet[i] > vet[i + 1]) {
        let aux = vet[i]
        vet[i] = vet[i + 1]
        vet[i + 1] = aux
      }
    }
  }

  return vet
}
