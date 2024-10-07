const arraySaya = ['🍍',10,{ Tomato : function(){console.log('ini tomat')}},['eat', 'food']] // data array original

console.log(arraySaya[3][1]) // array multi dimensi
arraySaya[2].Tomato() // memanggil function didalam array

const arraySaya1 = ['🍊','🍍','🍉']
const arrayKamu  = ['😡','😎','💜']

const mergeArray = arraySaya1.concat(arrayKamu)

for(list of mergeArray) console.log(list)
