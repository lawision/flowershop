let a1btn = document.getElementById("a1");
let a2btn = document.getElementById("a2");
let a3btn = document.getElementById("a3");
let hmbtn = document.getElementById("hm");
let logout = document.getElementById("logout");

let isLogin = sessionStorage.getItem("username");

if(!isLogin){
    alert("Please Login First!");
    window.location = "gunshop.html";
}


logout.addEventListener("click",function(){
    sessionStorage.removeItem("username");
    window.location = "gunshop.html";
});

a1btn.addEventListener("click", function() {
    window.location = "act1.html"; 
});

a2btn.addEventListener("click", function() {
    window.location = "act2.html"; 
});

a3btn.addEventListener("click", function() {
    window.location = "act3.html"; 
});

hmbtn.addEventListener("click", function() {
    window.location = "Dash.html"; 
});
