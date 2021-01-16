import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
    return (
      <div className="Header">
          <div className='nav'>
              <Link to='/' ><span>Todo</span></Link>
              <Link to='/Sobre' ><span>Sobre</span></Link>
          </div>
          <h1>Lista de tarefas</h1>
      </div>
    );
  }
  
  export default Header;
  