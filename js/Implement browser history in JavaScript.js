// You must be familiar with browser history and its functionality where
// you can navigate through the browsed history.Implement the same in JavaScript.

// It will have the following functionality

// visit(url): Marks the entry of the URL in the history.
// current(): Returns the URL of the current page.
// backward(): Navigate to the previous url.
// forward(): Navigate to the next url.
class BrowserHistory {
  constructor() {
    this.q = [];
    this.i = -1;
  }
  visit(data) {
    
    this.q.push(data);
    this.i += 1;
  }
  current() {
    if (this.i>-1) return this.q[this.i];
    else return -1;
  }
  goBack() {
    this.i -= 1;
  }
  forward() {
    if (i < this.q.length - 1) {
      this.i += 1;
      return q[this.i];
    }
    return null;
  }
}

const bh = new BrowserHistory();
bh.visit('A');
console.log(bh.current());
bh.visit('B');
console.log(bh.current());
bh.visit('C');
console.log(bh.current());
bh.goBack();
console.log(bh.current());
bh.visit('D');
console.log(bh.current());
