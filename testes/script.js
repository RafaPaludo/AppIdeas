const promessa = new Promise(function(resolve, reject){
  if (1 === 1){
    setTimeout(() => {
      resolve({ nome: 'Fala Rapudo', idade: 23 });  
    }, 3000);
  } else {
    reject('Terminou com fracasso!')
  }
});

promessa.then( (resolve) => {
  resolve.sono = true;
  return resolve;
})
.then( (resolve) => {
  console.log(resolve);
})
.catch( (rejected) => {
  console.log(rejected);
})
.finally( () => {
  alert('Terminou!')
});


console.log(promessa);
