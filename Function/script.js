// FUNCTION IN JAVASCRIPT

function addName(fullName,lastName){
    console.log('Nama depan adalah : ', fullName)
    console.log('Nama belakang adalah : ', lastName)
}
addName('EDHOOO','edhoo')

function addName1(){
    console.log('Nama depan adalah :', arguments[0])
    console.log('Nama belakang adalah : ', arguments[1])
}
addName1('Rizky','bolo')

const fullname1 = function addName2(firstName,lastName1){
    console.log(firstName, lastName1)
}
fullname1('Fuad','Ridho')

// return -> di ganti menjadi console.log
// cara 1 keyword new function
const sum = new Function('x','y','console.log(x+y)')
sum(5,5)

//cara 2 - standar function
function sum2(x,y){
    console.log(x + y)
}
sum2(5,6)

// cara 3 - arrow function
const sum3 = (xy,yx) => {
    console.log(xy + yx)
}
sum3(10,20)

var data = 1