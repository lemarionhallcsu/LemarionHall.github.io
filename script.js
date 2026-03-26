let memory = 0;

function append(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch {
        document.getElementById("display").value = "Error";
    }
}

function memoryPlus() {
    memory += Number(document.getElementById("display").value || 0);
}

function memoryMinus() {
    memory -= Number(document.getElementById("display").value || 0);
}

// Keyboard support
document.addEventListener("keydown", (e) => {
    if (!isNaN(e.key) || "+-*/.".includes(e.key)) {
        append(e.key);
    }
    if (e.key === "Enter") calculate();
    if (e.key === "Backspace") {
        let d = document.getElementById("display");
        d.value = d.value.slice(0, -1);
    }
});

// Theme switcher
document.getElementById("themeBtn").onclick = () => {
    document.body.classList.toggle("dark");
};
