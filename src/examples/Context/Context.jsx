import React, {useState} from "react";

export const MyContext = React.createContext();

export default function Context({children}) {               //в пропсах компоненте всегда приходят её дети

  const [alert, setAlert] = useState(false);

  const toggleAlert = () => {
    setAlert(prev=>!prev)
  }

  return (
      <MyContext.Provider value={{alert, toggleAlert}}>
        {children}
      </MyContext.Provider>
  )
}
