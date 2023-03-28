/* Objectif : écrivez le corps de la fonction calc(array, 'n1', 'n2') ou array est un tableau d'entiers et les parametres 'n1' et 'n2' sont des entiers definis par la relation 0 <= 'n1' <= 'n2' < array.length.
La fonction calc doit retourner la somme des entiers de array dont l'index appartient à l'intervalle
[n1; n2] .*/

const tableRangeSum = [1, 2, 4, 3, 1, 5, 2];
const n1 = 1;
const n2 = 5;

function calc(tableRangeSum, n1, n2) {
  let sum = 0;

  if (tableRangeSum.length === 0) {
    sum = 0;
  } else {
    for (let i = n1; i <= n2; i++) {
      sum += tableRangeSum[i];
    }
  }
  return sum;
}

// console.log(calc(tableRangeSum, n1, n2));
