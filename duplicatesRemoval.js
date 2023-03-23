/* Implémenter une fonction qui prend un tableau en paramètre. 
L'objectif va être de trier se tableu afin d'en renvoyer un autre snas les doublons*/
const table = [ 7, 7, 5 , 2 , 2, 8 ]

function filterDuplicates(table){
    const tableWithoutDouble = table.filter((number, index) => {
        return table.indexOf(number)=== index;
    })
    console.log(tableWithoutDouble);
}
filterDuplicates(table);