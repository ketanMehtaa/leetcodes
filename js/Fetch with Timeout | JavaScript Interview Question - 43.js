fetchWithTimeout('https://jsonplaceholder.typicode.com/todos/1', 10)
  .then((resp) => {
    console.log(resp);
  })
  .catch((error) => {
    console.error(error);
  });
async function fetchWithTimeout(url, time) {
  return new Promise((resolve, reject) => {
    const controller = new AbortController();
    const signal = controller.signal;
    let timerId = null;
    // setTimeout(() => {
    //   if (controller) {
    //     controller.abort();
    //     console.log('Download aborted');
    //   }
    // }, time);
    fetch(url, { signal })
      .then((response) => {
        console.log('Download complete');
        clearTimeout(timerId);
        return response.json();
      })
      .then((data) => {
        return resolve(data);
      })
      .catch((err) => {
        return reject(err);
      });
    timerId = setTimeout(() => {
      if (controller) {
        controller.abort();
        console.log('Download aborted');
      }
    }, time);
  });
}
