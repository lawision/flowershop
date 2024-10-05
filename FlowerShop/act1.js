let calculate = document.getElementById("calculate");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let result = document.getElementById("result");
let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");
let result3 = document.getElementById("result3");
let hmbtn = document.getElementById("hm");
let logout = document.getElementById("log");



logout.addEventListener("click",function(){
    sessionStorage.removeItem("username");
    window.location = "gunshop.html";
});

calculate.addEventListener("click", function() {
    let sum = parseInt(num1.value) + parseInt(num2.value);
    result.textContent = `The sum is ${sum}`;

    let diff = parseInt(num1.value) - parseInt(num2.value);
    result1.textContent = `The difference is ${diff}`;

    let multi = parseInt(num1.value) * parseInt(num2.value);
    result2.textContent = `The product is ${multi}`;

    let divis = parseInt(num1.value) / parseInt(num2.value);
    result3.textContent = `The quotient is ${divis}`;

});
hmbtn.addEventListener("click", function() {
    window.location = "Dash.html"; 
});


