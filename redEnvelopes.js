/*Objectif
Dans la culture chinoise, il est courant de donner des "enveloppes rouges" (##) contenant de l'argent pendant les célébrations. Le plus souvent, les générations adultes donnent aux générations plus jeunes.
Vous voulez construire une application WeChat pour aider les grands-parents à diviser leur budget de dons entre leurs petits-enfants. Écrivez un programme qui calcule le nombre de cadeaux "chanceux" (égal à 8) en fonction du budget, de l'argent et du nombre de petits-enfants, giftees.
Comment ça fonctionne
De nombreuses règles, mélangeant tradition et superstition, régissent ce don :
Les dons ne doivent pas contenir le chiffre 4 (#), car cela sonne comme "mort" (#). Il est de bon augure de donner une somme de 8 (#), car cela sonne comme "fortune" (#). Il serait mal de ne rien donner à l'un des petits-enfants.
Votre algorithme doit donc renvoyer le nombre de cadeaux égaux à 8, en suivant ces règles :
Dépensez l'intégralité du budget (à moins qu'il n'y ait suffisamment de budget pour donner 8 à tout le monde). Ne donnez pas de 4 (par tradition, le budget ne sera jamais de 4). Ne donnez pas de 0 (à moins qu'il n'y ait pas suffisamment d'argent pour tous les giftees). Donnez un maximum de 8 une fois que les règles ci-dessus sont remplies.
Implémentation
Implémentez la fonction luckyMoney(money, giftees) qui :
prend en entrée les entiers money et giftees avec : 0 <= money < 100 0 < giftees < 10 et renvoie le nombre de dons égaux à 8 en tant qu'entier. 
Examples
Inputs Output 12 0
2
Inputs Output 24 2
4
Inputs Output 70
2*/

/*  
Explications :

La fonction luckyMoney prend en entrée deux paramètres : money (le budget de dons) et giftees (le nombre de petits-enfants à qui donner des enveloppes rouges).
On initialise deux variables : totalMoney qui correspond au budget restant après chaque don, et totalGifts qui correspond au nombre total de cadeaux donnés.
On vérifie d'abord si le budget est suffisant pour donner à tous les petits-enfants. Si ce n'est pas le cas, on met à jour giftees pour qu'il soit égal au budget restant.
Ensuite, on effectue une boucle sur chaque petit-enfant. Pour chaque petit-enfant, on vérifie s'il reste suffisamment de budget pour donner au moins 8. Si c'est le cas, on donne 8, on met à jour totalMoney et totalGifts, sinon on sort de la boucle.
Finalement, on renvoie le nombre total de cadeaux donnés. */
money = 24;
giftees = 4;
function luckyMoney(money, giftees) {
    let totalMoney = money;
    let totalGifts = 0;
    
    // Vérification qu'il y a suffisamment d'argent pour donner à tous les petits-enfants
    if (money < giftees) {
      giftees = money;
    }
    
    for (let i = 0; i <= giftees; i++) {
      // Vérification qu'il reste suffisamment d'argent pour donner au moins 8 à chaque petit-enfant
      if (totalMoney > 8) {
        totalMoney -= 8;
        totalGifts++;
      }
      // Si le budget restant ne permet plus de donner 8, alors on arrête la boucle
      else {
        break;
      }
    }
    
    return totalGifts;
  }
//   console.log(luckyMoney(money, giftees));