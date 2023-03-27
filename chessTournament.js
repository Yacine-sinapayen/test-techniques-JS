/* Vous devez organiser un tournoi d'échecs dans lequel les joueurs se disputeront en face à face.

Voici comment nous procédons pour former les duels : sélectionnez un premier joueur au hasard, puis sélectionnez son adversaire au hasard parmi les participants restants. La paire de concurrents obtenue forme l'un des duels du tournoi. Nous procédons de la même manière pour former toutes les autres paires.

Dans cet exercice, nous aimerions savoir combien de paires il est possible de former sachant que l'ordre des adversaires dans une paire n'a pas d'importance.

Par exemple, avec 4 joueurs nommés A, B, C et D, il est possible d'obtenir 6 paires différentes : AB, AC, AD, BC, BD, CD.

Mettez en œuvre la fonction "count()" pour renvoyer le nombre de paires possibles. Le paramètre "n" correspond au nombre de joueurs.

Essayez d'optimiser votre solution de manière à ce que, idéalement, la durée de traitement soit la même pour n'importe quel n. Entrée : 2 <= n <= 30000.
 */

const n = 15;

function count(n){
    const result = (n*(n-1))/2;
    return result || 0;
}
// console.log(count(n));