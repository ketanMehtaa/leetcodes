// Define a function that returns a caching mechanism for API calls
const cachedApiCall = (time) => {
  // Initialize an empty object to store cached responses
  let cache = {};

  // Return an async function that takes a URL and an optional config object
  return async function (url, config = {}) {
    // Create a unique key for the cache based on the URL and config
    let freshKey = `${url}${JSON.stringify(config)}`;

    // Check if the cache contains the key and if the cached data is still valid
    if (cache[freshKey] && Date.now() < cache[freshKey].expire) {
      // If valid cache entry exists, return the cached value
      return cache[freshKey].value;
    }

    // Get the current time
    const date = Date.now();

    // Fetch data from the API and parse it as JSON
    const data = await fetch(url).then((data) => data.json());

    // Store the fetched data in the cache with an expiration time
    cache[freshKey] = { value: data, expire: date + time };

    // Return the fetched data
    return data;
  };
};

// Create a cached API call function with a 1-second cache duration
const call = cachedApiCall(1000);

// Make an API call to the specified URL and log the result
call('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log(a));

// Make another API call after 800 milliseconds and log the result
setTimeout(() => {
  call('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log(a));
}, 1000);
// if above value is 1000 the time passed in cachedapicall is 1000 so cache expire
