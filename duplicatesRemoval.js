/* Implémenter une fonction qui prend un tableau en paramètre. 
L'objectif va être de trier se tableu afin d'en renvoyer un autre snas les doublons*/
const tableDouble = [ 7, 7, 5 , 2 , 2, 8 ]

function filterDuplicates(table){
    const tableWithoutDouble = tableDouble.filter((number, index) => {
        return tableDouble.indexOf(number) === index;
    })
    return tableWithoutDouble;
}
// console.log(filterDuplicates())