const button = document.getElementById("button");
const input = document.getElementById("inputEmail");
const valid = document.getElementById("validEmail");
const resolve = document.getElementById("resolve");
const main = document.getElementById("main");
const emailAddress = document.getElementById("emailAddress");

button.addEventListener("click", () => {
    if(input.value === "" || input.value.length < 10){
     input.style.backgroundColor = "rgb(243, 137, 137)";
     input.style.border = "1px solid red";
     valid.style.display = "block";
    }
    else{
     main.style.display = "none";
     resolve.style.display = "block";
     emailAddress.innerHTML = ` Lorem ipsum dolor sit amet consectetur adipisicing <strong> ${input.value} </strong>elit. Nisi fugit
     quidem sapiente debitis dolore quo, architecto similique tempora
     eius ducimus.
     `
    }    
})
