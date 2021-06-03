import React, {useContext} from "react";
import {MyContext} from "./Context";

export default function ButtonContext() {

  const state = useContext(MyContext)

  return (
      <div>
        <button onClick={()=>state.toggleAlert("Hello my friend")} className="btn btn-warning">Show alert</button>
      </div>
  )
}
