// Objectif : Voici une fonction JavaScript qui calcule la somme de tous les multiples positifs de 3, 5 ou 7 inférieurs ou égale à 11 :

/*
1 - Cette fonction utilise une boucle for pour parcourir tous les nombres positifs de 1 à 10 (11 non inclus) max déterminé par la const n. 
2 - J'intencie une 'let sum' qui sera le résultat de l'addition de tout les nombres respectant la condition.
3 - À chaque itération de la boucle, la fonction vérifie si le 'nombre <=> i' est un multiple de 3, 5 ou 7 en utilisant l'opérateur modulo (%). 
    // 3.a - Si le nombre est un multiple, il est additionné à la variable 'sum'.

4 - Finalement, la fonction renvoie la somme totale des multiples. Dans cet exemple, le résultat renvoyé sera 41 car les multiples positifs de 3, 5 ou 7 strictement inférieurs à 11 sont 3, 5, 6, 7, 9 et 10, dont la somme est 41.
*/

function sumMultiple() {
  // 1
  let n = 5

  // 2
  let sum = 0;
  
  // 3
  for (let i = 0; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      // 3.a
      sum += i;
    }
  }
  // 4
  return sum;
}

// console.log(sumMultiple());
