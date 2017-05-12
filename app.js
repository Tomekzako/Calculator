document.addEventListener('DOMContentLoaded', function () {

    const keys = document.querySelectorAll('.keys__one');

    for (var i = 0; i < keys.length; i++) {
        keys[i].addEventListener('click', function () {
            let input = document.querySelector('.keys__one__result');
            let inputVal = input.innerHTML;
            let newVal = this.innerHTML;

            if (newVal == 'C') {
                input.innerHTML = '';
            }

            if (newVal == '=') {
                var equation = inputVal;
                	equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
                console.log(equation);
                if (equation) {
                    input.innerHTML = eval(equation);
                }
            } else {
                input.innerHTML += newVal;
            }
        });
    }
});