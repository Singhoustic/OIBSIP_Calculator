let string = "";
let buttons = document.querySelectorAll('.button');


let input = document.getElementById('inp');

Array.from(buttons).forEach((elem) => {
    elem.addEventListener('click', (e) => {

        if (e.target.innerHTML == '=') {

            string = eval(string);
            input.value = string

        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;

        }
        else if (e.target.innerHTML == "DEL") {
            input.value = input.value.substring(0, input.value.length - 1);
        }
        else {
            string += e.target.innerHTML;
            input.value = string
        }
    })
})