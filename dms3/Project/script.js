let stage = new Konva.Stage({
    container: "board",
    width: 600,
    height: 600,
});

// canvas was needed for importing images apparently, but this lead to a string being created at the start automatically. for some reason.
const canvas = document.createElement("canvas");
canvas.width = stage.width();
canvas.height = stage.height();

let colourpicker = document.getElementById("colour");
colourpicker.addEventListener("input", pickedColour);

let newColour = "black";

function pickedColour(e){
    newColour = e.target.value;
    pin.fill = e.target.value;
    string.stroke = e.target.value;
    console.log(e);
    document.getElementById("three").style.backgroundColor = newColour;
    document.getElementById("two").style.backgroundColor = newColour;
    document.getElementById("one").style.backgroundColor = newColour;
    document.getElementById("pin").style.backgroundColor = newColour;
};

let stringWidth = 8;

let stringLayer = new Konva.Layer();
stage.add(stringLayer);
let newLayer = new Konva.Layer();
stage.add(newLayer);

let pinId = 0;
//let stringId = 0;

let pin = {
    radius: 15,
    fill: newColour,
    draggable: true,
    x: stage.width()/2,
    y: stage.height()/2,
    shadowBlur: 5,
    shadowOpacity: 0.3,
    id: pinId,
};

let x1 = pin.x;
let y1 = pin.y;
// let pointA = [x1, y1, 0, 0];

//assign pin id upon creating, from 1
document.getElementById("pin").addEventListener("click",newPin);
function newPin(){
    let addPin = new Konva.Circle(pin);
    pinId = pinId + 1;
    console.log(pinId);
    newLayer.add(addPin);
}

//let pinAdding = newPin();
let stringPos = [0, 0, 80, 0];

// array for selected pins (max 2)
let selectedPins = [];
let maxSelect = 2;
function selection() {
    Konva.Circle.on(("click"),selectedPins.push(pin.id));
    if (selectedPins.length === maxSelect) {
    selectedPins.shift();
    console.log(selectedPins);
    }
    selectedPins.push();
}

// click on one of the three divs
// line width will change based on which is clicked
document.getElementById("three").addEventListener("click",brushSize);
document.getElementById("two").addEventListener("click",brushSize);
document.getElementById("one").addEventListener("click",brushSize);

// setting stroke width of string
// $ is not defined
function brushSize(){
    if ($("#button").id = "three") {
        stringWidth = 12
    } else if ($("#button").id = "two") {
        stringWidth = 8
    } else {
        stringWidth = 3
    };
};

let string = {
    stroke: newColour,
    points: stringPos,
    x: stage.width()/2,
    y: stage.height()/2,
    shadowBlur: 7,
    shadowOpacity: 0.2,
    strokeWidth: stringWidth,
    //id: stringId,
}

document.getElementById("three").addEventListener("click",newString);
document.getElementById("two").addEventListener("click",newString);
document.getElementById("one").addEventListener("click",newString);

function newString(){
    let addString = new Konva.Line(string);
    stringLayer.add(addString);
    //stringId = stringId + 1;
}

 
let stringAdding = newString();
function updPinPos() {
    pinAdding.forEach((pin) => {
        const node = newLayer.findOne("#" + pin.id);
        node.x(pin.x);
        node.y(pin.y);
    });
    stringAdding.forEach((string) => {
        const line = stringLayer.findOne("#" + string.id);
        fromNode = stringLayer.findOne("#" + string.from);
        
    })
}


// stage.getContext is not a function.
// changed "stage" to "canvas"
// Undo function
let undoStack = [];
let currentState = canvas.toDataURL();
let undoLimit = 5;
function saveUndoState() {
    if(undoStack.length === undoLimit) {
        undoStack.shift();
    }
    undoStack.push(currentState);
    currentState = canvas.toDataURL();
}
const ctx = canvas.getContext("2d");
ctx.globalCompositeOperation = "source-over";
function drawDataURLToCanvas(imgDataURL) {
    let img2Draw = new Image();
    img2Draw.addEventListener("load", function drawOnLoad(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img2Draw, 0, 0);
    canvas.batchDraw();
    img2Draw.removeEventListener("load", drawOnLoad);
    img2Draw.remove();
    });
    img2Draw.src = imgDataURL;
}
function undo() {
    if (undoStack.length > 0) {
        let newState = undoStack.pop();
        currentState = newState;
        drawDataURLToCanvas(newState);
    }
}
document.getElementById("undo").addEventListener("click", () => {
    undo();
});