import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App flex">
      <Sidebar/>

      <div className="site">
        <Header/>
        <Outlet/>
      </div>
    </div>
  )
}

export default App
