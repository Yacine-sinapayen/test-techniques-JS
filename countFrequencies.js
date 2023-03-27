/* Objectif : Calculer la fréquence d'apparition 
d'un mot dans un tableau en renvoyant un tableau avec 
le nombre d'occurences par mots */

// tableau de chaînes de caractères ( words )
words = ["the", "dog", "got", "the", "bone", "dog", "dog"];

/* Implémention : créer une fonction countFrequencies(words) qui retourne un tableau d'entiers contenant le nombre d'occurrences de chaque mot triés par ordre alphabétique.
1 - J'intancie un tableau qui stockera le nombres d'occurences par mots
2 - Fiabilité : je prends en compte le cas ou j'ai un tableau vide
3 - SINON : 
    3.a - Je trie mon tableau par ordres alphabétique
    3.b - Je boucle sur ce nouveau tableau 'wordsSorted'
        3.b.1 - Si le mot en cours d'ittération existe dans mon tableau alors je rajoute une occurence au mot. S'il exite plusieurs fois, le nombre d'occurence s'instencira en focntion.
        3.b.2 - Sinon je suis dans le cas d'un nouveau mots et je l'intencie à 1. 
    */

function countFrequencies(words) {
  // 1
  var occurences = [];

  // 2
  if (words.length === 0) {
    occurences = null;
  } else {
    // 3.a
    let wordsSorted = words.sort();

    // 3.b
    for (let i = 0; i < wordsSorted.length; i++) {
      // 3.b.1
      if (occurences[wordsSorted[i]]) {
        occurences[wordsSorted[i]]++;
      } else {
        // 3.b.2
        occurences[wordsSorted[i]] = 1;
      }
    }
  }
  // Résultat
  console.log(occurences);
}

countFrequencies(words);
