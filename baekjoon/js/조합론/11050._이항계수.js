const fs = require('fs');
const [n, k] = fs.readFileSync('personal.txt').toString().trim().split(" ").map(Number);


const factorial = (n) => {
    let ans = 1;

    for (let i = 2; i <=n; i++) {
        ans*=i;
    }
    return ans;
}
console.log(factorial(n) / ( factorial(n-k) * factorial(k) ));

