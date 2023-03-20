/* Inplémentez la fonction average(table) .
La fonction doit renvoyer la valeur moyenne du tableau table donné en paramètre. table est
toujours un tableau défini, et ne contient que des nombres. La fonction average doit retourner 0 si table est vide. */

/* Objectif 1 Générer un tableau de nombre aléatoire (ça n'est pas demandé dans le test)*/
// 1 - Je définis la taille du tableau
const taille = 10;

// Je créer un tableau vide
const table = [];

/* Je créer une boucle qui génère des nombres aléatoire entre 0 et 100 et les envoie dans mon tableau :
    1 - '(Math.random() * 101)' génère un nombre aléatoire entre 0 et 100 inclus. En multipliant le résultat de Math.random() par 101, on obtient un nombre aléatoire entre 0 (inclus) et 101 (exclu), 
    2 - 'Math.floor()' permet d'arrondir le résultat en un nombre entier aléatoire entre 0 et 100 inclus.*/
for (let i = 0; i < taille; i++) {
  const randomNumber = Math.floor(Math.random() * 101);
  table.push(randomNumber);
}

// Résultat
console.log(table);

/* Objectif 2 renvoyer la valeur moyenne du tableau passé en param de la fonction 'averagetable(table). 
Pour cela faire une moyenne je dois effcetuer la somme de tous les élements du tableau que je divise pa la taille de celui-ci. 
    1 - je crais une let 'sum' dans laquelle je vais aditionner tout les élems de mon tableau'
    2 - Je boucle sur mon tableau afin d'additionner tous les élemn et le stocker dans ma let 'sum'
    3 - Dans ma const 'moyenne' je divise somme par le nombre de d'elem dans mon tableau afin d'obtenir une moyenne. 
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
// Appel à ma fonction
average(table)
