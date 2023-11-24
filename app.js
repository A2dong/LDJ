const loginForm=document.querySelector("#login-form");
const loginInput=loginForm.querySelector("input");
const loginButton=loginForm.querySelector("button");

function onLoginBtnClick(){
    const value=loginInput.value;
    if (value===""){
        console.log("Please wirte your name");
    }
    else{
        console.log("Hello, "+value+"!");
    }
}

loginButton.addEventListener("click", onLoginBtnClick);
