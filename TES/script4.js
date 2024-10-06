let kata1,hasilKata;

document.getElementById('buttonKata').onclick = function(){
    kata1 = document.getElementById('kata1').value;
    let counts = getCounts(kata1)
    document.getElementById('hasilKata').textContent = "kata yang berulang  = " + JSON.stringify(counts);

}

function getCounts(kata1){
let histogram= {};

    for(let i = 0; i < kata1.length; i++){
        const ch = kata1[i];
        if(!histogram[ch]){
            histogram[ch] = 0;
        }
        histogram[ch]++;
    }
    return histogram;
}