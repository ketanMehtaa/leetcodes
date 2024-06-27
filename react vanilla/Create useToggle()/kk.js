const { useState, useCallback } = React;

const useToggle = (arr, index = 0) => {
  const [currentIndex, setCurrentIndex] = useState(index);

  const toggle = useCallback(() => {
    setCurrentIndex((previousIndex) => (previousIndex >= arr.length - 1 ? 0 : previousIndex + 1));
  }, [arr]);

  return [arr[currentIndex], toggle];
};

const App = () => {
  const [value, toggle] = useToggle([1, 2, 3, 4, 5], 2);

  return (
    <>
      <h1>Current value : {value}</h1>
      <button onClick={toggle}>Toggle</button>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
