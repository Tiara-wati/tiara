function appendValue(value) {
    document.getElementById('display').value += value;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}
function deleteLastCharacter() {
  display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}
function calculateResult() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (e) {
        alert('Input tidak valid');
    }
}
