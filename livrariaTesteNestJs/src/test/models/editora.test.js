import { describe, it, expect, jest } from '@jest/globals';
import Editora from '../../models/editora';

describe('Testando o modelo Editora', () => {
  const objetoEditora = {
    nome: 'CDC',
    cidade: 'São Paulo',
    email: 'c@c.com',
  };

  it.skip('Deve instanciar uma nova Editora', () => {
    const editora = new Editora(objetoEditora);
    expect(editora).toEqual(expect.objectContaining(objetoEditora));
  });

  it('Deve salvar editora no banco de dados', () => {
    const editora = new Editora(objetoEditora);

    editora.salvar().then((dados) => {
      expect(dados.nome).toBe('CDC');
    });
  });

  it.skip('Deve salvar no BD usando a sintaxe moderna', async () => {
    const editora = new Editora(objetoEditora);

    const dados = await editora.salvar();

    const retornado = await Editora.pegarPeloId(dados.id);

    expect(retornado).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...objetoEditora,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      }),
    );
  });

  it('Deve fazer uma chamada simulada ao banco de dados', async () => {
    const editora = new Editora(objetoEditora);

    // Mock da função salvar
    const salvarMock = jest.fn().mockResolvedValue({
      id: 1,
      nome: 'CDC',
      cidade: 'São Paulo',
      email: 'c@c.com',
      created_at: '2021-08-01',
      updated_at: '2021-08-01',
    });

    // Substituindo a função salvar do objeto editora pelo mock
    editora.salvar = salvarMock;

    // Chama a função salvar
    const retorno = await editora.salvar();

    // Verifica se o retorno possui as propriedades esperadas
    expect(retorno).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        ...objetoEditora,
        created_at: expect.any(String),
        updated_at: expect.any(String),
      }),
    );
  });
});
