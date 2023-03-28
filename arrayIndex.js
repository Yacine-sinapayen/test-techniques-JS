/*Objectif :écrire une focntion javascript qui va chercher dans les index pair d'un tableau si une valeur existe. Si c'est le cas je veux que ma fonction me retourne true, sinon false */
const table = ["exist", "hello", "programisto", "yan", "let", "yaya"];
const value = "exist";

// 1 - J'intencie 'elementsIndexPair' qui va stocker les éléments situés aux index pairs du tableau.
// 2 - La boucle for parcours les éléments du tableau 'table', en récupérent les index pair grâce à l'incrément 'i += 2' (à chaque itération, le code teste si l'index actuel 'i' est pair en vérifiant si le reste de sa division par 2 est égal à zéro).
// 2.a Si c'est le cas, l'élément du tableau correspondant à cet index est ajouté au tableau 'elementsIndexPair' à l'aide de la méthode push().
// 3 J'affiche mon tableau d'index pair
// 4 Je vérifie si dans ce tableau ma 'value' existe.
// 4.a j'instencie une 'let findvalue' à 'false'.
// 4.b je boucle sur mon tableau d'index afin de trouver la valeur.
// 4.c je créais une condition qui renvoie un console trueou false selon la présence ou non de la valeur dans le tableau
// Fiabilité : si le tableau ou la valeur sont vide ? que fait-on? bah nous renvoyons
function isOnEvenPosition() {
  for (let i = 0; i < table.length; i += 2) {
    if (table[i] === value) {
      return true;
    }
  }
  return false;
}
// console.log(isOnEvenPosition(table, value));
