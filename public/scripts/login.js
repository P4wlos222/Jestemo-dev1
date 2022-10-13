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
        emailResponse.innerHTML = ("Wpisz hasło!")
        passed = false
    }

    if (passed)
    {
        
    } else {
        e.preventDefault()
    }
})
