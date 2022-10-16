class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }
  greetCustomer(customer, morning){
    if (morning) {
      return `Good morning, ${customer}!`
    } else
    return (`Hello, ${customer}!`)
  }
  checkForFood(checkFood) {
    if (this.restaurant.menus.breakfast.includes(checkFood)) {
      return `Yes, we're serving ${checkFood.name} today!`
    } else {
      return `Sorry, we aren't serving ${checkFood.name} today.`
    }
  }
}

module.exports = Chef;
