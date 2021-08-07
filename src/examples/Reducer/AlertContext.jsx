import React, {useContext} from "react";
import {MyContext} from "./Context";

export default function AlertContext() {

  const state = useContext(MyContext)
  if (!state.alert) return null

  return (
      <div className="alert alert-danger mt-3" onClick={state.toggleAlert}>{state.alertText}</div>
  )
}
