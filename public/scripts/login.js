const email = document.querySelector('#email')
const password = document.querySelector('#passwd')
const form = document.querySelector('#logform')
const emailResponse = document.querySelector('#emailresponse')
const passwdResponse = document.querySelector('#passwdresponse')

form.addEventListener('submit', (e) =>{
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
        var res
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
            body: JSON.stringify({passwd: password.value, email: email.value})})
        
        .then(response => { res = response.json()})
        
        console.log(res)
        if (res == 'valid'){
            window.location.assign('/dashboard');
        }
        if (res == 'emailNotValid'){
            emailResponse.innerHTML = ("Nieprawidłowy adres e-mail!")
        }
        if (res == 'passwdNotValid'){
            passwdResponse.innerHTML = ("Nieprawidłowe Hasło!")
        }
    }
    e.preventDefault()
})

