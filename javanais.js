/* Créer une fonction qui parcours une chaine de carractère, et si dans cette chaine il y a une voyelle rajouter la sylabe 'av' devant, cependant, si deux voyelle se suivent, ne rien rajouter.
1 - J'intencie mon tableaud de voyelle.
2 - Je créais ma var result dans laquelle je vais stocker le résultat.
3 - je créais une var qui vérifie la condition suivante
    3.a - Je créais une let qui vérifie si la précednte valeur de la boucle est une variable. Cette let stock true ou false.
    3.b - je créais une boucle qui dit : si mon carractère en cours d'ittération est égale à une des voyelle du tableau vowels ET si le précédent carractère n'est pas une voyelle, alors ajouter 'av' devant le carractère et stocké a valeur dans result sinon, stocker le crarractère sans rien faire d'autre.  
*/
const text = "codingame eet beau";

function javanaisTranslate(text) {
  // 1
  const vowels = ["a", "e", "i", "o", "u"];
  // 2
  let result = "";

  // 3 Je boucle sur mon texte
  for (let i = 0; i < text.length; i++) {
    // 3.a
    let previousLetterIsVowel = vowels.includes(text[i - 1]);

    // 3.b
    if (vowels.includes(text[i]) && !previousLetterIsVowel) {
      result += "av" + text[i];
    } else {
      result += text[i];
    }
  }
  console.log(result);
}
javanaisTranslate(text);
