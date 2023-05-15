//your code here
const input = document.getElementById("evaluatedText");
const ouput= document.getElementById("letterCount");


function updateOutput(){
    let count = input.value.length; 
    ouput.innerText=count;
}

input.addEventListener('keyup',updateOutput);