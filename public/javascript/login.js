async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/dashboard/');
        } else {
            alert(response.statusText);
        }
    }
}

async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        // check the response status
        if (response.ok) {
            document.location.replace('/dashboard/');

        }
        else {
            alert(response.statusText);
        };
    };
};

function signupDisplayHandler() {
    var loginForm = document.getElementById("signup");
    loginForm.style.display = "inline";
    var loginForm = document.getElementById("login");
    loginForm.style.display = "none";
}

function loginDisplayHandler() {
    var loginForm = document.getElementById("signup");
    loginForm.style.display = "none";
    var loginForm = document.getElementById("login");
    loginForm.style.display = "inline";
}

document.querySelector('#signup-link').addEventListener('click', signupDisplayHandler);
document.querySelector('#login-link').addEventListener('click', loginDisplayHandler);

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);