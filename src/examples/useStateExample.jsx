import './App.css';
import React, {useState} from 'react';

function App() {

  const [counter, setCounter] = useState(0);
  const decrement = () => {
    setCounter(counter - 1)
    setCounter(counter - 1)   // счётчик не уменьшится на 2, а только лишь на один
  }
  function increment() {
    setCounter((prev) => prev + 1 )
    setCounter((prev) => prev + 1 )   // счётчик увеличится на 2
  }

  console.log("render Count")

  const [title, setTitle] = useState({
    title: "Initial title",
    id: 2
  })
  function changeTitle() {
    setTitle({
      ...title,
      title: "New Title"
    })
  }



  return (
      <div>
        <div>Counter {counter}</div>
        <pre>{JSON.stringify(title, null, 2)}</pre>
        <button type="button"
                className="btn btn-primary"
                onClick={decrement}>
          Уменьшить
        </button>
        <button type="button"
                className="btn btn-success"
                onClick={increment}>
          Увеличить
        </button>
        <button type="button"
                className="btn btn-warning"
                onClick={changeTitle}>
          Title
        </button>
      </div>
  );
}

export default App;
