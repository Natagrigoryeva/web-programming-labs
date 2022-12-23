function clickMe(button) {
    if (button.innerHTML == 'Щелчок')
        button.innerHTML = 'Спасибо';
    else
        button.innerHTML = 'Щелчок';
}

function student(button) {
    if (button.innerHTML == 'Григорьева')
        button.innerHTML = 'Наталья';
    else
        button.innerHTML = 'Григорьева';
}

function knopka (button) {
    if (button.innerHTML == 'Нажми меня') {
        button.innerHTML = 'Ещё раз нажми';
        button.style.color = 'blue';
    }
    else if (button.innerHTML == 'Ещё раз нажми') {
        button.innerHTML = 'Ещё';
        button.style.color = 'orange';
    }  
    else if (button.innerHTML == 'Ещё') {
        button.innerHTML = 'Начать сначала';
           button.style.color = 'red'; 
        }
    else {
        button.innerHTML = 'Нажми меня';
        button.style.color = 'pink';
    }
}

