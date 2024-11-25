function only_ints(param1, param2) {
    return Number.isInteger(param1) && Number.isInteger(param2);
}

document.getElementById('forms').addEventListener('submit', function (event) {
    event.preventDefault();
    const param1 = parseInt(document.getElementById('param1').value, 10)
    const param2 = parseInt(document.getElementById('param2').value, 10)
    const result = only_ints(param1, param2);
    document.getElementById('result').textContent = result ? "True" : "False"
})

