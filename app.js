const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_ClASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    greeting.innerText = `Hello ${username}`; //"Hello " + username과 같음//
    greeting.classList.remove(HIDDEN_ClASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
