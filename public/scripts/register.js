const form = document.querySelector('#regform')

const email = document.querySelector('#email')
const password = document.querySelector('#passwd')
const reppassword = document.querySelector('#reppasswd')
const firstname = document.querySelector('#firstname')
const lastname = document.querySelector('#lastname')

const emailResponse = document.querySelector('#emailresponse')
const passwdResponse = document.querySelector('#passwdresponse')
const reppasswdResponse = document.querySelector('#reppasswdresponse')
const firstnameResponse = document.querySelector('#firstnameresponse')
const lastnameResponse = document.querySelector('#lastnameresponse')


function togglePasswdVisibility() {
    var passwd = document.getElementById("passwd");
    if (passwd.type === "password") {
      passwd.type = "text";
    } else {
      passwd.type = "password";
    }
}

function toggleRepPasswdVisibility() {
    var reppasswd = document.getElementById("reppasswd");
    if (reppasswd.type === "password") {
      reppasswd.type = "text";
    } else {
      reppasswd.type = "password";
    }
}


form.addEventListener('submit', (e) =>{
    e.preventDefault()
    emailResponse.innerHTML = ("")
    passwdResponse.innerHTML = ("")
    reppasswdResponse.innerHTML = ("")
    firstnameResponse.innerHTML = ("")
    lastnameResponse.innerHTML = ("")
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
    if (reppassword.value === '' || reppassword.value == null)
    {
        reppasswdResponse.innerHTML = ("Powtórz hasło!")
        passed = false
    }
    if (firstname.value === '' || firstname.value == null)
    {
        firstnameResponse.innerHTML = ("Wpisz Imię!")
        passed = false
    }
    if (lastname.value === '' || lastname.value == null)
    {
        lastnameResponse.innerHTML = ("Wpisz Nazwisko!")
        passed = false
    }
    if (reppassword.value != password.value)
    {
        reppasswdResponse.innerHTML = ("Hasła różnią się!")
        passed = false
    }

    if (passed)
    {
        let data = {passwd: password.value, email: email.value, firstName: firstname.value,  lastName: lastname.value};
        fetch('/register', {
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
            if (data.regresult == 'success'){
                window.location.assign('/');
                //passwdResponse.innerHTML = ("success!")
            }
            if (data.regresult == 'emailAlreadyUsed'){
                emailResponse.innerHTML = ("Konto o podanym adresie e-mail już istnieje!")
            }
            if (data.regresult == 'error'){
                for (e in data.errors.errors)
                {
                    if (e.param == "email"){
                        emailResponse.innerHTML = ("Niepoprawny format adresu e-mail!")
                    }
                    if (e.param == "passwd"){
                        passwdResponse.innerHTML = ("Hasło musi mieć 8 - 255 znaków, Posiadać minimum jedną dużą literę, małą literę oraz cyfrę")
                    }
                }
                console.log(data.errors)
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        })
    }
})