function changeColor(){
let hexNums = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
let code = document.getElementById('hex-code');


let hexCode = '';

for(let i = 0; i<6; i++){
let index = Math.floor(Math.random() * hexNums.length);

hexCode += hexNums[index];



}

code.textContent = hexCode;
document.body.style.background = '#' + hexCode;


}