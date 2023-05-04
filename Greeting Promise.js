greet('Mithun')
  .then(function(greeting) {
    console.log(greeting); // logs "Hello, Mithun!"
  })
  .catch(function(error) {
    console.error(error);
  });
