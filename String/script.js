let dataString = "Data String";
console.log(dataString);

// 1.escaping string (\ ' \"  \\ \n \t \r \b \f)
let data1 = 'Ucup berkata "apa kabar dunia?" ';
console.log(data1); 

let data2 = "otong berkata \"tetep asyik\"";
console.log(data2);

let data3 = "ucup berjalan-jalan di tepi pantai, \nkeren";
console.log(data3);

// literal string (template literal string )
let namaDepan = "Otong";
let namaBelakang = "Surotong";
let umur = 7;
let namaLengkap = umur + " " + namaDepan + " " + namaBelakang;
console.log(namaLengkap);

//Lebih mudah agar tidak bikin error
let  biodata = `${namaDepan} ${namaBelakang} dengan umur ${umur}`;
console.log(biodata);