// Objectif : implémentez la fonction 'nextWeek(date)' qui renvoie une date 7 jours après la date donnée en paramètre. 'date' est toujours un objet Date défini.

// 1 J'ai initier une var date à la date du jour.
var date = new Date();
// 2 Je ne veux pas modifier la var date directement donc je la stock dans une autre var 'setNextWeekDate'. Même principe que pour react et le state je ne modifie jamais directement le state. 
// 3 C'est sur 'setNextWeekDate' que je vais mettre à jours ma var en lui ajoutant 7 jours. 

function nextWeek() {
    console.log('Today we are ' + date);

    // 2
    var setNextWeekDate = new Date(date);

    // 3
    setNextWeekDate.setDate(date.getDate() + 7);

    // Résultat
    console.log('Seven days later ' + setNextWeekDate);
  }
nextWeek(date);