let obj = {
  i: 0,
};
obj = new Proxy(obj, {
  get: (target, property) => {
    if (property === 'i') {
      target[property] = target[property] + 1;
      return target[property];
    }
  },
});
console.log(obj.i); // 1
console.log(obj.i); // 2
console.log(obj.i); // 3
