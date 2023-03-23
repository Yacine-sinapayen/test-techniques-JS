/* Objectif 1 Générer un tableau de nombre aléatoire (ça n'est pas demandé dans le test)*/
// 1 - Je définis la taille du tableau
const taille = 10;

// Je créaisr un tableau vide
const table = [];

/* Je créais une boucle qui génère des nombres aléatoire entre 0 et 100 et les envoie dans mon tableau :
    1 - '(Math.random() * 101)' génère un nombre aléatoire entre 0 et 100 inclus. En multipliant le résultat de 'Math.random()' par 101, on obtient un nombre aléatoire entre 0 (inclus) et 101 (exclu), 
    2 - 'Math.floor()' permet d'arrondir le résultat en un nombre entier aléatoire entre 0 et 100 inclus.
    3 - j'hydrate mon tableau */
// for (let i = 0; i < taille; i++) {
//   // 1 - 2
//   const randomNumber = Math.floor(Math.random() * 101);
//   // 3
//   table.push(randomNumber);
// }

// // Résultat
// console.log(table);

/* Objectif 2 : inplémentez la fonction averageTable(table) qui doit faire la moyenne du tableau passé en param. La fonction average doit retourner 0 si table est vide.
Rappel myenne = (somme de tous les élements du tableau / par la taille de celui-ci). 
    1 - Je créais une let 'sum' dans laquelle je vais aditionner tous les élems de mon 'tableau' que j'instencie à 0. 
    2 - Je boucle sur mon tableau afin d'additionner tous les élemn et les stocker dans ma let 'sum'
    3 - Dans ma const 'moyenne' je divise 'sum' par le nombre de d'elem dans mon tableau afin d'obtenir la moyenne. 
*/
function averageTable(table) {
  // 1
  let sum = 0;

  // 2
  for (i = 0; i < table.length; i++) {
    sum += table[i];
  }
  // 3
  const moyenne = sum / table.length;

  // Résultat
  console.log(moyenne || 0);
}
// Appel à ma fonction
averageTable(table);
