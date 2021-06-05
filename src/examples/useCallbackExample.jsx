import React, {useCallback, useMemo, useState} from "react";
import ItemList from "./ItemList";

const App = () => {

  const [count, setCount] = useState(1);
  const [colored, setColored] = useState(false);

  const color = colored? "red" : "green"

  const textStyle = useMemo(()=>({           // useMemo кеширует объекты, но не функции!
    color: color
  }),[color])

  const generateItems = useCallback((startNumber) => {                                 // useCallback кэширует функцию, чтобы она не
    return new Array(count).fill('').map((el, i)=>`Элемент ${i+startNumber}`)   // равнялась самой себе. Теперь useEffect в
  },[count])                                                                 // компоненте ItemList повторно вызываться не будет

  return (
      <div>
        <h1 style={textStyle}>Счётчик {count}</h1>
        <button className="btn btn-primary" onClick={()=>setCount((e)=>e+1)}>Увеличить</button>
        <button className="btn btn-warning" onClick={()=>setColored(e=>!e)}>Изменить цвет</button>
        <ItemList generateItems={generateItems} textStyle={textStyle}/>
      </div>
  )
}

export default App;
