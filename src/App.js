import Header from './menu/Header';
// import Todo from './Todo/Todo'
import Routes from './routes' 
import { HashRouter} from 'react-router-dom'
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
