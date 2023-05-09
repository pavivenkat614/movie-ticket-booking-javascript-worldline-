const RegID = document.getElementById('RegID')
const Uname = document.getElementById('Uname')
const pswd = document.getElementById('pswd')
const EmailID = document.getElementById('EmailID')
const mob = document.getElementById('mob')
const DOB = document.getElementById('DOB')
const form = document.getElementById('error')

form.addEventListener('Login',(e)=>{
    let messages =[]
    if(RegID.value == '' || RegID.value == null){
        messages.push('RegID is required')
    }

    if(Uname.value =='' || Uname.value == null){
        messages.push('Username is required')
    }
    
    if(pswd.length <=8){
        messages.push('Password must be longer than 8 characters')
    }

    if(mob.length <10){
        messages.push('Mobile number should not be lesser tha 10')
    }
})