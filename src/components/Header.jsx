import "./Header.css";
import {BsSearch, BsFillBellFill} from "react-icons/bs";


const Header = () => {
  return (
        <div className="main-content">

            <header className="flex">

                <div className="nome-usuario">
                  <h2>fsdomingoss@gmail.com</h2>
                </div>

                <div className="icon-alerta">
                  <BsFillBellFill className="style-icons"/>

                  <div className="alert-number">2</div>
                </div>

                <div className="pensquisa-campo flex">
                    <BsSearch className="style-icons"/>


                      <input type="search"/>

                </div>

            </header>
        </div>
  )
}

export default Header