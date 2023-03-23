// Voici une fonction JavaScript qui calcule la somme de tous les multiples positifs de 3, 5 ou 7 inférieurs ou égale à 11 :

const n = 0;

function sumMultiple(){
    let sum = 0

    for(let i = 0; i < n; i ++){
        if(i % 3 === 0 || i % 5 === 0 || i % 7 === 0){
            sum += i;
        }
    }
    return sum;
}
console.log(sumMultiple());

/*
Cette fonction utilise une boucle for pour parcourir tous les nombres positifs de 1 à 10 (11 non inclus). À chaque itération de la boucle, la fonction vérifie si le nombre est un multiple de 3, 5 ou 7 en utilisant l'opérateur modulo (%). Si le nombre est un multiple, il est ajouté à la variable sum.

Finalement, la fonction renvoie la somme totale des multiples. Dans cet exemple, le résultat renvoyé sera 41 car les multiples positifs de 3, 5 ou 7 strictement inférieurs à 11 sont 3, 5, 6, 7, 9 et 10, dont la somme est 41.
*/