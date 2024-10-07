// perulangan di javascript
// for,  for of,for in, foreach
// while & do while

let i = 1
for(let i = 1; i <= 5; i++){
   console.log('data i ke - ' , i)
}
let x = 1 
while(x <= 5){
    console.log('data x ke - ', x)
    x++
}

let y = 1
do{
    console.log('data y ke - ', y)
    y++
}while(y <= 5 )


const z =[3,5,12];
let hasil = 0;

for(let i = 0; i < z.length; i++){
    hasil += z[i]
}
console.log(hasil)

const pacarSaya = ['agnes','putri','marino','angela','vexana']

//for of kita dapat value nya
for(let pacar of pacarSaya) {
    console.log(pacar)
}
//for in kita dapat indexnya (angka)
for(let pacar in pacarSaya) {
    console.log(pacar)
}

pacarSaya.forEach(pacar1 => {
    console.log(pacar1)
});