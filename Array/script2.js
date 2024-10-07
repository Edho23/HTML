// LEVEL 3,4 BUAH BUAHAN
const arraySaya1 = ['🍊','🍍','🍉','🍑','🥑']

const semangka = arraySaya1.includes('🍉')
console.log(semangka)

if(semangka){
    const posisiSemangka = arraySaya1.indexOf('🍉')
    const indexBefore = posisiSemangka - 1
    const indexAfter = posisiSemangka + 1
    const before = arraySaya1[indexBefore]
    const after = arraySaya1[indexAfter]
    console.log(`jadi buah sebelum semangka adalah = ${before}`)
    console.log(`jadi buah sesudah semangka adalah = ${after}`)

    const buahAwal = arraySaya1.shift()
    console.log(`Buah awal di array adalah = ${buahAwal}`)
    const buahAkhir = arraySaya1.pop()
    console.log(`Buah akhir di array adalah = ${buahAkhir}`)
    
} else{
    console.log("saya tidak tau posis nya dmn")
}