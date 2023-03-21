/* */
var table = ['exist', 'hello', 'programisto', 'yan', 'bracelet', 'yaya'];
var value = 'exist';

// 1 - J'intencie 'elementsIndexPair' qui va stocker les éléments situés aux index pairs du tableau tableau
// 2 - La boucle for parcourt les éléments du tableau tableau, en sautant à chaque fois un élément grâce à l'incrément i += 2. A chaque itération, le code teste si l'index actuel i est pair en vérifiant si le reste de sa division par 2 est égal à zéro.
    // 2.a Si c'est le cas, l'élément du tableau correspondant à cet index est ajouté au tableau elementsIndexPair à l'aide de la méthode push().
// 3 Enfin, le code affiche dans la console le tableau elementsIndexPair qui contient les éléments situés aux index pairs du tableau tableau.
// 4 Je vérifie si dans ce tableau ma 'value' existe
    // 4.a si oui je console.log(true) sinon 'false'.
function isOnEvenPosition(table, value){

    // 1 
    let elementsIndexPair = [];
    
    // 2
    for(let i = 0; i < table.length; i += 2){
        elementsIndexPair.push(table[i]);
    }
    // 3
    console.log(elementsIndexPair);
    
    // 4 
    let findValue = false;
    for(let i = 0; i < elementsIndexPair.length; i++){
        if(elementsIndexPair[i] === value){
            findValue = true;
            break;
        }
    }
    if(findValue){
        console.log(true);
    } else{
        console.log(false);
    }
};
isOnEvenPosition(table, value);
