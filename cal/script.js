let display = document.getElementById("display");
let trackHistoryButton = document.getElementById("track-history");
let clearHistoryButton = document.getElementById("clear-history");
let history = document.getElementById("history");

document.addEventListener("keydown", function(event) {
    // Captura o valor do número digitado
    const number = event.key;

    // Verifica se é um número válido
    if (!isNaN(number)) {
        // Chama a função para lidar com a entrada de número
        addToDisplay(number);
    } else if (event.key === "+") {
        addToDisplay('+');
    } else if (event.key === "-") {
        addToDisplay('-');
    } else if (event.key === "*") {
        addToDisplay('*');
    } else if (event.key === "/") {
        addToDisplay('/');
    } else if (event.key === "Enter") {
        calculate();
    } else if (event.key === "Backspace") {
        clearDisplay();
    }
});

function addToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    history.value += display.value + '\n';
    history.scrollTop = history.scrollHeight;

    let result = eval(display.value);
    display.value = result;
}

function trackHistory() {
    if (history.style.display !== "block") {
        history.style.display = "block";
        trackHistoryButton.innerText = "Hide history";
        if (history.value !== "") {
            clearHistoryButton.style.display = "inline-block";
        } else {
            clearHistoryButton.style.display = "none";
        }
    } else {
        history.style.display = "none";
        trackHistoryButton.innerText = "Track history";
        clearHistoryButton.style.display = "none";
    }
}

function clearHistory() {
    history.value = "";
    clearHistoryButton.style.display = "none";
}

clearHistoryButton.addEventListener("click", clearHistory);
