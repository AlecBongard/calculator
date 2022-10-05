const buttons = document.querySelector('.nums');




function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function divide(a, b){
    if(b === 0){
        return "Error"
    } else{
        return a / b;
    }
}

function mult(a, b){
    return a * b;
}

function operate(op, a, b){
    return op(a, b);
}