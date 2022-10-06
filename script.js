const nums = document.querySelectorAll('.num');
const disp = document.querySelector('.disp');
const clear = document.querySelector('.clear');
const opers = document.querySelectorAll('.oper');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const times = document.querySelector('#times');
const division = document.querySelector('#division');
const equals = document.querySelector('.equals');


nums.forEach(element => {
    element.addEventListener('click',() => {
        if(disp.textContent === "0"){
            disp.textContent = '';
        }

        val = element.textContent;
        disp.textContent += val;
    })
})

opers.forEach(element => {
    element.addEventListener('click',() => {
        let expression = disp.textContent;
            if(checkOper(expression)){
                let vals = expression.split(/-|×|÷|\+/); //puts values before and after operator into array
                disp.textContent = operate(checkOper(expression), +vals[0], +vals[1]);
            }

            val = element.textContent;
            disp.textContent += val;
    })
})

equals.addEventListener('click', ()=>{
    let expression = disp.textContent;
    if(checkOper(expression)){
        let vals = expression.split(/-|×|÷|\+/); //puts values before and after operator into array
        disp.textContent = operate(checkOper(expression), +vals[0], +vals[1]);
    }
}); 

function checkOper(str){
    if(str.includes("+")){
        return add;
    }else if(str.includes("-")){
        return sub;
    }else if(str.includes("×")){
        return mult;
    }else if(str.includes("÷")){
        return divide;
    }else{
        return false;
    }
}


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