import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Painel from './pages/Painel';
import Duvidas from './pages/Duvidas';
import Estatisticas from './pages/Estatisticas';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route element={<App/>}>
          
          <Route path='/' element={<Painel/>}/>
          <Route path='/duvidas' element={<Duvidas/>}/>
          <Route path='/estatisticas' element={<Estatisticas/>}/>

        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
