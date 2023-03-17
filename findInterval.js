/* Objectif 1 Générer un tableau de nombre aléatoire (ça n'est pas demandé dans le test)*/
// 1 - Je définis la taille du tableau
const taille = 10;

// Je créer un tableau vide
const table = [];

/* Je créer une boucle qui génère des nombres aléatoir grace entre 0 et 100 et les envoie dans mon tableau.
1 - Nombre aléatoire : Dans cet exemple, Math.floor(Math.random() * 101) génère un nombre aléatoire entre 0 et 100 inclus. En multipliant le résultat de Math.random() par 101, on obtient un nombre aléatoire entre 0 (inclus) et 101 (exclu), et en arrondissant le résultat à l'entier inférieur avec Math.floor(), on obtient un nombre entier aléatoire entre 0 et 100 inclus. */
for (let i = 0; i < taille; i++) {
  const randomNumber = Math.floor(Math.random() * 101);
  table.push(randomNumber);
}
// Résultat
console.log(table);

// Objectif 2 : Implémentez la fonction findSmallestInterval(numbers) qui retourne le plus petit intervalle positif entre deux éléments du tableau numbers .
// Par exemple, si on considère le tableau [1 6 4 8 2] , le plus petit intervalle est 1 (différence entre 2 et 1)
// Contraintes:
// numbers contient au moins deux éléments et au maximum 100 000 éléments. La solution qui privilégie
// la vitesse d'exécution pour les tableaux de grande taille obtiendra le plus de points. La différence entre deux éléments ne dépassera jamais la capacité d'un entier pour votre langage.

