import getRandomRecipe from './modules/getRandomRecipe.js';
import createObjRecipe from './modules/createObjRecipe.js';


const recipes = new Array();

const generateBtn = document.querySelector('.btn');
generateBtn.addEventListener('click', newRecipe);

async function newRecipe(){
  const recipe = await getRandomRecipe('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata');

  const objRecipe = createObjRecipe(recipe);
  localStorage.setItem('recipe', JSON.stringify(objRecipe));
  window.location = 'recipe.html'
}
