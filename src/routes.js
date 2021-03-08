import { Switch, Route, Redirect } from 'react-router-dom'

import Todo from './Todo/Todo'
import Sobre from './menu/Sobre'

function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Todo}/>
            <Route path='/sobre' component={Sobre} />
            <Redirect from='*' to='/' />
        </Switch>
    );
  }
  
  export default Routes;
  