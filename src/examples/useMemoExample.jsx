import './App.css';
import React, {useState, useEffect, useMemo} from 'react';

function complexCalculations(num) {
  let i = 0;
  while (i < 1000000000) i++;
  return num
}

function App() {
  const [number, setNumber] = useState(42);
  const [isGreen, setIsGreen] = useState(true);

  const color = isGreen? "green" : "darkred";

  const styleColor = useMemo(()=>({       //кешируем объект styleColor
    color: color
  }),[color]);

  useEffect(()=>{
    console.log("color changed")
  },[styleColor])             // если не закэшировать объект styleColor при помощи useMemo, то хоть объект
                                    // и не будет меняться, но он никогда не будет равен самому себе
                                    // и useEffect всегда будет срабатывать

  const computedNumber = useMemo(()=> {    // computedNumber будет пересчитанна только при изменении number
    return complexCalculations(number)
  }, [number]) //

  return (
      <div>
        <h1 style={styleColor}>Вычисляемое число {computedNumber}</h1>
        <div className="btn btn-primary" onClick={()=> setNumber((prev)=>prev+1)}>Change Number</div>
        <div className="btn btn-success" onClick={()=>setIsGreen(isGreen=>!isGreen)}>Change Color</div>
      </div>
  );
}

export default App;
