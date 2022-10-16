const email = document.querySelector('#email')
const password = document.querySelector('#passwd')
const form = document.querySelector('#logform')
const emailResponse = document.querySelector('#emailresponse')
const passwdResponse = document.querySelector('#passwdresponse')

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
        fetch('/auth', {
            method: 'POST',
            body: form
        })
        .then (response => {return response})
        .then (data => {
            console.log(data.body)
        })
        /*.then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        if (res == 'valid'){
            window.location.assign('/dashboard');
        }
        if (res == 'emailNotValid'){
            emailResponse.innerHTML = ("Nieprawidłowy adres e-mail!")
        }
        if (res == 'passwdNotValid'){
            passwdResponse.innerHTML = ("Nieprawidłowe Hasło!")
        }*/
    }
})

