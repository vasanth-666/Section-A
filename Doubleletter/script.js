function doubleLetters(Str) {
    for (let i = 0; i < Str.length - 1; i++) {
        if (Str[i] === Str[i + 1]) {
            return true;
        }
    }
    return false;
}

document.getElementById('doubleLetters').addEventListener('submit', function(event) {
    event.preventDefault();
    const Str = document.getElementById('Str').value;
    const result = doubleLetters(Str);
    document.getElementById('result').textContent = 
        result ? "True" : "False";
});