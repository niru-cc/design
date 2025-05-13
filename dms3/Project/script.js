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

// use a for loop to log all pin id's in a single array
// let allPins = Konva.Circle(pin);
let createdPins = [];

document.getElementById("pin").addEventListener("click",newPin);
document.getElementById("pin").addEventListener("click",stringUpd);
function newPin(){
    let addPin = new Konva.Circle(pin);
    pinId = pinId + 1;
    newLayer.add(addPin);
    createdPins.push(addPin);
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

// click on one of the three divs
// line width will change based on which is clicked
three.addEventListener("click",brushSize);
two.addEventListener("click",brushSize);
one.addEventListener("click",brushSize);

// setting stroke width of string
function brushSize(widthSetting){
    if (widthSetting === three) {
        string.strokeWidth = 12
    } else if (widthSetting === two) {
        string.strokeWidth = 8
    } else {
        string.strokeWidth = 3
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

three.addEventListener("click",newString);
two.addEventListener("click",newString);
one.addEventListener("click",newString);

// function for updating strings, look through pinarray. call when moving + creating pins
function newString(){
    let addString = new Konva.Line(string);
    if (createdPins.length > 1) {
        stringLayer.add(addString)};
    //stringId = stringId + 1;
}

document.getElementById("pin").addEventListener("dragmove", stringUpd);

function stringUpd() {
    //look through createdPins.
    // look for min 2 in array (if pinarray.length) /
    console.log(createdPins.length);
    //i will refer to the second pin in the array. if 1 is lower than the number of pins created, i keeps going up until it reaches the number of pins created. pin1 is the second latest pin. while pin2 is the current latest pin
    for(let i = 1; i < createdPins.length; i++) {
    let pin1 = createdPins[i - 1];
    let pin2 = createdPins[i];
    if (createdPins.length > 1) {
        console.log(pin1.x());
        // the x of everything that has been pin1 seems to get logged.
        string.x = pin1.x();
        string.y = pin1.y();
        string.points = [pin1.x(), pin1.y(), pin2.x(), pin2.y()];
        // points of string correspond to pin position, but only in some unknown way???
        // find all strings and remove them?
        canvas.remove(stringLayer);
    }};}

//array.from(doc.getbyclass,, for each (element
//element.add event)
/* class width array
Array.from(document.getElementsByClassName("width")).forEach(wBtn => {
    wBtn.addEventListener("click",stringUpd);
})
*/

/*let stringAdding = newString();
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
// string.points([0, 0, pinPos])

// Undo function
// stage.getContext is not a function.
// changed "stage" to "canvas"
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

// importing images
document.getElementById("upload").addEventListener("click", addImg);
function addImg() {

}