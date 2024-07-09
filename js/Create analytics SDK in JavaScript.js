// Implement an analytics SDK that exposes log events, it takes in events and queues them,
// and then starts sending the events. This is a Flipkart frontend interview question.

// Send each event after a delay of 1 second and this logging fails every n % 5 times.
// Send the next event only after the previous one resolves.
// When the failure occurs attempt a retry.

// below solution can be improved with class

const delay = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

let q = [];
let i = 1;
let qRunnig = false;

async function runQueue() {
  if (!q.length) {
    qRunnig = false;
    return;
  }
  qRunnig = true;

  let first = q.shift();
  if (i % 5 == 0) {
    await delay(1000);
    console.log('Failed to send ' + first);
    console.log('Retrying sending ' + first);
    q.unshift(first);
    i = 1;
    runQueue();
  } else {
    console.log('Analytics sent ' + first);
    i = i + 1;
    runQueue();
  }
}
function SDK() {
  this.logEvent = async function (str) {
    q.push(str);
  };
  this.send = async function () {
    runQueue();
  };
}
// Input:
const sdk = new SDK();

sdk.logEvent('event 1');
sdk.logEvent('event 2');
sdk.logEvent('event 3');
sdk.logEvent('event 4');
sdk.logEvent('event 5');
sdk.logEvent('event 6');
sdk.logEvent('event 7');
sdk.logEvent('event 8');
sdk.logEvent('event 9');
sdk.logEvent('event 10');

sdk.send();

// Output:
// "Analytics sent event 1"
// "Analytics sent event 2"
// "Analytics sent event 3"
// "Analytics sent event 4"
// "-----------------------"
// "Failed to send event 5"
// "Retrying sending event 5"
// "-----------------------"
// "Analytics sent event 5"
// "Analytics sent event 6"
// "Analytics sent event 7"
// "Analytics sent event 8"
// "-----------------------"
// "Failed to send event 9"
// "Retrying sending event 9"
// "-----------------------"
// "Analytics sent event 9"
// "Analytics sent event 10"
