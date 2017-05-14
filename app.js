document.addEventListener('DOMContentLoaded', function () {

    const keys = document.querySelectorAll('.keys__one');
    const operators = ['+', '-', 'x', '÷'];
    

    for (var i = 0; i < keys.length; i++) {
        keys[i].addEventListener('click', function () {
            let input = document.querySelector('.keys__one__result');
            let inputVal = input.innerHTML;
            let newVal = this.innerHTML;

            if (newVal == 'C') {
                input.innerHTML = '';
            }

            else if (newVal == '=') {
                var equation = inputVal;
                equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
                console.log(equation);
                if (equation) {
                    input.innerHTML = eval(equation);
                }
                
                
            }
            
            else if(operators.indexOf(newVal) > -1){
                if(inputVal != ''){
                    input.innerHTML += newVal;
                }
            }
            
            else {
                input.innerHTML += newVal;
            }
        });
    }
});