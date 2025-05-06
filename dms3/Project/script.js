let stage = new Konva.Stage({
    container: "board",
    width: 600,
    height: 600,
});

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

let stringWidth = 1;

let stringLayer = new Konva.Layer();
stage.add(stringLayer);
let newLayer = new Konva.Layer();
stage.add(newLayer);

let pinId = 0;

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
var pinPos = [x1, y1];

//assign pin id upon creating, from 1
document.getElementById("pin").addEventListener("click",newPin);
function newPin(){
    let addPin = new Konva.Circle(pin);
    pinId = pinId + 1;
    console.log(pinId);
    newLayer.add(addPin);
    console.log(addPin); 
}

let stringPos = [0, 0, 50, 50];

function updPinPos() {
    pinPos.on()
    console.log(pin.x);
    console.log(pin.y);
}

// click on one of the three divs
// line width will change based on which is clicked

document.getElementById("three").addEventListener("click",brushSize);
document.getElementById("two").addEventListener("click",brushSize);
document.getElementById("one").addEventListener("click",brushSize);

function brushSize(){
    if (("button").id = "three") {
        stringWidth = 12
    } else if (("button").id = "two") {
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
}

document.getElementById("three").addEventListener("click",newString);
document.getElementById("two").addEventListener("click",newString);
document.getElementById("one").addEventListener("click",newString);

function newString(){
    let addString = new Konva.Line(string);
    stringLayer.add(addString);
    console.log(addString);
}