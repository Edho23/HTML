let a,b,c,hasilOperator;

document.getElementById('buttonQuadratic').onclick = function(){
    a = parseInt(document.getElementById('a').value)
    b = parseInt(document.getElementById('b').value)
    c = parseInt(document.getElementById('c').value)
    if(cek(a,b,c) > 0){
        let akar = cariakar(a,b,c)
        document.getElementById('hasilOperator').textContent = "akar  ny adalah " + akar[0] + " dan " + akar[1]
    } else if(cek(a,b,c) == 0){
        let akar = cariakar(a,b,c)
        document.getElementById('hasilOperator').textContent = "akar  ny adalah " + akar[0]
    }else{
        document.getElementById('hasilOperator').textContent = "persamaan tersebut tidak memiliki akar nyata"
    }
}

function cek(a,b,c){
    let hasil = b*b - 4*a*c
    return hasil
}

function cariakar(a,b,c){
    let hasil = Math.sqrt(cek(a,b,c))/(2*a)
    let x1 =  -b/(2*a) + hasil
    let x2= -b/(2*a) - hasil
    return[x1,x2]
}