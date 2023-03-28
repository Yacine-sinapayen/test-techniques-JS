/*
Objectif
Dans ce problème, vous recevrez une liste des prix quotidiens des actions et vous devrez renvoyer les trois actions ayant la plus haute moyenne de prix.
Implémentation
Implémentez la fonction getTopStocks(stocks, prices) qui prend en entrée : un tableau de chaînes de caractères (stocks), représentant les actions considérées, et un tableau à deux dimensions (prices), représentant les prix des actions (listes internes) pour chaque jour (liste externe). Un exemple d'entrée ressemblerait à ceci:
['AMZN', 'CACC', 'EQIX', 'GOOG', 'ORLY', 'ULTRA']
[12.81, 11.09, 12.11, 10.93, 9.83, 8.14], [10.34, 10.56, 10.14, 12.17, 13.1, 11.22], [11.53, 10.57, 10.42, 11.88, 11.77, 10.21]
Votre fonction getTopStocks devrait renvoyer un tableau contenant les noms des trois actions ayant la plus haute valeur moyenne. Le tableau doit être trié par valeur moyenne décroissante. Vous êtes assuré que chaque action aura une valeur moyenne unique. Pour l'exemple ci-dessus, la sortie correcte serait : 
['GOOG', 'ORLY', 'AMZN']
*/
/* Implémentation 
1 - Je crais un tableau vide pour stocker les moyennes des actions
2 - Je boucle sur chaque actions pour calculer sa moyenne */
const stocks = ["AMZN", "CACC", "EQIX", "GOOG", "ORLY", "ULTRA"];
const prices = [
  [12.81, 11.09, 12.11, 10.93, 9.83, 8.14],
  [10.34, 10.56, 10.14, 12.17, 13.1, 11.22],
  [11.53, 10.57, 10.42, 11.88, 11.77, 10.21],
];

function getTopStocks(stocks, prices) {
  // Créer un tableau vide pour stocker les moyennes des actions
  const averages = [];

  // Boucler sur chaque action pour calculer sa moyenne
  for (let i = 0; i < stocks.length; i++) {
    const stockPrices = prices[i];

    // Ajouter une vérification pour s'assurer que stockPrices est défini
    if (stockPrices) {
      const average = stockPrices.reduce((acc, price) => acc + price, 0) / stockPrices.length;
      averages.push({ stock: stocks[i], average: average });
    }
  }

  // Trier le tableau d'objets par ordre décroissant de moyenne
  averages.sort((a, b) => b.average - a.average);

  // Extraire les noms des trois actions avec les moyennes les plus élevées
  const topStocks = averages.slice(0, 3).map((obj) => obj.stock);

  // Renvoyer le tableau des noms des actions
  return topStocks;
}

// console.log(getTopStocks(stocks, prices));
