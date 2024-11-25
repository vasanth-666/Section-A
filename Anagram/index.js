function is_anagram(str1, str2) {
    const text = str => str.split(' ').join('').toLowerCase();
    str1 = text(str1);
    str2 = text(str2);

    if (str1.length !== str2.length) {
        return false;
    }

    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

document.getElementById('anagram').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const string1 = document.getElementById('string1').value;
    const string2 = document.getElementById('string2').value;

    const result = is_anagram(string1, string2);

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = result ? 'True' : 'False';
});