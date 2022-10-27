import {Helmet} from 'react-helmet'
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import Search from './Search'

function App() {
  return (
    <Switch>
      <Route exact path ="/" component = {Home}/>
      <Route exact path ="/search" component = {Search}/>
    </Switch>

  );
}

export default App;


//check if user exist here