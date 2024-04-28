// Variables and Constants
const base = document.getElementById("base");
var color = 0;

var text = document.getElementById("text");
var textInput = document.createElement('input');
var textOutput = document.createElement('a')
var reader = new FileReader;

const newPopup = document.getElementById("new");
const buttonNew = document.getElementById("buttonNew");
const buttonSave = document.getElementById("buttonSave");
const buttonOpen = document.getElementById("buttonOpen");
const buttonCol = document.getElementById("buttonCol");

// Base Functions
function sleep(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Main Code
function col() {
    if (color === 5) {
        color = 0
    } else {
        color += 1;
    };
    base.innerHTML = ":root {--background: var(--background-" + color + ")}";
    return color;
}

function clearText() {
    text.value = "";
    newPopup.className = "new hidden";
    textInput.focus();

    buttonNew.disabled = false;
    buttonSave.disabled = false;
    buttonOpen.disabled = false;
    buttonCol.disabled = false;
}

function promptClear() {
    if (text.value != "") {
        newPopup.className = "new";
        buttonNew.disabled = true;
        buttonSave.disabled = true;
        buttonOpen.disabled = true;
        buttonCol.disabled = true;
    }
}

function unpromptClear() {
    newPopup.className = "new hidden";
    buttonNew.disabled = false;
    buttonSave.disabled = false;
    buttonOpen.disabled = false;
    buttonCol.disabled = false;
    textInput.focus()
}

function readText() {
    textInput.type = 'file';
    textInput.click()
}

textInput.onchange = (e) => {
    var file = e.target.files[0];
    text.value = file;

    reader.onload = (event) => {
        const content = event.target.result;
        if (content != "undefined") {
            text.value = content;
        };
    };
    reader.readAsText(file, 'utf-8');
    textInput.focus()
};

function saveText() {

    textOutput.href = "data:text/plain;charset=utf-8," + text.value;
    textOutput.download = "text_edit_demo_save.txt";
    textOutput.click();
    textInput.focus()
}

// Focusing the text on runtime
document.getElementById("text").focus()