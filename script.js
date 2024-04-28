// Variables and Constants
const base = document.getElementById("base");
var color = 0;

var text = document.getElementById("text");
var textInput = document.createElement('input');
var textOutput = document.createElement('a')
var reader = new FileReader;

// Main Code
function col() {
    if (color === 5) {
        color = 0
    } else {
        color += 1;
    };
    base.innerHTML = "html { background: var(--background-" + color + ") !important;} ::-webkit-scrollbar-thumb {border: 1px solid var(--background-" + color + ");}";
    return color;
}

function clearText() {
    var confirmation = false;
    if (text.valueL !== "") {
        confirmation = confirm("Are you sure you want to clear the page?");
    } else {
        confirmation = true;
    }
    if (confirmation) {
        text.value = "";
    }
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