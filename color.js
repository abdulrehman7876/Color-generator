color = document.querySelector(".color");
box = document.querySelector(".box");
background = document.querySelector(".main");
button = document.querySelector(".button");
icon = document.querySelector(".icon")

let hex;
let dec;
let rem;
let myHexCode = "0123456789abcdef";
let hexCode = "ffffff";
let string = "";

changeColor = ()=>{
    string = "#";
    for (let i=0; i<6; i++){
        hexCode = myHexCode[Math.round(Math.random()*15)];
        string = string + hexCode;
    }

    box.style.backgroundColor = `${string}`;
    color.innerText = `${string}`;
    background.style.backgroundColor = `${string}`;
    icon.style.color = "black";
    string = "";
} 
changeColor();
button.addEventListener('mouseover', ()=>{
    button.style.cursor = "pointer";
})
button.addEventListener('click', ()=>{
    changeColor();
})
icon.addEventListener('click', ()=>{
    navigator.clipboard.writeText(color.innerText);
    icon.style.color = "blue";
})
icon.addEventListener('mouseover', ()=>{
    icon.style.cursor = "pointer";
})

