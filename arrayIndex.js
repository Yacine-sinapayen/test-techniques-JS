/*Objectif : Vérifier dans les index pair de mon tableau si la var 'value' existe */
const table = ["exist", "hello", "programisto", "yan", "let", "yaya"];
const value = "yaya";

// 1 - J'intencie 'elementsIndexPair' qui va stocker les éléments situés aux index pairs du tableau.
// 2 - La boucle for parcours les éléments du tableau 'table', en récupérent les index pair grâce à l'incrément 'i += 2' (à chaque itération, le code teste si l'index actuel 'i' est pair en vérifiant si le reste de sa division par 2 est égal à zéro).
// 2.a Si c'est le cas, l'élément du tableau correspondant à cet index est ajouté au tableau 'elementsIndexPair' à l'aide de la méthode push().
// 3 J'affiche mon tableau d'index pair
// 4 Je vérifie si dans ce tableau ma 'value' existe.
// 4.a j'instencie une 'let findvalue' à 'false'.
// 4.b je boucle sur mon tableau d'index afin de trouver la valeur.
// 4.c je créais une condition qui renvoie un console trueou false selon la présence ou non de la valeur dans le tableau
// Fiabilité : si le tableau ou la valeur sont vide ? que fait-on? bah nous renvoyons
function isOnEvenPosition(table, value) {
  var result = false;

  if (!table || !value) {
    result = null;
  } else {
    // 1
    let elementsIndexPair = [];

    // 2
    for (let i = 0; i < table.length; i += 2) {
      elementsIndexPair.push(table[i]);
    }

    // 3
    console.log(elementsIndexPair);

    // 4
    for (let i = 0; i < elementsIndexPair.length; i++) {
      if (elementsIndexPair[i] === value) {
        result = true;
      } else {
        result = false;
      }
    }
  }

  // 4.c
  // if (findValue) {
  //   console.log(true);
  // } else {
  //   console.log(false);
  // }
  console.log(result);
}
isOnEvenPosition(table, value);
