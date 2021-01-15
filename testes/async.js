const divStarWars = document.querySelector('.starwars div');

async function pegaPersonagem(){
  try{
    const fetchSW = await fetch('https://swapi.dev/api/people/1');
    const dataApi = await fetchSW.text();
    divStarWars.innerHTML = dataApi;
  } catch(error){
    console.error('Deu erro!')
  }

}

pegaPersonagem();