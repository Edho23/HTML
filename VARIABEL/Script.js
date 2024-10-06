// Variable dengan  let
let nama = "Edho";

// tampilkan data
console.log(nama);

// kita ubah nilai variabel nama

nama = "Otong Surotong";

console.log(nama);

// variabel dengan VAR
var namaDepan = "Ucup";
console.log(namaDepan);
namaDepan = "Edho";
console.log(namaDepan);

//Kelakukan dari let
let namaBelakang = "Ucup";
{
  let namaBelakang = "Ucupp";
  console.log(namaBelakang);
}
console.log(namaBelakang);

// Kelakukan dari VAR
var namaTengah = "Keren";
{
  var namaTengah = "Ganteng";
  console.log(namaTengah);
}
console.log(namaTengah);

// kasus Khusus tanpa keyword akan jadi var
Gorengan = "Bala-Bala";
{
  Gorengan = "Combro";
}
console.log(Gorengan);

// CONST
const TTL = "10 Maret 2022";
console.log(TTL);

