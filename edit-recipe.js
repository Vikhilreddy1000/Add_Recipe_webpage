allRecipes = getAllRecipes()
const recipeId = window.location.hash.substring(1)
const recipe = findRecipe(allRecipes, recipeId)
if (recipe === undefined){
    location.assign('recipe.html')
}
renderRecipe(recipe)
document.querySelector('#ingredient-form').addEventListener('submit', (e) => {
    e.preventDefault()
    addIngredient(e, recipe.ingredients);
    e.target.elements[0].value = ''
    renderIngredients(recipe.ingredients)
})
document.querySelector('#update-recipe').addEventListener('click', () => {
    const recipeName = document.querySelector('#recipe-name')
    const recipeDescription = document.querySelector('#recipe-description')
    recipe.id = window.location.hash.substr(1)
    recipe.name = recipeName.value
    recipe.description = recipeDescription.value
    recipe.completionStatus = true
    //store allRecipes into local storage
    saveRecipes(allRecipes)
    //Redirect to home page
    window.location.assign('recipe.html')
})
document.querySelector('#delete-recipe-button').addEventListener('click', function(){
    const confirmation = confirm('Are you sure you want to delete this recipe?')
    if (confirmation){
        deleteRecipe(allRecipes, recipe.id)
        location.assign('recipe.html')
        saveRecipes(allRecipes)
    }
    
})
