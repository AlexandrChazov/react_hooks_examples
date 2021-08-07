import React, {useEffect, useState} from "react";

const ItemList = ({generateItems, textStyle}) => {

  const [items, setItems] = useState([]);

  useEffect(()=>{
    const newItems = generateItems(10);
    setItems(newItems)
    console.log("useEffect отработал")    // useEffect будет срабатывать только при изменении функции, а изменилась она
  }, [generateItems])              // или нет следит useCallback без него функция всегда разная (функция ни когда не
                                         // равна сама себе)
  return (
      <ul style={textStyle}>
        {items.map((i)=><li key={i}>{i}</li>)}
      </ul>
  )
}

export default ItemList;
