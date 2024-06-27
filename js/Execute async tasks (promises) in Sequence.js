// Execute async tasks in Sequence
function createAsyncTask() {
  const value = Math.floor(6);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value < 5) {
        reject(`Error ${value}`);
      } else {
        resolve(value * 1000);
      }
    }, value * 1000);
  });
}

let tasks = [
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
];

const results = [];
const errors = [];
async function asyncSequence(task) {
  task
    .then((value) => {
      // store the output of the task
      results.push(value);
      resolve();
    })
    .catch((error) => {
      errors.push(error);
      resolve();
    });
}

async function runTasksSequentially(tasks) {
  for (let task of tasks) {
    await asyncSequence(task);
  }
  printTasks();
}

function printTasks() {
  console.log('errors', errors);
  console.log('results', results);
}
runTasksSequentially(tasks);
