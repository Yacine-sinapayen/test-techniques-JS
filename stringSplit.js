// Objectif 1 : Je créais une fonction qui génère des phrases aléatoire.

function generateRandomSentence(sentence){
    var subjects = ['I', 'You', 'He', 'She', 'It', 'We', 'They'];
    var verbs = ['am', 'is', 'are', 'was', 'were', 'have', 'has', 'had'];
    var objects = ['happy', 'sad', 'excited', 'tired', 'angry', 'confused', 'surprised'];

    var subject = subjects[Math.floor(Math.random() * subjects.length)];
    var verb = verbs[Math.floor(Math.random() * verbs.length)];
    var object = objects[Math.floor(Math.random() * objects.length)];

    var sentence = subject + ' ' + verb + ' ' + object + '.';

    return sentence;
}

/* Objectif 2 : Implémenter en JavaScript une fonction solution qui affiche chaque mot d'une chaîne de caractères sur une ligne différente :
    1 - La fonction prend une chaîne de caractères en paramètre // ou je génère la chaîne via une fonction.
    2 - On utilise la méthode 'split()' pour diviser la chaîne en un tableau de mots en utilisant l'espace comme séparateur.
    3 - On initialise une variable vide 'result' qui sera utilisée pour stocker le résultat final.
    4 - On boucle sur le tableau de mots en concaténant chaque mot avec le caractère de saut de ligne '\n' et en les ajoutant à la variable result.
    5 - On retourne la variable result qui contient chaque mot de la chaîne d'entrée sur une ligne différente.
*/
function solution(){
    // 1
    var str = generateRandomSentence();
    console.log(str);
    // 2
    var words = str.split(' ');
    console.log(words);
    // 3
    var result = '';
    // 4
    for(let i = 0; i < words.length; i++){
        result += words[i] + '\n';
    }
    // 5 Résultat
    console.log(result);
    return result;
}
solution();
