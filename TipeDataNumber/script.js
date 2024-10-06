// number

let nilai_int = 10; // INTEGER 
let nilai_float = 10.12; // FLOAT
let nilai_big_Int = 1223321242524353445634n; 

// menggunakan data ini gimana??

let angka = 5.234;

let angka_int = parseInt(angka);
console.log(angka_int)

let angka_2 = 10;
let angka_float = parseFloat(angka_2);
console.log(angka_float);

// merubah string
let data = "10.98";
console.log(data);
console.log(parseInt(data));
console.log(parseFloat(data) + 10);

//contoh soal
let pembelian = "10000";
let pajak = 1200;
let bayar = parseInt(pembelian) + pajak;
console.log(bayar);