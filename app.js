document.addEventListener('DOMContentLoaded', function () {

    const keys = document.querySelectorAll('.keys__one');    
    
    for ( var i=0; i<keys.length; i++){
        keys[i].addEventListener('click', function(){
            let input = document.querySelector('.keys__one__result');
            let inputVal = input.innerHTML;
            let newVal = this.innerHTML;
            
            if (newVal == 'C') {
                inputVal = '';
            } else {
            input.innerHTML += newVal;
            console.log(inputVal);
            }
        });
    }
});