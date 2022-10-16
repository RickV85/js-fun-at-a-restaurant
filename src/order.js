// take order
function takeOrder(newOrder, allOrders) {
  // Keep pushing newOrder in to allOrders until a max of 3 is reached, then
  // return allOrders.
  if (allOrders.length > 2) {
    return allOrders;
  } else {
    allOrders.push(newOrder);
  }
};

// refund order
function refundOrder(order_num, deliveryOrders) {
  // Remove order by ordernumber by iterating through deliveryOrders to find
  // order_num and then use splice to remove the order
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === order_num) {
      return deliveryOrders.splice(i, 1);
    }
  }
};

// list items
function listItems(deliveryOrders) {
  // Create items array to store deliveryOrders in by name
  var items = [];
  for (let i = 0; i < deliveryOrders.length; i++) {
     items.push(deliveryOrders[i].item);
  }
  // Used .join to bring the strings of names together to one string with .join
  // plus a comma and a space as required by the test
  return items.join(', ');
};

// search order
function searchOrder(orders, food) {
  // Created default state of match to be false until a match is found and
  // change match to true, then return match outside of the loop
  var match = false
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].item === food) {
      match = true;
    }
  }
  return match;
};

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
