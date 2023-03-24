// Tableau de températures
var temps = [-2, 3, 8, 5, 2, -1, 1];

/* L'objectif est de renvoyer la température la plus proche de 0 de mon tableau de de température 'temps'. DAns le cas ou -2 et 2 seraient les températures les plus proches, il faudra renvoyer la valeur positive.
1 -  Je vais stocker mes val dans un tableau : result.
2 - Je vais prednre en compte le cas ou mon tableu de température en entrée est null afin de rednre ma fonction plus robuste et fiable. Si oui result = null
3 - SINON : Je vais utiliser la méthode array.sort() pour trier mes valeurs
	3.a Dans le 1er argu, je transforme mes val en val absolue(sans prendre en compte le signe, puis je trie de manière coirssante mes val. result[0] va donc renvoyer la val la + proche de '0'.

	3.b Dans le cas ou mes deux val sont strictement égale en val.absolue, la consigne nous demande de renvoyer la version positive de la val, pour cela je passe dans le deuxième argue qui va prendre en compte le signe des val et va trier de manière Décroissante. Exemple result[2,-2]. Donc forcément result[0] va nous renvoyer la version postive des val les + proche de 0 */
function closeToZero() {
  // 1
  var result = [];

  // 2
  if (!temps) {
    result = null;
  } else {
	// 3
    result = temps.sort((a, b) => Math.abs(a) - Math.abs(b) || b - a);
  }


//   console.log(result);
//   console.log(result[0] || null);
//   return result[0] || null;
}
closeToZero(temps);
