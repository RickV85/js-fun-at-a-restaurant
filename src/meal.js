// name menu
function nameMenuItem(food) {
  return (`Delicious ${food}`)
};

// create menu item
function createMenuItem(name, price, type) {
  var menuItem = ({
    name: name,
    price: price,
    type: type
  });
  return menuItem
};

// add ingredients
function addIngredients(ingredient, ingredients) {
  if (ingredients.includes(ingredient) === true) {
    return
  } else {
    ingredients.push(ingredient);
  }
};

// format price
function formatPrice(price) {
  return `$${price}`;
};

// decrease price
function decreasePrice(price) {
  return price * .9
};

// create recipe
function createRecipe(name, ing, type) {
  return {
  title: name,
  ingredients: ing,
  type: type,
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
