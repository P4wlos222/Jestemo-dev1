const { response } = require("express")

const email = document.querySelector('#email')
const password = document.querySelector('#passwd')
const form = document.querySelector('#logform')
const emailResponse = document.querySelector('#emailresponse')
const passwdResponse = document.querySelector('#passwdresponse')

form.addEventListener('submit', (e) =>{
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
        fetch('/auth',{
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({passwd: password, email: email})})
        
            .then(response => {return response.json()})
        
        if (response == 'valid'){
            window.location.assign('/dashboard');
        }
        if (response == 'emailNotValid'){
            emailResponse.innerHTML = ("Nieprawidłowy adres e-mail!")
        }
        if (response == 'passwdNotValid'){
            passwdResponse.innerHTML = ("Nieprawidłowe Hasło!")
        }
    } else {
        e.preventDefault()
    }
})

