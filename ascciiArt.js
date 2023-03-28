/*
Le texte décrit une fonction "printChar" qui affiche exactement un caractère ASCII de A à Z (inclus) sur plusieurs lignes et colonnes en utilisant une représentation graphique appelée "ASCII Art".
On voudrait faire l'opération inverse : trouver un caractère à partir de sa représentation graphique. La fonction "scanChar(str)" doit donc être implémentée pour qu'elle renvoie le caractère c associé à la représentation graphique donnée (c'est-à-dire si str = printChar(c)).
Si str ne correspond pas à la représentation graphique d'un caractère de A à Z (inclus), alors scanChar doit renvoyer le caractère "?". 

Implementation : Cette fonction utilise un objet charMap qui associe chaque représentation graphique d'un caractère ASCII de A à Z (inclus) à sa lettre correspondante. La fonction parcourt ensuite les entrées de cet objet et retourne la lettre associée à la représentation graphique donnée en argument, ou le caractère "?" si aucune correspondance n'est trouvée.
*/
str = 'c';

function scanChar(str) {
    const charMap = {
      " _ \n| |\n|_|\n": "0",
      "   \n  |\n  |\n": "1",
      " _ \n _|\n|_ \n": "2",
      " _ \n _|\n _|\n": "3",
      "   \n|_|\n  |\n": "4",
      " _ \n|_ \n _|\n": "5",
      " _ \n|_ \n|_|\n": "6",
      " _ \n  |\n  |\n": "7",
      " _ \n|_|\n|_|\n": "8",
      " _ \n|_|\n _|\n": "9",
      "   \n   \n   \n": " "
    };
  
    for (const [key, value] of Object.entries(charMap)) {
      if (str === key) {
        return value;
      }
    }
  
    return "?";
  }
//   console.log(scanChar(str));