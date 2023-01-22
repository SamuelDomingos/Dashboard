import {Link} from 'react-router-dom';
import styles from "./Sidebar.module.css";

import {FaAngleDoubleRight} from 'react-icons/fa';
import {HiMenu} from 'react-icons/hi';
import {GrFormClose} from 'react-icons/gr';

import Painel from '../pages/Painel';
import Duvidas from '../pages/Duvidas';
import { useState } from 'react';

const Sidebar = () => {

    const [left, setLeft] = useState('-20%');

    const handleSidebarOn = () => {
        setLeft('0%');
    }

    const handleSidebarOff = () =>{
        setLeft('-20%');
    }

  return (
    <div className={styles.sidebar}>

        <div className={styles.desktop}>

            <div className={styles.logo}>
                <h2>Pokedex</h2>
            </div>

            <div className={styles.links}>

                <nav>
                    <ul>
                        <li><Link to="/"><span><FaAngleDoubleRight/></span> Painel</Link></li>

                        <li><Link to="/duvidas"><span><FaAngleDoubleRight/></span> Duvidas</Link></li>
                        
                        <li><Link to="/estatisticas"><span><FaAngleDoubleRight/></span> Estatisticas</Link></li>
                    </ul>
                </nav>
            </div>

        </div>{/*DESKTOP*/}

        <div className={styles.mobile}>

        <button onClick={handleSidebarOn}><HiMenu/></button>
        
        <div className={styles.mobile_container} style={{left: left}}>

            <div className={styles.logo}>
                <h2>P</h2>
            </div>

            <div className={styles.links}>

                <nav>
                    <ul>
                        <li><Link to="/"><span><FaAngleDoubleRight/></span></Link></li>

                        <li><Link to="/duvidas"><span><FaAngleDoubleRight/></span></Link></li>
                        
                        <li><Link to="/estatisticas"><span><FaAngleDoubleRight/></span></Link></li>
                    </ul>
                </nav>
            </div>

            <button onClick={handleSidebarOff}><GrFormClose/></button>

        </div>

        </div>{/*MOBILE*/}

    </div>
  )
}

export default Sidebar