const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_ClASSNAME = "hidden";
const USERNAME_KEY = "username";

 //`Hello ${username}' 과 "Hello " + username과 같음//

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    localStorage.setItem("USERNAME_KEY", username);
    paintGreetings(savedUsername);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_ClASSNAME);
}

const savedUsername = localStorage.getItem("USERNAME_KEY");

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_ClASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}