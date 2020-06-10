// create a button
// write a function that chnages screen
// target the screen

let screen = document.querySelector('.screen');
let allButtonArray = document.querySelectorAll('li')


let currentText = '';



function addAllListeners(param){
    for(let i =0; i < param.length; i++){
        param[i].addEventListener('click',change(1))
        console.log(param[i]);
    }
}

addAllListeners(allButtonArray)

function change(param){
    if(param === undefined){
        screen.innerHTML = 'Do Math';
    } else {
        currentText = currentText + param.target.innerHTML;
        screen.innerHTML = currentText;
    }   
   
}
 

console.log(currentText);


