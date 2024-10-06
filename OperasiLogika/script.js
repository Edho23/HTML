//OPERATOR LOGIKA
// AND , OR , OR

let data_bool = true;
console.log(data_bool)

// 1.NOT
console.log(!data_bool) // flip data boolean
console.log(!!data_bool)
console.log(!1)
console.log(!0)

// 2. OR (operasi antara 2 variable boolean)
// A     true true  false false
// B     true false true  false
// HASIL true true  true  false

console.log(`A = true || B = true, Hasil ${true || true}`)
console.log(`A = false || B = true, Hasil ${false || true}`)
console.log(`A = true || B = false, Hasil ${true || false}`)
console.log(`A = false || B = false, Hasil ${false || false}`)

let makan = true;
let minum = true;

let sudah_semua = makan || minum;
console.log(`sudah semuanya = ${sudah_semua}`)

// 3. AND -> (Operasi antara 2 variable boolean)
// A     true true  false false
// B     true false true  false
// HASIL true false false false

console.log(`A = true && B = true, Hasil ${true && true}`)
console.log(`A = false && B = true, Hasil ${false && true}`)
console.log(`A = true && B = false, Hasil ${true && false}`)
console.log(`A = false && B = false, Hasil ${false && false}`)

makan = true;
minum = false;

let sudahmakmin = makan && minum;
console.log(`sudah semuanya ? = ${sudahmakmin}`)
