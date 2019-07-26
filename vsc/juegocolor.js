var colores = setupColors();
var mode=6;
var squares = document.querySelectorAll(".square");
var displayColor = document.getElementById("rgb");
var pickedColor = colores[Math.floor(Math.random() * 6)];
var message = document.getElementById("message");
var newgame= document.getElementById("newgame");

newgame.addEventListener("click",reset);
var modes= document.querySelectorAll(".mode");

for(i=0; i<modes.length;i++){
    modes[i].addEventListener("click",function(){
        modes[0].classList.remove("selected");
        modes[1].classList.remove("selected");
        if(this.textContent=="Novato"){
            mode=3;
            console.log("Novato");
        }else{
            mode=6;
            console.log("Normal");
        }
        this.classList.add("selected");
        reset();
    })
}

displayColor.textContent = pickedColor;
setupColors();
reset();


function reset(){
    displayColor.textContent = pickedColor;
    colores = setupColors();
    pickedColor = colores[Math.floor(Math.random()*mode)];
    displayColor.textContent = pickedColor;
    resetSquares();
}
function resetSquares(){
   
    for (i = 0; i < squares.length; i++) {
        if(colores[i]){
            squares[i].style.display="block";
        squares[i].style.backgroundColor = colores[i];
        squares[i].addEventListener("click", function () {
            if (this.style.backgroundColor == pickedColor) {
                console.log("Correct");
                changeColor(pickedColor);
                message.textContent = "correcto";

            } else {
                this.style.backgroundColor = "#232323";
                message.textContent = "intenta de nuevo";
                console.log("Try Again");
            }
        }
    
        );
    }else{
        squares[i].style.display="none";
    }
    }
}
function changeColor(color) {
    var header = document.querySelector("h1");
    header.style.backgroundColor = color;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function setupColors() {
    var colores = [];
    for (i = 0; i < mode; i++) {
        colores[i] = randomColor();
    }
    return colores;
}