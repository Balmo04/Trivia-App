const login=document.getElementById("login");
const username=document.getElementById("username");
const messageLogin=document.getElementById("messageLogin");
const loginEnter=document.getElementById("btn-login");

let isLogin=false;

loginEnter.addEventListener("click", function(){
    emptyImput(username.value);
});

function emptyImput(name){
    if(name){
        isLogin=!isLogin;
        nextPage1(isLogin);
    }
    else{
        messageLogin.classList.replace("visible-off","visible-on");
    }
}
function nextPage1 (click){
    if(click){
        login.classList.replace("visible-on", "visible-off");
    }
}