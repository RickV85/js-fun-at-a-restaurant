// Create a object variable that assigns a name to a restaurant using a
// name parameter and creates an menus object of three empty arrays (breakfast,
// lunch, dinner).
function createRestaurant(name) {
  var pizzaRestaurant = {
    name: name,
    menus: {breakfast: [], lunch: [], dinner: []}
  };
  return pizzaRestaurant;
};

// Add a newItem to a one of the three menus created in createRestaurant.
// Used if and else if statements to determine if the newItem matches one
// of the three menus and add it to that menu only if its not in there already
// by using &&(logcal AND operator) !(logical NOT operator).
function addMenuItem(restaurant, newItem) {
  if (newItem.type === "breakfast" && !restaurant.menus.breakfast.includes(newItem)) {
    restaurant.menus.breakfast.push(newItem);
  } else if (newItem.type === "lunch" && !restaurant.menus.lunch.includes(newItem)) {
    restaurant.menus.lunch.push(newItem);
  } else if (newItem.type === "dinner" && !restaurant.menus.dinner.includes(newItem)) {
    restaurant.menus.dinner.push(newItem);
  }
};

// Whew, this last one was the hardest part of this project! I learned that I can create
// a function with many if statements and also continute to combine them with for loops.
// Make sure not to use return if I want all of the loops to run as that will stop the function.

// Create a function with the parameters restaurant, item and menu to look for,
// delete and return error messages depending on whether the item is in a given menu.
function removeMenuItem(restaurant, item, menu) {
  // Declare a var "found" to be false until an item is found.
  var found = false;
  // Create a loop that is looking for the name of the item in the breakfast menu.
  for (var i = 0; i < restaurant.menus.breakfast.length; i++) {
    if (restaurant.menus.breakfast[i].name === item) {
      // If item name is found in this menu, delete it by using splice which mutates the array.
      restaurant.menus.breakfast.splice(i, 1);
      // If item name is found, reassign found to be true.
      found = true;
    }
  };
  // Create a loop(same as above) that is looking for the name of the item in the lunch menu,
  // will remove it when found and reassign found to be true.
  for (var i = 0; i < restaurant.menus.lunch.length; i++) {
    if (restaurant.menus.lunch[i].name === item) {
      restaurant.menus.lunch.splice(i, 1)
      found = true;
    }
  };
  // Create a loop(same as above) that is looking for the name of the item in the dinner menu,
  // will remove it when found and reassign found to be true.
  for (var i = 0; i < restaurant.menus.dinner.length; i++) {
    if (restaurant.menus.dinner[i].name === item) {
        restaurant.menus.dinner.splice(i, 1)
        found = true;
    }
  };
  // Now, if an item is found/removed, return "No one is eating our "item" -
  // it has been removed from the "menu" menu!".
  // Else, return an error message of "Sorry, we don't sell "item"...".
  if (found) {
    return `No one is eating our ${item} - it has been removed from the ${menu} menu!`;
  } else {
    return `Sorry, we don't sell ${item}, try adding a new recipe!`
  }
};

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
