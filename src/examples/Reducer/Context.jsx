import React, {useReducer} from "react";

export const MyContext = React.createContext();
const TOGGLE_ALERT = "SHOW_ALERT";

export default function Context({children}) {               //в пропсах компоненте всегда приходят её дети

  const reducer = (state, action) => {
    switch (action.type) {
      case TOGGLE_ALERT: {
        return {
          ...state,
          alert: !state.alert,
          alertText: action.alertText
        }
      }
      default: {
        return state
      }
    }
  }

  const toggleAlert = (text) => dispatch({
    type: TOGGLE_ALERT,
    alertText: text
  })

  const [state, dispatch] = useReducer(reducer, {
    alert: false,
    alertText: "",
    toggleAlert
  });

  return (
      <MyContext.Provider value={state}>
        {children}
      </MyContext.Provider>
  )
}
