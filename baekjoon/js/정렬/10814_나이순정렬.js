const fs = require('fs');
const input = fs.readFileSync('personal.bj.txt').toString().trim().split("\n");

const n = parseInt(input[0]);
const people = input.slice(1);

let personList = people.map(person => {
    const [age, name] = person.split(" ");
    return {age: parseInt(age), name};
})


personList.sort((a,b) => {
   return a.age - b.age;
})

personList.forEach(person => {
    console.log(`${person.age} ${person.name}`);
})