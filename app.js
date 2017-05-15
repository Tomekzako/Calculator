document.addEventListener('DOMContentLoaded', function () {

    const keys = document.querySelectorAll('.keys__one');
    const operators = ['+', '-', 'x', '÷'];
    let decimal = false;

    for (var i = 0; i < keys.length; i++) {
        keys[i].addEventListener('click', function (e) {
            e.preventDefault();
            let input = document.querySelector('.keys__one__result');
            let inputVal = input.innerHTML;
            let newVal = this.innerHTML;

            if (newVal == 'C') {
                input.innerHTML = '';
                decimal = false;

            } else if (newVal == '=') {
                let equation = inputVal;
                let lastEl = equation[equation.length - 1];
                equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
                console.log(equation);

                if (operators.indexOf(lastEl) > -1 || lastEl == '.') {
                    equation = equation.replace(/.$/, '');
                }

                if (equation) {
                    input.innerHTML = eval(equation);
                }
                decimal = false;

            } else if (operators.indexOf(newVal) > -1) {
                let lastEl = inputVal[inputVal.length - 1];

                if (inputVal != '' && operators.indexOf(lastEl) == -1) {
                    input.innerHTML += newVal;
                } else if (inputVal == '' && newVal == '-') {
                    input.innerHTML += newVal;
                }

                if (operators.indexOf(lastEl) > -1 && inputVal.length > 1) {
                    input.innerHTML = inputVal.replace(/.$/, newVal);
                }
                decimal = false;
            } else if (newVal == '.') {
                if (!decimal) {
                    input.innerHTML += newVal;
                    decimal = true;
                }
            } else {
                input.innerHTML += newVal;
            }
        });
    }
});