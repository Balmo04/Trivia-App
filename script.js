/* login */
const login=document.getElementById("login");
const username=document.getElementById("username");
const messageLogin=document.getElementById("messageLogin");
const loginEnter=document.getElementById("btn-login");

/* home */
const home=document.getElementById("home");
const btnstartGame=document.getElementById("btn-start-game");
const btnExplainGame=document.getElementById("btn-explain-game");
const btnlogOut=document.getElementById("btn-log-out");

/* explain game */
const explainGame=document.getElementById("explain-game");

/* game */
const game=document.getElementById("game");

/* game-over */
const gameOver=document.getElementById("game-over");

const screen=[login, home, game, gameOver, explainGame];
let isLogin=false;
let positionScreen=0;
let isExplain=false;

loginEnter.addEventListener("click", function(){
    positionScreen=0;
    emptyImput(username.value, positionScreen);
});

function emptyImput(name, positionScreen){
    if(name){
        nextPage(screen, positionScreen);

    }
    else{
        messageLogin.classList.replace("visible-off","visible-on");
    }
}

function nextPage (screen, positionScreen, isExplain){ 
    if(isExplain){
        screen[positionScreen].classList.replace("visible-on", "visible-off");
        screen[4].classList.replace("visible-off","visible-on");
    }
    else{
        screen[positionScreen].classList.replace("visible-on", "visible-off");
        screen[positionScreen+1].classList.replace("visible-off","visible-on");
    }
}
function backPage (){
    screen[positionScreen].classList.replace("visible-on", "visible-off");
    screen[positionScreen-1].classList.replace("visible-off","visible-on");
}

btnstartGame.addEventListener("click", function(){
    positionScreen=1;
    isExplain=false;
    nextPage(screen, positionScreen, isExplain);
});
btnExplainGame.addEventListener("click", function(){
    positionScreen=1;
    isExplain=true;
    nextPage(screen, positionScreen, isExplain);
});
btnlogOut.addEventListener("click", function(){
    positionScreen=1;
    backPage(screen, positionScreen);
});