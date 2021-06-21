/* login */
const login = document.getElementById("login");
const username = document.getElementById("username");
const messageLogin = document.getElementById("messageLogin");
const loginEnter = document.getElementById("btn-login");
/* home */
const home = document.getElementById("home");
const messageHome = document.getElementById("home-message");
const allBtnHome = document.getElementsByClassName("all-btn-home");
/* explain game */
const explainGame = document.getElementById("explain-game");
/*difficulty game */
const difficulty = document.getElementById("dificulty-game");
const allBtnDifficult=document.getElementsByClassName("btn-difficult")
/*share button */
const btnCloseTab = document.getElementsByClassName("btn-close-tab");
/* game */
const game = document.getElementById("game");
const showQuestion = document.getElementById("question");
const numQuestion = document.getElementById("num-question");
const btnGame = document.getElementsByClassName("btn-game");
const txtAnswer = document.getElementsByClassName("txt-answer");
/* game-over */
const gameOver = document.getElementById("game-over");
const userGameOver = document.getElementById("user-game-over");
const messageGameOver = document.getElementById("message-game-over");
const imgGameOver = document.getElementById("img-game-over");
const btnGameOver = document.getElementsByClassName("btn-game-over");

const screenList=[login, home, game, gameOver, difficulty, explainGame];

let positionScreen=0;
let isLogin=false;
let specialCase=false;
let specialPosition=0;
let positionQuestion=0;
let mode;
let positionCorrectAnswer=0;
let correctPoints=0;

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
    messageHome.innerHTML='Hey <span class="txt-yellow">'+name+"</span><br> Do you think that you can win?";
    userGameOver.innerText=name;
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
            messageLogin.classList.replace("visible-on","visible-off");
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

function backPage (screenList, positionScreen, specialCase, specialPosition){
    if(specialCase){
        screenList[positionScreen].classList.replace("visible-on", "visible-off"); 
        screenList[specialPosition].classList.replace("visible-off","visible-on"); 
    }else{
        screenList[positionScreen].classList.replace("visible-on", "visible-off");
        screenList[positionScreen-1].classList.replace("visible-off","visible-on");
    }   
}

for(let i=0; i<btnCloseTab.length; i++){
    btnCloseTab[i].addEventListener("click", function(){
        if(i%2){
            positionScreen=5; 
        }
        else{      
            positionScreen=4; 
        }
        specialPosition=1;
        specialCase=true;
        nextPage(screenList, positionScreen, specialCase, specialPosition);
    });
}

for(let i=0; i<allBtnDifficult.length; i++){
    allBtnDifficult[i].addEventListener("click", function(){
        positionScreen=4;
        specialCase=true;
        specialPosition=2;
        nextPage(screenList, positionScreen, specialCase, specialPosition);
        if(i){
            positionQuestion=0;  
            mode = hardMode;  
        }
        else{
            positionQuestion=0; 
            mode = easyMode;
        }     
        nextQuestion();
    });
}

function nextQuestion(){  
    if(mode.questions[positionQuestion]){
        numQuestion.innerText=(positionQuestion+1)+".";
        showQuestion.innerText=mode.questions[positionQuestion];
        for(let i=0; i<txtAnswer.length; i++){
            txtAnswer[i].innerText=mode.answers[positionQuestion][i];
            if(txtAnswer[i].textContent===mode.correctAnswers[positionQuestion]){
                positionCorrectAnswer=i; 
            }
        } 
    }
    else{
        positionScreen = 2;
        specialCase = false;
        nextPage(screenList, positionScreen, specialCase);
    }
}

for(let i=0; i<btnGame.length; i++){ 
    btnGame[i].addEventListener("click", function(){  
        validateQuestion(positionQuestion, i);
        positionQuestion += 1;
        setTimeout(()=>{ 
            quitEffects(i);         
            nextQuestion();
        }, 1500)
    });
} 

function validateQuestion(positionQuestion, i){
    if(txtAnswer[i].textContent===mode.correctAnswers[positionQuestion]){
        btnGame[i].classList.replace("bg-button-game","bg-correct");
        correctPoints+=1;
    }
    else{
        btnGame[i].classList.replace("bg-button-game","bg-incorrect");
        btnGame[positionCorrectAnswer].classList.replace("bg-button-game","bg-correct");
    }   
    controlPoints(correctPoints);
}

function quitEffects(i){
        btnGame[i].classList.replace("bg-correct", "bg-button-game");
        btnGame[i].classList.replace("bg-incorrect", "bg-button-game");
        btnGame[positionCorrectAnswer].classList.replace("bg-correct", "bg-button-game");
}

function controlPoints(correctPoints){
    if(correctPoints>6){
        imgGameOver.src="img/ganar.svg";
        messageGameOver.innerText="Felicidades has ganado";
    }
    else{
        imgGameOver.src="img/lose.svg";
        messageGameOver.innerText="Más suerte para la próxima";
    }
}

for (let index = 0; index < btnGameOver.length; index++) {
    btnGameOver[index].addEventListener("click",function(){
        positionScreen=3;
        specialCase=true;
        correctPoints=0;
        if(index){
            specialPosition=4;
        }
        else{
            specialPosition=1;
        }
        nextPage (screenList, positionScreen, specialCase, specialPosition);
    });
}

