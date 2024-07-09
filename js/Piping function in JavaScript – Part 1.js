// Given an object which can have a function as a value at a nested level, create '
// a function that will accept arguments as input and pass it through all the functions
// in the input object and return the computed value.

// Input:
// {
//   a : {
//     b : (a,b,c) => a+b+c,
//     c : (a,b,c) => a+b-c,
//   },
//   d : (a,b,c) => a-b-c
// }

// Fn(obj)(1,1,1);

// Output:
// {
//   a : {
//     b : 3,
//     c : 1
//   },
//   d: -1
// }
obj = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b - c,
  },
  d: (a, b, c) => a - b - c,
  e: 1,
  f: true,
};

let ans = pipe(obj)(1, 1, 1);
console.log(JSON.stringify(obj));

function pipe(obj) {
  return function (a, b, c) {
    for (let key in obj) {
      if (typeof obj[key] === 'function') {
        obj[key] = obj[key](a, b, c);
      } else {
        //   obj[key] = solve(obj[key], a, b, c);
        obj[key] = pipe(obj[key])(a, b, c);
      }
    }
    return obj;
  };
}

// this is kind of recurssion problem in line 47 return obj otherwise in line 41 and 44 will be
// assigned null
