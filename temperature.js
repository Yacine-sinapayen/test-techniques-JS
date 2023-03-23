/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

// the number of temperatures to analyse
const count = parseInt(readline());
// le input est un tableau avec toute les température séparées par un espaces 
var temps = readline().split(' ');

/* L'objectif est de renvoyer la valeur la plus proche de 0 en sortie de mon console.log.
1 -  Je vais stocker mes val dans un tableau : TempsSorted
2 - Je vais utiliser la méthode array.sort() pour trier mes valeurs
		2.a Dans le 1er argu, je transforme mes val en val absolue(sans prendre en 
				compte le signe, puis je trie de manière coirssante mes val. 
				Temps[0] va donc renvoyer la val la + proche de '0'
		2.b Dans le cas ou mes deux val sont strictement égale en val.absolue, 
				la consigne nous demande de renvoyer la version positive de la val, 
				pour cela je passe dans le deuxième argue qui va prendre en compte le 
				signe des val et va trier de manière Décroissante. Exemple Temps[2,-2].
				donc forcément temps[0] va nous renvoyer la version postive des val 
				Òzles + proche de 0 */

var tempsSorted = temps.sort((a, b) =>  Math.abs(a) - Math.abs(b) || b - a);

// je fais un console.error du tableau en sortie
console.error(tempsSorted);

// je retourne la première valeur de ce tableau ou si elle n'existe pas 0
console.log(tempsSorted[0] || 0);
