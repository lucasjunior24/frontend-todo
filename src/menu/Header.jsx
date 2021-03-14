import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
    return (
      <div className="Header">
          <div className='nav'>
              <Link to='/' ><button>Todo</button></Link>
              <Link to='/Sobre' ><button>Sobre</button></Link>
          </div>
          <h1>Lista de Tarefas</h1>
      </div>
    );
  }
  
  export default Header;
  