// create createRestaurant
function createRestaurant(name) {
  var pizzaRestaurant = {
    name: name,
    menus: {breakfast: [], lunch: [], dinner: []}
  }
  return pizzaRestaurant;
}

// addMenuItem
function addMenuItem(restMenu, newItem) {
  if (newItem.type === "breakfast" && !restMenu.menus.breakfast.includes(newItem)) {
    restMenu.menus.breakfast.push(newItem);
  } else if (newItem.type === "lunch" && !restMenu.menus.lunch.includes(newItem)) {
    restMenu.menus.lunch.push(newItem);
  } else if (newItem.type === "dinner" && !restMenu.menus.dinner.includes(newItem)) {
    restMenu.menus.dinner.push(newItem);
  }
}

// removeMenuItem
// restaurant, itemName, menu
function removeMenuItem(restMenu, removeItem, itemMenu) {
  if (restMenu.menus.breakfast.length < 1) {
    return `Sorry, we don't sell ${removeItem}, try adding a new recipe!`;
  }
  if (restMenu.menus.lunch.length < 1) {
    return `Sorry, we don't sell ${removeItem}, try adding a new recipe!`;
  }
  if (restMenu.menus.dinner.length < 1) {
    return `Sorry, we don't sell ${removeItem}, try adding a new recipe!`;
  }
  for (var i = 0; i < restMenu.menus.breakfast.length; i++) {
    if (restMenu.menus.breakfast[i].name === removeItem) {
      restMenu.menus.breakfast.pop();
      return `No one is eating our ${removeItem} - it has been removed from the breakfast menu!`;
    }
  }
  for (var i = 0; i < restMenu.menus.dinner.length; i++) {
    if (restMenu.menus.dinner[i].name === removeItem) {
        restMenu.menus.dinner.pop();
      return `No one is eating our ${removeItem} - it has been removed from the dinner menu!`;
    }
  }
};

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
