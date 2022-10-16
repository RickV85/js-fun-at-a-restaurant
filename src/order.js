// take order
function takeOrder(newOrder, allOrders) {
  if (allOrders.length > 2) {
    return allOrders;
  } else {
  allOrders.push(newOrder)
  }
};

// refund order
function refundOrder(order_num, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === order_num) {
      return deliveryOrders.splice(i, 1)
    }
  }
};

// list items
function listItems(deliveryOrders) {
  var items = []
  for (let i = 0; i < deliveryOrders.length; i++) {
     items.push(deliveryOrders[i].item);
  }
  return items.join(', ');
};

// search order
function searchOrder(orders, food) {
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
