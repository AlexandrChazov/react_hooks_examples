import React, {useContext} from "react";
import {MyContext} from "./Context";

export default function ButtonContext() {

  const {toggleAlert} = useContext(MyContext);

  return (
      <div>
        <button onClick={toggleAlert} className="btn btn-warning">Show alert</button>
      </div>
  )
}
