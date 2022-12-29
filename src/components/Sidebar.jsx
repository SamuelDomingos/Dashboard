import {Link} from 'react-router-dom';
import "./Sidebar.css";
import {FaAngleDoubleRight} from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className='sidebar flex-column'>

        <div className="logo">
            <h2>Danki.Code</h2>
        </div>

        <div className="links">

            <nav>
                <ul>
                    <li><Link to="/"><span><FaAngleDoubleRight/></span> Painel</Link></li>

                    <li><Link to="/duvidas"><span><FaAngleDoubleRight/></span> Duvidas</Link></li>
                    
                    <li><Link to="/estatisticas"><span><FaAngleDoubleRight/></span> Estatisticas</Link></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Sidebar