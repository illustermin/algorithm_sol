const fs = require('fs');
const input = fs.readFileSync('lecture.txt').toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
let strings = input.slice(1);
let alphabet = {};
let deleteStrings = strings.map(str => {
    str = str.replace('\r', '');

    if (str.startsWith('anta') && str.endsWith('tica')) {
        return str.slice(4, str.length -4);  }
    return str;
});

for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(97 + i); 
    alphabet[letter] = 0;
    if (letter === 'a' || letter === 'n' || letter === 't' || letter === 'i' || letter === 'c') {
        alphabet[letter]=1;}
}


console.log(deleteStrings);