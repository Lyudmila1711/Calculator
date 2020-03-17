const display = document.querySelector('.display');

document.querySelectorAll('.digits button')
    .forEach( button => button.addEventListener('click', digitPressed));

function digitPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelectorAll('.opers button')
    .forEach( button => button.addEventListener('click', opersPressed));

function opersPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelector('.eq').addEventListener('click', calculate);

function calculate() {
    let sum = eval(display.value);
    sum = Math.round(sum * 100000);
    display.value = sum / 100000;
    if (display.value == Infinity || display.value == -Infinity){
        display.value = 'mustn`t divide by zero';
    }
};

function opersPressed(ev) {
    if ('-+*/.'.includes(display.value[display.value.length - 1])) {
        display.value = display.value.slice(0, -1);
        display.value += ev.target.innerText;
    } else {
        display.value += ev.target.innerText;
    }
}

document.querySelector('.deleteAll').addEventListener('click', deleteAllContent);

function deleteAllContent() {
    display.value = ' ';
}

document.querySelector('.remove').addEventListener('click', removeLastCharacter);

function removeLastCharacter() {
    const data = display.value;
    display.value = data.slice(0, data.length - 1);
};




