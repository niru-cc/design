let myStage = new Konva.Stage ({
    container:"konvastage",
    width: 500,
    height: 500
});

let layerone = new Konva.Layer();



function addCircle(){
    let circle = new Konva.Circle({
        x: myStage.width() /2,
        y: myStage.height() /2,
        radius: 70,
        fill: 'blue',
        draggable:true
    });

    layerone.add(circle);
}

myStage.add(layerone);

document.getElementById("addCircle").addEventListener("click", addCircle);

