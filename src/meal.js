function nameMenuItem(name) {
  return `Delicious ${name}`;
}

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type:  type
  }
  return menuItem

}

function addIngredients(items, ingredients) {

if(ingredients.includes(items)){
  ingredients.pop();
}
  ingredients[ingredients.length] = items;
  console.log(ingredients);
  return ingredients;
}

function formatPrice(price) {

  return `$${price}`;
}

function decreasePrice(price) {
   return price * 0.9;
}

function createRecipe(title, ingredients, menuItemType) {
  return {
   title: title,
   ingredients: ingredients,
   type: menuItemType,
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe,
};
