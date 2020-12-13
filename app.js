var txtInput= document.querySelector("#txt-input");
console.log(txtInput);
//console.log("Input"+txtInput.value);
txtInput.onclick = function clickHandler(){
    console.log("Input "+txtInput.value);
}