import Header from './menu/Header';

import Routes from './routes' 
import { HashRouter} from 'react-router-dom'

import './App.css'
function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Routes />
      </div>
    </HashRouter>
  );
}

export default App;
