import React from 'react';
import './App.css';
import NavigationBar from './NavigationBar/NavigationBar'
import Main from './Main/Main'
import BottomPage from './BottomPage/BottomPage'
import {BrowserRouter} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Main />
        <BottomPage />
      </BrowserRouter>,
    </div>
  );
}

export default App;
