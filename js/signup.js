const InputName = document.getElementById('InputName')
const InputEmail = document.getElementById('InputEmail')
const InputPassword= document.getElementById('InputPassword')
let Btn$SignUp = document.getElementById('btn-a')
const msg = document.getElementById('Massage')
const Sign = document.getElementById('signIn')
let DataArray =[]


if(localStorage.getItem('SetUsers') != null){
    DataArray = JSON.parse(localStorage.getItem('SetUsers'))
    
}


// set new user


Btn$SignUp.addEventListener('click',function(){
    SignUp()
})


function SignUp(){
    let user= {
        Name:InputName.value,
        Email:InputEmail.value,
        Password:InputPassword.value,
    }
   
    if(!CheckInputs() != true || CheckMail() != true){
        DataArray.push(user)
        localStorage.setItem("SetUsers",JSON.stringify(DataArray))
        msg.classList.add('text-success')

        msg.classList.remove('d-none')
        msg.classList.remove('text-danger')
        msg.innerHTML = 'Sign Up Successfully'
    }
}


function CheckInputs(){
    if(InputName.value === '' || InputEmail.value === '' || InputPassword.value === ''){
        msg.classList.add('text-danger')
        msg.classList.remove('d-none')
        msg.innerHTML = 'Please Fill All Inputs'
    }
}

function CheckMail(){
    for(let i=0 ;i<DataArray.length;i++){
        if(DataArray[i].Email === InputEmail.value){
            msg.classList.add('text-danger')
            msg.classList.remove('d-none')
            msg.innerHTML = 'Email Already Exist'
            return  true
            }
            }
}

Sign.addEventListener('click',function(){
        window.location.href='login.html'
    })