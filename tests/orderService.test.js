// Gerado com o prompt:
// "Crie testes unitários usando Jest para a função calculateOrderTotal"

const { calculateOrderTotal } = require('../src/orderService');

test('deve aplicar desconto corretamente', () => {
  const total = calculateOrderTotal(100, 10);
  expect(total).toBe(90);
});

test('deve retornar 0 se o valor for menor ou igual a zero', () => {
  const total = calculateOrderTotal(0, 10);
  expect(total).toBe(0);
});
