const responseField = document.querySelector('#response')
const email = document.querySelector('#email')
const password = document.querySelector('#passwd')
const form = document.querySelector('#logform')

form.addEventListener('submit', (e) =>{
    let messages = []
    if (email.value === '' || email.value == null)
    {
        messages.push('Wpisz adres e-mail!')
    }
    if (password.value === '' || password.value == null)
    {
        messages.push('Wpisz hasło!')
    }

    if (messages.length > 0)
    {
        e.preventDefault()
        responseField.innerHTML = messages.join(', ')
    }
})
