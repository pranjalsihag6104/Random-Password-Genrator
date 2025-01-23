let button = document.querySelector('button');
let input  = document.querySelector('input');
let copy   = document.querySelector('#i1');

let length = 12;

button.addEventListener('click',function(){
    //generate pswd

    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercase = "abcdedfghijklmnopqrstuvwxyz";
    let numbers   = "0123456789";
    let symbols   = "!@#$%^&*";

    let allchars = uppercase + lowercase + numbers + symbols;

    let password='';

    while(length>password.length){
        password += allchars[Math.floor(Math.random()*allchars.length)];
    }

    input.value=password;

})

copy.addEventListener('click',function(){

    input.select();
    document.execCommand("copy");

})
