import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
    return (
      <div className="Header">
          <div className='nav'>
              <Link to='/' ><h2>  Todo</h2></Link>
              <Link to='/Sobre' ><h2>Sobre  </h2></Link>
          </div>
          <h1>Lista de tarefas</h1>
      </div>
    );
  }
  
  export default Header;
  