import './App.css';
import React, {useState, useEffect, useMemo} from 'react';

function complexCalculations(num) {
  console.log("some calculations...")
  let i = 0;
  while (i < 1000000000) i++;
  return num
}

function App() {
  const [number, setNumber] = useState(42);
  const [isGreen, setIsGreen] = useState(true);

  const styleColor = useMemo(()=>({       // кешируем объект styleColor, т.о. useMemo используется для
    color: isGreen? "green" : "darkred"          // запоминания значений и отслеживания изменений объекта
  }),[isGreen]);                           // ведь иначе JS всегда будет считать что объект изменился

  useEffect(()=>{
    console.log("color changed")
  },[styleColor])             // если не закэшировать объект styleColor при помощи useMemo, то хоть объект
                                    // и не будет меняться, но он никогда не будет равен самому себе
                                    // и useEffect всегда будет срабатывать

  const computedNumber = useMemo(()=> {    // computedNumber будет пересчитанна только при изменении number
    return complexCalculations(number)            // Использовать useEffect здесь не получиться, так как он ни чего
  }, [number])                              // не возвращает, а useMemo вернёт нам значение и присвоит
                                                  // его переменной computedNumber
  return (
      <div>
        <h1 style={styleColor}>Вычисляемое число {computedNumber}</h1>
        <div className="btn btn-primary" onClick={()=> setNumber((e)=>e+1)}>Change Number</div>
        <div className="btn btn-success" onClick={()=>setIsGreen(isGreen=>!isGreen)}>Change Color</div>
      </div>
  );
}

export default App;
