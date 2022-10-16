// Create a name for a menu item
function nameMenuItem(food) {
  return (`Delicious ${food}`)
};

// Create a menu item object with three key-value pairs of name, price, and type
// using parameters.
function createMenuItem(name, price, type) {
  // Make sure to use ({}) to create/declare an object variable and use : in the key-value
  // declarations and a comma after each.
  var menuItem = ({
    name: name,
    price: price,
    type: type
  });
  // Return the new menu item created.
  return menuItem
};

// Add ingredient to ingredients. Used .includes to check if the ingredient
// is already in the ingredients array and to return ingredients array if it is
// but add it with .push if its not.
function addIngredients(ingredient, ingredients) {
  if (ingredients.includes(ingredient) === true) {
    return ;
  } else {
    ingredients.push(ingredient);
  }
};

// Format price to create a string with the price value and a "$" prior to it.
function formatPrice(price) {
  return `$${price}`;
};

// Decrease price by 10% by multiplying it by .9.
function decreasePrice(price) {
  return price * .9
};

// Create object with three parameters name, ingredient and type.
function createRecipe(name, ing, type) {
  return {
  title: name,
  ingredients: ing,
  type: type,
  };
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
};
