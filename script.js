let currentInput = '';

function addToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

function deleteNumber() {
    currentInput = currentInput.slice(0, -1); // Remove the last character
    document.getElementById('display').value = currentInput;
}

function calculate() {
    try {
        let result = eval(currentInput);
        document.getElementById('display').value = result;
        currentInput = ''; // Clear current input after calculation
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
