let numbers,result;

document.getElementById('buttonAngka').onclick = function(){
    numbers = document.getElementById('numbers').value.split(',');


    let max = numbers[0];
    
    for(let i = 1; i < numbers.length; i++){
        if(numbers[i] >  max){
            max = numbers[i]
        }
    }

    document.getElementById('result').textContent = "Angka terbesar adalah = " + max

}