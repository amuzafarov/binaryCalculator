let btn0 = document.getElementById('btn0');
let btn1 = document.getElementById('btn1');
let clr = document.getElementById('btnCtrl');
let res = document.getElementById('res')
let btnSum = document.getElementById('btnSum');
let btnSub = document.getElementById('btnSub');
let btnDiv = document.getElementById('btnDiv');
let btnMul = document.getElementById('btnMul');
let btnEql = document.getElementById('btnEql');
let result = '';
let operator = '';

btn0.onclick = () => {
    result += 0;
    res.innerHTML = result;
}

btn1.onclick = () => {
    result += 1;
    res.innerHTML = result;
}

clr.onclick = () => {
    result = '';
    operator = '';
    res.innerHTML = '';
}

btnSum.onclick = () => {
    operator += '+'    
    result += operator;
    res.innerHTML = result;
}

btnSub.onclick = () => {
    operator += '-'    
    result += operator;
    res.innerHTML = result;
}

btnDiv.onclick = () => {
    operator += '/'    
    result += operator;
    res.innerHTML = result;
}

btnMul.onclick = () => {
    operator += '*'    
    result += operator;
    res.innerHTML = result;
}

btnEql.onclick = () => {
    let eq = result.split(operator);
    let r = null;
    switch(operator){
        case '+': r = parseInt(eq[0], 2) + parseInt(eq[1], 2);
                      break;
        case '-': r = parseInt(eq[0], 2) - parseInt(eq[1], 2);
                      break;
        case '/': r = Math.floor(parseInt(eq[0], 2) / parseInt(eq[1], 2));
                      break;
        case '*': r = parseInt(eq[0], 2) * parseInt(eq[1], 2);
                      break;
        default:  r = null;
    }

    res.innerHTML = r.toString(2);
    operator = '';
}



