import './App.css';
import React, {useState} from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    setValue(event.target.value);
  }
  const clear = () => {
    setValue(initialValue)
  }
  return {
    bind: {value, onChange},    // сделано для того, чтобы в input-ы не попадали лишние свойства
    value,
    clear
  }
}

function App() {

  const input1 = useInput('1: ');
  const input2 = useInput('2: ');

  return (
      <div>
        <input type="text" {...input1.bind}/>
        <div>{input1.value}</div>
        <div>
          <button className="btn btn-warning" onClick={input1.clear}>Clear</button>
        </div>
        <input type="text" {...input2.bind}/>
        <div>{input2.value}</div>
        <div>
          <button className="btn btn-primary" onClick={input2.clear}>Clear</button>
        </div>
      </div>
  );
}

export default App;
