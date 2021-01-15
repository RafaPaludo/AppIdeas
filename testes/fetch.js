// const teste = fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
// .then( (resolucao) => {
//   return resolucao.json();
// })
// .then( (body) => {
//   console.log(body.meals)
// })


// CEP
const cep = document.querySelector('.input');
const button = document.querySelector('.btn');
const cepInfo = document.querySelector('#cep');

button.addEventListener('click', (event) => {
  event.preventDefault();
  getCep(cep.value.toString()); 
})

function getCep(value){
  const requestCep = fetch('https://viacep.com.br/ws/' + value + '/json')
  .then( (resolve) => {
    return resolve.json();
  })
  .then( (resolve) => {
    const dataArray = Object.entries(resolve);

    dataArray.forEach( (element) => {
      const newDiv = document.createElement('div');
      element.forEach( (element) => {
        const newSpan = document.createElement('span');
        newSpan.innerText = element + ' ';
        newDiv.appendChild(newSpan);
      })
      cepInfo.appendChild(newDiv);
    });
    console.log(dataArray);
  })
  .catch( () => {
    console.log('erro')
  });
}

// BITCOINS

const blockChainDiv = document.querySelector('#bcWrapper');

function getBlockChain(){
  fetch('https://blockchain.info/ticker')
  .then( (resolve) => {
    return resolve.json();
  })
  .then( (resolve) => {
    console.log('teste');
    blockChainDiv.innerHTML = 'R$ ' + resolve['BRL'].buy;
  })
}




// CHUCK NORRIS::

const inputChuck = document.querySelector('.chuckNorris input');
const divChuck = document.querySelector('#chuck');
inputChuck.addEventListener('click', showJoker);

function showJoker(){
  fetch('https://api.chucknorris.io/jokes/random')
  .then( (resolve) => {
    return resolve.json();
  })
  .then( (resolve) => {
    divChuck.innerHTML = resolve.value;
    console.log(resolve);
  })
  .catch( (reject) => {
    console.log('Errou!')
  })
}


// JSON Parse e Stringfy::

const sessao = {
  dataAcesso: '17 Outubro 2020',
  pais: 'Brasil',
  cidade: 'Florianópolis'
}


localStorage.setItem('sessao', JSON.stringify(sessao));