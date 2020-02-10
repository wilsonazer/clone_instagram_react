import React from 'react';
import Routes from './router'
import { BrowserRouter } from 'react-router-dom'

import './global.css'
import Header from '../src/components/Header'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
           <Header />
           <Routes />
       </BrowserRouter>
    </div>
  );
}

export default App;
