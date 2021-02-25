import React from "react";
import {Route} from 'react-router-dom'


import Home from './pages/Home'
import Card from "./components/card/Card";

import "./App.scss";

function App() {
  return (
    <>
    <div className="App">
    <Route exact path = '/' component={Home} />
    <Route exact path='/:imbdID' component={Card} />
    </div>
    </>
  
  );
}

export default App;
