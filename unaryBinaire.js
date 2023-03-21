/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const MESSAGE = readline();
// console.error(MESSAGE + ' : message à encoder en entré de programme');
/* Je vais initialiser un tableau vide 'B' qui à chaque tour de boucle va récupérer la val binaire renvoyée.
*/
var B = "";
/* Dans ma 'const MESSAGE' l'algo m'envoie à chaque tours des carractères ASCII que je vais transformer en binaire grace à ma fonction rédigée plus bas "translateToBinaire".
    1 - Pour chaque lettre parcourue je vais initier une 'var bin' qui va correspondre à la version binaire de la lettre grâce à la fonction "translateToBinaire" à qui je passe en argu la lettre récupérée à chaque tours. 
    2 - Je le vérifie en le passent à un "console.error" plutot que "console.log" pour pas que le programme pense que c'est une sortie donc un résultat
    3 - À chaque tours de boucle j'hydrate mon tableau B (initié plus haut) les valeurs binaire renvoyées*/
for (var i = 0; i < MESSAGE.length; i++) {
  // 1
  var bin = translateToBinaire(MESSAGE[i]);
  // 2
  // console.error(bin);
  // 3
  B += bin;
}

// J'affiche mon tableau de binaire
console.error('tableau des bianire ' + B)

/* Maintenant il va falloir que je face la découpe de mon tableu de binaire "B" composer de 1 et de 0 pour renvoyer uniquement un message encoder en '0' en respectant les consignes de l'exemple
 de ci dessous.
 Exemple :
 Prenons un exemple simple avec un message constitué d'un seul caractère : C majuscule.
 C en binaire vaut 1000011 ce qui donne avec cette technique :
 On part du principe que :
 0 = 1
 00 = 0
 Les zéros qui suivent correspondent aux répétitions.
 0 0 (la première série composée d'un seul 1)
 00 0000 (la deuxième série composée de quatre 0)
 0 00 (la troisième série composée de deux 1)
 C vaut donc : 0 0 00 0000 0 00

 Deuxième exemple, nous voulons encoder le message CC (soit les 14 bits 10000111000011) :

 0 0 (un seul 1)
 00 0000 (quatre 0)
 0 000 (trois 1)
 00 0000 (quatre 0)
 0 00 (deux 1)
 CC vaut donc : 0 0 00 0000 0 000 00 0000 0 00*/

 /* Pour cela nous allons utiliser une regex
     1 - qui dit que la chaine de carractère de mon tableau "B"
     va devoir "match" avec une regex
     2 - Cette regex dit : "à chaque carractères différents, on coupe la chaîne"
 */
 B = B.match(/(.)\1*/g);
 console.error(B);
 /* donc mon tableau de binaire B en entrer : "tableau des bianire 10000111000011" va nous renvoyer ça en sortie aprè la regex un tableau de chaînes de carractère : [ '1', '0000', '111', '0000', '11' ].
 */

 /* Maintenant que nous avons nos blocs de chaine de carractère de 1 et de 0 séparer grâce à notre regex,
 nous allons mettre en place la règle de calcule qui permet de renvoyer une chaîne de carractère binaire seulement composé de 0 en s'appuyant sur l'exemple de la consigne.

 Donc je vais faire un 'for' qui va parcourir 'B[i]' ou 'i' <=> à une chaîne de carractère.
 ex pseudo code: [ '1' === [i], '0000', '111', '0000', '11' ].
     1 - Je vérifie dans la chaîne de mon tableau 'B' en cours d'itération dans ma boucle si son premier carractère est = à "0" ou "1" :
         1.a - Si = "0" alors var result ="00 " <=> "0"
         1.b - Sinon var result ="0 " <=> "1"
     2 - Une fois déterminé par quel chifre commence notre chaîne de carractère, il faut définir le nombre de fois ou elle se répète dans sa chaîne (on appel aussi cela les bits).
        2.a - Pour cela nous allons concaténé à "résult" le nombre de zéro qui correspond aux répétitions.
        2.b - Pour obtenir le nombre de répétition je vais utiliser la fonction 'repeat()' qui va
        récupérer la taille de la chaine de carractère.
 
resultS avec un "s" est le tableau ou je stock mes réusltat instencier à chaque tours de boucle */
var results = [];

for (let i = 0; i < B.length; i++) {
    var result = '';

    if (B[i][0] === "0") {
        var result = "00 ";
    } else {
        var result = "0 "
    }
    result += '0'.repeat(B[i].length);
    // je push dans mon tableau resultS mes result
    results.push(result);
}
// Je joins les résultats de mon tableau via un espace
// results = results.join(' ');
// console.log(results);

/* Version 1 de la function 'translateToBinaire' : Cette fonction va prendre un carractère 'char' et le retourner en binaire
  1 - Je convertie la lettre en son index ASCII (ex: C vaut 67 dans la table ASCII et '1000011' en bianire.) : var = indexAscii.
  2 - Ensuite je transforme cette index en binaire grâce à la fonction toString(2) qui prend pour argu 2 afin que ce soit en binaire ! : var = binaire
  3 - Nous voulons que notre binaire soit sur "7bits" cad qu'il y est au minimum 7 carractères renvoyés.
    3.a Donc pour ce faire nous allons tout simplement concaténer notre "binaire" à 7 zéro et récupérer les 7 dernères valeurs binaire de notre var grâce à la méthode ".slice(-7)". Comme ça, quelque soit la taille de mon binaire (de 0 à X éléments) je renvérer toujours minimum les 7 derniers chiffre bianire et si mon carractère fait 0 éléments, je renvéréais quand même minimum 7 carractères.
  4 - Et enfin on return la val à ma fonction*/
function translateToBinaire(char) {
  var indexAscii = char.charCodeAt(0);
  var binaire = indexAscii.toString(2);
  var binaire7bits = "0000000".concat(binaire).slice(-7);
  return binaire7bits;
}

/* Dans l'ancienne version de la function 'translateToBinaire' (au dessus), nous réalisions nos actions étapes par étapes et l'attribuons à une var. Pour une première version de code c'est très bien de faire comme ça. Mais il est possible de réaliser la même chose en une ligne de code. Pour cela il existe en informatqiue un concept qui s'appelle 'le chainage sur des actions'. */

function translateToBinaire(char) {
  return "0000000".concat(char.charCodeAt(0).toString(2)).slice(-7);
}

// Comment faire exactement la même chose mais en 6 lignes ?
var result = MESSAGE.split("")
  .map((c) => "0000000".concat(c.charCodeAt(0).toString(2)).slice(-7))
  .join("")
  .match(/(.)\1*/g)
  .map((c) => (c[0] === "1" ? "0 " : "00 ") + "0".repeat(c.length))
  .join(" ");

console.log(result);
