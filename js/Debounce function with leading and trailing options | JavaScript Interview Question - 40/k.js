const onChange = (e) => {
  console.log(e.target.value);
};
const debounce = (fn, delay) => {
  let timeOut;
  return function (...args) {
    const context = this;
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};
const debouncedSearch = debounce(onChange, 1000);
const input = document.getElementById('search');
input.addEventListener('keyup', debouncedSearch);
