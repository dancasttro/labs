const numbers = require('./index');

describe('numbers', () => {
  it('smals numbers 0 - 9', () => {
    expect(numbers(0)).toEqual('zero');
    expect(numbers(1)).toEqual('um');
    expect(numbers(2)).toEqual('dois');
    expect(numbers(3)).toEqual('tres');
    expect(numbers(4)).toEqual('quatro');
    expect(numbers(5)).toEqual('cinco');
    expect(numbers(6)).toEqual('seis');
    expect(numbers(7)).toEqual('sete');
    expect(numbers(8)).toEqual('oito');
    expect(numbers(9)).toEqual('nove');
  });

  it('smals numbers 10 - 19', () => {
    expect(numbers(10)).toEqual('dez');
    expect(numbers(11)).toEqual('onze');
    expect(numbers(12)).toEqual('doze');
    expect(numbers(13)).toEqual('treze');
    expect(numbers(14)).toEqual('quatorze');
    expect(numbers(15)).toEqual('quinze');
    expect(numbers(16)).toEqual('dezesseis');
    expect(numbers(17)).toEqual('dezessete');
    expect(numbers(18)).toEqual('dezoito');
    expect(numbers(19)).toEqual('dezenove');
  });

  it('decimal numbers 20, 30,... 90', () => {
    expect(numbers(20)).toEqual('vinte');
    expect(numbers(30)).toEqual('trinta');
    expect(numbers(40)).toEqual('quarenta');
    expect(numbers(50)).toEqual('cinquenta');
    expect(numbers(60)).toEqual('sessenta');
    expect(numbers(70)).toEqual('setenta');
    expect(numbers(80)).toEqual('oitenta');
    expect(numbers(90)).toEqual('noventa');
  });

  it('decimal numbers compound, like 21, 32,... 99', () => {
    expect(numbers(21)).toEqual('vinte e um');
    expect(numbers(22)).toEqual('vinte e dois');
    expect(numbers(23)).toEqual('vinte e tres');
    expect(numbers(24)).toEqual('vinte e quatro');
    expect(numbers(25)).toEqual('vinte e cinco');
    expect(numbers(26)).toEqual('vinte e seis');
    expect(numbers(27)).toEqual('vinte e sete');
    expect(numbers(28)).toEqual('vinte e oito');
    expect(numbers(29)).toEqual('vinte e nove');
    expect(numbers(31)).toEqual('trinta e um');
    expect(numbers(99)).toEqual('noventa e nove');
  });

  it('centesimal numbers 100, 200,... 900', () => {
    expect(numbers(100)).toEqual('cem');
    expect(numbers(200)).toEqual('duzentos');
    expect(numbers(300)).toEqual('trezentos');
    expect(numbers(400)).toEqual('quatrocentos');
    expect(numbers(500)).toEqual('quinhentos');
    expect(numbers(600)).toEqual('seiscentos');
    expect(numbers(700)).toEqual('setecentos');
    expect(numbers(800)).toEqual('oitocentos');
    expect(numbers(900)).toEqual('novecentos');
  });
})