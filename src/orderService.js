// Gerado com o prompt:
// "Crie uma função em JavaScript que calcule o total de um pedido aplicando um desconto percentual"

function calculateOrderTotal(price, discountPercentage) {
  if (price <= 0) return 0;

  const discount = price * (discountPercentage / 100);
  return price - discount;
}

module.exports = { calculateOrderTotal };
