function numbers(value) {
  const array = [
    ['zero', 'um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'],
    ['dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'],
    ['vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'],
    ['cem', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'],
  ]

  const stringNumber = value.toString();

  switch(stringNumber.length) {
    case 1:
      return array[0][value]
      break;
    case 2:
      return value < 20
        ? array[1][+stringNumber.split('').reverse()[0]]
        : stringNumber.split('')[1] == 0
          ? array[2][stringNumber.split('')[0] - 2]
          : `${array[2][stringNumber.split('')[0] - 2]} e ${array[0][stringNumber.split('')[1]]}`
      break;
    case 3:
      return array[3][stringNumber.split('')[0] - 1]
      break;    
  }

  // return array[0][stringNumber.length - 1]
}
module.exports = numbers;