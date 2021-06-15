/* login */
const login = document.getElementById("login");
const username = document.getElementById("username");
const messageLogin = document.getElementById("messageLogin");
const loginEnter = document.getElementById("btn-login");
/* home */
const home = document.getElementById("home");
const messageHome = document.getElementById("home-message")
const allBtnHome = document.getElementsByClassName("all-btn-home");
/* explain game */
const explainGame = document.getElementById("explain-game");
/*difficulty game */
const difficulty = document.getElementById("dificulty-game")
/*share button */
const btnCloseTab = document.getElementsByClassName("btn-close-tab");
/* game */
const game = document.getElementById("game");
/* game-over */
const gameOver = document.getElementById("game-over");

const screenList=[login, home, game, gameOver, difficulty, explainGame];
let positionScreen=0;
let isLogin=false;
let specialCase=false;
let specialPosition=0;

loginEnter.addEventListener("click", function(){
    positionScreen=0;
    emptyImput(username.value, positionScreen);
});

function emptyImput(name, positionScreen){
    if(name){
        imprintMessage(name);
        nextPage(screenList, positionScreen);
    }
    else{
        messageLogin.classList.replace("visible-off","visible-on");
    }
}
function imprintMessage(name){
    messageHome.innerText='Hey '+name+", do you think you can win?";
}

for (let i=0; i<allBtnHome.length; i++)
{
    allBtnHome[i].addEventListener("click", function(){
        positionScreen=1;
        selectCase(i, positionScreen);
    });
}
 
function selectCase(i, positionScreen){
    switch (i){
        case 0:
            specialCase=true;
            specialPosition=4;
            nextPage(screenList, positionScreen, specialCase, specialPosition);
            break;
        case 1:
            specialCase=true;
            specialPosition=5;
            nextPage(screenList, positionScreen, specialCase, specialPosition);
            break;
        case 2:
            specialCase=false;
            backPage(screenList, positionScreen, specialCase);
            break;
    }
}

function nextPage (screenList, positionScreen, specialCase, specialPosition){ 
    if(specialCase){
        screenList[positionScreen].classList.replace("visible-on", "visible-off");
        screenList[specialPosition].classList.replace("visible-off","visible-on");
    }
    else{
        screenList[positionScreen].classList.replace("visible-on", "visible-off");
        screenList[positionScreen+1].classList.replace("visible-off","visible-on");
    }
}

function backPage (screenList, positionScreen, specialCase){
    if(specialCase){
        screenList[positionScreen].classList.replace("visible-on", "visible-off"); 
        screenList[1].classList.replace("visible-off","visible-on"); 
    }else{
        screenList[positionScreen].classList.replace("visible-on", "visible-off");
        screenList[positionScreen-1].classList.replace("visible-off","visible-on");
    }   
}

btnCloseTab[0].addEventListener("click", function(){
    positionScreen=4;
    isOpen=true;
    backPage(screenList, positionScreen, isOpen)
});
btnCloseTab[1].addEventListener("click", function(){
    positionScreen=5;
    isOpen=true;
    backPage(screenList, positionScreen, isOpen)
});
