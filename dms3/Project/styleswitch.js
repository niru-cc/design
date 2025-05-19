let o1 = document.getElementById("set1");
let o2 = document.getElementById("set2");
let o3 = document.getElementById("set3");
let o4 = document.getElementById("set4");
let o5 = document.getElementById("set5");
let o6 = document.getElementById("set6");
let o7 = document.getElementById("set7");
let o8 = document.getElementById("set8");

let docBody = document.getElementById("mainb");
let lowbar = document.getElementById("moretools");
let toolbar = document.getElementById("toolbar");

// based on how the stroke width could be changed
o1.addEventListener("click", () => {
    docBody.style.backgroundImage = "none";
    docBody.style.backgroundColor = "beige";
});

function changebg(img) {
     docBody.style.backgroundImage = img;
}
function changebar(cola) {
    lowbar.style.backgroundcolor = cola;
    
}
function changetools(colb) {
    toolbar.style.backgroundColor = colb;
}

o2.addEventListener("click", () => {
    changebg("url(img/o2.png)");
    changebar("");
    changetools("");
});
o3.addEventListener("click", () => {
    changebg("url(img/o3.png)");
    changebar("");
    changetools("");
});
o4.addEventListener("click", () => {
    changebg("url(img/o4.png)");
    changebar("");
    changetools("");
});
o5.addEventListener("click", () => {
    changebg("url(img/o5.png)");
    changebar("");
    changetools("");
});
o6.addEventListener("click", () => {
    changebg("url(img/o6.png)");
    changebar("");
    changetools("");
});
o7.addEventListener("click", () => {
    changebg("url(img/o7.png)");
    changebar("");
    changetools("");
});
o8.addEventListener("click", () => {
    changebg("url(img/o8.png)");
    changebar("");
    changetools("");
});

// Opening the menu
let vismenu = document.getElementById("vislist");
let visbutton = document.getElementById("visuals");

visbutton.addEventListener("click", () => {
    vismenu.classList.toggle("hidden");
})
