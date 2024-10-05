let inc = document.getElementById("increment");
let count = document.getElementById("count");
let dec = document.getElementById("decrement");
let res = document.getElementById("reset");
let count_display = 0;
let hmbtn = document.getElementById("hm");
let logout = document.getElementById("log");



logout.addEventListener("click",function(){
    sessionStorage.removeItem("username");
    window.location = "gunshop.html";
});


inc.addEventListener("click" , function(){
    count_display++;
    count.textContent = count_display;

    
});
dec.addEventListener("click" , function(){
    count_display--;
    count.textContent = count_display;

});
res.addEventListener("click" , function(){
    count_display = 0;
    count.textContent = 0;

});
hmbtn.addEventListener("click", function() {
    window.location = "Dash.html"; 
});