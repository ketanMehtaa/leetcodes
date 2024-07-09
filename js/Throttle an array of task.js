// Implement a throttler that executes an array of tasks.
//  When the throttler is passed a number, only executes that number
//  of the tasks and passes the other tasks into a queue.

// Example
const task = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const count = 5;
let queue = {};
let j = 0;
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const throttle = async (task, count, time) => {
    for (let i = 0; i < count; i++) {
        console.log(task[j]);
        j = j + 1;
    }
    await delay(time);
};

throttle(task, count, 2000); // [1, 2, 3, 4, 5] // immediately
throttle(task, count, 2000); // [6, 7, 8, 9, 10] // after 2 seconds
throttle(task, count, 2000); // [1, 2, 3, 4, 5] // after 2 seconds
