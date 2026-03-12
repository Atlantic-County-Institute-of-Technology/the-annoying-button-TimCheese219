let score = document.getElementById("score");
let cookie_button = document.getElementById("cookie_button");
let main_button = document.getElementById("main_button")

var clicks = 0;
var click_power = 1;

cookie_button.addEventListener("click", main_click)

function main_click() {
    clicks += click_power;
    score.innerText = clicks;
    check_score();
    
}


function check_score() {
    if( clicks % 100 == 0)
        click_power *= 2;

    if( clicks == 100)
        make_grandma();

    if (clicks >= 100 && clicks < 101 ) {
        cookie_button.style.backgroundColor = 'blue';
        alert("dude, ya FFFFFFEEEEEEEEELLLLLLLL MMMMMMEEEEEEEEEE!!!!!!!!!!!")
    }
    else if (clicks >= 200 && clicks < 300 ) {
        cookie_button.style.backgroundColor = 'orange';
        alert("Hey that is not nice")
    }
    else if (clicks >= 300 && clicks < 400 ) {
        cookie_button.style.backgroundColor = 'green';
    }
    else if (clicks >= 450 && clicks < 500) {
        main_button.style.transform = 'rotate(45deg)';
    }
    if (clicks == 100) {
        cookie_button.style.backgroundColor = 'blue';
    }
    else if (clicks == 200) {
        cookie_button.style.backgroundColor = 'orange';
    }
    else if (clicks == 300) {
        cookie_button.style.backgroundColor = 'green';
    }


}

function granny_click(){
    clicks += click_power * 15;
    score.innerText = clicks;
    check_score();
}

function make_grandma() {
    const granny = document.createElement("button");
    granny.classList.add("button");
    granny.innerText = "Grandma!";
    granny.addEventListener("click", granny_click);
    main_button.appendChild(granny);
}
