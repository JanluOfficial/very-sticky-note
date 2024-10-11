// Variables and Constants

const base = document.getElementById("base");
var color = 0;

var textBox = document.getElementById("text");
var textInput = document.createElement('input');
var textOutput = document.createElement('a')
var reader = new FileReader;

const promptPopup = document.getElementById("prompt");
const optionsPopup = document.getElementById("options");
const divToolbar = document.getElementById("toolbar");
const newButtons = document.getElementById("newButtons");
const buttonNew = document.getElementById("buttonNew");
const buttonSave = document.getElementById("buttonSave");
const buttonOpen = document.getElementById("buttonOpen");
const buttonSet = document.getElementById("buttonSet");

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
    textBox.value = "";
    promptPopup.className = "new hidden";
    newButtons.className = "confirmButtons hidden";
    textInput.focus();

    divToolbar.className = "buttons";
    buttonSave.disabled = false;
    buttonOpen.disabled = false;
    buttonSet.disabled = false;
}

let prompttext = document.getElementById("promptText");
let yesbutton = document.getElementById("yesbutton");
function prompt(text, yesaction) {
    if (textBox.value != "") {
        promptPopup.className = "new";
        newButtons.className = "confirmButtons";
        divToolbar.className = "buttons blurred";

        yesbutton.setAttribute("onClick", yesaction);
        prompttext.innerHTML = text;

        buttonNew.disabled = true;
        buttonSave.disabled = true;
        buttonOpen.disabled = true;
        buttonSet.disabled = true;
    }
}

function unprompt() {
    promptPopup.className = "new hidden";
    newButtons.className = "confirmButtons hidden";
    divToolbar.className = "buttons";
    buttonNew.disabled = false;
    buttonSave.disabled = false;
    buttonOpen.disabled = false;
    buttonSet.disabled = false;
    textInput.focus()
}

// Open
function readText() {
    textInput.type = 'file';
    textInput.click()
}

textInput.onchange = (e) => {
    var file = e.target.files[0];
    textBox.value = file;

    reader.onload = (event) => {
        const content = event.target.result;
        if (content != "undefined") {
            textBox.value = content;
            buttonNew.disabled = false;
        };
    };
    reader.readAsText(file, 'utf-8');
    textInput.focus()
};

// Save
function saveText() {
    textOutput.href = "data:text/plain;charset=utf-8," + textBox.value;
    textOutput.download = "text_edit_demo_save.txt";
    textOutput.click();
    textInput.focus()
    buttonSave.disabled = true;
}

// Options Prompt
var wasNewDisabled = false;
var wasSaveDisabled = false;
var wasOpenDisabled = false;
function toggleOptions() {
    if (optionsPopup.className === "options") {
        optionsPopup.className = "options hidden";
        buttonNew.disabled = wasNewDisabled;
        buttonSave.disabled = wasSaveDisabled;
        buttonOpen.disabled = wasOpenDisabled;
        buttonSet.className = "icon";
        buttonSet.querySelector("span").className = "material-symbols-rounded";
    } else {
        optionsPopup.className = "options";
        wasNewDisabled = buttonNew.disabled;
        wasSaveDisabled = buttonSave.disabled;
        wasOpenDisabled = buttonOpen.disabled;
        buttonNew.disabled = true;
        buttonSave.disabled = true;
        buttonOpen.disabled = true;
        buttonSet.className = "icon recommended";
        buttonSet.querySelector("span").className = "material-symbols-rounded filled";
    }
}

// Behaviour
// Disable clear and save button when text is empty
textBox.oninput = (e) => {
    if (textBox.value === "") {
        buttonNew.disabled = true;
    } else {
        buttonNew.disabled = false;
    };
    buttonSave.disabled = false;
}

// Formatting Options
var italicButton = document.getElementById("italicButton");
var boldButton = document.getElementById("boldButton");
function bold() {
    textBox.classList.toggle("bold");
    boldButton.classList.toggle("recommended");
}
function italic() {
    isItalic = textBox.classList.toggle("italic");
    italicButton.classList.toggle("recommended");
}

// Focusing the text on runtime
document.getElementById("text").focus()