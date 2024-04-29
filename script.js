// Variables and Constants
const base = document.getElementById("base");
var color = 0;

var text = document.getElementById("text");
var textInput = document.createElement('input');
var textOutput = document.createElement('a')
var reader = new FileReader;

const newPopup = document.getElementById("new");
const divToolbar = document.getElementById("toolbar");
const newButtons = document.getElementById("newButtons");
const buttonNew = document.getElementById("buttonNew");
const buttonSave = document.getElementById("buttonSave");
const buttonOpen = document.getElementById("buttonOpen");
const buttonCol = document.getElementById("buttonCol");

// Base Functions
function sleep(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Main Code
// Color
function col() {
    if (color === 5) {
        color = 0;
    } else {
        color += 1;
    };
    
    base.innerHTML = ":root {--background: var(--background-" + color + ")}";
    return color;
}

// Clear
function clearText() {
    text.value = "";
    newPopup.className = "new hidden";
    newButtons.className = "confirmButtons hidden";
    textInput.focus();

    divToolbar.className = "buttons";
    buttonSave.disabled = false;
    buttonOpen.disabled = false;
    buttonCol.disabled = false;
}

function promptClear() {
    if (text.value != "") {
        newPopup.className = "new";
        newButtons.className = "confirmButtons";
        divToolbar.className = "buttons blurred";
        buttonNew.disabled = true;
        buttonSave.disabled = true;
        buttonOpen.disabled = true;
        buttonCol.disabled = true;
    }
}

function unpromptClear() {
    newPopup.className = "new hidden";
    newButtons.className = "confirmButtons hidden";
    divToolbar.className = "buttons";
    buttonNew.disabled = false;
    buttonSave.disabled = false;
    buttonOpen.disabled = false;
    buttonCol.disabled = false;
    textInput.focus()
}

// Open
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
            buttonNew.disabled = false;
        };
    };
    reader.readAsText(file, 'utf-8');
    textInput.focus()
};

// Save
function saveText() {
    textOutput.href = "data:text/plain;charset=utf-8," + text.value;
    textOutput.download = "text_edit_demo_save.txt";
    textOutput.click();
    textInput.focus()
    buttonSave.disabled = true;
}

// Behaviour
// Disable clear and save button when text is empty
text.oninput = (e) => {
    if (text.value === "") {
        buttonNew.disabled = true;
    } else {
        buttonNew.disabled = false;
    };
    buttonSave.disabled = false;
}

// Focusing the text on runtime
document.getElementById("text").focus()