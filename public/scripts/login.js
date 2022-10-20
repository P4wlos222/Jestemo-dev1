const form = document.querySelector('#logform')

const email = document.querySelector('#email')
const password = document.querySelector('#passwd')

const emailResponse = document.querySelector('#emailresponse')
const passwdResponse = document.querySelector('#passwdresponse')

function togglePasswdVisibility() {
    var passwd = document.getElementById("passwd");
    if (passwd.type === "password") {
      passwd.type = "text";
    } else {
      passwd.type = "password";
    }
}

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    emailResponse.innerHTML = ("")
    passwdResponse.innerHTML = ("")
    let passed = true
    if (email.value === '' || email.value == null)
    {
        emailResponse.innerHTML = ("Wpisz adres e-mail!")
        passed = false
    }
    if (password.value === '' || password.value == null)
    {
        passwdResponse.innerHTML = ("Wpisz hasło!")
        passed = false
    }

    if (passed)
    {
        let data = {passwd: password.value, email: email.value};
        fetch('/login', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
            'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.logresult == 'success'){
                window.location.assign('/');
            }
            if (data.logresult == 'emailInvalid'){
                emailResponse.innerHTML = ("Nie istnieje konto z podanym adresem e-mail!")
            }
            if (data.logresult == 'passwdInvalid'){
                passwdResponse.innerHTML = ("Niepoprawne hasło!")
            }
            if (data.logresult == 'error'){
                emailResponse.innerHTML = ("Niepoprawny format adresu e-mail!")
                console.log(data.errors)
            } 
        })
        .catch((error) => {
            console.error('Error:', error);
        })
    }
})

