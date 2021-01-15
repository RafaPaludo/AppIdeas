// https://www.themealdb.com/api/json/v1/1/random.php
// https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

export default async function getRandomRecipe(url){
    try{
      const recipeResponse = await fetch(url);
      const jsonRecipe = await recipeResponse.json();

      return jsonRecipe.meals[0];
    } catch(error){
      alert(error);
    }
}

