import './Header.css'
import { Link } from 'react-router-dom'

import { TiArrowRightThick, TiArrowLeftThick } from 'react-icons/ti'
function Header() {
    return (
      <div className="Header">
          <div className='nav'>
              <Link to='/' >
                  <button>
                    < TiArrowLeftThick /><h4> Tarefas</h4>
                  </button>
              </Link>
              <Link to='/sobre' >
                  <button>
                      <h4>Sobre </h4>< TiArrowRightThick />
                  </button>
              </Link>
          </div>
          <h1>Lista de Tarefas</h1>
      </div>
    );
  }
  
  export default Header;
  