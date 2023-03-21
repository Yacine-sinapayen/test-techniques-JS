// Implémentez la fonction nextWeek(date) qui renvoie une date 7 jours après la date donnée en paramètre. date est toujours un objet Date défini.

// 1 j'ai initier une var date à la date du jour.
// 2 Je ne veux pas modifier la var date directement donc je la stock dans une autre var setNextWeekDate. Même principe que pour react et le state je ne modifie jamais directement le state. 
// 3 C'est sur setNextWeekDate que je vais mettre à jours ma var en lui ajoutant 7 jours. 

function nextWeek() {
    // 1
    var date = new Date();
    console.log('today ' + date);
    // 2
    var setNextWeekDate = new Date(date);
    // 3
    setNextWeekDate.setDate(date.getDate() + 7);
    // Résultat
    console.log('seven days later ' + setNextWeekDate);
  }
nextWeek();