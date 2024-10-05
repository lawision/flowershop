let isLogin = sessionStorage.getItem("username");

if(isLogin){
    alert("Please Logout First!");
    window.location = "Dash.html";
}


let user = [

    {
        username : "admin",
        password : "12345678"


    }

];

let uname = document.getElementById("username");
let pword = document.getElementById("password");
let submit = document.getElementById("submit");

submit.addEventListener("click",function(event){
    event.preventDefault()
    if(uname.value == user[0].username && pword.value == user[0].password){
        
        alert("Login Successfuly");
        sessionStorage.setItem("username",uname.value)
        window.location.href = "Dash.html";


    }else{

        alert("login failed");



    }







})