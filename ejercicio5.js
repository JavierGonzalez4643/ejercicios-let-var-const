const funcsLet = [];

for (let i = 0; i < 3; i++) {
  funcsLet.push(function() {
    console.log(i); 
  });
}


funcsLet.forEach(func => func()); 
