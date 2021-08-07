import './App.css';
import React, {useState} from 'react';

function getInitialState() {
  console.log("Some calculations...")
  return Math.trunc(Math.random()*20);
}

function App() {

  const [counter, setCounter] = useState(getInitialState); //в useState помещён колбэк, а не вызов функции, иначе при
  const decrement = () => {                                 //каждой перерисовке функция будет пересчитываться
    setCounter(counter - 1)
    setCounter(counter - 1)   // счётчик уменьшится не на 2, а только лишь на один
  }
  function increment() {
    setCounter(e => e + 1 )   // передаём колбек
    setCounter(e => e + 1 )   // счётчик увеличится на 2
  }

  console.log("render Count")

  const [title, setTitle] = useState({
    title: "Initial title",
    id: 2
  })

  function changeTitle() {
    setTitle({          //такая запись нужна чтобы изменить поле title объекта, в классовых компонентах
      ...title,               //достаточно написать {title: "New Title"}
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
