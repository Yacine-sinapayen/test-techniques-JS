/* Objectif
 Dans ce problème, vous recevrez une liste d'entiers positifs et un entier séparé, k, et votre tâche sera de trouver s'il existe une paire d'entiers dans la liste qui s'additionnent exactement à k.
 Implémentation : 
 Implémentez la fonction findSumPair(numbers, k) qui prend en entrée : un tableau d'entiers positifs (numbers), un entier positif (k) représentant la somme cible.
 Par exemple :
 numbers = [1, 5, 8, 1, 2] et k = 13
 Votre fonction findSumPair devrait retourner un tableau de deux entiers, contenant les indices d'une paire d'entiers dans le tableau qui s'additionnent à k. 
 Notez que :
 Le premier index du tableau est 0. Le premier entier dans votre sortie doit représenter l'index inférieur. [0, 0] doit être retourné s'il n'y a pas de paire trouvée. Dans le cas où il y a plusieurs paires possibles qui s'additionnent à la cible, renvoyez la paire dont l'index de gauche est le plus bas. Dans le cas de deux paires ayant le même index de gauche, privilégiez la paire ayant l'index droit le plus bas.
 Pour l'exemple ci-dessus, la sortie correcte serait : [1, 2].'*/
numbers = [1, 5, 8, 1, 2];
k = 13;

function findSumPair(numbers, k) {
  const result = [];

  // Parcourir chaque entier du tableau et vérifier s'il existe une paire qui s'additionne à k
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === k) {
        // Si une paire est trouvée, retourner les indices de cette paire dans un tableau
        return [i, j];
      }
    }
  }
  // Si aucune paire n'est trouvée, retourner [0, 0] comme spécifié dans le problème
  return [0, 0];
}
// console.log(findSumPair(numbers, k));
