import React, {useContext} from "react";
import {MyContext} from "./Context";

export default function ButtonContext() {

  const {setAlert} = useContext(MyContext);

  return (
      <div>
        <button onClick={()=>setAlert(el=>!el)} className="btn btn-warning">Show alert</button>
      </div>
  )
}
