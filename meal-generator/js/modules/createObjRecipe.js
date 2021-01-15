// Recebe apenas um objeto crú da API e o transforma em um novo objeto, sem strings vazias ou inválidas e melhor formatado

export default function createObjRecipe(objRecipe){
  const newObj = {
    ingredients: [],
    measures: []
  };

  for ( let value in objRecipe){
    if (objRecipe[value] !== "" && objRecipe[value] !== null  && objRecipe[value] !== false){
      if(value.includes('strIngredient')){
        newObj.ingredients.push(objRecipe[value]);
      } else if (value.includes('strMeasure')) {
        newObj.measures.push(objRecipe[value]);
      } else {
        newObj[value] = objRecipe[value];
      }
    }
  }

  return newObj;
}

