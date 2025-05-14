let stage = new Konva.Stage({
    container: "board",
    width: 600,
    height: 600,
});

// canvas was needed for importing images apparently, but this lead to a string/line being created at the start automatically. for some reason.
const canvas = document.createElement("canvas");
canvas.width = stage.width();
canvas.height = stage.height();

let colourpicker = document.getElementById("colour");
colourpicker.addEventListener("input", pickedColour);

let three = document.getElementById("three");
let two = document.getElementById("two");
let one = document.getElementById("one");

let newColour = "black";

function pickedColour(e){
    newColour = e.target.value;
    pin.fill = e.target.value;
    string.stroke = e.target.value;
    //console.log(e);
    three.style.backgroundColor = newColour;
    two.style.backgroundColor = newColour;
    one.style.backgroundColor = newColour;
    document.getElementById("pin").style.backgroundColor = newColour;
};

let stringWidth = 8;

let stringLayer = new Konva.Layer();
stage.add(stringLayer);
let newLayer = new Konva.Layer();
stage.add(newLayer);

// click on one of the three divs
// line width will change based on which is clicked
/*three.addEventListener("click",brushSize);
two.addEventListener("click",brushSize);
one.addEventListener("click",brushSize);

// always defaults to 3 which means what. the div being clicked isn't the third or second???
function brushSize(clicked){
    if (clicked == three) {
        string.strokeWidth = 12
    } else if (clicked == two) {
        string.strokeWidth = 8
    } else {
        string.strokeWidth = 3
    };
};*/

// funct x(y) {swidth = y}
// event => {x(width for corresponding button)}
function brushSize(sWidth) {
    string.strokeWidth = sWidth;
}
three.addEventListener("click", () => {
    brushSize(12);});
two.addEventListener("click", () => {
    brushSize(8);});
one.addEventListener("click", () => {
    brushSize(3);});

let pinId = 0;
let stringId = 0;

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

let createdPins = [];

document.getElementById("pin").addEventListener("click",newPin);
document.getElementById("pin").addEventListener("click",stringUpd);
function newPin(){
    let addPin = new Konva.Circle(pin);
    pinId = pinId + 1;
    newLayer.add(addPin);
    createdPins.push(addPin);
    addPin.on("dragmove", stringUpd);
};

/* attempted pin select
let maxSelect = 2;
function selection() {
    // Konva.Circle.on("click",selectedPins.push(pin.id));
    if (selectedPins.length === maxSelect) {
    selectedPins.shift();
    }
    selectedPins.push();
    console.log(selectedPins);
}*/
//let pinAdding = newPin();

let stringPos = [0, 0, 20, 20];

let string = {
    stroke: newColour,
    points: stringPos,
    //x: stage.width()/2,
    //y: stage.height()/2,
    shadowBlur: 7,
    shadowOpacity: 0.2,
    strokeWidth: stringWidth,
    //id: stringId,
}

/*three.addEventListener("click",newString);
two.addEventListener("click",newString);
one.addEventListener("click",newString);
function newString(){
    stringUpd();
    let addString = new Konva.Line(string);
    //changed to "if" to only add string if there are at least two pins on the board.
    if (createdPins.length > 1) {
        stringLayer.add(addString);
    };}*/
// move down?

// function for updating strings, look through pinarray. call when moving + creating pins
function stringUpd() {
    //[i] will refer to the second pin in the array. if [i] is lower than the number of pins created, [i] keeps going up until it reaches the number of pins created. 
    // pin1 is the second latest pin. while pin2 is the latest pin
    for(let i = 1; i < createdPins.length; i++) {
    let pin1 = createdPins[i - 1];
    let pin2 = createdPins[i];
    if (createdPins.length > 1) {
        console.log(pin1.x());
        // the x of everything that has been pin1 seems to get logged.
        //string.x = pin1.x(); 
        //string.y = pin1.y();
        string.points = [pin1.x(), pin1.y(), pin2.x(), pin2.y()];
    }};
    //newstring

    function newString(){
    //stringUpd();
    let addString = new Konva.Line(string);
    //changed to "if" to only add string if there are at least two pins on the board.
    if (createdPins.length > 1) {
        stringLayer.add(addString);
    };}
    /*if (createdPins.length > 1) {
        // loop for finding and removing all lines?
        for(let i = 1; i < createdPins.length; i++) {
            let allStrings = stringLayer.find("Line");
            canvas.remove(allStrings);
        }
    };*/
};

//pin.addEventListener("drag", stringUpd); - old

//array.from(doc.getbyclass,, for each (element
//element.add event)
/* class width array
Array.from(document.getElementsByClassName("width")).forEach(wBtn => {
    wBtn.addEventListener("click",stringUpd);
})
*/

/* attempted adding string (old)
let stringAdding = newString();
function updPinPos() {
    /*pinAdding.forEach((pin) => {
        const node = newLayer.findOne(pin.id);
        node.x(pin.x);
        node.y(pin.y);
    });
    stringAdding.forEach((string) => {
        const string = stringLayer.findOne("#" + string.id);
        fromNode = stringLayer.findOne("#" + string.from);
    })}*/

// Undo function
// stage.getContext is not a function.
// changed "stage" to "canvas"
/*let undoStack = [];
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
}); */

// importing images from input=file ???