// Create a function that accepts multiple functions as an argument
//  and a value and run this value through each
// function and return the final output.

// Example
// Input:
const val = { salary: 10000 };
// Output: 7700;

const getSalary = (person) => person.salary;
const addBonus = (netSalary) => netSalary + 1000;
const deductTax = (grossSalary) => grossSalary - grossSalary * 0.3;

const pipe = (...fn) => {
  return function (initialValue) {
    return fn.reduce((acc, fnn) => fnn(acc), initialValue);
  };
};
const result = pipe(getSalary, addBonus, deductTax)(val);

console.log(JSON.stringify(result));
