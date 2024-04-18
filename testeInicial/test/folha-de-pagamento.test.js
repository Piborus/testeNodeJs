import { somaHorasExtras, calculaDesconto } from '../index.js';

describe('Testes dos calculos de pagamento', () => {
  it('Deve retornar a soma das horas extras', () => {
    const esperado = 2500;
    const retornado = somaHorasExtras(2000, 500);

    expect(retornado).toBe(esperado);
  });

  test('Deve desconta o valor do salario', () => {
    const esperado = 2300;
    const retornado = calculaDesconto(2500, 200);

    expect(retornado).toBe(esperado);
  });
});
