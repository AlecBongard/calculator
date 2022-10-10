const nums = document.querySelectorAll('.num');
const disp = document.querySelector('.disp');
const clear = document.querySelector('.clear');
const opers = document.querySelectorAll('.oper');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const times = document.querySelector('#times');
const division = document.querySelector('#division');
const equals = document.querySelector('.equals');
const dec = document.querySelector('.dec');
const ans = document.querySelector('.ans');


dec.addEventListener('click', ()=>{
    let expression = disp.textContent;
    let vals = expression.split(/-|×|÷|\+/);

    if(vals.length > 1){
        if(!(vals[1].includes("."))){
            disp.textContent += ".";
        }
    }else{
        if(!(vals[0].includes("."))){
            disp.textContent += ".";
        }
    }
});

nums.forEach(element => {
    element.addEventListener('click',() => {
        if(disp.textContent === "0"){
            disp.textContent = '';
        }else if(ans.textContent !== '' && !checkOper(disp.textContent)){
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
                let evaled = operate(checkOper(expression), +vals[0], +vals[1]);

                disp.textContent = evaled;
            }

            val = element.textContent;
            disp.textContent += val;
    })
});

equals.addEventListener('click', ()=>{
    let expression = disp.textContent;
    if(checkOper(expression)){
        let vals = expression.split(/-|×|÷|\+/); //puts values before and after operator into array
        let evaled = operate(checkOper(expression), +vals[0], +vals[1]);

        disp.textContent = evaled;
        ans.textContent = evaled;
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