import './App.css';
import React, {useState, useEffect, useRef} from 'react';

function App() {

  const [message, setMessage] = useState("Initial value");
  const renderCount = useRef(0);                   // useRef не вызывает перерисовку страницы
  const inputRef = useRef(null);
  const prevValue = useRef('');

  console.log(renderCount.current)
  console.log(prevValue.current)

  useEffect(() => {
    renderCount.current++          //renderCount здесь уже = 1, но изменение renderCount не вызовет перерисовку
  })

  useEffect(() => {
    prevValue.current = message;   // prevValue здесь уже = "Initial value", но изменение prevValue не вызовет
  }, [message])              // перерисовку, поэтому на странице будет отображено устаревшее значение

  function changeInput(e) {
    setMessage(e.target.value);
  }

  function setFocus() {
    inputRef.current.focus();
  }

  return (
      <div>
        <div>Количество рендеров страницы {renderCount.current}</div>
        <div>Прошлое состояние инпута {prevValue.current}</div>
        <input ref={inputRef} onChange={changeInput} type="text" value={message} />
        <button onClick={setFocus} className="btn btn-success">Focus</button>
      </div>
  );
}

export default App;
