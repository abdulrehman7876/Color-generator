color = document.querySelector(".color");
box = document.querySelector(".box");
background = document.querySelector(".main");
button = document.querySelector(".button");
icon = document.querySelector(".icon")

let hex;
let dec;
let rem;
// let string;
let myHexCode = "0123456789abcdef";
let hexCode = "ffffff";
let string = "";

changeColor = ()=>{
    string = "#";
    for (let i=0; i<6; i++){
        hexCode = myHexCode[Math.round(Math.random()*15)];
        // console.log(hexCode);
        string = string + hexCode;
        console.log(string);
    }


    // hex = [];
    // dec = Math.floor(Math.random() * Math.random() * 200000) * 2;
    // string = "";
    // for(let i = 0; i<6; i++) {
    //     rem = dec % 16;
    //     console.log(`rem: ${rem}`);
    //     dec = Math.floor(dec / 16);
    //     console.log(`dec: ${dec}`);
    //     hex.push(rem);
        
    //     if(dec < 16){
    //         hex.push(dec);
    //         break;
    //     }
    // }
    // console.log(hex);
    
    // hex.reverse();
    
    // hex.forEach((elem, ind, arr) => {
    //     if(elem > 9 && elem < 16) {
    //         if(elem === 10) arr[ind] = 'A';
    //         if(elem === 11) arr[ind] = 'B';
    //         if(elem === 12) arr[ind] = 'C';
    //         if(elem === 13) arr[ind] = 'D';
    //         if(elem === 14) arr[ind] = 'E';
    //         if(elem === 15) arr[ind] = 'F';
    //         }
    //     }
    // );
    // string = hex.join("").padStart(6,Math.floor(Math.random() * 9));



    // // for(let i = 0; string.length < 6; i++) {
    // //     console.log(string.length);
    // //     string = string + Math.floor(Math.random() * 10);
    // // }



    // console.log(string);
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
    // box.style.backgroundColor = `#${string}`;
    // console.log("hello");
})
icon.addEventListener('click', ()=>{
    navigator.clipboard.writeText(color.innerText);
    icon.style.color = "blue";
    // icon.style.border = "1px solid black"
})
icon.addEventListener('mouseover', ()=>{
    icon.style.cursor = "pointer";
})
// box.style.backgroundColor = '#' + string;

