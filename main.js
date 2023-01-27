const button = document.querySelector(".btn");
const color = document.querySelector(".color");
const main = document.querySelector("main")
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

button.addEventListener("click",()=>{
    let hexColor = '#';
    for(let i=0;i<6;i++){
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    color.style.color = hexColor;
    main.style.background = hexColor; 
})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}