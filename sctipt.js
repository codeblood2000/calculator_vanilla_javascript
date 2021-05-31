const calculator = document.querySelector(".calculator");
const keys = document.querySelector(".calculator-keys");
const display = document.querySelector(".screen");
console.log(keys);

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const lastele = display.textContent[display.textContent.length-1];

        if(action != "clear" && action !=="calculate"){
            if (display.textContent === '0') {
                        display.textContent = keyContent
                      }else{
                        display.textContent = display.textContent + keyContent;
                      }
        }

        if(action === "calculate"){
            let equation = display.textContent.replace(/x/g, '*').replace(/÷/g, '/');
            console.log(equation);
            var arr = equation.split(/[^0-9]/);
            console.log(arr);
            var s1 = "";
            var s2 = "";
            for(i =0 ;i<equation.length;i++){
                if(equation[i] != "+" || equation[i] != "-" ||equation[i] != "*" ||equation[i] != "/"){
                    s1 += equation[i];
                }else{
                    
                }
            }
        }

        // let previousKeyType = calculator.dataset.previousKeyType;
        // if (!action) {
        //     console.log("number key");
        //     if (displayedNum === '0' || previousKeyType === 'operator') {
        //         calculator.dataset.previousKeyType = '';
        //         display.textContent = keyContent
        //       }else {
        //         display.textContent = displayedNum + keyContent
        //       }
        // }else if (action === 'decimal') {
        //     display.textContent = displayedNum + '.'
        //   }
        // if (
        //     action === 'add' ||
        //     action === 'subtract' ||
        //     action === 'multiply' ||
        //     action === 'divide'
        // ) {
        //     console.log('operator key!')
        //     calculator.dataset.previousKeyType = 'operator';
        // }
        // if (action === 'clear') {
        //     console.log('clear key!')
        // }

        // if (action === 'calculate') {
        //     console.log('equal key!')
        // }
    }
})