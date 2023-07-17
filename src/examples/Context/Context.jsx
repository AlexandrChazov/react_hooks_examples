import React, {useState} from "react";

export const MyContext = React.createContext();

export default function Context({children}) {               //в пропсах компоненте всегда приходят её дети

  const [alert, setAlert] = useState(false);

  return (
      <MyContext.Provider value={{alert, setAlert}}>
        {children}
      </MyContext.Provider>
  )
}