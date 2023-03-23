/* Objectif : Calculer la fréquence d'apparition 
d'un mot dans un tableau en renvoyant un tableau avec 
le nombre d'occurences par mots */

// tableau de chaînes de caractères ( words )
words = ["the", "dog", "got", "the", "bone", "dog", "dog"];

/* Implémention : créer une fonction countFrequencies(words) qui retourne un tableau d'entiers contenant le nombre d'occurrences de chaque mot triés par ordre alphabétique.
    1 - Je trie mon tableau par ordres alphabétique
    2 - J'intancie un tableau qui stockera le nombres d'occurences par mots
    3 - Je boucle sur la taille de mon tableau
        3.a - Si le mot en cours d'ittération existe dans mon tableau alors je rajoute une occurence au mot dans mon tableau. S'il exite plusieurs fois le nombre d'occurence s'instencira en focntion.
        3.b - Sinon je suis dans le cas d'un nouveau mots et je l'intencie à 1. 
    */

function countFrequencies(words) {
  // 1
  let wordsSorted = words.sort();

  // 2
  var occurences = [];

  // 3
  for (let i = 0; i < wordsSorted.length; i++) {
    // 3.a - 3.b
    if (occurences[wordsSorted[i]]) {
      occurences[wordsSorted[i]]++;
    } else {
      occurences[wordsSorted[i]] = 1;
    }
  }
  // Résultat
  console.log(occurences);
}

countFrequencies(words);
