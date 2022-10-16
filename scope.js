let bonus = 20; //global scupe
function sum(first, second) {
    let result = first + second + bonus;
    return result;
}
const output = sum(3, 7);
console.log(output);
console.log(bonus);