import './App.css';
import React from 'react';
import MainContext from "./Reducer/MainContext";
import ButtonContext from "./Reducer/ButtonContext";
import AlertContext from "./Reducer/AlertContext";
import Context from "./Reducer/Context";

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
