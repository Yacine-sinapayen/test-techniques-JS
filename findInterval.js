/* Objectif 1 Générer un tableau de nombre aléatoire (ça n'est pas demandé dans le test)*/
// 1 - Je définis la taille du tableau
const taille = 10;

// Je créer un tableau vide
const tableNumbers = [];

/* Je créer une boucle qui génère des nombres aléatoir grace entre 0 et 100 et les envoie dans mon tableNumbersau.
1 - Nombre aléatoire : Dans cet exemple, Math.floor(Math.random() * 101) génère un nombre aléatoire entre 0 et 100 inclus. En multipliant le résultat de Math.random() par 101, on obtient un nombre aléatoire entre 0 (inclus) et 101 (exclu), et en arrondissant le résultat à l'entier inférieur avec Math.floor(), on obtient un nombre entier aléatoire entre 0 et 100 inclus. */
for (let i = 0; i < taille; i++) {
  const randomNumber = Math.floor(Math.random() * 101);
  tableNumbers.push(randomNumber);
}
// Résultat
// console.log('tableau non trié en entré de fonction ' + tableNumbers);

/* Objectif 2 : Implémentez la fonction 'findSmallestInterval(tableNumbers)' qui retourne le plus petit intervalle positif entre deux éléments du tableau tableNumbers.

Par exemple, si on considère le tableau [1 6 4 8 2] , le plus petit intervalle est 1 (différence entre 2 et 1)

Contraintes: tableNumbers contient au moins deux éléments et au maximum 100 000 éléments. La solution qui privilégie la vitesse d'exécution pour les tableaux de grande taille obtiendra le plus de points. La différence entre deux éléments ne dépassera jamais la capacité d'un entier pour votre langage.

Comment faire ? :
1 - J'instencie une var smallesInterval
2 - Je vais trier mon tableau par ordre croissant
3 - Je vais parcourir mon tableau en calculant l'intervalle entre chaque paire de nombre consécutifs.
  3.a - Je vais récupérer :
    - Le nombre en cours d'itération
    - Et le nombre qui le précède afin de pouvoir effectuer une soustration dans la suite de mon programme.
  3.b j'instencie ma 'const interval' qui va récupérer le résultat de cette soustraction
4 - Si l'intervalle est positif et plus petit que le plus petit intervalle trouvé jusqu'a présent, je met à jour ma valeur 'smallesInterval'. Si aucun interval positif n'a été trouvé je continue d'ittérer jsuqu'a que la condition soit vrai */

function findSmallestInterval() {
  // 1
  var smallesInterval = Infinity;

  // 2
  tableSorted = tableNumbers.sort((a, b) => a - b);

  // 3
  for (let i = 1; i < tableSorted.length; i++) {
    // 3.a
    const currentNumber = tableSorted[i];
    const previousNumber = tableSorted[i - 1];

    // 3.b
    const interval = currentNumber - previousNumber;
    // console.log("Intervale " + interval);

    // 4
    if (interval > 0 && interval < smallesInterval) {
      smallesInterval = interval;
    }
  }
  // Résultat
  console.log(smallesInterval);
}

findSmallestInterval();
