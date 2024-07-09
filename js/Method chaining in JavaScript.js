class Calculator {
  constructor() {
    this.current = 0;
  }

  add(data) {
    this.current += data;
    return this; // Return 'this' to allow method chaining
  }

  subtract(data) {
    this.current -= data;
    return this; // Return 'this' to allow method chaining
  }

  divide(data) {
    if (data !== 0) {
      this.current /= data;
    } else {
      console.error('Cannot divide by zero');
    }
    return this; // Return 'this' to allow method chaining
  }

  multiply(data) {
    this.current *= data;
    return this; // Return 'this' to allow method chaining
  }

  get total() {
    return this.current;
  }
}

const calculator = new Calculator();
calculator.add(10).subtract(2).divide(2).multiply(5);
console.log(calculator.total); // Output: 20

// note - in method chaining we need to return this
