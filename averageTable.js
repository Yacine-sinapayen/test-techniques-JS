/* Inplémentez la fonction average(table) .
La fonction doit renvoyer la valeur moyenne du tableau table donné en paramètre. table est
toujours un tableau défini, et ne contient que des nombres. average doit retourner 0 si table est vide. */

/* Objectif 1 Générer un tableau de nombre aléatoire (ça n'est pas demandé dans le test)*/
// 1 - Je définis la taille du tableau
const taille = 10;

// Je créer un tableau vide
const table = [];

// Je créer une boucle qui génère des nombres aléatoir grace entre 0 et 100 et les envoie dans mon tableau.
// 1 - Nombre aléatoire : Dans cet exemple, Math.floor(Math.random() * 101) génère un nombre aléatoire entre 0 et 100 inclus. En multipliant le résultat de Math.random() par 101, on obtient un nombre aléatoire entre 0 (inclus) et 101 (exclu), et en arrondissant le résultat à l'entier inférieur avec Math.floor(), on obtient un nombre entier aléatoire entre 0 et 100 inclus.
for (let i = 0; i < taille; i++) {
  const randomNumber = Math.floor(Math.random() * 101);
  table.push(randomNumber);
}

// Résultat
console.log(table);

/* Objectif 2 renvoyer la valeur moyenne du tableau passé en param de la fonction 'averagetable(table). 
    Pour faire une moyenne je dois effcetuer la somme de tous les élements du tableau que je divise pa la taille de celui-ci. 
    */
function average(table) {
    let sum = 0

    for(i = 0; i < table.length; i++){
        sum += table[i];
    }

    const moyenne = sum / table.length;

    // Résultat
    console.log(moyenne || 0);
};
average(table)
