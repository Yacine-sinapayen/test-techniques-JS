/*J'aimerais une focntion javascript qui prend l'objet suivant en 
entrer : 
{
    john: 12,
    brian: true,
    doe: 'hi',
    fred: false
} 

et qui me renvoie le tableau suivant en
sortie :
['Hello-john', 'Hello-brian', 'Hello-doe', 'Hello-fred']; */
function createGreetingsArray(obj) {
    const keys = Object.keys(obj);
    const greetings = keys.map(key => `Hello-${key}`);
    return greetings;
  }
  
  const myObj = { john: 12, brian: true, doe: 'hi', fred: false };
  const greetingsArray = createGreetingsArray(myObj);
  
  console.log(greetingsArray);