const arraySaya = ['😊','👌','❤️']

console.log(arraySaya)

const arrayKamu = []
arrayKamu[0] = '💜'
arrayKamu[1] = '😎'
arrayKamu[2] = '😡'

console.log(arrayKamu)

const arrayKita = new Array()
arrayKita[0] = '💏'
arrayKita[3] = '🖐️'
arrayKita[2] = '🎈'
console.log(arrayKita[3])

// LEVEL 2 BUAH BUAHAN
const arraySaya1 = ['🍊','🍍','🍉','🍑','🥑']

const semangka = arraySaya1.includes('🍉')
console.log(semangka)

if(semangka){
    const posisiSemangka = arraySaya1.indexOf('🍉')
    console.log(`Buah semangka itu ada dan dia berada di index = ${posisiSemangka}`)
} else{
    console.log("saya tidak tau posis nya dmn")
}

