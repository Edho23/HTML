let terbesar1,terbesar2,hasilOperatorModulo;

document.getElementById('buttonModulo').onclick = function(){
    terbesar1 = document.getElementById('terbesar1').value;
    terbesar2 = document.getElementById('terbesar2').value;

    while(terbesar2){
        let temp = terbesar2
        terbesar2 = terbesar1 % terbesar2
        terbesar1 = temp
    }

    document.getElementById('hasilOperatorModulo').textContent = "ini hasil = " + terbesar1
}