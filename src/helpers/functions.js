export function getCartsLength() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart ? cart.products.length : 0;
}

export function calcTotalPrice(products) {
  return products.reduce((prev, next) => (prev += next.subPrice), 0);
}
