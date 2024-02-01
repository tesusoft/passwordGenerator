const passwordBox = document.getElementById("password");
const btn = document.getElementById("btn");
const len = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";

const number = "0123456789";
const symbol = "@#$%^()_+~|\{[}]><-=";

const allChars = upperCase + lowerCase + number + symbol;

btn.addEventListener("click", createPassword);

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];

    while(len > password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }

    passwordBox.value = password;
}
//createPassword();

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}