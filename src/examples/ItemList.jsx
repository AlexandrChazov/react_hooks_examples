import React, {useEffect, useState} from "react";

const ItemList = ({getItems}) => {

  const [items, setItems] = useState([]);

  useEffect(()=>{
    const newItems = getItems(1);
    setItems(newItems)
    console.log("Oops")             // useEffect будет срабатывать только при изменении функции, а изменилась она
  }, [getItems])              // или нет следит useCallback без него функция всегда разная (функция ни когда не
                                    // равна сама себе)
  return (
      <ul>
        {items.map((i)=><li key={i}>{i}</li>)}
      </ul>
  )
}

export default ItemList;
