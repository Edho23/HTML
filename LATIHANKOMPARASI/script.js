let aritmatikaAngka1,operatorAritmatika,aritmatikaAngka2,hasilOperatorAritmatika;

document.getElementById('buttonAritmatika').onclick = function(){
    // INPUT 
    aritmatikaAngka1 = document.getElementById('aritmatikaAngka1').value;
    aritmatikaAngka2 = document.getElementById('aritmatikaAngka2').valueAsNumber;
    operatorAritmatika = document.getElementById('operatorAritmatika').value;

    //OPERASI
    hasilOperatorAritmatika =  eval(aritmatikaAngka1 + operatorAritmatika + aritmatikaAngka2);

    //OUTPUT
    document.getElementById('hasilOperatorAritmatika').textContent = hasilOperatorAritmatika

}

let boolean1,operatorLogika,boolean2,hasilOperatorLogika
document.getElementById('buttonBoolean').onclick = function(){
    // INPUT 
    boolean1 = document.getElementById('boolean1').value;
    boolean2 = document.getElementById('boolean2').valueAsNumber;
    operatorLogika = document.getElementById('operatorLogika').value;

    //OPERASI
    hasilOperatorLogika =  eval(boolean1 + operatorLogika + boolean2);

    //OUTPUT
    document.getElementById('hasilOperatorLogika').textContent = hasilOperatorLogika

}

let komparasi1,operatorKomparasi,komparasi2,hasilOperatorKomparasi
document.getElementById('buttonKomparasi').onclick = function(){
    // INPUT 
    komparasi1 = document.getElementById('komparasi1').value;
    komparasi2 = document.getElementById('komparasi2').valueAsNumber;
    operatorKomparasi = document.getElementById('operatorKomparasi').value;

    //OPERASI
    hasilOperatorKomparasi =  eval(komparasi1 + operatorKomparasi + komparasi2);

    //OUTPUT
    document.getElementById('hasilOperatorKomparasi').textContent = hasilOperatorKomparasi

}