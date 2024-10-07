let namaKaryawan = (prompt('Nama karyawan : ' ));
let gaji = parseInt(prompt('Gaji perhari :'));
let hari = parseInt(prompt('Jumlah hari masuk kerja :'));

Gaji(gaji,hari)

function Gaji(gaji,hari){
    const total = gaji * hari
    alert(`total gaji yang di dapat kan ` + namaKaryawan + total)
}

