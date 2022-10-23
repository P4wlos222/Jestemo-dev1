const form = document.querySelector('#postform')

const postcontent = document.querySelector('#postContent')
const image = document.querySelector('#imgInput')

const contentResponse = document.querySelector('#contentResponse')
const imageResponse = document.querySelector('#imageResponse')


form.addEventListener('submit', (e) =>{
    e.preventDefault()
    contentResponse.innerHTML = ("")
    imageResponse.innerHTML = ("")
    console.log(postcontent.value)
    let passed = true
    if (postcontent.value === '' || postcontent.value == null)
    {
        contentResponse.innerHTML = ("Twój post nie ma treści!")
        passed = false
    }

    if (passed)
    {
        let data = {postContent: postcontent.value};
        fetch('/create_post', {
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
            if (data.postresult == 'success'){
                window.location.assign(window.location);
            }
            if (data.postresult == 'emailInvalid'){
                emailResponse.innerHTML = ("Nie istnieje konto z podanym adresem e-mail!")
            }
            if (data.postresult == 'passwdInvalid'){
                passwdResponse.innerHTML = ("Niepoprawne hasło!")
            }
            if (data.postresult == 'error'){
                emailResponse.innerHTML = ("Niepoprawny format adresu e-mail!")
                console.log(data.errors)
            } 
            if (data.postresult == "notLoggedIn")
            {
                window.location.assign(window.location)
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        })
    }
})

