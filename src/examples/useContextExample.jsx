import './App.css';
import React from 'react';
import MainContext from "./Context/MainContext";
import ButtonContext from "./Context/ButtonContext";
import AlertContext from "./Context/AlertContext";
import Context from "./Context/Context";

function App() {

  return (
      <div>
        <Context>
          <AlertContext/>
          <MainContext/>
          <ButtonContext/>
        </Context>
      </div>
  );
}

export default App;
