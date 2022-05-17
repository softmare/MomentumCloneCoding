const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSummit(elem_input, event)  {
    event.preventDefault();
    const username = elem_input.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetingMessage(username);
}

function initializeUsernameForm() {
    const savedUsername = localStorage.getItem(USERNAME_KEY)
    if (savedUsername === null) {
        loginForm.classList.remove(HIDDEN_CLASSNAME);
    } else {
        paintGreetingMessage(savedUsername);
    }
}

function paintGreetingMessage(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerHTML = `Hello ${username}`;
}

loginForm.addEventListener("submit", onLoginSummit.bind(null, loginInput))

initializeUsernameForm();