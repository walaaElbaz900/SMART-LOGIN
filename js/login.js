const UserNameInput = document.getElementById('InputLogEmail')
const UserPassword = document.getElementById('InputLogPassword')
const LoginButton = document.getElementById('LoginButton')
const msg = document.getElementById('Massage')
const login =document.getElementById('signIn')
let DataArray =[]




if (localStorage.getItem('SetUsers') != null) {
    DataArray = JSON.parse(localStorage.getItem('SetUsers'));
}

function Login(){
    if(CheckInputs() != true && checkEmailAndPassword() == true){
        window.location.href='home.html';
        
    }
    else{
        msg.classList.replace('d-none','text-danger')
        msg.innerHTML = 'Please Enter Valid Email and Password'

        }
}

function CheckInputs(){
    if (UserNameInput.value == '' || UserPassword.value == ''){
        msg.classList.replace('d-none','text-danger')
        msg.innerHTML = 'Please fill all inputs'
        return true;
    }
}


function checkEmailAndPassword(){
    for (let index = 0; index < DataArray.length; index++) {
        if ( UserNameInput.value == DataArray[index].Email && UserPassword.value == DataArray[index].Password){
            localStorage.setItem('userName',DataArray[index].Name)
            return true;
        }
    }
}


LoginButton.addEventListener('click', Login)


login.addEventListener('click',function(){
    window.location.href='signup.html'

})

