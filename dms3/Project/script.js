/*let stage = new Konva.Stage({
    Container: "board",
});*/

let colourpicker = document.getElementById("colour");
console.log(colourpicker);
colourpicker.addEventListener("input", pickedColour);

function pickedColour(e){
    let newColour = e.target.value;
    console.log(e);
    document.getElementById("three").style.backgroundColor = newColour;
};