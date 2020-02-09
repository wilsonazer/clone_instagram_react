import React from 'react';
import Routes from './router'
import { BrowserRouter } from 'react-router-dom'

import './global.css'


function App() {
  return (
    <div className="App">
       <BrowserRouter>
           <Routes />
       </BrowserRouter>
    </div>
  );
}

export default App;
