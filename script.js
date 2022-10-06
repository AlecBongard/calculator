const nums = document.querySelectorAll('.num');
const disp = document.querySelector('.disp');
const clear = document.querySelector('.clear');
const opers = document.querySelectorAll('.oper');

let cleared = true;
first=null;


nums.forEach(element => {
    element.addEventListener('click',() => {
        if(cleared===true){
            cleared = false;
            disp.textContent = '';
        }

        val = element.textContent;
        disp.textContent += val;
    })
})

opers.forEach(element => {
    element.addEventListener('click',() => {
        if(cleared===true){
            cleared = false;
            disp.textContent = '';
        }

        val = element.textContent;
        disp.textContent += val;
    })
})

clear.addEventListener('click', ()=>{
    cleared = true;
    disp.textContent = 0;
});

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