var firstCanvas = document.getElementById("firstCanvas");
var context = firstCanvas.getContext("2d");
var firstCanvasWidth = document.getElementById("firstCanvasWidth");
var firstCanvasHeight = document.getElementById("firstCanvasHeight");

window.onload = function(){
    firstCanvasWidth.innerHTML = firstCanvas.scrollWidth+" px";
    firstCanvasHeight.innerHTML = firstCanvas.scrollHeight+" px";
    if (firstCanvas.scrollWidth != 300){
        firstCanvasWidth.innerHTML = "usually 300 px but (for some reason) the above canvas is "+firstCanvas.scrollWidth+" px"
    }
    if (firstCanvas.scrollHeight != 150){
        firstCanvasWidth.innerHTML = "usually 150 px but (for some reason) the above canvas is "+firstCanvas.scrollHeight+" px"
    }
}

var TriggerSquareInFirstCanvas = document.getElementById("TriggerSquareInFirstCanvas");
TriggerSquareInFirstCanvas.addEventListener("click", function(){
    context.fillRect(0, 0, firstCanvas.scrollWidth, firstCanvas.scrollHeight);
    TriggerSquareInFirstCanvas.classList.add("disabled");
    TriggerClearFirstCanvas.classList.remove("disabled");
});

var TriggerClearFirstCanvas = document.getElementById("TriggerClearFirstCanvas");
TriggerClearFirstCanvas.addEventListener("click", function(){
    context.clearRect(0, 0, firstCanvas.scrollWidth, firstCanvas.scrollHeight);
    TriggerClearFirstCanvas.classList.add("disabled");
    TriggerSquareInFirstCanvas.classList.remove("disabled");
});