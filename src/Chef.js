// Create a class "Chef" with constructor parameters of "name" and "restaurant".
class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  };
  // Create a function (notice "function" is not used to create inside a class)
  // that will greet a customer in two different ways dependin on if "morning" is true.
  greetCustomer(customer, morning){
    if (morning) {
      return `Good morning, ${customer}!`
    } else
    return (`Hello, ${customer}!`)
  };
  // Create a function that checks for the parameter "checkFood" in the breakfast
  // menu and return two different messages depending on whether it is or not.
  checkForFood(checkFood) {
    if (this.restaurant.menus.breakfast.includes(checkFood)) {
      return `Yes, we're serving ${checkFood.name} today!`
    } else {
      return `Sorry, we aren't serving ${checkFood.name} today.`
    }
  }
};

module.exports = Chef;
