function showAlert() {
    let userName = document.getElementById('input-name').value;
    let userSurname = document.getElementById('input-surname').value;
    let userAge = document.getElementById('input-age').value;
    let userSex = document.getElementById('sex').value;
    let greeting;
    if (userAge <= 17) {
        greeting = 'Здравствуй, ';
        if(userSex == 'female') {
            greeting += 'девочка ';
        }
        else {
            greeting += 'мальчик ';
        }
    }
    else {
        greeting = 'Здравствуйте, ';
        if(userSex == 'female') {
            greeting += 'госпожа ';
        }
        else {
            greeting += 'господин ';
        }
    }
    alert(greeting + userName + ' ' + userSurname + '\n' + 'Ваш возраст: ' + userAge);
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('user-data').style.backgroundColor = color;
}
function makeStairs() {
    let stairs = document.querySelector('#stairs');
    let stepCount = 20;
    for(let i = 0; i<stepCount; i++) {
        stairs.innerHTML += '<div class="step"></div>';
    }
    let steps = document.querySelectorAll('.step');
    for(let i=0; i<steps.length; i++) {
        steps[i].style.left = (30 + 10*i) + 'px';
        steps[i].style.top = (300 + 80*i) + 'px';
        steps[i].innerHTML = 'Блок номер ' + Number(i+1);
    }
}
function makeSnowflakes() {
    let snowflake = document.querySelector('.snowflakes');
    let stepsCount = 150;
    for(let i = 0; i<stepsCount; i++) {
        snowflake.innerHTML += '<img class="flakes" src="Снежинка.png">';
    }

    let snowflakes = document.querySelectorAll('.flakes');
    let screenWidth = window.screen.width;
    let screenHeight = window.screen.height;

    for(let i = 0; i<snowflakes.length; i++) {
        snowflakes[i].style.left = Math.random() * (screenWidth-50) + 'px';
        snowflakes[i].style.top = Math.random() * (screenHeight-50) + 'px';
        snowflakes[i].style.width = Math.random() * 30 +10 + 'px';
    }    
}
function makeVerse() {
    let steps = document.querySelectorAll('.Verse');
    for (let i =0; i<steps.length; i++) {

        let r = Math.round(Math.random()*255);
        let g = Math.round(Math.random()*255);
        let b = Math.round(Math.random()*255);
        steps[i].style.color = 'rgb(' +  r + ',' + g + ',' + b + ')';
        r = Math.round(Math.random()*255);
        g = Math.round(Math.random()*255);
        b = Math.round(Math.random()*255);
        steps[i].style.backgroundColor = 'rgb(' +  r + ',' + g + ',' + b + ')';
        steps[i].style.fontSize = (i + 10)  + 'px';
        steps[i].style.width = (i*10 + 300) + 'px';
    }    
}
function makeMT() {
    let stepCount = 9;

    for (let i = 0; i<stepCount; i++) {
        document.write ((i+1) + ' * 15 = ' + ((i+1)*15) + "<br>");
    }
}  
function AllFunctions () {
    makeStairs();
    makeSnowflakes();
    makeVerse();
    makeMT();   
}
