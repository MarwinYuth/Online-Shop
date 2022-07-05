var user = document.getElementById('username');
var pass = document.getElementById('password');
var form = document.getElementById('form');
var errorelement =document.getElementById('error');

form.addEventListener('submit',function(e){

    e.preventDefault()

    let messages = []

    if(user.value=="Marwin")
    {
        if(pass.value=="12345")
        {
            location="Online.html";
        }
        else
        {
            messages.push("Wrong Password");
        }
    }
    else
    {
        messages.push("Wrong Username");
    }
    
    errorelement.innerHTML=messages;
})