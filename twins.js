/* 
Un jumeau d'un mot est un mot écrit avec les mêmes lettres (sans tenir compte de la casse), mais pas nécessairement dans le même ordre. Par exemple, Silent est un jumeau de Listen.

La fonction isTwin(a, b) doit renvoyer vrai si b est le jumeau de a et faux sinon. a et b sont deux chaînes de caractères non nulles.

Écrivez le corps de la fonction isTwin(a, b). 
*/

/* Implémentation :
1 - La fonction commence par vérifier si les deux chaînes de caractères ont la même longueur, car s'ils n'ont pas la même longueur, ils ne peuvent pas être des jumeaux. 
2 - Ensuite, elle convertit les deux chaînes de caractères en minuscules, puis les trie par ordre alphabétique en utilisant la méthode sort(). 
3 - Enfin, elle vérifie si les deux chaînes triées sont identiques. Si c'est le cas, elle renvoie true, sinon elle renvoie false. */

const a = 'toto';
const b = 'Toto';

function isTwin(a, b) {
    // 1 - Vérifie si la longueur des deux chaînes de caractères est identique
    if (a.length !== b.length) {
      return false;
    }
    
    // 2 - Convertit les deux chaînes de caractères en minuscules et les trie par ordre alphabétique
    const sortedA = a.toLowerCase().split('').sort().join('');
    const sortedB = b.toLowerCase().split('').sort().join('');
    console.log(sortedA);
  
    // Vérifie si les deux chaînes triées sont égales
    return sortedA === sortedB;
  }
//   console.log(isTwin(a,b))