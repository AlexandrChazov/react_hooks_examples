import React, {useContext} from "react";
import {MyContext} from "./Context";

export default function AlertContext() {
  const {alert, toggleAlert} = useContext(MyContext)
  if (!alert) return null
  return (
      <div className="alert alert-danger mt-3" onClick={toggleAlert}>You shouldn't do it again</div>
  )
}
