function displayMessage() {
  
  var message= "Hello world";
  // var se puede declarar muchas veces con el mismo nombre y cambiar el valor en cualquier momento y es global osea se puede usar dentro de una decision aunque no lo este 
   
  if (true){
    let message= "Hello JavaScript";   
    // let es local por ejemplo en la decision se queda ahi la variable y no sale de ahi mas que si usas un let en la funcion luego un var en el if (decision) con el mismo nombre saldra error porque let ya lo tiene y ella es unica podria decirse no se puede repetir con el mismo nombre de variable pero por ejemplo si el let lo pones afuera del if y otro let adentro no pasa nada porque un let esta afuera y otro let adentro y pueda que lo uses para diferentes valores 
    console.log(message);

  }
    console.log(message); 
  }

  displayMessage();
