let stage = new Konva.Stage({
    container: "board",
    width: 600,
    height: 600,
});

let colourpicker = document.getElementById("colour");
console.log(colourpicker);
colourpicker.addEventListener("input", pickedColour);

let newColour = "black";

function pickedColour(e){
    newColour = e.target.value;
    pin.fill = e.target.value;
    console.log(e);
    document.getElementById("three").style.backgroundColor = newColour;
    document.getElementById("two").style.backgroundColor = newColour;
    document.getElementById("one").style.backgroundColor = newColour;
    document.getElementById("pin").style.backgroundColor = newColour;
};

let newLayer = new Konva.Layer();
stage.add(newLayer);

//let pinLayer = new Konva.layer();

let pin = {
    radius: 20,
    fill: newColour,
    draggable: true,
    x: stage.width()/2,
    y: stage.height()/2,
};

document.getElementById("pin").addEventListener("click",newPin);

//stage.add(pinLayer);

function newPin(){
    let addPin = new Konva.Circle(pin);
    newLayer.add(addPin);
    console.log(addPin);
};

let stringLayer = new Konva.layer();
stage.add(stringLayer);
moveToTop(newLayer);

let string = {
    fill: newColour
}

document.getElementById("three").addEventListener("click",newString);
document.getElementById("two").addEventListener("click",newString);
document.getElementById("one").addEventListener("click",newString);

function newString(){
    let addString = new Konva.Line(string);
    newLayer.add(addString);
}