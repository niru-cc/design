let o1 = document.getElementById("set1");
let o2 = document.getElementById("set2");
let o3 = document.getElementById("set3");
let o4 = document.getElementById("set4");
let o5 = document.getElementById("set5");
let o6 = document.getElementById("set6");
let o7 = document.getElementById("set7");
let o8 = document.getElementById("set8");

let docBody = document.getElementById("mainb");
let header = document.getElementById("head");
let toolbar = document.getElementById("toolbar");

// based on how the stroke width could be changed
o1.addEventListener("click", () => {
    docBody.style.backgroundImage = "none";
    docBody.style.backgroundColor = "bisque";
    lowbar.style.backgroundColor = "rgb(133, 93, 78)";
    toolbar.style.backgroundColor = "rgb(70, 57, 38)";
});

function changebg(img) {
     docBody.style.backgroundImage = img;
}
function changebar(cola) {
    header.style.backgroundColor = cola; 
}
function changetools(colb) {
    toolbar.style.backgroundColor = colb;
}

o2.addEventListener("click", () => {
    changebg("url(img/o2.png)");
    changebar("#1A2940");
    changetools("#233F6A");
});
o3.addEventListener("click", () => {
    changebg("url(img/o3.png)");
    changebar("#664C46");
    changetools("#A84C43");
});
o4.addEventListener("click", () => {
    changebg("url(img/o4.png)");
    changebar("#6A5077");
    changetools("#2C3035");
});
o5.addEventListener("click", () => {
    changebg("url(img/o5.png)");
    changebar("#885157");
    changetools("#F09C72");
});
o6.addEventListener("click", () => {
    changebg("url(img/o6.png)");
    changebar("#614E4A");
    changetools("#C6B29E");
});
o7.addEventListener("click", () => {
    changebg("url(img/o7.png)");
    changebar("#59564A");
    changetools("#8FB05C");
});
o8.addEventListener("click", () => {
    changebg("url(img/o8.png)");
    changebar("#476A63");
    changetools("#709780");
});

// Opening the menu
let vismenu = document.getElementById("vislist");
let visbutton = document.getElementById("visuals");

visbutton.addEventListener("click", () => {
    vismenu.classList.toggle("hidden");
})
