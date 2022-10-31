const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toContain('Ilana', 'Orval', 'Bea', 'Jefferson');
  });
  it('retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toContain('NW');
  });
  it('retorna a popularidade dos elefantes', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toStrictEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('undefined', () => {
    expect(handlerElephants()).toEqual(undefined);
  });
  it('objeto vazio', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('string que não contempla funcionalidade', () => {
    expect(handlerElephants('funcionalidade qualquer')).toBe(null);
  });
});
