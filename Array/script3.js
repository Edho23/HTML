//const arraySaya1 = ['🍊','🍍','🍉','🍑','🥑']

// const arraySaya = []
// arraySaya['alpukat'] = ['🥑']
// arraySaya['jeruk'] = ['🍊']

// console.log(arraySaya['alpukat'])

const arraySaya = ['🍊','🍍','🍉','🍑','🥑'] // data array original

// data array duplicate yang di ubah

// const newArraySaya = [...arraySaya]  
// const newArraySaya = arraySaya.slice()
const newArraySaya = Array.from(arraySaya)

newArraySaya[0] = '❌'

console.log({arraySaya})
console.log({newArraySaya})

